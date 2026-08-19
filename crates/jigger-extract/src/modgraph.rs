//! Who relies on what, and on which export.
//!
//! A fact tells you the module it came from. The question that follows is
//! always the other direction — *what breaks if this changes* — and the bundle
//! answers it nowhere: a minified call site references its dependencies
//! positionally, so grep cannot find callers of a module, let alone callers of
//! one export.
//!
//! Two indexes, both built in a single pass over the reachable modules:
//!
//! * **dependents** — every module whose dependency array names this one. One
//!   hop, but every module has an entry, so walking ten hops up the graph is ten
//!   lookups rather than a precomputed closure. A closure would be the wrong
//!   shape anyway: `WAWebWid` has thousands of dependents and its transitive set
//!   at depth ten is most of the bundle.
//!
//! * **export usage** — which modules call `require("This").thatExport`. This is
//!   the one that changes how a change is assessed: "forty modules import this"
//!   and "two of them touch the function you are editing" are different facts,
//!   and only the second tells you what to read.

use anyhow::Result;
use cellar_core::{BundleHandle, ModuleEntry};
use regex::Regex;
use serde::Serialize;
use std::collections::{BTreeMap, BTreeSet};

#[derive(Debug, Serialize)]
pub struct Export {
    pub name: String,
    /// Modules that reference this export by name. Capped; `uses` is the truth.
    pub used_by: Vec<String>,
    pub uses: u32,
}

#[derive(Debug, Serialize)]
pub struct ModuleGraph {
    /// What this module imports, verbatim from its dependency array.
    pub deps: Vec<String>,
    /// What imports it. Capped, with `dependent_count` carrying the real total
    /// so a truncated list is never mistaken for the whole story.
    pub dependents: Vec<String>,
    pub dependent_count: u32,
    pub exports: Vec<Export>,
}

/// How many names to list before deferring to the count.
///
/// Generous, because the list is the useful part and a module with 300
/// dependents is exactly the one you want the names for. The cap exists so a
/// single entry cannot be a megabyte, not to keep things tidy.
const CAP: usize = 300;

pub fn build(
    bundle: &BundleHandle,
    entries: &[ModuleEntry],
    wanted: &BTreeSet<String>,
) -> Result<BTreeMap<String, ModuleGraph>> {
    let head = Regex::new(r#"(?:__d|define)\(\s*"[^"]+"\s*,\s*\[([^\]]*)\]"#)?;
    let quoted = Regex::new(r#""([^"]+)""#)?;
    // `o("WAWebFoo").bar` — the callee is a meaningless minified letter, so the
    // quoted module name is what anchors this.
    let member = Regex::new(r#"[a-z]{1,2}\("([^"]+)"\)\.([A-Za-z_$][A-Za-z0-9_$]*)"#)?;
    // The factory's last parameter is the exports object; `l.foo = e` exports.
    let factory = Regex::new(r#"function\s*\(([^)]*)\)"#)?;

    let mut deps_of: BTreeMap<String, Vec<String>> = BTreeMap::new();
    let mut dependents: BTreeMap<String, Vec<String>> = BTreeMap::new();
    let mut exports_of: BTreeMap<String, BTreeSet<String>> = BTreeMap::new();
    // (module, export) -> the modules that use it.
    let mut usage: BTreeMap<(String, String), BTreeSet<String>> = BTreeMap::new();

    for e in entries.iter().filter(|e| wanted.contains(&e.name)) {
        let Ok(src) = bundle.read_module(e) else { continue };

        let declared: Vec<String> = head
            .captures(&src)
            .map(|c| quoted.captures_iter(&c[1]).map(|m| m[1].to_string()).collect())
            .unwrap_or_default();
        for d in &declared {
            dependents.entry(d.clone()).or_default().push(e.name.clone());
        }
        deps_of.insert(e.name.clone(), declared.clone());

        // What this module exports. The exports object is the factory's last
        // parameter — which letter that is varies per module, so it is read from
        // the signature rather than assumed.
        if let Some(f) = factory.captures(&src) {
            let params: Vec<&str> = f[1].split(',').map(str::trim).filter(|p| !p.is_empty()).collect();
            if let Some(exports) = params.last() {
                if let Ok(re) = Regex::new(&format!(
                    r"\b{}\.([A-Za-z_$][A-Za-z0-9_$]*)\s*=",
                    regex::escape(exports)
                )) {
                    for c in re.captures_iter(&src) {
                        exports_of.entry(e.name.clone()).or_default().insert(c[1].to_string());
                    }
                }
            }
        }

        // Every `require("X").y` this module performs, recorded against X.
        for c in member.captures_iter(&src) {
            let (target, name) = (c[1].to_string(), c[2].to_string());
            if declared.contains(&target) {
                usage.entry((target, name)).or_default().insert(e.name.clone());
            }
        }
    }

    let mut out = BTreeMap::new();
    for name in wanted {
        let mut d = dependents.remove(name).unwrap_or_default();
        d.sort();
        d.dedup();
        let count = d.len() as u32;
        d.truncate(CAP);

        let exports = exports_of
            .get(name)
            .map(|names| {
                names
                    .iter()
                    .map(|n| {
                        let users = usage.get(&(name.clone(), n.clone()));
                        let uses = users.map(BTreeSet::len).unwrap_or(0) as u32;
                        let mut used_by: Vec<String> =
                            users.map(|u| u.iter().cloned().collect()).unwrap_or_default();
                        used_by.truncate(CAP);
                        Export { name: n.clone(), used_by, uses }
                    })
                    // The busiest export first: it is the one a change is most
                    // likely to be about.
                    .collect::<Vec<_>>()
            })
            .map(|mut v| {
                v.sort_by(|a, b| b.uses.cmp(&a.uses).then(a.name.cmp(&b.name)));
                v
            })
            .unwrap_or_default();

        out.insert(
            name.clone(),
            ModuleGraph {
                deps: deps_of.remove(name).unwrap_or_default(),
                dependents: d,
                dependent_count: count,
                exports,
            },
        );
    }
    Ok(out)
}
