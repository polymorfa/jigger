//! How often is a parameter left alone, and which name loses?
//!
//! The layout only ever *proposes* a name; a collision with something else in
//! the module, or a use the name cannot explain, vetoes it. Both checks are
//! cheap to write and easy to believe in, which is exactly why they need
//! measuring: a veto that never fires is dead weight, and one that fires
//! constantly means the convention is wrong rather than the module unusual.

use std::collections::BTreeMap;
use std::env;
use std::fs;

use oxc_allocator::Allocator;
use oxc_parser::Parser;
use oxc_semantic::SemanticBuilder;
use oxc_span::SourceType;

fn main() {
    let mut vetoed: BTreeMap<String, u32> = BTreeMap::new();
    let mut applied: BTreeMap<String, u32> = BTreeMap::new();
    let (mut modules, mut clean) = (0u32, 0u32);
    let mut examples: Vec<String> = Vec::new();

    for path in env::args().skip(1) {
        let Ok(src) = fs::read_to_string(&path) else {
            continue;
        };
        let alloc = Allocator::default();
        let parsed = Parser::new(&alloc, &src, SourceType::cjs()).parse();
        if parsed.panicked {
            continue;
        }
        let semantic = SemanticBuilder::new()
            .with_build_nodes(true)
            .build(&parsed.program)
            .semantic;
        let Some(f) = jigger_extract::factory::factory_of(&parsed.program) else {
            continue;
        };
        let deps = jigger_extract::factory::deps_of(&parsed.program);
        let layout = jigger_extract::factory::layout_of(f, &deps, semantic.scoping());

        modules += 1;
        let mut any_veto = false;
        for (i, name) in layout.names.iter().enumerate() {
            // What the table would have proposed, so a veto can be attributed
            // to a name rather than to a position.
            let proposed = proposed_name(i, layout.exports, &deps);
            match name {
                Some(n) => *applied.entry(n.clone()).or_default() += 1,
                None => {
                    any_veto = true;
                    if examples.len() < 8 {
                        examples.push(format!("{proposed} @{i} in {path}"));
                    }
                    *vetoed.entry(proposed).or_default() += 1;
                }
            }
        }
        if !any_veto {
            clean += 1;
        }
    }

    println!(
        "{modules} factories; {clean} fully named ({}%)",
        pct(clean, modules)
    );
    println!("\napplied:");
    for (name, n) in &applied {
        println!("  {name:<18} {n}");
    }
    println!("\nleft as the letter:");
    for (name, n) in &vetoed {
        println!("  {name:<18} {n}");
    }
    for e in &examples {
        println!("    {e}");
    }
}

fn pct(n: u32, total: u32) -> u32 {
    if total == 0 { 0 } else { n * 100 / total }
}

fn proposed_name(i: usize, exports: Option<usize>, deps: &[&str]) -> String {
    const SHORT: [&str; 6] = [
        "global",
        "require",
        "requireDynamic",
        "requireLazy",
        "module",
        "exports",
    ];
    const LONG: [&str; 7] = [
        "global",
        "require",
        "importDefault",
        "importNamespace",
        "requireLazy",
        "module",
        "exports",
    ];
    let table: &[&str] = match exports {
        Some(5) => &SHORT,
        Some(6) => &LONG,
        _ => &[],
    };
    match table.get(i) {
        Some(n) => (*n).to_string(),
        None if exports.is_some_and(|e| i > e) => deps
            .get(i - exports.unwrap() - 1)
            .map(|d| (*d).to_string())
            .unwrap_or_else(|| "dep*".into()),
        None => "(no convention)".to_string(),
    }
}
