//! Print a module as the viewer will render it: wrapper rewritten, requires
//! named, factory parameters resolved.

use std::env;
use std::fs;

fn main() {
    for path in env::args().skip(1) {
        let src = fs::read_to_string(&path).expect("readable");
        let step = jigger_extract::symbols::rewrite(&src);
        let spans = jigger_extract::symbols::factory_renames(&step);
        let out = jigger_extract::symbols::apply_renames(&step, &spans);
        println!("=== {path} ({} renames) ===\n{out}", spans.len());
    }
}
