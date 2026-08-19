//! Persisted GraphQL operations, off the Relay AST.
//!
//! The bundle ships each operation as a Relay `Request` — argument definitions,
//! a selection tree, and the `params.id` that actually travels in
//! `<iq xmlns="w:mex"><query query_id="…">`. The document text is `null`,
//! because the server holds it; the tree is the only description of the query
//! that exists on the client.
//!
//! It has to be read from the parse tree rather than scanned, for one reason
//! that shows up immediately: Relay hoists repeated selection sets into
//! variables.
//!
//! ```text
//! var t = [ …id, display_name… ];
//! var n = [{ kind: "LinkedField", name: "categories",  selections: t },
//!          { kind: "LinkedField", name: "not_a_biz",   selections: t }];
//! ```
//!
//! Walking the text in source order — which is what this replaced — sees `id`
//! and `display_name` before either field that uses them, prints them at the
//! wrong depth, and leaves both linked fields empty. The output looked like a
//! GraphQL document and described nothing.

use oxc_allocator::Allocator;
use oxc_ast::ast::{Expression, ObjectPropertyKind, PropertyKey, Statement};
use oxc_parser::Parser;
use oxc_span::SourceType;
use std::collections::BTreeMap;

pub use jigger_ir::{GqlArg, GqlField};

pub struct Operation {
    pub doc_id: String,
    pub kind: String,
    pub name: String,
    pub args: Vec<GqlArg>,
    pub selections: Vec<GqlField>,
    pub root_field: Option<String>,
}

fn key_of(k: &PropertyKey) -> Option<String> {
    match k {
        PropertyKey::StaticIdentifier(i) => Some(i.name.to_string()),
        PropertyKey::StringLiteral(s) => Some(s.value.to_string()),
        _ => None,
    }
}

fn prop<'a>(o: &'a oxc_ast::ast::ObjectExpression<'a>, name: &str) -> Option<&'a Expression<'a>> {
    o.properties.iter().find_map(|p| match p {
        ObjectPropertyKind::ObjectProperty(p) if key_of(&p.key).as_deref() == Some(name) => {
            Some(&p.value)
        }
        _ => None,
    })
}

fn as_str(e: &Expression) -> Option<String> {
    match e {
        Expression::StringLiteral(s) => Some(s.value.to_string()),
        _ => None,
    }
}

/// A literal value, printed the way GraphQL writes it.
fn as_value(e: &Expression) -> Option<String> {
    match e {
        Expression::StringLiteral(s) => Some(format!("{:?}", s.value.as_str())),
        Expression::NumericLiteral(n) => Some(n.value.to_string()),
        // Relay minifies booleans to `!0` / `!1`.
        Expression::BooleanLiteral(b) => Some(b.value.to_string()),
        Expression::UnaryExpression(u) => match &u.argument {
            Expression::NumericLiteral(n) => Some((n.value == 0.0).to_string()),
            _ => None,
        },
        Expression::NullLiteral(_) => Some("null".into()),
        _ => None,
    }
}

fn truthy(e: Option<&Expression>) -> bool {
    match e {
        Some(Expression::BooleanLiteral(b)) => b.value,
        // `!0` is `true`, `!1` is `false`.
        Some(Expression::UnaryExpression(u)) => match &u.argument {
            Expression::NumericLiteral(n) => n.value == 0.0,
            _ => false,
        },
        _ => false,
    }
}

/// Local `var` bindings, so `selections: t` can be followed to its array.
type Binds<'a> = BTreeMap<String, &'a Expression<'a>>;

/// Everything a module returns, at any depth.
///
/// The request object is the value of an IIFE — `var e = (function(){ … return
/// {params: …} })()` — so it is never bound to a name and a search over
/// bindings alone will not find it.
type Returns<'a> = Vec<&'a Expression<'a>>;


/// Descend into every function a call carries.
///
/// Both positions matter and only one is obvious. `__d(name, deps, function(){…})`
/// puts the body in an *argument*; an IIFE — `(function(){…})()`, which is how
/// every one of these modules wraps its request object — puts it in the
/// *callee*. Checking arguments alone finds the module factory and never the
/// thing inside it.
fn into_call<'a>(
    c: &'a oxc_ast::ast::CallExpression<'a>,
    out: &mut Binds<'a>,
    rets: &mut Returns<'a>,
    depth: u8,
) {
    let mut bodies = Vec::new();
    if let Expression::FunctionExpression(f) = c.callee.get_inner_expression()
        && let Some(b) = &f.body
    {
        bodies.push(&b.statements);
    }
    for a in &c.arguments {
        if let Some(Expression::FunctionExpression(f)) =
            a.as_expression().map(Expression::get_inner_expression)
            && let Some(b) = &f.body
        {
            bodies.push(&b.statements);
        }
    }
    for b in bodies {
        collect(b, out, rets, depth + 1);
    }
}

fn collect<'a>(
    stmts: &'a oxc_allocator::Vec<'a, Statement<'a>>,
    out: &mut Binds<'a>,
    rets: &mut Returns<'a>,
    depth: u8,
) {
    if depth > 8 {
        return;
    }
    for st in stmts {
        match st {
            Statement::VariableDeclaration(d) => {
                for decl in &d.declarations {
                    if let (Some(init), Some(id)) = (&decl.init, decl.id.get_binding_identifier()) {
                        out.insert(id.name.to_string(), init);
                        if let Expression::CallExpression(c) = init.get_inner_expression() {
                            into_call(c, out, rets, depth);
                        }
                    }
                }
            }
            Statement::ExpressionStatement(e) => {
                if let Expression::CallExpression(c) = e.expression.get_inner_expression() {
                    into_call(c, out, rets, depth);
                }
            }
            Statement::ReturnStatement(r) => {
                let Some(arg) = r.argument.as_ref() else { continue };
                rets.push(arg);
                if let Expression::CallExpression(c) = arg.get_inner_expression() {
                    into_call(c, out, rets, depth);
                }
            }
            _ => {}
        }
    }
}

/// Follows an identifier to whatever it was bound to.
///
/// This is the whole reason the extractor parses: a selection set reused by two
/// fields is written once and referenced twice.
fn deref<'a>(e: &'a Expression<'a>, binds: &Binds<'a>, depth: u8) -> Option<&'a Expression<'a>> {
    if depth > 8 {
        return None;
    }
    match e.get_inner_expression() {
        Expression::Identifier(i) => {
            let next = binds.get(i.name.as_str())?;
            deref(next, binds, depth + 1).or(Some(*next))
        }
        other => Some(other),
    }
}

fn args_of(e: Option<&Expression>, binds: &Binds) -> Vec<String> {
    let Some(arr) = e.and_then(|x| deref(x, binds, 0)) else { return vec![] };
    let Expression::ArrayExpression(arr) = arr else { return vec![] };
    arr.elements
        .iter()
        .filter_map(|el| el.as_expression())
        .filter_map(|el| deref(el, binds, 0))
        .filter_map(|el| {
            let Expression::ObjectExpression(o) = el else { return None };
            let name = prop(o, "name").and_then(as_str)?;
            match prop(o, "kind").and_then(as_str).as_deref() {
                Some("Variable") => {
                    let v = prop(o, "variableName").and_then(as_str).unwrap_or_else(|| name.clone());
                    Some(format!("{name}: ${v}"))
                }
                Some("Literal") => {
                    let v = prop(o, "value").and_then(as_value).unwrap_or_else(|| "…".into());
                    Some(format!("{name}: {v}"))
                }
                // ObjectValue and friends: the name is still worth showing.
                _ => Some(format!("{name}: …")),
            }
        })
        .collect()
}

fn selections_of(e: Option<&Expression>, binds: &Binds, depth: u8) -> Vec<GqlField> {
    if depth > 24 {
        return vec![];
    }
    let Some(arr) = e.and_then(|x| deref(x, binds, 0)) else { return vec![] };
    let Expression::ArrayExpression(arr) = arr else { return vec![] };

    arr.elements
        .iter()
        .filter_map(|el| el.as_expression())
        .filter_map(|el| deref(el, binds, 0))
        .filter_map(|el| {
            let Expression::ObjectExpression(o) = el else { return None };
            let kind = prop(o, "kind").and_then(as_str)?;
            let inner = selections_of(prop(o, "selections"), binds, depth + 1);

            // Relay wraps fields in nodes that are not fields themselves. Their
            // children are the real selections, so they are flattened rather
            // than shown as a level of nesting nobody wrote.
            let name = match kind.as_str() {
                "InlineFragment" => prop(o, "type").and_then(as_str).map(|t| format!("... on {t}")),
                "FragmentSpread" => prop(o, "name").and_then(as_str).map(|n| format!("...{n}")),
                "Condition" => prop(o, "condition")
                    .and_then(as_str)
                    .map(|c| format!("@include(if: ${c})")),
                "ClientExtension" | "RequiredField" | "CatchField" => None,
                _ => prop(o, "name").and_then(as_str),
            };

            let Some(name) = name else {
                // A pure wrapper: keep its children, drop the node.
                return inner.first().cloned().map(|mut f| {
                    f.selections = inner[..].to_vec();
                    f.selections.remove(0);
                    f.selections.insert(0, inner[0].clone());
                    f
                });
            };

            Some(GqlField {
                alias: prop(o, "alias").and_then(as_str).filter(|a| a != &name),
                ty: prop(o, "concreteType").and_then(as_str),
                plural: truthy(prop(o, "plural")),
                args: args_of(prop(o, "args"), binds),
                kind,
                name,
                selections: inner,
            })
        })
        .collect()
}

fn arg_defs(e: Option<&Expression>, binds: &Binds) -> Vec<GqlArg> {
    let Some(arr) = e.and_then(|x| deref(x, binds, 0)) else { return vec![] };
    let Expression::ArrayExpression(arr) = arr else { return vec![] };
    arr.elements
        .iter()
        .filter_map(|el| el.as_expression())
        .filter_map(|el| deref(el, binds, 0))
        .filter_map(|el| {
            let Expression::ObjectExpression(o) = el else { return None };
            Some(GqlArg {
                name: prop(o, "name").and_then(as_str)?,
                ty: prop(o, "type").and_then(as_str),
                default: prop(o, "defaultValue").and_then(as_value).filter(|v| v != "null"),
            })
        })
        .collect()
}

/// The operation a `.graphql` module describes.
pub fn operation(src: &str) -> Option<Operation> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return None;
    }

    let mut binds = Binds::new();
    let mut rets = Returns::new();
    collect(&ret.program.body, &mut binds, &mut rets, 0);

    // The request object is the one carrying `params`; everything else in the
    // module is a hoisted fragment of it.
    let root = rets
        .iter()
        .chain(binds.values())
        .find_map(|e| {
            let node = deref(e, &binds, 0)?;
            let Expression::ObjectExpression(o) = node else { return None };
            prop(o, "params").map(|_| o)
        })?;

    let params = match prop(root, "params").and_then(|p| deref(p, &binds, 0)) {
        Some(Expression::ObjectExpression(o)) => o,
        _ => return None,
    };
    let doc_id = prop(params, "id").and_then(as_str)?;
    let kind = prop(params, "operationKind").and_then(as_str).unwrap_or_else(|| "query".into());
    let name = prop(params, "name").and_then(as_str).unwrap_or_default();

    // The operation, not the fragment: the fragment is what the component reads
    // back, the operation is what goes on the wire.
    let op = match prop(root, "operation").and_then(|p| deref(p, &binds, 0)) {
        Some(Expression::ObjectExpression(o)) => o,
        _ => root,
    };

    let selections = selections_of(prop(op, "selections"), &binds, 0);
    let root_field = selections
        .iter()
        .find(|f| f.name.starts_with("xwa2_"))
        .map(|f| f.name.clone());

    Some(Operation {
        doc_id,
        kind,
        name,
        args: arg_defs(prop(op, "argumentDefinitions"), &binds),
        selections,
        root_field,
    })
}

/// The document, printed as GraphQL.
pub fn print(op: &Operation) -> String {
    let mut out = String::new();
    let vars = if op.args.is_empty() {
        String::new()
    } else {
        let inner = op
            .args
            .iter()
            .map(|a| {
                // Relay records no type for a `LocalArgument`, and none of the
                // 165 arguments in this bundle carry one. Printing `: _` would
                // invent a type the client never stated — the name alone is
                // what is actually known.
                let ty = a.ty.as_ref().map(|t| format!(": {t}")).unwrap_or_default();
                match &a.default {
                    Some(d) => format!("  ${}{ty} = {d}", a.name),
                    None => format!("  ${}{ty}", a.name),
                }
            })
            .collect::<Vec<_>>()
            .join("\n");
        format!("(\n{inner}\n)")
    };
    out.push_str(&format!(
        "# persisted document {}\n{} {}{} {{\n",
        op.doc_id,
        op.kind,
        op.name.trim_start_matches("WAWeb"),
        vars
    ));
    for f in &op.selections {
        write_field(f, 1, &mut out);
    }
    out.push_str("}\n");
    out
}

fn write_field(f: &GqlField, depth: usize, out: &mut String) {
    let pad = "  ".repeat(depth);
    let alias = f.alias.as_ref().map(|a| format!("{a}: ")).unwrap_or_default();
    let args = if f.args.is_empty() { String::new() } else { format!("({})", f.args.join(", ")) };
    // The type is a comment: it is Relay's knowledge, not part of the document,
    // and printing it inline would produce something that does not parse.
    let ty = match (&f.ty, f.plural) {
        (Some(t), true) => format!("  # [{t}]"),
        (Some(t), false) => format!("  # {t}"),
        (None, true) => "  # list".into(),
        (None, false) => String::new(),
    };

    if f.selections.is_empty() {
        out.push_str(&format!("{pad}{alias}{}{args}{ty}\n", f.name));
        return;
    }
    out.push_str(&format!("{pad}{alias}{}{args} {{{ty}\n", f.name));
    for c in &f.selections {
        write_field(c, depth + 1, out);
    }
    out.push_str(&format!("{pad}}}\n"));
}

#[cfg(test)]
mod tests {
    use super::*;

    /// The shape that broke the old extractor: one selection set, two users.
    const SRC: &str = r#"
__d("WAWebBizGetCategoriesQuery.graphql", [], (function(t, n, r, o, a, i) {
    var e = (function() {
        var e = [{ defaultValue: null, kind: "LocalArgument", name: "query_params" }],
            t = [{ alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                 { alias: null, args: null, kind: "ScalarField", name: "display_name", storageKey: null }],
            n = [{
                alias: null,
                args: [{ kind: "Variable", name: "query_params", variableName: "query_params" }],
                concreteType: "CatkitTypeaheadResponse",
                kind: "LinkedField",
                name: "whatsapp_catkit_typeahead_proxy",
                plural: !1,
                selections: [
                    { alias: null, args: null, concreteType: "WhatsAppBizProfileCategory", kind: "LinkedField", name: "categories", plural: !0, selections: t, storageKey: null },
                    { alias: null, args: null, concreteType: "WhatsAppBizProfileCategory", kind: "LinkedField", name: "not_a_biz", plural: !1, selections: t, storageKey: null }
                ],
                storageKey: null
            }];
        return {
            fragment: { argumentDefinitions: e, kind: "Fragment", name: "WAWebBizGetCategoriesQuery", selections: n, type: "Query" },
            kind: "Request",
            operation: { argumentDefinitions: e, kind: "Operation", name: "WAWebBizGetCategoriesQuery", selections: n },
            params: { id: "26266473919627648", metadata: {}, name: "WAWebBizGetCategoriesQuery", operationKind: "query", text: null }
        };
    })();
    a.exports = e;
}), null);
"#;

    #[test]
    fn a_shared_selection_set_is_resolved_for_every_user() {
        let op = operation(SRC).expect("parses");
        let root = &op.selections[0];
        assert_eq!(root.name, "whatsapp_catkit_typeahead_proxy");
        let names: Vec<&str> = root.selections.iter().map(|f| f.name.as_str()).collect();
        assert_eq!(names, ["categories", "not_a_biz"]);
        // Both got the hoisted set. The old walker printed these fields once at
        // the top level and left both blocks empty.
        for f in &root.selections {
            let inner: Vec<&str> = f.selections.iter().map(|x| x.name.as_str()).collect();
            assert_eq!(inner, ["id", "display_name"], "{} lost its selections", f.name);
        }
    }

    #[test]
    fn types_arguments_and_plurality_survive() {
        let op = operation(SRC).expect("parses");
        let root = &op.selections[0];
        assert_eq!(root.ty.as_deref(), Some("CatkitTypeaheadResponse"));
        assert_eq!(root.args, vec!["query_params: $query_params"]);
        assert!(root.selections[0].plural, "`categories` is a list");
        assert!(!root.selections[1].plural, "`not_a_biz` is not");
        assert_eq!(op.args[0].name, "query_params");
        assert_eq!(op.doc_id, "26266473919627648");
    }
}

