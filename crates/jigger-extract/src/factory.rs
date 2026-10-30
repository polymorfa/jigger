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
//!
//! # Why a table is not enough
//!
//! A position table is a generalisation over a bundler that has already changed
//! once, and this code exists to be *read* — a wrong name is worse than a single
//! letter, because a letter admits it means nothing while `exports` asserts
//! something false. So the table only ever proposes a name, and two checks can
//! veto it:
//!
//! * **Contradiction.** If a parameter the table calls `global` is being called
//!   with a module name, the table does not describe this factory. Rather than
//!   rename it confidently to the wrong thing, the parameter is left alone.
//!
//! * **Collision.** If the name is already taken anywhere in the module — a
//!   local called `exports`, a free reference to `require` — renaming into it
//!   would put two different things on screen under one name, and every
//!   conclusion drawn from reading it would be wrong. Also left alone.
//!
//! Both are per parameter, so a module with one awkward name still gets the
//! other six.

use std::collections::{HashMap, HashSet};

use oxc_ast::ast::*;
use oxc_ast_visit::Visit;
use oxc_semantic::{Scoping, SymbolId};

/// `(global, require, requireDynamic, requireLazy, module, exports)`.
const SHORT: [&str; 6] = [
    "global",
    "require",
    "requireDynamic",
    "requireLazy",
    "module",
    "exports",
];

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

/// Names that mean "this is one of the require family".
const REQUIRE_LIKE: [&str; 4] = ["require", "requireDynamic", "requireLazy", "importDefault"];

/// The role each parameter of one factory plays.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Layout {
    /// One entry per declared parameter, in order. `None` means "leave this one
    /// as the letter it is" — either the name was vetoed or there is none to
    /// give.
    pub names: Vec<Option<String>>,
    /// Index of the exports object, when there is one. Set even if the name was
    /// vetoed, because it is what the export table is read through.
    pub exports: Option<usize>,
}

impl Layout {
    pub fn name(&self, i: usize) -> Option<&str> {
        self.names.get(i)?.as_deref()
    }
}

/// How one parameter is used inside the factory body.
#[derive(Default, Debug, Clone, Copy)]
struct Use {
    /// `p("SomeModule")` — called with a single string literal.
    called_with_name: bool,
    /// `p.foo = …`, where `foo` is not `exports`.
    assigned_onto: bool,
    /// `p.exports` in any position, including `p.exports.foo = …`.
    dot_exports: bool,
}

impl Use {
    /// Whether an observation of this parameter rules the proposed name out.
    ///
    /// Deliberately one-directional: a parameter used in *no* distinguishing way
    /// contradicts nothing, which is most of them. Only positive evidence
    /// against the name counts.
    fn contradicts(&self, name: &str) -> bool {
        let require_like = REQUIRE_LIKE.contains(&name) || name == "importNamespace";
        if self.called_with_name && !require_like {
            return true;
        }
        if self.assigned_onto && name != "exports" {
            return true;
        }
        if self.dot_exports && name != "module" {
            return true;
        }
        false
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
pub fn layout_of(factory: &Function<'_>, deps: &[&str], scoping: &Scoping) -> Layout {
    let params: Vec<Option<(&str, SymbolId)>> = factory
        .params
        .items
        .iter()
        .map(|p| match &p.pattern {
            BindingPattern::BindingIdentifier(id) => {
                id.symbol_id.get().map(|s| (id.name.as_str(), s))
            }
            _ => None,
        })
        .collect();
    let arity = params.len();

    // A module that names its own parameters is not guessed at, and nothing
    // below can veto what it says about itself.
    if params.iter().flatten().any(|(n, _)| *n == "exports") {
        let names: Vec<Option<String>> = params
            .iter()
            .map(|p| p.map(|(n, _)| n.to_string()))
            .collect();
        let exports = names.iter().position(|n| n.as_deref() == Some("exports"));
        return Layout { names, exports };
    }

    let uses = observe(factory, scoping, &params);

    // Which slot is `module`, from `module.exports`. This is the strongest
    // anchor available: `.exports` on a parameter means one thing only, and the
    // two conventions put `module` in different places (fourth and fifth), so
    // finding it identifies the convention outright.
    //
    // It is checked before the exports object because arity cannot separate the
    // two: a six-parameter factory plus one injected dependency has seven
    // parameters and is *not* the seven-parameter convention. `GeminiEmojiCategories`
    // is exactly that — `(t, n, r, o, a, i, l)` with `a.exports = {…}` and `l`
    // being the injected `fbt` — and reading it by arity named `fbt` as the
    // exports object.
    let by_module = params
        .iter()
        .enumerate()
        .filter(|(i, p)| p.is_some() && uses[*i].dot_exports)
        .map(|(i, _)| i)
        .next_back();

    // Failing that, the exports object is the one with properties hung off it.
    // `module` also gets assigned onto — `module.exports = …` — which is why
    // that form is tracked separately and never looks like exports.
    let by_use = params
        .iter()
        .enumerate()
        .filter(|(i, p)| p.is_some() && uses[*i].assigned_onto)
        .map(|(i, _)| i)
        .next_back();

    let exports = match (by_module, by_use) {
        // `exports` always immediately follows `module`.
        (Some(m), _) => Some(m + 1),
        (None, Some(e)) => Some(e),
        // Nothing to read: arity, and only arity, which is the weakest of the
        // three and is applied rather than pretended to be a measurement.
        (None, None) => match arity {
            0..=5 => None,
            6 => Some(5),
            _ => Some(6),
        },
    };

    let table: &[&str] = match exports {
        Some(5) => &SHORT,
        Some(6) => &LONG,
        // An exports slot anywhere else means neither convention applies, and
        // deriving the other six names from it would be inventing them.
        _ => &[],
    };

    let taken = taken_names(scoping, &params);

    let names = (0..arity)
        .map(|i| {
            // Whether the name claims to know what the parameter *is*. The
            // table's names do; `depN` only claims a position.
            let (proposed, semantic) = match table.get(i) {
                Some(n) => ((*n).to_string(), true),
                // Past `exports`: a dependency the loader injects, and the
                // dependency array says which. Injected parameter *n* is
                // `deps[n]` — the two unminified examples confirm it directly
                // (`invariant`, `fbt`), and the pattern holds at scale: among
                // modules with injected parameters `deps[0]` is drawn from a
                // tiny vocabulary of build-time helpers — fbt, ix, cx,
                // invariant, errorCode, cssVar, csx — where modules without
                // them have ordinary module names there.
                //
                // Falls back to a positional placeholder when the dependency is
                // not a usable identifier, since `relay-runtime/experimental`
                // cannot be a parameter name.
                None if exports.is_some_and(|e| i > e) => {
                    let n = i - exports.unwrap() - 1;
                    let name = deps
                        .get(n)
                        .filter(|d| is_identifier(d))
                        .map(|d| (*d).to_string())
                        .unwrap_or_else(|| format!("dep{n}"));
                    (name, false)
                }
                None => return None,
            };
            params[i]?;
            // Only a semantic name can be contradicted. An injected dependency
            // may do anything at all — `fbt` is injected and is called with a
            // string, which the require-family rule reads as a contradiction —
            // and vetoing `dep0` over it withheld a correct name from 161
            // modules in 5,000 while proving nothing.
            if semantic && uses[i].contradicts(&proposed) {
                return None;
            }
            if taken.contains(proposed.as_str()) {
                return None;
            }
            Some(proposed)
        })
        .collect();

    Layout { names, exports }
}

/// Every name already spoken for in this module, other than by the parameters
/// themselves.
///
/// Both halves matter. A *binding* called `exports` elsewhere means the renamed
/// parameter and that local would appear under one name while resolving to two
/// different things — go-to-definition would land on one of them and be wrong
/// half the time. A *free* reference called `require` means the module reads
/// something from an outer scope; renaming a parameter into that name makes the
/// free reference look like it resolves to the parameter, which is the same lie
/// pointed the other way.
fn taken_names<'a>(scoping: &'a Scoping, params: &[Option<(&str, SymbolId)>]) -> HashSet<&'a str> {
    let own: HashSet<SymbolId> = params.iter().flatten().map(|(_, s)| *s).collect();
    let mut taken: HashSet<&str> = scoping
        .symbol_ids()
        .filter(|s| !own.contains(s))
        .map(|s| scoping.symbol_name(s))
        .collect();
    for (name, _) in scoping.root_unresolved_references() {
        taken.insert(name);
    }
    taken
}

/// One pass over the factory body, recording how each parameter is used.
fn observe(
    factory: &Function<'_>,
    scoping: &Scoping,
    params: &[Option<(&str, SymbolId)>],
) -> Vec<Use> {
    let slots: HashMap<SymbolId, usize> = params
        .iter()
        .enumerate()
        .filter_map(|(i, p)| p.map(|(_, s)| (s, i)))
        .collect();

    struct Watch<'s> {
        scoping: &'s Scoping,
        slots: HashMap<SymbolId, usize>,
        uses: Vec<Use>,
    }

    impl<'s> Watch<'s> {
        fn slot(&self, r: &IdentifierReference) -> Option<usize> {
            let sym = r
                .reference_id
                .get()
                .and_then(|id| self.scoping.get_reference(id).symbol_id())?;
            self.slots.get(&sym).copied()
        }
    }

    impl<'a, 's> Visit<'a> for Watch<'s> {
        fn visit_call_expression(&mut self, call: &CallExpression<'a>) {
            if let Expression::Identifier(id) = &call.callee
                && call.arguments.len() == 1
                && matches!(
                    call.arguments[0].as_expression(),
                    Some(Expression::StringLiteral(_))
                )
                && let Some(i) = self.slot(id)
            {
                self.uses[i].called_with_name = true;
            }
            oxc_ast_visit::walk::walk_call_expression(self, call);
        }

        fn visit_assignment_expression(&mut self, e: &AssignmentExpression<'a>) {
            if let Some(member) = e.left.as_member_expression()
                && let Some(prop) = member.static_property_name()
                && let Expression::Identifier(obj) = member.object()
                && let Some(i) = self.slot(obj)
                && prop != "exports"
            {
                self.uses[i].assigned_onto = true;
            }
            oxc_ast_visit::walk::walk_assignment_expression(self, e);
        }

        fn visit_static_member_expression(&mut self, m: &StaticMemberExpression<'a>) {
            if m.property.name == "exports"
                && let Expression::Identifier(obj) = &m.object
                && let Some(i) = self.slot(obj)
            {
                self.uses[i].dot_exports = true;
            }
            oxc_ast_visit::walk::walk_static_member_expression(self, m);
        }
    }

    let mut w = Watch {
        scoping,
        slots,
        uses: vec![Use::default(); params.len()],
    };
    if let Some(body) = &factory.body {
        w.visit_function_body(body);
    }
    w.uses
}

/// Whether a dependency name can be spelled as a parameter.
fn is_identifier(s: &str) -> bool {
    !s.is_empty()
        && !s.starts_with(|c: char| c.is_ascii_digit())
        && s.chars()
            .all(|c| c.is_ascii_alphanumeric() || c == '_' || c == '$')
}

/// The dependency array of a `__d("Name", [deps], …)` program, in order.
pub fn deps_of<'a>(program: &Program<'a>) -> Vec<&'a str> {
    for stmt in &program.body {
        let Statement::ExpressionStatement(es) = stmt else {
            continue;
        };
        let Expression::CallExpression(call) = &es.expression else {
            continue;
        };
        let Expression::Identifier(callee) = &call.callee else {
            continue;
        };
        if !matches!(callee.name.as_str(), "__d" | "define") || call.arguments.len() < 2 {
            continue;
        }
        if let Some(Expression::ArrayExpression(arr)) = call.arguments[1].as_expression() {
            return arr
                .elements
                .iter()
                .filter_map(|e| match e.as_expression() {
                    Some(Expression::StringLiteral(s)) => Some(s.value.as_str()),
                    _ => None,
                })
                .collect();
        }
    }
    vec![]
}

/// The exports object's symbol, for a program that is one `__d(…)` call.
pub fn exports_symbol(program: &Program<'_>, scoping: &Scoping) -> Option<SymbolId> {
    let factory = factory_of(program)?;
    let layout = layout_of(factory, &deps_of(program), scoping);
    let idx = layout.exports?;
    match &factory.params.items.get(idx)?.pattern {
        BindingPattern::BindingIdentifier(id) => id.symbol_id.get(),
        _ => None,
    }
}

/// The factory function of a `__d("Name", [deps], factory, id)` program.
pub fn factory_of<'a, 'b>(program: &'b Program<'a>) -> Option<&'b Function<'a>> {
    for stmt in &program.body {
        let Statement::ExpressionStatement(es) = stmt else {
            continue;
        };
        let Expression::CallExpression(call) = &es.expression else {
            continue;
        };
        let Expression::Identifier(callee) = &call.callee else {
            continue;
        };
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
        let semantic = SemanticBuilder::new()
            .with_build_nodes(true)
            .build(&parsed.program)
            .semantic;
        let f = factory_of(&parsed.program).expect("a factory");
        layout_of(f, &deps_of(&parsed.program), semantic.scoping())
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
        assert_eq!(l.name(7), Some("dep"), "named from the dependency array");
    }

    /// The short convention: six parameters, exports fifth.
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
        assert_eq!(l.name(2), Some("requireDynamic"));
    }

    /// `module.exports = …` assigns onto a parameter too, and must not make it
    /// look like the exports object.
    #[test]
    fn module_dot_exports_does_not_steal_the_exports_slot() {
        let l =
            layout(r#"__d("M", [], (function(t, n, r, o, a, i) { a.exports = {}; i.y = 2 }), 98)"#);
        assert_eq!(l.exports, Some(5), "i, not a");
        assert_eq!(l.name(4), Some("module"));
    }

    /// Nothing assigned and nothing named: arity is all there is, and it is
    /// applied rather than pretended to be a measurement.
    #[test]
    fn a_silent_module_falls_back_to_arity() {
        assert_eq!(
            layout(r#"__d("M", [], (function(t, n, r, o, a, i, l) { }), 98)"#).exports,
            Some(6)
        );
        assert_eq!(
            layout(r#"__d("M", [], (function(t, n, r, o, a, i) { }), 98)"#).exports,
            Some(5)
        );
    }

    /// A local already called `exports` makes the name unusable: renaming into
    /// it would show two different bindings under one name, and every reading of
    /// the result would be wrong.
    #[test]
    fn a_name_already_bound_in_the_module_is_not_taken() {
        let l = layout(
            r#"__d("M", [], (function(t, n, r, o, a, i, l) {
                 function f() { var exports = 1; return exports; }
                 l.go = f;
               }), 98)"#,
        );
        assert_eq!(l.exports, Some(6), "still known to be the exports object");
        assert_eq!(l.name(6), None, "but not renamed into a name that is taken");
        assert_eq!(
            l.name(1),
            Some("require"),
            "the other parameters are unaffected"
        );
    }

    /// The same hazard from the other direction: a free reference means the
    /// module reads that name from an outer scope.
    #[test]
    fn a_free_reference_also_takes_the_name() {
        let l = layout(
            r#"__d("M", [], (function(t, n, r, o, a, i, l) { if (typeof require !== "undefined") l.x = require; }), 98)"#,
        );
        assert_eq!(l.name(1), None, "`require` is already something else here");
        assert_eq!(l.name(6), Some("exports"));
    }

    /// Seven parameters, but the *short* convention plus one injected
    /// dependency — which arity alone cannot distinguish from the seven-
    /// parameter convention, and which reading it by arity gets exactly wrong:
    /// `fbt` gets named as the exports object. `module.exports` is what settles
    /// it. Taken from `GeminiEmojiCategories`.
    #[test]
    fn six_parameters_plus_an_injected_dependency_is_not_the_long_convention() {
        let l = layout(
            r#"__d("M", ["fbt"], (function(t, n, r, o, a, i, l) {
                 a.exports = { name: l._("") };
               }), 98)"#,
        );
        assert_eq!(l.name(4), Some("module"), "anchored on `a.exports`");
        assert_eq!(
            l.exports,
            Some(5),
            "exports follows module, whatever the arity"
        );
        assert_eq!(
            l.name(6),
            Some("fbt"),
            "the injected dependency, by its own name"
        );
    }

    /// If a parameter is used in a way its proposed name cannot explain, the
    /// table does not describe this factory and the name is not applied.
    #[test]
    fn a_contradicted_name_is_not_applied() {
        // Slot 0 is `global` in both conventions, and here it is being called
        // with a module name — so this is not a factory either table describes.
        let l =
            layout(r#"__d("M", ["dep"], (function(t, n, r, o, a, i, l) { l.x = t("dep"); }), 98)"#);
        assert_eq!(
            l.name(0),
            None,
            "not renamed to `global` on the table's say-so"
        );
        assert_eq!(
            l.name(6),
            Some("exports"),
            "what is still provable is still applied"
        );
    }
}
