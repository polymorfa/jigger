//! Telling a rename from a change.
//!
//! Half the WhatsApp modules in a release differ byte-for-byte, which is ~7,400
//! diffs nobody reads. Most of that is not change at all. Minifiers assign names
//! by position, so inserting one constant renames everything after it:
//!
//! ```text
//! - var … h = "16505361212@c.us", y = /^1313555\d{4}$/, C = 99, b = 4, v = (…)
//! + var … h = "1807055946647698", y = "16505361212@c.us", C = /^1313555\d{4}$/, b = 99, v = 4, S = (…)
//! ```
//!
//! Every local shifted by one. A text diff calls that five changes; it is zero.
//! And buried in the same module were three real ones — a dependency dropped, an
//! argument removed, a gating branch deleted — which is exactly the failure
//! mode: the noise is not merely loud, it hides the signal.
//!
//! # The shape
//!
//! A module is walked to a canonical token stream in which every identifier that
//! *binds within the module* is replaced by the order it was first encountered.
//! Two modules that differ only in the names of their locals produce identical
//! streams, so a rename is invisible by construction rather than by heuristic.
//!
//! Three things are deliberately **not** normalized, because each is a real
//! difference that a looser comparison would swallow:
//!
//! * **Free identifiers.** `babelHelpers`, `Promise`, `Symbol` are not this
//!   module's to rename; if one changes, something changed.
//! * **String and numeric literals.** They are the wire values this whole
//!   project exists to track. `"pin"` becoming `"pin_v1"` is the change.
//! * **Order.** Statement order is semantics, not formatting.
//!
//! Minifier artifacts that *are* pure encoding — `!0` for `true`, `!1` for
//! `false`, `void 0` for `undefined` — are folded, since a minifier that changes
//! its mind about those has not changed the program.

use oxc_allocator::Allocator;
use oxc_ast::{AstKind, ast::*};
use oxc_ast_visit::Visit;
use oxc_parser::Parser;
use oxc_semantic::SemanticBuilder;
use oxc_span::SourceType;
use oxc_semantic::{Scoping, SymbolId};
use std::collections::HashMap;

/// A module's structure, with local names erased.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Shape {
    /// FNV-1a of the canonical stream.
    pub hash: String,
    /// How many tokens it took. A cheap size signal for ranking diffs.
    pub tokens: usize,
}

struct Canon<'s> {
    scoping: &'s Scoping,
    out: String,
    tokens: usize,
    /// symbol -> the order it was first seen. A minifier's choice of letter is
    /// not information; the position in the binding order is.
    seen: HashMap<SymbolId, u32>,
}

impl<'s> Canon<'s> {
    fn new(scoping: &'s Scoping) -> Self {
        Self { scoping, out: String::new(), tokens: 0, seen: HashMap::new() }
    }

    fn push(&mut self, s: &str) {
        self.out.push_str(s);
        self.out.push('\x1f');
        self.tokens += 1;
    }

    fn ident(&mut self, symbol: Option<SymbolId>, name: &str) {
        match symbol {
            // Bound here: emit its ordinal, so `y` and `C` are the same thing
            // when they occupy the same position in the binding order.
            Some(id) => {
                let next = self.seen.len() as u32;
                let n = *self.seen.entry(id).or_insert(next);
                self.push(&format!("${n}"));
            }
            // Free: `babelHelpers`, `Promise`, a global. Not ours to rename, so
            // a difference in one is a difference in the program.
            None => self.push(&format!("@{name}")),
        }
    }
}

impl<'a, 's> Visit<'a> for Canon<'s> {
    fn enter_node(&mut self, kind: AstKind<'a>) {
        match kind {
            AstKind::BindingIdentifier(b) => {
                let name = b.name.as_str();
                self.ident(b.symbol_id.get(), name);
            }
            AstKind::IdentifierReference(r) => {
                let name = r.name.as_str();
                let symbol = r
                    .reference_id
                    .get()
                    .and_then(|id| self.scoping.get_reference(id).symbol_id());
                self.ident(symbol, name);
            }
            // Literals carry the wire values this project tracks. Never folded.
            AstKind::StringLiteral(s) => self.push(&format!("s{:?}", s.value.as_str())),
            AstKind::NumericLiteral(n) => self.push(&format!("n{}", n.value)),
            AstKind::BigIntLiteral(b) => self.push(&format!("N{}", b.value)),
            AstKind::BooleanLiteral(b) => self.push(&format!("b{}", b.value)),
            AstKind::RegExpLiteral(r) => self.push(&format!("r{}", r.regex)),
            AstKind::NullLiteral(_) => self.push("null"),
            // A property name is part of the shape: `.foo` and `.bar` differ.
            AstKind::IdentifierName(i) => self.push(&format!(".{}", i.name)),
            AstKind::PrivateIdentifier(i) => self.push(&format!("#{}", i.name)),
            // Operators are semantics, and the discriminant does not carry them:
            // `a > b` and `a >= b` are both `BinaryExpression`. Erasing names
            // must not erase meaning.
            AstKind::BinaryExpression(e) => self.push(&format!("op{}", e.operator.as_str())),
            AstKind::LogicalExpression(e) => self.push(&format!("op{}", e.operator.as_str())),
            AstKind::AssignmentExpression(e) => self.push(&format!("op{}", e.operator.as_str())),
            AstKind::UnaryExpression(e) => self.push(&format!("op{}", e.operator.as_str())),
            AstKind::UpdateExpression(e) => {
                self.push(&format!("op{}{}", e.operator.as_str(), e.prefix))
            }
            other => {
                // The discriminant, not `debug_name()`. That helpfully embeds
                // the identifier — `VariableDeclarator(h)` — so every parent
                // node leaked the very name the normalization exists to erase,
                // and two renamed-but-identical modules never matched.
                self.push(&format!("{:?}", std::mem::discriminant(&other)));
            }
        }
    }

    fn leave_node(&mut self, _: AstKind<'a>) {
        self.push(")");
    }

    /// `!0` and `!1` are how a minifier writes `true` and `false`.
    ///
    /// Folded because a minifier changing its mind between the two encodings has
    /// not changed the program — and it does, between builds.
    fn visit_unary_expression(&mut self, expr: &UnaryExpression<'a>) {
        if expr.operator == UnaryOperator::LogicalNot
            && let Expression::NumericLiteral(n) = &expr.argument
            && (n.value == 0.0 || n.value == 1.0)
        {
            self.push(&format!("b{}", n.value == 0.0));
            // The close token too: `true` costs enter+leave, so a fold that
            // emits only one would differ from the literal it folds to.
            self.push(")");
            return;
        }
        // `void 0` is `undefined`, for the same reason.
        if expr.operator == UnaryOperator::Void
            && let Expression::NumericLiteral(n) = &expr.argument
            && n.value == 0.0
        {
            self.push("undefined");
            self.push(")");
            return;
        }
        oxc_ast_visit::walk::walk_unary_expression(self, expr);
    }
}

fn fnv1a(s: &str) -> String {
    let mut h: u64 = 0xcbf2_9ce4_8422_2325;
    for b in s.as_bytes() {
        h ^= *b as u64;
        h = h.wrapping_mul(0x100_0000_01b3);
    }
    format!("{h:016x}")
}

/// The canonical shape of a module, or `None` if it does not parse.
pub fn shape(src: &str) -> Option<Shape> {
    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if parsed.panicked {
        return None;
    }
    // Symbol ids are what make a rename invisible, and they only exist once the
    // binder has run.
    let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;
    let mut c = Canon::new(semantic.scoping());
    c.visit_program(&parsed.program);
    Some(Shape { hash: fnv1a(&c.out), tokens: c.tokens })
}

/// What a comparison of two revisions of one module concluded.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Verdict {
    /// Byte-identical.
    Same,
    /// Different text, identical shape: renaming and nothing else.
    RenamedOnly,
    /// The program changed.
    Changed,
    /// One side did not parse. Reported, never guessed at.
    Unknown,
}

/// The shape of every function in a module, independently.
///
/// Module-level comparison turned out to be nearly useless on real revisions:
/// every module a release touches contains *something* real, so 7,520 of them
/// come back "changed" and the reviewer is no better off. The unit that reduces
/// the work is the function — a module with sixty functions and one real edit
/// should cost you one function to read, not sixty.
pub fn function_shapes(src: &str) -> Vec<Shape> {
    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if parsed.panicked {
        return vec![];
    }
    let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;

    struct Fns<'s> {
        scoping: &'s Scoping,
        out: Vec<Shape>,
    }
    impl<'a, 's> Visit<'a> for Fns<'s> {
        fn visit_function(&mut self, f: &Function<'a>, flags: oxc_semantic::ScopeFlags) {
            let mut c = Canon::new(self.scoping);
            c.visit_function(f, flags);
            self.out.push(Shape { hash: fnv1a(&c.out), tokens: c.tokens });
            oxc_ast_visit::walk::walk_function(self, f, flags);
        }
        fn visit_arrow_function_expression(&mut self, f: &ArrowFunctionExpression<'a>) {
            let mut c = Canon::new(self.scoping);
            c.visit_arrow_function_expression(f);
            self.out.push(Shape { hash: fnv1a(&c.out), tokens: c.tokens });
            oxc_ast_visit::walk::walk_arrow_function_expression(self, f);
        }
    }

    let mut v = Fns { scoping: semantic.scoping(), out: Vec::new() };
    v.visit_program(&parsed.program);
    v.out
}

/// How much of a changed module actually changed.
///
/// Returns (functions whose shape is unchanged, total functions in the new
/// revision). Shapes are matched as a multiset: a function that merely moved is
/// not a change, and moving is most of what a minifier does.
pub fn function_overlap(before: &str, after: &str) -> (usize, usize) {
    use std::collections::HashMap;
    let mut old: HashMap<String, usize> = HashMap::new();
    for s in function_shapes(before) {
        *old.entry(s.hash).or_default() += 1;
    }
    let new = function_shapes(after);
    let mut kept = 0;
    for s in &new {
        if let Some(n) = old.get_mut(&s.hash)
            && *n > 0
        {
            *n -= 1;
            kept += 1;
        }
    }
    (kept, new.len())
}

pub fn compare(before: &str, after: &str) -> Verdict {
    if before == after {
        return Verdict::Same;
    }
    match (shape(before), shape(after)) {
        (Some(a), Some(b)) if a.hash == b.hash => Verdict::RenamedOnly,
        (Some(_), Some(_)) => Verdict::Changed,
        _ => Verdict::Unknown,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// A minifier inserting one binding renames everything after it. This is the
    /// exact cascade seen in `WAWebWid` between two real revisions.
    #[test]
    fn a_rename_cascade_is_not_a_change() {
        let before = r#"var h = "a", y = /x/, C = 99, b = 4; function f(){ return C + b }"#;
        let after  = r#"var y = "a", C = /x/, b = 99, v = 4; function g(){ return b + v }"#;
        assert_eq!(compare(before, after), Verdict::RenamedOnly);
    }

    /// The same cascade, plus one real edit buried in it.
    #[test]
    fn a_change_hiding_inside_a_rename_is_still_found() {
        let before = r#"var h = "a", y = /x/, C = 99, b = 4; function f(){ return C + b }"#;
        let after  = r#"var y = "a", C = /x/, b = 99, v = 5; function g(){ return b + v }"#;
        assert_eq!(compare(before, after), Verdict::Changed);
    }

    /// Every category of edit that must survive normalization.
    #[test]
    fn real_edits_are_all_detected() {
        let base = r#"function f(a, b) { if (a > b) { return g(a, "pin"); } return 0 }"#;
        for (what, edited) in [
            ("a literal",  r#"function f(a, b) { if (a > b) { return g(a, "pin_v1"); } return 0 }"#),
            ("an operator", r#"function f(a, b) { if (a >= b) { return g(a, "pin"); } return 0 }"#),
            ("an argument", r#"function f(a, b) { if (a > b) { return g(a); } return 0 }"#),
            ("a callee",    r#"function f(a, b) { if (a > b) { return h(a, "pin"); } return 0 }"#),
            ("a statement", r#"function f(a, b) { if (a > b) { return g(a, "pin"); } }"#),
            ("a property",  r#"function f(a, b) { if (a > b) { return g.x(a, "pin"); } return 0 }"#),
            ("order",       r#"function f(a, b) { if (a > b) { return g("pin", a); } return 0 }"#),
        ] {
            assert_eq!(compare(base, edited), Verdict::Changed, "missed: {what}");
        }
    }

    /// Renaming a *parameter* is still only a rename.
    #[test]
    fn parameters_and_nested_scopes_normalize() {
        let before = r#"function f(e, t) { return function (n) { return e + t + n } }"#;
        let after  = r#"function q(a, b) { return function (c) { return a + b + c } }"#;
        assert_eq!(compare(before, after), Verdict::RenamedOnly);
    }

    /// A global is not ours to rename, so a different one is a different program.
    #[test]
    fn free_identifiers_are_never_normalized() {
        let before = r#"function f() { return Promise.resolve(1) }"#;
        let after  = r#"function f() { return Symbol.resolve(1) }"#;
        assert_eq!(compare(before, after), Verdict::Changed);
    }

    /// `!0`/`!1` are how a minifier spells booleans, and it changes its mind.
    #[test]
    fn boolean_encodings_fold() {
        assert_eq!(compare("var a = !0, b = !1;", "var a = true, b = false;"), Verdict::RenamedOnly);
        // But a flipped boolean is a real change.
        assert_eq!(compare("var a = !0;", "var a = !1;"), Verdict::Changed);
    }
}


/// Prove the classifier on real code, rather than on examples chosen to pass.
///
/// Hand-written cases test what the author thought of. This takes modules out of
/// the actual bundle and mutates them two ways, where the right answer is known
/// by construction:
///
/// * **renames** — every local given a fresh name. The program is identical, so
///   anything but `RenamedOnly` is a false alarm: noise the engine failed to
///   absorb, which is the failure that makes a release unreviewable.
/// * **edits** — one literal, operator, or argument altered. The program is
///   different, so anything but `Changed` is a miss: a real change reported as
///   noise, which is the failure that ships a bug.
///
/// The two error rates are not symmetric in cost and are reported separately.
pub fn fuzz(bundle: &cellar_core::BundleHandle, entries: &[cellar_core::ModuleEntry]) {
    use regex::Regex;

    // Rename every binding, using the symbol table.
    //
    // The first two attempts did this textually and both were wrong in the same
    // way: `\b[a-z]\b` cannot tell a binding from a property key or a character
    // inside a regex, so it produced mutants that really *were* different
    // programs and then blamed the classifier for saying so. Distinguishing
    // those two things is the entire problem — a harness that cannot do it is
    // not measuring the engine, it is measuring itself.
    //
    // `rename_locals` renames exactly the identifiers that resolve to a symbol
    // declared in the module, so the result is α-equivalent by construction and
    // any verdict other than `RenamedOnly` is a genuine miss.
    let edits: [(&str, fn(&str) -> Option<String>); 3] = [
        ("literal", |s| {
            let re = Regex::new(r#""([A-Za-z_][A-Za-z0-9_]{3,})""#).ok()?;
            let c = re.captures(s)?;
            Some(s.replacen(&format!("\"{}\"", &c[1]), &format!("\"{}X\"", &c[1]), 1))
        }),
        ("operator", |s| {
            s.contains(" === ").then(|| s.replacen(" === ", " !== ", 1))
        }),
        ("number", |s| {
            let re = Regex::new(r"\b([1-9][0-9]{1,4})\b").ok()?;
            let c = re.captures(s)?;
            let n: u64 = c[1].parse().ok()?;
            Some(s.replacen(&c[1], &(n + 1).to_string(), 1))
        }),
    ];

    let (mut rn_ok, mut rn_bad) = (0u32, 0u32);
    let (mut ed_ok, mut ed_bad, mut ed_skip) = (0u32, 0u32, 0u32);

    for e in entries
        .iter()
        .filter(|e| e.name.starts_with("WA"))
        .take(600)
    {
        let Ok(src) = bundle.read_module(e) else { continue };
        if shape(&src).is_none() {
            continue;
        }

        if let Some(renamed) = rename_locals(&src) {
            match compare(&src, &renamed) {
                Verdict::RenamedOnly | Verdict::Same => rn_ok += 1,
                _ => rn_bad += 1,
            }
        }

        for (_, edit) in &edits {
            match edit(&src) {
                Some(m) if m != src => match compare(&src, &m) {
                    Verdict::Changed => ed_ok += 1,
                    _ => ed_bad += 1,
                },
                _ => ed_skip += 1,
            }
        }
    }

    let rn = rn_ok + rn_bad;
    let ed = ed_ok + ed_bad;
    println!("  fuzz, over {rn} real modules:");
    println!(
        "    renames  {rn_ok}/{rn} absorbed        {} false alarms",
        rn_bad
    );
    println!(
        "    edits    {ed_ok}/{ed} caught          {} missed",
        ed_bad
    );
    if ed_skip > 0 {
        println!("    ({ed_skip} mutations had nothing to change and were skipped)");
    }
}

/// An α-rename of every module-local binding, done through the symbol table.
///
/// Every identifier that resolves to a symbol declared in this module becomes
/// `q<n>`; everything else — property names, globals, string and regex bodies —
/// is left exactly as it was. The result is a different text and the same
/// program, by construction rather than by care.
///
/// Public because it is the only honest way to generate a known-rename: doing it
/// textually cannot tell `obj.a` from `var a`.
pub fn rename_locals(src: &str) -> Option<String> {
    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if parsed.panicked {
        return None;
    }
    let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;

    struct Spans<'s> {
        scoping: &'s Scoping,
        hits: Vec<(u32, u32, SymbolId)>,
    }
    impl<'a, 's> Visit<'a> for Spans<'s> {
        fn enter_node(&mut self, kind: AstKind<'a>) {
            match kind {
                AstKind::BindingIdentifier(b) => {
                    if let Some(id) = b.symbol_id.get() {
                        self.hits.push((b.span.start, b.span.end, id));
                    }
                }
                AstKind::IdentifierReference(r) => {
                    if let Some(id) =
                        r.reference_id.get().and_then(|i| self.scoping.get_reference(i).symbol_id())
                    {
                        self.hits.push((r.span.start, r.span.end, id));
                    }
                }
                _ => {}
            }
        }
    }

    let mut v = Spans { scoping: semantic.scoping(), hits: Vec::new() };
    v.visit_program(&parsed.program);
    if v.hits.is_empty() {
        return None;
    }

    // Spliced back to front so earlier offsets stay valid.
    v.hits.sort_by_key(|(start, ..)| std::cmp::Reverse(*start));
    let mut out = src.to_string();
    for (start, end, id) in v.hits {
        out.replace_range(start as usize..end as usize, &format!("q{}", id.index()));
    }
    Some(out)
}
