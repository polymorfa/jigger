//! Go-to-definition for minified modules.
//!
//! Cross-module click-through can be done with a regex, because
//! `require("X").member` is one unambiguous pattern. Inside a module it cannot:
//! `WASmaxParseUtils` declares `t` thirty-seven times in thirty-seven scopes and
//! references it a hundred and eight times. Picking the right one is scope
//! resolution or it is a coin flip.
//!
//! So this is a real binder — `oxc_semantic` builds the scope tree and the
//! symbol table, and every reference is resolved to the declaration it actually
//! binds to. Nothing here infers types, completes anything, or speaks LSP; the
//! whole job is (reference span) -> (declaration span), which is the smallest
//! useful piece of that machinery and the only piece this needs.
//!
//! # Why it runs here and not on request
//!
//! It is a pure function of a module, so computing it once per revision beats
//! computing it once per reader. The output is small — a few hundred spans for a
//! typical module — and lands beside the extraction rather than in the ledger:
//! a symbol table is not a fact about the protocol.
//!
//! # Offsets are against the *rewritten* source
//!
//! The viewer shows `define(` and `require("X")`, not `__d(` and `o("X")`, and
//! those substitutions move every column on the lines they touch. Spans computed
//! against the raw text would be silently wrong by a few characters — the worst
//! kind of wrong, since a link would still land somewhere plausible. So the
//! rewrite happens here first, and the hash of what was parsed travels with the
//! output so a reader can refuse to use symbols that do not describe the text in
//! front of it.

use oxc_allocator::Allocator;
use oxc_parser::Parser;
use oxc_semantic::SemanticBuilder;
use oxc_span::{GetSpan, SourceType};
use regex::Regex;
use serde::Serialize;
use std::collections::BTreeSet;

/// One declaration: line, column, length, and how many references bind to it.
///
/// The count earns its place: "3 references" beside a name tells you whether
/// something is load-bearing before you go looking, and it is free here.
pub type Decl = (u32, u32, u32, u32);

/// One reference: line, column, length, and the line/column it resolves to.
pub type Ref = (u32, u32, u32, u32, u32);

#[derive(Debug, Serialize)]
pub struct Symbols {
    /// FNV-1a of the rewritten source these spans were computed against.
    ///
    /// The viewer performs the same rewrite and compares. Equal means the
    /// offsets describe the text on screen; unequal means the two
    /// implementations have drifted and the links are dropped rather than
    /// pointed a few characters off.
    pub hash: String,
    pub decls: Vec<Decl>,
    pub refs: Vec<Ref>,
    /// Factory parameters to rename, against the text *before* renaming.
    ///
    /// The viewer applies these first; `hash`, `decls` and `refs` all describe
    /// the text that results. Ordered by position, and applied back-to-front
    /// within a line so earlier columns stay valid.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub renames: Vec<Rename>,
}

/// `__d(` -> `define(`, and the minified require -> `require(`.
///
/// Duplicated from the viewer's copy on purpose: this one has to run in Rust at
/// extraction time and that one in the browser. The hash is what keeps the
/// duplication honest — drift is reported, not absorbed.
pub fn rewrite(src: &str) -> String {
    let head = Regex::new(r#"(?:__d|define)\(\s*"[^"]+"\s*,\s*\[([^\]]*)\]"#).expect("static");
    let deps: BTreeSet<String> = head
        .captures(src)
        .map(|c| {
            Regex::new(r#""([^"]+)""#)
                .expect("static")
                .captures_iter(&c[1])
                .map(|m| m[1].to_string())
                .collect()
        })
        .unwrap_or_default();

    let require = Regex::new(r#"\b[a-z]{1,2}\("([^"]+)"\)"#).expect("static");
    let step = src.replace("__d(", "define(");
    require
        .replace_all(&step, |c: &regex::Captures| {
            if deps.contains(&c[1]) {
                format!(r#"require("{}")"#, &c[1])
            } else {
                c[0].to_string()
            }
        })
        .into_owned()
}

/// One rename: line, column and length in the rewritten text, and the name to
/// put there.
///
/// Shipped as explicit spans rather than as a rule the viewer re-derives,
/// because this substitution cannot be done textually and the viewer has no
/// parser. `t`, `n`, `r`, `o`, `a`, `i` and `l` are the factory's parameters and
/// also the first seven names the minifier hands out to locals, so the same
/// letters appear as unrelated bindings in every nested function in the module.
/// A textual pass would rewrite all of them; only the symbol table can tell the
/// parameter from the sixty other `t`s.
pub type Rename = (u32, u32, u32, String);

/// Byte spans of every occurrence of the factory's parameters, with the name
/// each should take.
///
/// Includes the declaration in the signature, so the header reads
/// `function(global, require, importDefault, …)` and the body agrees with it.
pub fn factory_renames(src: &str) -> Vec<(usize, usize, String)> {
    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
    if parsed.panicked {
        return vec![];
    }
    let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;
    let scoping = semantic.scoping();

    let Some(factory) = crate::factory::factory_of(&parsed.program) else { return vec![] };
    let layout = crate::factory::layout_of(factory, scoping);

    let mut out = Vec::new();
    for (i, param) in factory.params.items.iter().enumerate() {
        let oxc_ast::ast::BindingPattern::BindingIdentifier(id) = &param.pattern else { continue };
        let Some(name) = layout.name(i) else { continue };
        // A module that already names its parameters needs no help, and
        // rewriting `exports` to `exports` would only be a chance to get the
        // offsets wrong.
        if id.name == name {
            continue;
        }
        let Some(sym) = id.symbol_id.get() else { continue };

        let span = scoping.symbol_span(sym);
        out.push((span.start as usize, span.end as usize, name.to_string()));
        for r in scoping.get_resolved_references(sym) {
            let rspan = semantic.nodes().get_node(r.node_id()).kind().span();
            if rspan.start == span.start {
                continue;
            }
            out.push((rspan.start as usize, rspan.end as usize, name.to_string()));
        }
    }
    out.sort_unstable_by_key(|(s, ..)| *s);
    out
}

/// Apply byte spans back-to-front, so earlier offsets stay valid as we go.
pub fn apply_renames(src: &str, spans: &[(usize, usize, String)]) -> String {
    let mut out = src.to_string();
    for (start, end, name) in spans.iter().rev() {
        if *end <= out.len() && out.is_char_boundary(*start) && out.is_char_boundary(*end) {
            out.replace_range(*start..*end, name);
        }
    }
    out
}

fn fnv1a(s: &str) -> String {
    let mut h: u64 = 0xcbf2_9ce4_8422_2325;
    for b in s.as_bytes() {
        h ^= *b as u64;
        h = h.wrapping_mul(0x100_0000_01b3); // FNV-1a prime, 0x100000001b3
    }
    format!("{h:016x}")
}

/// Byte offset -> (1-based line, 0-based column in characters).
struct Lines {
    /// Byte offset at which each line starts.
    starts: Vec<usize>,
}

impl Lines {
    fn new(src: &str) -> Self {
        let mut starts = vec![0];
        for (i, b) in src.bytes().enumerate() {
            if b == b'\n' {
                starts.push(i + 1);
            }
        }
        Self { starts }
    }

    fn at(&self, src: &str, offset: usize) -> (u32, u32) {
        let line = self.starts.partition_point(|&s| s <= offset).saturating_sub(1);
        let start = self.starts[line];
        // Counted in characters, not bytes: the viewer indexes into JavaScript
        // strings, where a multi-byte character is one position.
        let col = src[start..offset.min(src.len())].chars().count();
        (line as u32 + 1, col as u32)
    }
}

/// Resolve every identifier in a module to the declaration it binds to.
///
/// Returns `None` when the module does not parse. A partial symbol table is
/// worse than none: it links some identifiers and silently leaves others dead,
/// which reads as "that one has no definition" rather than "we could not tell".
pub fn symbols(raw: &str) -> Option<Symbols> {
    // Three stages, in this order. The first is textual and duplicated in the
    // viewer; the second needs a binder and so is shipped as spans rather than
    // as a rule; everything after describes the result of both.
    let rewritten = rewrite(raw);
    let spans = factory_renames(&rewritten);
    let rename_lines = Lines::new(&rewritten);
    let renames: Vec<Rename> = spans
        .iter()
        .map(|(start, end, name)| {
            let (l, c) = rename_lines.at(&rewritten, *start);
            (l, c, (end - start) as u32, name.clone())
        })
        .collect();
    let src = apply_renames(&rewritten, &spans);

    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, &src, SourceType::cjs()).parse();
    if parsed.panicked || !parsed.diagnostics.is_empty() {
        return None;
    }

    //  is off by default, and without it the AST node table
    // is empty — a reference knows its node id and nothing can be looked up by
    // it. Resolving a reference back to its span is the entire job here.
    let semantic = SemanticBuilder::new()
        .with_build_nodes(true)
        .build(&parsed.program)
        .semantic;
    let scoping = semantic.scoping();
    let lines = Lines::new(&src);

    let mut decls = Vec::new();
    let mut refs = Vec::new();

    for id in scoping.symbol_ids() {
        let span = scoping.symbol_span(id);
        let (dl, dc) = lines.at(&src, span.start as usize);
        let len = span.end - span.start;

        let bound: Vec<_> = scoping.get_resolved_references(id).collect();
        decls.push((dl, dc, len, bound.len() as u32));

        for r in bound {
            let rspan = semantic.nodes().get_node(r.node_id()).kind().span();
            // A declaration is not a reference to itself.
            if rspan.start == span.start {
                continue;
            }
            let (rl, rc) = lines.at(&src, rspan.start as usize);
            refs.push((rl, rc, rspan.end - rspan.start, dl, dc));
        }
    }

    decls.sort_unstable();
    refs.sort_unstable();
    Some(Symbols { hash: fnv1a(&src), decls, refs, renames })
}

#[cfg(test)]
mod tests {
    use super::*;

    const SRC: &str = r#"
__d("M", ["Dep"], (function(t, n, r, o, a, i, l) {
    function s(e) { return e + 1; }
    function u(t) { return s(t); }
    l.go = u;
}), 98);
"#;

    /// The whole reason this cannot be a regex: `t` is the factory's `global`
    /// and also a parameter of `u`, and only one of them may be renamed.
    #[test]
    fn only_the_factorys_own_parameter_is_renamed() {
        let out = apply_renames(&rewrite(SRC), &factory_renames(&rewrite(SRC)));
        assert!(
            out.contains("function(global, require, importDefault, importNamespace, requireLazy, module, exports)"),
            "signature not rewritten:\n{out}"
        );
        assert!(out.contains("exports.go = u;"), "exports use not rewritten:\n{out}");
        // `u`'s own `t` shadows the factory's and must survive untouched.
        assert!(out.contains("function u(t) { return s(t); }"), "inner `t` was clobbered:\n{out}");
    }

    /// A six-parameter factory is the other convention, and `i` is its exports.
    #[test]
    fn the_short_convention_is_renamed_to_its_own_names() {
        let src = r#"__d("M", [], (function(t, n, r, o, a, i) { i.x = 1; }), 98);"#;
        let out = apply_renames(&rewrite(src), &factory_renames(&rewrite(src)));
        assert!(out.contains("exports.x = 1"), "{out}");
        assert!(out.contains("requireDynamic, requireLazy, module, exports"), "{out}");
    }

    /// The hash describes the text after renaming, because that is the text the
    /// viewer puts on screen. Shipping a hash of the intermediate would make
    /// every module look like a drift failure.
    #[test]
    fn the_hash_covers_the_renamed_text() {
        let sym = symbols(SRC).expect("parses");
        let expected = apply_renames(&rewrite(SRC), &factory_renames(&rewrite(SRC)));
        assert_eq!(sym.hash, fnv1a(&expected));
        assert!(!sym.renames.is_empty(), "renames should be shipped");
    }

    #[test]
    fn a_reference_resolves_to_its_own_scope() {
        let sym = symbols(SRC).expect("parses");
        // `s` is declared on line 3 and referenced on line 4.
        let call = sym.refs.iter().find(|(l, ..)| *l == 4).expect("reference on line 4");
        assert_eq!(call.3, 3, "should resolve to the declaration on line 3");
    }

    #[test]
    fn shadowed_names_do_not_cross_scopes() {
        // `t` is the factory parameter on line 2 and a different `t` inside `u`
        // on line 4. A regex cannot tell them apart; the binder must.
        let sym = symbols(SRC).expect("parses");
        let inner = sym.decls.iter().filter(|(l, ..)| *l == 4).count();
        assert!(inner > 0, "the inner `t` is its own declaration");
    }

    #[test]
    fn offsets_are_against_the_text_the_viewer_renders() {
        let sym = symbols(SRC).expect("parses");
        let step = rewrite(SRC);
        assert!(step.contains("define("), "the rewrite ran before parsing");
        // Both stages, not just the first. Anything computed against the raw
        // text would be three columns off on the header line, and anything
        // computed before renaming would be off by the length of every
        // parameter name — both being the kind of wrong that still looks like
        // it works, because a link lands somewhere plausible.
        let out = apply_renames(&step, &factory_renames(&step));
        assert_eq!(sym.hash, super::fnv1a(&out));
    }

    /// A module with no recognisable factory must still produce a table rather
    /// than nothing: bundle bootstrap code is not a module definition, and it is
    /// still worth being able to click through.
    #[test]
    fn a_module_without_a_factory_still_resolves() {
        let sym = symbols("var a = 1; function f() { return a; }").expect("parses");
        assert!(sym.renames.is_empty());
        assert!(!sym.decls.is_empty());
    }
}
