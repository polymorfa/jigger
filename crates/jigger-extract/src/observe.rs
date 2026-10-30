//! Observation mode: which code change moved which fact.
//!
//! Two diffs exist and neither is the answer on its own. The fact diff says
//! *what* the protocol did — `ab:wds_web_text_layout` flipped, an IQ gained an
//! attribute — and stops there, leaving you to find the code. The shape diff
//! says *which functions really changed*, out of the thousands a release
//! touches, and cannot tell you which of them matters. Joining them is the
//! whole idea, and it produces three answers rather than one:
//!
//! * **Attributed.** A fact moved, and a function in the module it was read
//!   from moved with it. That function is where the change is, by name.
//!
//! * **Silent.** A module a fact was read from really changed, and no fact
//!   moved. Something happened that no extractor models — a new branch, a
//!   changed guard, a reordered handler. This is the blind spot, and it is the
//!   one category no fact-level diff can produce, because it is defined by the
//!   absence of a fact. Every project that diffs extracted IR is blind here by
//!   construction.
//!
//! * **Unexplained.** A fact moved and nothing in reach changed. That is not a
//!   finding about WhatsApp, it is a finding about us: an extractor that reads a
//!   value nondeterministically (an iteration order, a first-match on a set), or
//!   one whose evidence points at the wrong module. Reported separately because
//!   confusing "they changed something" with "we measured it wrong" is how a
//!   tracker loses its credibility.
//!
//! # Which way is up
//!
//! When a fact's own module is clean, the cause is looked for in what that
//! module *imports*, not in what imports it. A fact is assembled out of the
//! things its module depends on — an enum pulled in from elsewhere, a constant,
//! a shared builder — so a dependency changing can move a fact while the module
//! that spells it stays untouched. Nothing downstream can: a module that merely
//! consumes a fact cannot alter what the fact says.
//!
//! Dependents matter for the opposite question. Once a silent change is found,
//! "what protocol surface sits on top of this" is answered downstream, and that
//! is the blast radius reported alongside it.

use crate::shape::{self, FnDiff};
use cellar_core::{BundleHandle, ModuleEntry};
use std::collections::{BTreeMap, BTreeSet, HashMap, VecDeque};

/// A fact that moved between two revisions, and where it was read from.
#[derive(Debug, Clone)]
pub struct FactChange {
    pub id: String,
    pub kind: String,
    pub name: String,
    /// The module its evidence points at.
    pub module: String,
    /// `added`, `removed` or `changed`.
    pub how: String,
}

/// A function that changed, named.
#[derive(Debug, Clone, serde::Serialize)]
pub struct Site {
    pub module: String,
    pub function: String,
    /// 0 when the change is in the fact's own module, 1 when it is in something
    /// that module imports, and so on.
    pub hops: u32,
    /// Byte offsets in the new revision of the module, for a viewer to jump to.
    pub start: u32,
    pub end: u32,
    pub tokens: usize,
    /// `changed`, `added` or `removed`.
    pub how: String,
}

/// A fact change, with the code that caused it.
#[derive(Debug, Clone, serde::Serialize)]
pub struct Attributed {
    pub id: String,
    pub kind: String,
    pub name: String,
    pub module: String,
    pub how: String,
    /// Whether the module exists on both sides. A fact appearing in a module
    /// that did not exist last revision is fully explained — the whole file is
    /// new — and has no function-level diff to show, because there is nothing to
    /// diff it against. Filing that under "unexplained" alongside genuine
    /// measurement failures would bury the ones worth investigating.
    pub module_status: String,
    /// Nearest first. Empty means unexplained.
    pub sites: Vec<Site>,
}

/// A module that really changed while every fact read from it stayed put.
#[derive(Debug, Clone, serde::Serialize)]
pub struct Silent {
    pub module: String,
    /// The functions that moved.
    pub sites: Vec<Site>,
    /// Facts read from this module — all of them unchanged. What the change
    /// sits next to, and the best available hint at what it affects.
    pub facts: Vec<String>,
    /// How many modules import this one. The blast radius.
    pub dependents: usize,
}

#[derive(Debug, Default, serde::Serialize)]
pub struct Observed {
    pub attributed: Vec<Attributed>,
    pub silent: Vec<Silent>,
    /// Fact ids that moved with no code change anywhere in reach.
    pub unexplained: Vec<Attributed>,
    pub stats: Stats,
}

#[derive(Debug, Default, serde::Serialize)]
pub struct Stats {
    pub facts_moved: usize,
    pub facts_attributed: usize,
    pub modules_examined: usize,
    pub modules_changed: usize,
    pub functions_changed: usize,
}

/// Turn a module's function diff into named sites.
fn sites_of(module: &str, d: &FnDiff, hops: u32) -> Vec<Site> {
    let mut out = Vec::new();
    for c in &d.changed {
        out.push(Site {
            module: module.to_string(),
            function: c.label.clone(),
            hops,
            start: c.after.start,
            end: c.after.end,
            tokens: c.after.tokens,
            how: "changed".into(),
        });
    }
    for f in &d.added {
        out.push(Site {
            module: module.to_string(),
            function: f.label.clone(),
            hops,
            start: f.start,
            end: f.end,
            tokens: f.tokens,
            how: "added".into(),
        });
    }
    for f in &d.removed {
        // Offsets are into the *old* revision, which the viewer does not have
        // open. Zeroed rather than quietly pointing at the wrong bytes.
        out.push(Site {
            module: module.to_string(),
            function: f.label.clone(),
            hops,
            start: 0,
            end: 0,
            tokens: f.tokens,
            how: "removed".into(),
        });
    }
    if out.is_empty() && d.module_changed {
        out.push(Site { module: module.into(), function: "[module-level]".into(), hops,
            start: 0, end: 0, tokens: 0, how: "module".into() });
    }
    out
}

/// Join the fact diff to the shape diff.
///
/// `depth` is how many import hops to search before giving up on explaining a
/// fact. Zero means "its own module or nothing".
pub fn observe(
    old: &BundleHandle,
    new: &BundleHandle,
    old_modules: &[ModuleEntry],
    new_modules: &[ModuleEntry],
    changes: &[FactChange],
    depth: u32,
    fact_modules: &BTreeMap<String, Vec<String>>,
) -> Observed {
    let old_by: HashMap<&str, &ModuleEntry> =
        old_modules.iter().map(|e| (e.name.as_str(), e)).collect();
    let new_by: HashMap<&str, &ModuleEntry> =
        new_modules.iter().map(|e| (e.name.as_str(), e)).collect();

    // Diffs are computed once per module and reused: a module carrying forty
    // facts would otherwise be parsed forty times, and parsing is the cost.
    let mut cache: HashMap<String, Option<FnDiff>> = HashMap::new();
    let diff_of = |name: &str, cache: &mut HashMap<String, Option<FnDiff>>| -> Option<FnDiff> {
        if let Some(d) = cache.get(name) {
            return d.clone();
        }
        let d = (|| {
            let (a, b) = (old_by.get(name)?, new_by.get(name)?);
            let (before, after) = (old.read_module(a).ok()?, new.read_module(b).ok()?);
            // Byte-identical is the common case and costs two parses to
            // discover the hard way.
            if before == after {
                return Some(FnDiff::default());
            }
            Some(shape::diff_functions(&before, &after))
        })();
        cache.insert(name.to_string(), d.clone());
        d
    };

    let mut out = Observed::default();
    out.stats.facts_moved = changes.len();

    for c in changes {
        let mut sites = Vec::new();

        // Hop 0: the module the fact was actually read from.
        if let Some(d) = diff_of(&c.module, &mut cache)
            && d.is_change()
        {
            sites.extend(sites_of(&c.module, &d, 0));
        }

        // Still unexplained: walk what the module imports. A fact is assembled
        // out of its dependencies, so a constant or enum changing one hop away
        // moves the fact while its own module stays byte-identical.
        if sites.is_empty() && depth > 0 {
            let mut seen: BTreeSet<&str> = BTreeSet::new();
            seen.insert(c.module.as_str());
            let mut q: VecDeque<(&str, u32)> = VecDeque::new();
            q.push_back((c.module.as_str(), 0));

            let mut found_at = None;
            while let Some((name, hops)) = q.pop_front() {
                if found_at.is_some_and(|level| hops + 1 > level) { break; }
                if hops >= depth {
                    continue;
                }
                let Some(entry) = new_by.get(name) else { continue };
                for dep in &entry.deps {
                    if !seen.insert(dep.as_str()) {
                        continue;
                    }
                    if let Some(d) = diff_of(dep, &mut cache)
                        && d.is_change()
                    {
                        sites.extend(sites_of(dep, &d, hops + 1));
                        found_at = Some(hops + 1);
                    }
                    q.push_back((dep.as_str(), hops + 1));
                }
                // Breadth-first, and stop at the first hop that explains
                // anything. A change two hops away is not evidence when one hop
                // away already changed; reporting both would bury the near
                // cause under everything the near cause imports.

            }
        }

        // Nearest first, then largest: the reading order.
        sites.sort_by(|a, b| a.hops.cmp(&b.hops).then(b.tokens.cmp(&a.tokens)));

        let status = match (
            old_by.contains_key(c.module.as_str()),
            new_by.contains_key(c.module.as_str()),
        ) {
            (true, true) => "both",
            (false, true) => "new",
            (true, false) => "gone",
            (false, false) => "missing",
        };

        let a = Attributed {
            id: c.id.clone(),
            kind: c.kind.clone(),
            name: c.name.clone(),
            module: c.module.clone(),
            how: c.how.clone(),
            module_status: status.into(),
            sites,
        };
        // A whole new or deleted file explains itself. Only a fact that moved
        // inside a module present on both sides, with nothing in it changing,
        // is a real mystery — and the mystery is ours.
        if a.sites.is_empty() && status == "both" {
            out.unexplained.push(a);
        } else {
            out.stats.facts_attributed += 1;
            out.attributed.push(a);
        }
    }

    // Populate the same cache for silent candidates so statistics and tables
    // describe the same scan, including revisions where no fact moved.
    for module in fact_modules.keys() { diff_of(module, &mut cache); }
    let moved: BTreeSet<_> = changes.iter().map(|c| c.id.clone()).collect();
    out.silent = silent_scan(old,new,old_modules,new_modules,fact_modules,&moved);
    out.stats.modules_examined = cache.len();
    out.stats.modules_changed =
        cache.values().flatten().filter(|d| d.is_change()).count();
    out.stats.functions_changed = cache
        .values()
        .flatten()
        .map(|d| d.changed.len() + d.added.len() + d.removed.len())
        .sum();
    out
}

/// The set of modules to look for silent changes in.
///
/// Kept separate from `observe` because the caller knows which modules carry
/// facts and this crate should not have to re-derive it from an IR it does not
/// depend on.
pub fn silent_scan(
    old: &BundleHandle,
    new: &BundleHandle,
    old_modules: &[ModuleEntry],
    new_modules: &[ModuleEntry],
    fact_modules: &BTreeMap<String, Vec<String>>,
    moved_facts: &BTreeSet<String>,
) -> Vec<Silent> {
    let old_by: HashMap<&str, &ModuleEntry> =
        old_modules.iter().map(|e| (e.name.as_str(), e)).collect();
    let new_by: HashMap<&str, &ModuleEntry> =
        new_modules.iter().map(|e| (e.name.as_str(), e)).collect();

    let mut out = Vec::new();
    for (module, facts) in fact_modules {
        // A module with any moved fact is explained elsewhere; silence is the
        // whole criterion here.
        if facts.iter().any(|f| moved_facts.contains(f)) {
            continue;
        }
        let (Some(a), Some(b)) = (old_by.get(module.as_str()), new_by.get(module.as_str())) else {
            continue;
        };
        let (Ok(before), Ok(after)) = (old.read_module(a), new.read_module(b)) else { continue };
        if before == after {
            continue;
        }
        let d = shape::diff_functions(&before, &after);
        if !d.is_change() {
            // Text differs, program does not. Exactly what the shape engine
            // exists to throw away.
            continue;
        }
        out.push(Silent {
            module: module.clone(),
            sites: sites_of(module, &d, 0),
            facts: facts.clone(),
            dependents: b.dependents.len(),
        });
    }
    out.sort_by(|a, b| b.sites.len().cmp(&a.sites.len()).then(b.dependents.cmp(&a.dependents)));
    out
}

#[cfg(test)]
mod tests {
    use super::*;
    use cellar_core::{BundleId,BundleManifest,Diagnostics,Platform,SourceForm};
    pub(super) fn fixture(rev:u64,texts:&[(&str,&str,&[&str])])->(BundleHandle,Vec<ModuleEntry>) {
        let dir=std::path::PathBuf::from(std::env::var_os("HOME").unwrap()).join(".polymorfa-agent-work/tools-ready-test-fixtures").join(format!("{}-{rev}",std::process::id()));
        std::fs::create_dir_all(dir.join("modules")).unwrap();
        let mut entries=vec![];
        for (name,src,deps) in texts {
            let file=format!("modules/{name}.js");std::fs::write(dir.join(&file),src).unwrap();
            entries.push(ModuleEntry{name:(*name).into(),file,deps:deps.iter().map(|s|s.to_string()).collect(),dependents:vec![],exports:vec![],functions:vec![],raw_sha256:String::new(),raw_len:src.len() as u64,stored_len:src.len() as u64,chunk:String::new(),form:SourceForm::Pretty,variants:vec![]});
        }
        let id=BundleId::new(Platform::Whatsapp,rev);
        let manifest=BundleManifest{schema_version:"1".into(),bundle:id,source_url:None,archive_sha256:None,archive_len:None,indexed_at:String::new(),cellar_version:String::new(),codegen_version:String::new(),source_form:SourceForm::Pretty,modules_indexed:entries.len() as u64,modules_bytes:0,diagnostics:Diagnostics::default()};
        (BundleHandle{id,dir,manifest},entries)
    }
    #[test]
    fn silent_stats_include_module_level_edits_and_exclude_removed_facts() {
        let (a,ai)=fixture(1,&[("M","__d('M',['A'],function(){})",&[])]);
        let (b,bi)=fixture(2,&[("M","__d('M',['B'],function(){})",&[])]);
        let facts=BTreeMap::from([("M".into(),vec!["keep".into(),"removed".into()])]);
        let out=observe(&a,&b,&ai,&bi,&[],2,&facts);
        assert_eq!(out.silent.len(),1);assert_eq!(out.silent[0].sites[0].how,"module");
        assert_eq!(out.stats.modules_examined,1);assert_eq!(out.stats.modules_changed,1);assert_eq!(out.stats.functions_changed,0);
        assert!(silent_scan(&a,&b,&ai,&bi,&facts,&BTreeSet::from(["removed".into()])).is_empty());
        std::fs::remove_dir_all(a.dir).unwrap();std::fs::remove_dir_all(b.dir).unwrap();
    }
    #[test]
    fn bfs_reports_all_nearest_candidates() {
        let old=[("M","var x=1", &["A","B"][..]),("A","var x=1",&["C"][..]),("B","var x=1",&["D"][..]),("C","var e={};e.go=function(){return 1}",&[][..]),("D","var e={};e.go=function(){return 1}",&[][..])];
        let new=[("M","var x=1", &["A","B"][..]),("A","var x=1",&["C"][..]),("B","var x=1",&["D"][..]),("C","var e={};e.go=function(){return 2}",&[][..]),("D","var e={};e.go=function(){return 3}",&[][..])];
        let (a,ai)=fixture(3,&old);let (b,bi)=fixture(4,&new);
        let change=FactChange{id:"f".into(),kind:"ab".into(),name:"f".into(),module:"M".into(),how:"changed".into()};
        let out=observe(&a,&b,&ai,&bi,&[change],2,&BTreeMap::new());
        let modules:BTreeSet<_>=out.attributed[0].sites.iter().map(|s|s.module.as_str()).collect();assert_eq!(modules,BTreeSet::from(["C","D"]));
        std::fs::remove_dir_all(a.dir).unwrap();std::fs::remove_dir_all(b.dir).unwrap();
    }
}

#[cfg(test)]
mod producer_qualification {
    use super::tests::fixture;
    use super::*;
    #[test]
    fn generate_observation_and_symbols_from_matching_source() {
        let before="/* 🐈 */ __d(\"M\",[],function(g,r,i,n,l,m,e){\nfunction x(){return 1}\ne.test=x;\n});";
        let after=before.replace("return 1","return 2");
        let (a,ai)=fixture(5,&[("M",before,&[]),("S","var x=1",&[]),("U","var x=1",&[])]);
        let (b,bi)=fixture(6,&[("M",&after,&[]),("S","var x=2",&[]),("U","var x=1",&[])]);
        let changes:Vec<_>=[("M","ab:changed"),("U","ab:unexplained")].iter().map(|(module,id)|FactChange{id:(*id).into(),kind:"ab".into(),name:(*id).into(),module:(*module).into(),how:"changed".into()}).collect();
        let facts=BTreeMap::from([("M".into(),vec!["ab:changed".into()]),("S".into(),vec!["ab:stable".into()]),("U".into(),vec!["ab:unexplained".into()])]);
        let out=observe(&a,&b,&ai,&bi,&changes,2,&facts);
        assert_eq!(out.attributed.len(),1);assert_eq!(out.unexplained.len(),1);assert_eq!(out.silent.len(),1);
        let symbols=crate::symbols::symbols(&after).unwrap();
        if let Some(dir)=std::env::var_os("JIGGER_QUALIFICATION_DIR") {
            let dir=std::path::PathBuf::from(dir);std::fs::create_dir_all(dir.join("modules")).unwrap();std::fs::create_dir_all(dir.join("symbols")).unwrap();
            std::fs::write(dir.join("observe.json"),serde_json::to_vec(&out).unwrap()).unwrap();
            std::fs::write(dir.join("modules/M.js"),after).unwrap();
            std::fs::write(dir.join("symbols/M.json"),serde_json::to_vec(&symbols).unwrap()).unwrap();
        }
        std::fs::remove_dir_all(a.dir).unwrap();std::fs::remove_dir_all(b.dir).unwrap();
    }
}
