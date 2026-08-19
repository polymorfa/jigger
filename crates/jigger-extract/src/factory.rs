//! What the module factory's parameters are.
//!
//! Every module in the bundle is `__d("Name", [deps], (function(t, n, r, o, a,
//! i, l) { … }), 98)`, and those seven letters are the only interface the module
//! has to the loader. Knowing which is which turns unreadable minified source
//! into something you can follow: `o("WALogger")` is `importNamespace("WALogger")`,
//! and `l.foo = u` is an export rather than a write to an anonymous object.
//!
//! # The two conventions
//!
//! A small number of modules ship **unminified** and spell the signature out,
//! which is where these names come from rather than from Metro's documentation
//! — this bundle is Meta's own fork and does not match stock Metro. Across one
//! revision, 135 modules name their parameters, in two distinct shapes:
//!
//! ```text
//! 133×  (global, require, requireDynamic, requireLazy, module, exports)
//!   2×  (global, require, importDefault, importNamespace, requireLazy, module, exports, …)
//! ```
//!
//! Both were then confirmed against 4,000 minified modules by how the
//! parameters are *used* — which slot is called with a module name, which is
//! assigned onto, which carries `.exports` — with every count resolved through
//! the symbol table. Counting by name gives confident nonsense here, because
//! parameters are single letters and the same letters are reused as locals in
//! nested functions, so `function u(t)` shadows the factory's `t`.
//!
//! Anything after `exports` is a dependency the loader injects directly; the two
//! unminified long-form factories receive `invariant` and `fbt` that way. That
//! is why "the last parameter is exports" is wrong: it holds for the 6- and
//! 7-parameter cases and fails for every `.react` module, which is a fifth of
//! the bundle.

use oxc_ast::ast::*;
use oxc_ast_visit::Visit;
use oxc_semantic::{Scoping, SymbolId};

/// `(global, require, requireDynamic, requireLazy, module, exports)`.
const SHORT: [&str; 6] = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];

/// `(global, require, importDefault, importNamespace, requireLazy, module, exports, …)`.
const LONG: [&str; 7] = [
    "global",
    "require",
    "importDefault",
    "importNamespace",
    "requireLazy",
    "module",
    "exports",
];

/// The role each parameter of one factory plays.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Layout {
    /// One name per declared parameter, in order. Parameters past `exports` are
    /// dependencies the loader injects and are named `dep0`, `dep1`, … since
    /// their real names are only knowable when the module ships unminified.
    pub names: Vec<String>,
    /// Index of the exports object, when there is one.
    pub exports: Option<usize>,
}

impl Layout {
    pub fn name(&self, i: usize) -> Option<&str> {
        self.names.get(i).map(String::as_str)
    }
}

/// Which convention a factory follows, decided by evidence and not by arity alone.
///
/// Order matters. A factory that names its own parameters is telling you the
/// answer, so that is read first. Otherwise the exports object is found by
/// behaviour — it is the parameter assigned onto — because that is a fact about
/// this module rather than a generalisation over the bundle. Arity is the last
/// resort, for the many small modules that export nothing and assign nothing,
/// where there is no evidence to read and any answer is a convention.
pub fn layout_of(factory: &Function<'_>, scoping: &Scoping) -> Layout {
    let params: Vec<Option<(&str, Option<SymbolId>)>> = factory
        .params
        .items
        .iter()
        .map(|p| match &p.pattern {
            BindingPattern::BindingIdentifier(id) => Some((id.name.as_str(), id.symbol_id.get())),
            _ => None,
        })
        .collect();
    let arity = params.len();

    // 1. The module named them itself.
    if params.iter().flatten().any(|(n, _)| *n == "exports") {
        let names: Vec<String> =
            params.iter().enumerate().map(|(i, p)| match p {
                Some((n, _)) => (*n).to_string(),
                None => format!("arg{i}"),
            })
            .collect();
        let exports = names.iter().position(|n| n == "exports");
        return Layout { names, exports };
    }

    // 2. Which parameter is assigned onto. `exports.foo = …` is the whole
    //    purpose of the object, and no other parameter is used that way.
    let assigned = assigned_param(factory, scoping, &params);

    // 3. Arity, when the module gave nothing away.
    let exports = assigned.or(match arity {
        0..=5 => None,
        6 => Some(5),
        _ => Some(6),
    });

    let table: &[&str] = match exports {
        Some(5) => &SHORT,
        Some(6) => &LONG,
        // An exports slot anywhere else means neither convention applies, and
        // guessing the rest from it would be inventing the answer.
        _ => &[],
    };

    let names = (0..arity)
        .map(|i| match table.get(i) {
            Some(n) => (*n).to_string(),
            // Past `exports`: a dependency the loader injects. Numbered from
            // the first one rather than from its absolute position, so `dep0`
            // is the first injected dependency in every module.
            None if exports.is_some_and(|e| i > e) => format!("dep{}", i - exports.unwrap() - 1),
            None => format!("arg{i}"),
        })
        .collect();

    Layout { names, exports }
}

/// The parameter that has properties assigned onto it, if exactly one does.
fn assigned_param(
    factory: &Function<'_>,
    scoping: &Scoping,
    params: &[Option<(&str, Option<SymbolId>)>],
) -> Option<usize> {
    struct Assigns<'s> {
        scoping: &'s Scoping,
        hits: Vec<SymbolId>,
    }
    impl<'a, 's> Visit<'a> for Assigns<'s> {
        fn visit_assignment_expression(&mut self, e: &AssignmentExpression<'a>) {
            if let AssignmentTarget::StaticMemberExpression(m) = &e.left
                && let Expression::Identifier(obj) = &m.object
                && let Some(sym) = obj
                    .reference_id
                    .get()
                    .and_then(|id| self.scoping.get_reference(id).symbol_id())
            {
                self.hits.push(sym);
            }
            oxc_ast_visit::walk::walk_assignment_expression(self, e);
        }
    }

    let mut v = Assigns { scoping, hits: Vec::new() };
    if let Some(body) = &factory.body {
        v.visit_function_body(body);
    }

    // A parameter, not any local. `module.exports = …` also assigns onto a
    // parameter, so the *last* matching slot wins: `module` precedes `exports`
    // in both conventions, and a module doing both is exporting through both.
    let mut found = None;
    for sym in v.hits {
        for (i, p) in params.iter().enumerate() {
            if let Some((_, Some(psym))) = p
                && *psym == sym
                && found.is_none_or(|f| i > f)
            {
                found = Some(i);
            }
        }
    }
    found
}

/// The exports object's symbol, for a program that is one `__d(…)` call.
pub fn exports_symbol(program: &Program<'_>, scoping: &Scoping) -> Option<SymbolId> {
    let factory = factory_of(program)?;
    let layout = layout_of(factory, scoping);
    let idx = layout.exports?;
    match &factory.params.items.get(idx)?.pattern {
        BindingPattern::BindingIdentifier(id) => id.symbol_id.get(),
        _ => None,
    }
}

/// The factory function of a `__d("Name", [deps], factory, id)` program.
pub fn factory_of<'a, 'b>(program: &'b Program<'a>) -> Option<&'b Function<'a>> {
    for stmt in &program.body {
        let Statement::ExpressionStatement(es) = stmt else { continue };
        let Expression::CallExpression(call) = &es.expression else { continue };
        let Expression::Identifier(callee) = &call.callee else { continue };
        // `define` as well as `__d`: the source viewer rewrites the wrapper for
        // readability before any of this runs, and a matcher that only knew the
        // raw spelling silently found no factory in exactly the text it was
        // meant to annotate.
        if !matches!(callee.name.as_str(), "__d" | "define") || call.arguments.len() < 3 {
            continue;
        }
        // `get_inner_expression`: the factory is written parenthesized and oxc
        // keeps the wrapper in the tree.
        if let Some(arg) = call.arguments[2].as_expression()
            && let Expression::FunctionExpression(f) = arg.get_inner_expression()
        {
            return Some(f);
        }
    }
    None
}

#[cfg(test)]
mod tests {
    use super::*;
    use oxc_allocator::Allocator;
    use oxc_parser::Parser;
    use oxc_semantic::SemanticBuilder;
    use oxc_span::SourceType;

    fn layout(src: &str) -> Layout {
        let alloc = Allocator::default();
        let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
        let semantic =
            SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;
        let f = factory_of(&parsed.program).expect("a factory");
        layout_of(f, semantic.scoping())
    }

    /// The long convention, and the reason "last parameter" was wrong: `s` here
    /// is an injected dependency, and `l` is exports.
    #[test]
    fn injected_dependencies_come_after_exports() {
        let l = layout(
            r#"__d("M", ["dep"], (function(t, n, r, o, a, i, l, s) { l.render = function(){ return s } }), 98)"#,
        );
        assert_eq!(l.exports, Some(6));
        assert_eq!(l.name(6), Some("exports"));
        assert_eq!(l.name(3), Some("importNamespace"));
        assert_eq!(l.name(7), Some("dep0"), "not exports, and not a nameless arg");
    }

    /// The short convention: six parameters, exports last.
    #[test]
    fn the_six_parameter_convention_puts_exports_fifth() {
        let l = layout(r#"__d("M", [], (function(t, n, r, o, a, i) { i.x = 1 }), 98)"#);
        assert_eq!(l.exports, Some(5));
        assert_eq!(l.name(2), Some("requireDynamic"));
        assert_eq!(l.name(4), Some("module"));
        assert_eq!(l.name(5), Some("exports"));
    }

    /// A module that names its own parameters is not guessed at.
    #[test]
    fn an_unminified_factory_is_read_not_inferred() {
        let l = layout(
            r#"__d("M", [], (function $module_M(global, require, requireDynamic, requireLazy, module, exports) { }), 98)"#,
        );
        assert_eq!(l.exports, Some(5));
        assert_eq!(l.names[2], "requireDynamic");
    }

    /// `module.exports = …` assigns onto a parameter too. The later slot wins,
    /// because `module` precedes `exports` in both conventions.
    #[test]
    fn module_dot_exports_does_not_steal_the_exports_slot() {
        let l = layout(
            r#"__d("M", [], (function(t, n, r, o, a, i) { a.exports = {}; i.y = 2 }), 98)"#,
        );
        assert_eq!(l.exports, Some(5), "i, not a");
    }

    /// Nothing assigned and nothing named: arity is all there is, and it is
    /// applied rather than pretended to be a measurement.
    #[test]
    fn a_silent_module_falls_back_to_arity() {
        assert_eq!(layout(r#"__d("M", [], (function(t, n, r, o, a, i, l) { }), 98)"#).exports, Some(6));
        assert_eq!(layout(r#"__d("M", [], (function(t, n, r, o, a, i) { }), 98)"#).exports, Some(5));
    }
}
