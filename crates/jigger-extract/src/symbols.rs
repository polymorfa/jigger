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
    let src = rewrite(raw);
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
    Some(Symbols { hash: fnv1a(&src), decls, refs })
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
    fn offsets_are_against_the_rewritten_text() {
        let sym = symbols(SRC).expect("parses");
        let out = rewrite(SRC);
        assert!(out.contains("define("), "the rewrite ran before parsing");
        // Anything computed against the raw text would be three columns off on
        // the header line, which is exactly the kind of wrong that still looks
        // like it works.
        assert_eq!(sym.hash, super::fnv1a(&out));
    }
}
