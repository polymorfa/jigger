//! Stanza shapes, both directions, off the parse tree.
//!
//! An IQ is not "a namespace and some tag names". It is a tree of elements whose
//! attributes are each wrapped in a codec that decides what the server will
//! accept — `WAWap.JID`, `CUSTOM_STRING`, `attrIntRange(0, undefined)`. Reading
//! the tag names and stopping there throws away the part a library actually has
//! to get right.
//!
//! Both directions are read here because they describe the same XML from
//! opposite ends. Outbound modules *build* it:
//!
//! ```text
//! smax("iq", { xmlns: "w:biz:msg_feedback", type: "set" },
//!   smax("user_feedback", { jid: WAWap.USER_JID(r), feedback: OPTIONAL(CUSTOM_STRING, a) }))
//! ```
//!
//! Inbound modules *take it apart*, guard clause by guard clause:
//!
//! ```text
//! var r = assertTag(t, "iq");            if (!r.success) return r;
//! var a = flattenedChildWithTag(t, "props");
//! var l = literal(attrString, a.value, "protocol", "1");
//! ```
//!
//! Both land in the same [`IqNode`], which is what lets a request and its reply
//! be read side by side.
//!
//! Everything is read from the AST. A regex over minified JavaScript cannot tell
//! a nested call from a sibling one, and nesting is exactly what a stanza tree
//! is made of.

use cellar_core::{BundleHandle, ModuleEntry};
use jigger_ir::{IqAttr, IqNode};
use oxc_allocator::Allocator;
use oxc_ast::ast::{Argument, Expression, ObjectPropertyKind, PropertyKey, Statement};
use oxc_parser::Parser;
use oxc_span::SourceType;
use std::collections::BTreeMap;

/// Nesting cap. Real stanzas are three or four deep; the limit is here so a
/// helper function that (directly or otherwise) refers to itself cannot spin.
const MAX_DEPTH: u8 = 8;

/// The codec a value is wrapped in, translated to something a reader can act on.
///
/// These names come from `WAWap` and are the validators themselves, so the type
/// is observed rather than guessed: `JID` means the server rejects a non-JID,
/// not that this particular call site happened to pass one.
fn codec_type(name: &str) -> String {
    match name {
        "JID" | "USER_JID" | "DEVICE_JID" | "GROUP_JID" | "LID_JID" => "jid",
        "CUSTOM_STRING" | "STRING" | "attrString" | "attrCustomString" => "string",
        "INT" | "UINT" | "attrInt" | "attrIntRange" | "attrUint" => "int",
        "BOOL" | "attrBool" => "bool",
        "BYTES" | "BINARY" | "attrBytes" | "contentBytesRange" => "bytes",
        "TIMESTAMP" | "attrTimestamp" => "timestamp",
        "attrEnum" | "ENUM" => "enum",
        "generateId" => "id",
        other if other.starts_with("attr") => {
            return other.trim_start_matches("attr").to_lowercase();
        }
        other => return other.to_lowercase(),
    }
    .to_string()
}

/// The property name of an object literal key, when it has a static one.
fn key_name(k: &PropertyKey) -> Option<String> {
    match k {
        PropertyKey::StaticIdentifier(i) => Some(i.name.to_string()),
        PropertyKey::StringLiteral(s) => Some(s.value.to_string()),
        _ => None,
    }
}

/// The final segment of a callee, ignoring however it was reached.
///
/// Minified bundles reach the same function three different ways — `o("WAWap").JID`,
/// `t.JID` after `t = o("WAWap")`, or a bare `JID` — and the module-loader
/// indirection makes the receiver unreliable. The property name is the stable
/// part, and within one module it is unambiguous.
fn callee_name<'a>(e: &'a Expression<'a>) -> Option<&'a str> {
    match e {
        Expression::Identifier(i) => Some(i.name.as_str()),
        Expression::StaticMemberExpression(m) => Some(m.property.name.as_str()),
        _ => None,
    }
}

/// One attribute value, classified by whatever wraps it.
fn attr_of(name: &str, v: &Expression) -> IqAttr {
    let mk = |ty: &str, literal: Option<String>, optional: bool| IqAttr {
        name: name.to_string(),
        ty: ty.to_string(),
        literal,
        optional,
    };
    match v {
        // `type: "set"` — pinned, not supplied.
        Expression::StringLiteral(s) => mk("string", Some(s.value.to_string()), false),
        Expression::NumericLiteral(n) => mk("int", Some(n.value.to_string()), false),

        // `to: WAWap.S_WHATSAPP_NET` — a named constant, still pinned.
        Expression::StaticMemberExpression(m) if m.property.name == "S_WHATSAPP_NET" => {
            mk("jid", Some("s.whatsapp.net".into()), false)
        }

        Expression::CallExpression(c) => {
            let f = callee_name(&c.callee).unwrap_or("");
            match f {
                // `OPTIONAL(codec, value)` — the codec is the first argument.
                "OPTIONAL" => {
                    let ty = c.arguments.first()
                        .and_then(Argument::as_expression)
                        .and_then(callee_name)
                        .map(codec_type)
                        .unwrap_or_else(|| "string".into());
                    mk(&ty, None, true)
                }
                // `OPTIONAL_LITERAL("identity", flag)` — present or absent, and
                // when present it can only be that one string.
                "OPTIONAL_LITERAL" => {
                    let lit = match c.arguments.first().and_then(Argument::as_expression) {
                        Some(Expression::StringLiteral(s)) => Some(s.value.to_string()),
                        _ => None,
                    };
                    mk("string", lit, true)
                }
                _ => mk(&codec_type(f), None, false),
            }
        }
        _ => mk("string", None, false),
    }
}

/// A module's `function name(...)` declarations, by name.
///
/// Stanza builders split helpers out — `REPEATED_CHILD(e, n, 1, 1e5)` passes the
/// function that builds one element — so a child is often a reference to a
/// sibling function rather than an inline call. Resolving those is the
/// difference between recording a repeated child and recording nothing.
type Fns<'a> = BTreeMap<String, &'a oxc_ast::ast::Function<'a>>;

/// The `smax(...)` a function returns, wherever in its body it was built.
///
/// Minified output assigns the tree to a local and returns the local, so the
/// last `smax` call in the body is the one returned. Mixin wrappers
/// (`mergeClientRequestMixin(smax(...))`) are unwrapped: the mixin contributes
/// attributes we recover from the base module anyway, and the stanza we want is
/// its argument.
fn returned_smax<'a>(f: &'a oxc_ast::ast::Function<'a>) -> Option<&'a Expression<'a>> {
    let body = f.body.as_ref()?;
    let mut found = None;
    for st in &body.statements {
        let Statement::VariableDeclaration(d) = st else { continue };
        for decl in &d.declarations {
            if let Some(init) = &decl.init
                && let Some(e) = unwrap_smax(init)
            {
                found = Some(e);
            }
        }
    }
    found
}

/// Strips mixin wrappers until a bare `smax(...)` is reached.
fn unwrap_smax<'a>(e: &'a Expression<'a>) -> Option<&'a Expression<'a>> {
    let Expression::CallExpression(c) = e else { return None };
    let name = callee_name(&c.callee)?;
    if name == "smax" {
        return Some(e);
    }
    if name.contains("Mixin") || name.starts_with("merge") {
        return c.arguments.first().and_then(Argument::as_expression).and_then(unwrap_smax);
    }
    None
}

/// One `smax(tag, attrs, ...children)` call, as a node.
fn node_of(e: &Expression, fns: &Fns, card: &str, depth: u8) -> Option<IqNode> {
    if depth > MAX_DEPTH {
        return None;
    }
    let Expression::CallExpression(c) = e else { return None };
    if callee_name(&c.callee)? != "smax" {
        return None;
    }
    let Some(Expression::StringLiteral(tag)) = c.arguments.first().and_then(Argument::as_expression)
    else {
        return None;
    };

    let mut attrs = Vec::new();
    if let Some(Expression::ObjectExpression(obj)) =
        c.arguments.get(1).and_then(Argument::as_expression)
    {
        for p in &obj.properties {
            let ObjectPropertyKind::ObjectProperty(p) = p else { continue };
            let Some(name) = key_name(&p.key) else { continue };
            attrs.push(attr_of(&name, &p.value));
        }
    }

    let children = c.arguments.iter().skip(2)
        .filter_map(Argument::as_expression)
        .flat_map(|a| children_of(a, fns, depth + 1))
        .collect();

    Some(IqNode { tag: tag.value.to_string(), attrs, children, card: card.to_string() })
}

/// The children one argument contributes — zero, one, or several.
///
/// Several, because a variable-length child list is written as an array spliced
/// together at build time:
///
/// ```text
/// smax("iq", null, [smax("multi_serialized_lookup", {…})].concat(REPEATED_CHILD(e, n, 1, 2)))
/// ```
///
/// Treating an argument as at most one child dropped both halves of that: the
/// array was not a `smax` call so it yielded nothing, and the repeated element
/// spliced onto it went with it. Returning a list is what lets the two forms
/// compose the way the bundle composes them.
fn children_of(e: &Expression, fns: &Fns, depth: u8) -> Vec<IqNode> {
    if depth > MAX_DEPTH {
        return vec![];
    }
    match e {
        // A literal child list.
        Expression::ArrayExpression(arr) => arr.elements.iter()
            .filter_map(|el| el.as_expression())
            .flat_map(|el| children_of(el, fns, depth + 1))
            .collect(),

        // A sibling builder referenced by name.
        Expression::Identifier(id) => fns.get(id.name.as_str())
            .and_then(|f| returned_smax(f))
            .and_then(|s| node_of(s, fns, "one", depth + 1))
            .into_iter().collect(),

        Expression::CallExpression(c) => {
            let Some(name) = callee_name(&c.callee) else { return vec![] };
            match name {
                "smax" => node_of(e, fns, "one", depth).into_iter().collect(),

                // `[a].concat(b)` — the receiver's children plus the argument's.
                "concat" => {
                    let Expression::StaticMemberExpression(m) = &c.callee else { return vec![] };
                    let mut out = children_of(&m.object, fns, depth + 1);
                    for a in c.arguments.iter().filter_map(Argument::as_expression) {
                        out.extend(children_of(a, fns, depth + 1));
                    }
                    out
                }

                // `OPTIONAL_CHILD(builder, value)` / `REPEATED_CHILD(builder, arr, 1, 2)`
                _ if name.ends_with("CHILD") || name.ends_with("CHILDREN") => {
                    let card = if name.starts_with("OPTIONAL") { "optional" } else { "repeated" };
                    c.arguments.first().and_then(Argument::as_expression)
                        .map(|a| children_of(a, fns, depth + 1))
                        .unwrap_or_default()
                        .into_iter()
                        .map(|mut n| { n.card = card.to_string(); n })
                        .collect()
                }

                // `mergeSomeMixin(smax(…), args)` — the mixin decorates the
                // stanza in its first argument rather than replacing it.
                _ if name.contains("Mixin") || name.starts_with("merge") => {
                    c.arguments.first().and_then(Argument::as_expression)
                        .map(|a| children_of(a, fns, depth + 1))
                        .unwrap_or_default()
                }

                _ => vec![],
            }
        }
        _ => vec![],
    }
}

/// The stanza an outbound `WASmaxOut*Request` module builds.
///
/// The entry point is the function whose tree is rooted at `iq`; the others are
/// helpers it calls for individual children, and taking one of those as the
/// request would report a fragment as the whole stanza.
pub fn request(src: &str) -> Option<IqNode> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return None;
    }

    // Builders live inside the module factory, so the walk has to descend into
    // nested function bodies rather than reading top-level statements only.
    let mut fns: Fns = BTreeMap::new();
    collect_fns(&ret.program.body, &mut fns, 0);

    fns.values()
        .filter_map(|f| node_of(returned_smax(f)?, &fns, "one", 0))
        .find(|n| n.tag == "iq")
}

fn collect_fns<'a>(stmts: &'a oxc_allocator::Vec<'a, Statement<'a>>, out: &mut Fns<'a>, depth: u8) {
    if depth > MAX_DEPTH {
        return;
    }
    for st in stmts {
        match st {
            Statement::FunctionDeclaration(f) => {
                if let Some(id) = &f.id {
                    out.insert(id.name.to_string(), f);
                }
                if let Some(b) = &f.body {
                    collect_fns(&b.statements, out, depth + 1);
                }
            }
            Statement::ExpressionStatement(e) => {
                // `__d("Name", [deps], (function (…) { … }), 98)` — the factory
                // is parenthesised, and oxc keeps that node, so the inner
                // expression has to be reached explicitly or every builder in
                // the bundle is invisible.
                if let Expression::CallExpression(c) = e.expression.get_inner_expression() {
                    for a in &c.arguments {
                        if let Some(Expression::FunctionExpression(f)) =
                            a.as_expression().map(Expression::get_inner_expression)
                            && let Some(b) = &f.body
                        {
                            collect_fns(&b.statements, out, depth + 1);
                        }
                    }
                }
            }
            _ => {}
        }
    }
}

/// The stanza an inbound `WASmaxIn*` parser accepts.
///
/// Read from the guard clauses rather than a schema, because there is no schema:
/// the parser *is* the specification. Each `var x = assertTag(v, "iq")` /
/// `childWithTag(v, "props")` / `attrString(v, "hash")` names the value it reads
/// from, so following those bindings reconstructs the tree the parser walks.
pub fn response(src: &str) -> Option<IqNode> {
    let alloc = Allocator::default();
    let ret = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if ret.panicked {
        return None;
    }

    let mut fns: Fns = BTreeMap::new();
    collect_fns(&ret.program.body, &mut fns, 0);

    // The outermost parser asserts a stanza root; the helpers above it assert a
    // child tag and would each look like a root of their own.
    const ROOTS: &[&str] = &["iq", "notification", "message", "receipt", "ack", "presence", "call"];
    fns.values()
        .filter_map(|f| parse_body(f, &fns, 0))
        .find(|n| ROOTS.contains(&n.tag.as_str()))
}

/// Walks one parser function, in source order, building the node it accepts.
fn parse_body(f: &oxc_ast::ast::Function, fns: &Fns, depth: u8) -> Option<IqNode> {
    if depth > MAX_DEPTH {
        return None;
    }
    let body = f.body.as_ref()?;

    let mut root: Option<IqNode> = None;
    // Local variable -> index into `nodes`, so `a.value` in a later call resolves
    // to the child `a` was bound to.
    let mut owner: BTreeMap<String, Vec<usize>> = BTreeMap::new();
    let mut nodes: Vec<IqNode> = Vec::new();
    // The variable the root itself is read from — the function's first parameter.
    let root_var = f.params.items.first().and_then(|p| p.pattern.get_binding_identifier())
        .map(|b| b.name.to_string());

    for st in &body.statements {
        let Statement::VariableDeclaration(d) = st else { continue };
        for decl in &d.declarations {
            let (Some(init), Some(bound)) = (&decl.init, decl.id.get_binding_identifier()) else {
                continue;
            };
            let Expression::CallExpression(c) = init else { continue };
            let Some(fname) = callee_name(&c.callee) else { continue };
            let args: Vec<&Expression> =
                c.arguments.iter().filter_map(Argument::as_expression).collect();

            // The variable a call reads from, with `.value` unwrapped.
            let source_var = |e: &Expression| -> Option<String> {
                match e {
                    Expression::Identifier(i) => Some(i.name.to_string()),
                    Expression::StaticMemberExpression(m) if m.property.name == "value" => {
                        match &m.object {
                            Expression::Identifier(i) => Some(i.name.to_string()),
                            _ => None,
                        }
                    }
                    _ => None,
                }
            };
            let str_at = |i: usize| -> Option<String> {
                match args.get(i) {
                    Some(Expression::StringLiteral(s)) => Some(s.value.to_string()),
                    _ => None,
                }
            };

            if fname == "assertTag" {
                let tag = str_at(1)?;
                if root.is_none() {
                    root = Some(IqNode { tag, attrs: vec![], children: vec![], card: "one".into() });
                }
                continue;
            }

            if fname.contains("hild") {
                // `childWithTag(v, "props")`, `optionalChildWithTag(v, "erid", parser)`,
                // `repeatedChildWithTag(...)`, `flattenedChildWithTag(...)`.
                let Some(tag) = str_at(1) else { continue };
                let card = if fname.starts_with("optional") {
                    "optional"
                } else if fname.starts_with("repeated") {
                    "repeated"
                } else {
                    "one"
                };
                // A sub-parser passed as the third argument describes the child's
                // own contents, so its attributes come along.
                let inner = args.get(2)
                    .and_then(|a| match a {
                        Expression::Identifier(i) => fns.get(i.name.as_str()),
                        _ => None,
                    })
                    .and_then(|g| parse_body(g, fns, depth + 1));

                let mut n = IqNode {
                    tag,
                    attrs: inner.as_ref().map(|i| i.attrs.clone()).unwrap_or_default(),
                    children: inner.map(|i| i.children).unwrap_or_default(),
                    card: card.into(),
                };
                // A flattened child collapses into its parent on the wire, but it
                // is still a real element, so it is kept as one.
                if fname.starts_with("flattened") {
                    n.card = "one".into();
                }
                nodes.push(n);
                owner.entry(bound.name.to_string()).or_default().push(nodes.len() - 1);
                continue;
            }

            // Attributes: `optional(attrString, v, "hash")`,
            // `literal(attrString, v, "protocol", "1")`, `attrString(v, "hash")`.
            let (codec, vidx, nidx, optional, literal) = match fname {
                "optional" => (args.first().and_then(|e| callee_name(e)), 1, 2, true, None),
                "required" => (args.first().and_then(|e| callee_name(e)), 1, 2, false, None),
                "literal" => (args.first().and_then(|e| callee_name(e)), 1, 2, false, str_at(3)),
                f if f.starts_with("attr") => (Some(f), 0, 1, false, None),
                _ => continue,
            };
            let Some(name) = str_at(nidx) else { continue };
            let attr = IqAttr {
                name,
                ty: codec.map(codec_type).unwrap_or_else(|| "string".into()),
                literal,
                optional,
            };
            let target = args.get(vidx).and_then(|a| source_var(a));
            match target.as_deref().and_then(|v| owner.get(v)).and_then(|v| v.first()).copied() {
                Some(i) => nodes[i].attrs.push(attr),
                None if target == root_var => {
                    if let Some(r) = root.as_mut() {
                        r.attrs.push(attr)
                    }
                }
                None => {
                    if let Some(r) = root.as_mut() {
                        r.attrs.push(attr)
                    }
                }
            }
        }
    }

    let mut r = root?;
    r.children = nodes;
    Some(r)
}

/// The reply arms an RPC tries, in the order it tries them.
///
/// That order is the contract: the client does not receive "a response", it
/// receives whichever arm accepts first. Read from the call sequence in the RPC
/// body rather than from its dependency array, which is alphabetical and would
/// report the arms in the wrong order.
pub fn rpc_arms(src: &str) -> Vec<String> {
    let re = regex::Regex::new(r#"o\("(WASmaxIn[A-Za-z0-9_]+)"\)\.parse"#).expect("static regex");
    let mut seen: Vec<String> = Vec::new();
    for c in re.captures_iter(src) {
        let n = c[1].to_string();
        if !seen.contains(&n) {
            seen.push(n);
        }
    }
    seen
}

/// Reads a module by name, if the bundle has it.
pub fn read<'a>(
    bundle: &BundleHandle,
    by_name: &BTreeMap<&str, &'a ModuleEntry>,
    name: &str,
) -> Option<String> {
    bundle.read_module(by_name.get(name)?).ok()
}

/// The stanza a request module builds, with the attributes its mixins supply.
///
/// A request rarely states its own namespace. `smax("iq", null, …)` wrapped in
/// `mergeKeyTransparencyGetIQMixin` carries no attributes at all — the `xmlns`
/// and the `type` live in the mixin, which exists precisely so that a dozen
/// operations can share them. Reading only the request module reports an `<iq>`
/// with no namespace and an unknown type, which is the one thing a caller cannot
/// work without.
pub fn request_with_mixins(
    bundle: &BundleHandle,
    by_name: &BTreeMap<&str, &ModuleEntry>,
    entry: &ModuleEntry,
    src: &str,
) -> Option<IqNode> {
    let mut node = request(src)?;

    // Breadth-first, and deliberately so. A request's own mixins are the ones
    // that describe it; anything reached through them is progressively more
    // general. Walking depth-first spent the visit budget on whichever sibling
    // happened to sort last — a child-element mixin and its whole ancestry —
    // and never reached the mixin holding the namespace.
    let mixins = |deps: &[String]| -> Vec<String> {
        deps.iter().filter(|d| d.starts_with("WASmax") && d.contains("Mixin")).cloned().collect()
    };
    let mut queue: Vec<String> = mixins(&entry.deps);
    let mut seen: Vec<String> = Vec::new();
    let mut i = 0;

    while i < queue.len() && seen.len() < 24 {
        let name = queue[i].clone();
        i += 1;
        if seen.contains(&name) {
            continue;
        }
        seen.push(name.clone());
        let Some(e) = by_name.get(name.as_str()) else { continue };
        let Ok(msrc) = bundle.read_module(e) else { continue };
        if let Some(m) = request(&msrc) {
            merge(&mut node, m);
        }
        queue.extend(mixins(&e.deps));
    }
    Some(node)
}

/// The named alternatives a parser can produce.
///
/// An error arm does not resolve to "an error" — it resolves to one of
/// `IQErrorNotAcceptable`, `IQErrorBadRequest`, `IQErrorForbidden`,
/// `IQErrorRateOverlimit`. Those names are the difference between a library that
/// can retry the right failures and one that treats every error alike.
fn variant_names(src: &str) -> Vec<String> {
    let re = regex::Regex::new(r#"makeResult\(\{\s*name:\s*"([A-Za-z0-9_]+)""#).expect("static regex");
    re.captures_iter(src).map(|c| c[1].to_string()).collect()
}

/// The `WASmaxIn*` modules a parser delegates to.
fn delegates(src: &str) -> Vec<String> {
    let re = regex::Regex::new(r#"o\("(WASmaxIn[A-Za-z0-9_]+)"\)\.parse"#).expect("static regex");
    let mut out: Vec<String> = Vec::new();
    for c in re.captures_iter(src) {
        let n = c[1].to_string();
        if !out.contains(&n) {
            out.push(n);
        }
    }
    out
}

/// One reply arm, followed through the mixins it delegates to.
///
/// A response module is rarely self-contained. The stanza it accepts is split
/// across an error-response mixin that pins `type="error"` and echoes the
/// request's id, and a `*ReqErrors` module that enumerates which errors this
/// operation can actually return. Reading only the arm's own body reports an
/// `<iq>` with an `<error/>` in it and nothing else — true, and useless.
pub fn arm(
    bundle: &BundleHandle,
    by_name: &BTreeMap<&str, &ModuleEntry>,
    name: &str,
    depth: u8,
) -> (Option<IqNode>, Vec<String>) {
    let Some(src) = read(bundle, by_name, name) else { return (None, vec![]) };
    let mut node = response(&src);
    let mut errors = variant_names(&src);

    if depth < 3 {
        for d in delegates(&src) {
            // The stanza and the error list are followed independently, because
            // a `*ReqErrors` module contributes no stanza at all — it is a bare
            // list of alternatives. Requiring a node here dropped every error
            // name in the bundle on the floor.
            let (sub, mut sub_errors) = arm(bundle, by_name, &d, depth + 1);
            errors.append(&mut sub_errors);
            match (node.as_mut(), sub) {
                (Some(n), Some(s)) => merge(n, s),
                // A delegate can be the only thing that names the root, when the
                // arm's own body does nothing but hand off.
                (None, Some(s)) => node = Some(s),
                (_, None) => {}
            }
        }
    }

    errors.sort();
    errors.dedup();
    (node, errors)
}

/// Folds a delegate's stanza into the one that delegates to it.
///
/// Both describe the same element, so attributes union and children match up by
/// tag. Anything the arm already stated wins: the delegate is the general shape,
/// the arm is the specific one.
fn merge(into: &mut IqNode, from: IqNode) {
    for a in from.attrs {
        if !into.attrs.iter().any(|x| x.name == a.name) {
            into.attrs.push(a);
        }
    }
    for c in from.children {
        match into.children.iter_mut().find(|x| x.tag == c.tag) {
            Some(existing) => merge(existing, c),
            None => into.children.push(c),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// The shape that exposed array-and-concat children: a literal child list
    /// spliced together with a repeated one, inside a mixin-wrapped `<iq>` that
    /// declares no attributes of its own.
    const MULTI_LOOKUP: &str = r#"
__d("WASmaxOutKeyTransparencyMultiSerializedLookupRequest", ["WASmaxAttrs"], (function(t, n, r, o, a, i, l) {
    function e(e) {
        var t = o("M").mergeSingleSerializedLookupMixin(o("WASmaxJsx").smax("single_serialized_lookup", null), e);
        return t;
    }
    function s(t) {
        var n = t.singleSerializedLookupArgs, r = t.multiSerializedLookupVersion, a = o("M2").mergeKeyTransparencyGetIQMixin(o("WASmaxJsx").smax("iq", null, [o("WASmaxJsx").smax("multi_serialized_lookup", { version: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r) })].concat(o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 2))));
        return a;
    }
    l.makeMultiSerializedLookupRequest = s;
}), 98);
"#;

    /// A mixin supplying the namespace the request itself never states.
    const GET_IQ_MIXIN: &str = r#"
__d("WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin", ["WASmaxJsx"], (function(t, n, r, o, a, i, l) {
    function e() {
        var e = o("B").mergeBaseIQGetRequestMixin(o("WASmaxJsx").smax("iq", {
            xmlns: "key_transparency",
            to: o("WAWap").S_WHATSAPP_NET
        }));
        return e;
    }
    function s(t) { var n = e(); return o("WASmaxMixins").mergeStanzas(t, n); }
    l.mergeKeyTransparencyGetIQMixin = s;
}), 98);
"#;

    #[test]
    fn array_and_concat_children_both_survive() {
        let n = request(MULTI_LOOKUP).expect("request parses");
        assert_eq!(n.tag, "iq");
        let tags: Vec<&str> = n.children.iter().map(|c| c.tag.as_str()).collect();
        assert_eq!(tags, ["multi_serialized_lookup", "single_serialized_lookup"]);
        assert_eq!(n.children[1].card, "repeated");
        // The optional attribute keeps the codec's type, not a guess from its value.
        let v = &n.children[0].attrs[0];
        assert_eq!((v.name.as_str(), v.ty.as_str(), v.optional), ("version", "string", true));
    }

    #[test]
    fn mixin_supplies_the_namespace_the_request_omits() {
        let m = request(GET_IQ_MIXIN).expect("mixin parses");
        let xmlns = m.attrs.iter().find(|a| a.name == "xmlns").expect("mixin states xmlns");
        assert_eq!(xmlns.literal.as_deref(), Some("key_transparency"));

        let mut req = request(MULTI_LOOKUP).expect("request parses");
        assert!(req.attrs.is_empty(), "the request states none of its own");
        merge(&mut req, m);
        assert_eq!(
            req.attrs.iter().find(|a| a.name == "xmlns").and_then(|a| a.literal.as_deref()),
            Some("key_transparency"),
        );
    }
}

