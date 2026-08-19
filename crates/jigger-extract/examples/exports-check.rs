//! Compare `modgraph`'s regex export scan against the same thing done properly.
//!
//! `modgraph` finds a module's exports by taking the factory's *last* parameter
//! and grepping for `<letter>.name =`. Both halves are known-wrong: the last
//! parameter is `fbt` rather than `exports` in every `.react` module, and a
//! single-letter regex matches every unrelated local of the same name in every
//! nested scope. This measures what that costs, so the fix is scheduled on
//! evidence rather than on the fact that it offends.

use std::collections::BTreeSet;
use std::env;
use std::fs;

use oxc_allocator::Allocator;
use oxc_ast::ast::*;
use oxc_ast_visit::Visit;
use oxc_parser::Parser;
use oxc_semantic::{SemanticBuilder, SymbolId};
use oxc_span::SourceType;
use regex::Regex;

/// What `modgraph` does today.
fn by_regex(src: &str) -> BTreeSet<String> {
    let factory = Regex::new(r"function\s*\(([^)]*)\)").expect("static");
    let mut out = BTreeSet::new();
    let Some(f) = factory.captures(src) else { return out };
    let params: Vec<&str> = f[1].split(',').map(str::trim).filter(|p| !p.is_empty()).collect();
    let Some(exports) = params.last() else { return out };
    let Ok(re) = Regex::new(&format!(r"\b{}\.([A-Za-z_$][A-Za-z0-9_$]*)\s*=", regex::escape(exports)))
    else {
        return out;
    };
    for c in re.captures_iter(src) {
        out.insert(c[1].to_string());
    }
    out
}

/// The same question, asked of the binder.
fn by_ast(src: &str) -> BTreeSet<String> {
    let alloc = Allocator::default();
    let parsed = Parser::new(&alloc, src, SourceType::cjs()).parse();
    let mut out = BTreeSet::new();
    if parsed.panicked {
        return out;
    }
    let semantic = SemanticBuilder::new().with_build_nodes(true).build(&parsed.program).semantic;
    let scoping = semantic.scoping();
    let Some(sym) = jigger_extract::factory::exports_symbol(&parsed.program, scoping) else {
        return out;
    };

    struct Walk<'s> {
        scoping: &'s oxc_semantic::Scoping,
        want: SymbolId,
        out: BTreeSet<String>,
    }
    impl<'a, 's> Visit<'a> for Walk<'s> {
        fn visit_assignment_expression(&mut self, e: &AssignmentExpression<'a>) {
            if let Some(m) = e.left.as_member_expression()
                && let Some(prop) = m.static_property_name()
                && let Expression::Identifier(obj) = m.object()
                && obj
                    .reference_id
                    .get()
                    .and_then(|i| self.scoping.get_reference(i).symbol_id())
                    == Some(self.want)
            {
                self.out.insert(prop.to_string());
            }
            oxc_ast_visit::walk::walk_assignment_expression(self, e);
        }
    }

    let mut w = Walk { scoping, want: sym, out: BTreeSet::new() };
    w.visit_program(&parsed.program);
    out.append(&mut w.out);
    out
}

fn main() {
    let (mut agree, mut total) = (0u32, 0u32);
    let (mut missed, mut invented) = (0u32, 0u32);
    let mut examples: Vec<String> = Vec::new();

    for path in env::args().skip(1) {
        let Ok(src) = fs::read_to_string(&path) else { continue };
        let (r, a) = (by_regex(&src), by_ast(&src));
        if r.is_empty() && a.is_empty() {
            continue;
        }
        total += 1;
        if r == a {
            agree += 1;
            continue;
        }
        let only_ast: Vec<_> = a.difference(&r).cloned().collect();
        let only_re: Vec<_> = r.difference(&a).cloned().collect();
        missed += only_ast.len() as u32;
        invented += only_re.len() as u32;
        if examples.len() < 6 {
            let name = path.rsplit('/').next().unwrap_or(&path).to_string();
            examples.push(format!("{name}\n      missed {only_ast:?}\n      invented {only_re:?}"));
        }
    }

    println!("{total} modules with exports; {agree} agree ({}%)", agree * 100 / total.max(1));
    println!("  names the regex missed:   {missed}");
    println!("  names the regex invented: {invented}");
    for e in &examples {
        println!("\n    {e}");
    }
}
