//! jigger — a spec of the WhatsApp protocol, extracted, compiled and checked.
//!
//! The whole pipeline is one binary with no runtime to install:
//!
//! ```text
//! cellar bundle ──extract──► generated/ir/<kind>/<slug>.json
//!                                  │
//!                                  ├──emit──► generated/{go,ts,rust}/  and  generated/proto/*.proto
//!                                  └──scan──► coverage, and one issue per repo
//! ```
//!
//! Bundle access is cellar's job. This binary never walks a bundle directory
//! itself, so a change to how bundles are stored is a cellar upgrade and not a
//! rewrite here.

mod scan;

use anyhow::{Context, Result};
use cellar_core::{Platform, Store};
use clap::{Parser, Subcommand};
use jigger_ir::{Fact, Ir};
use std::collections::{BTreeMap, BTreeSet};
use std::fs;
use std::path::PathBuf;

#[derive(Parser)]
#[command(name = "jigger", version, about = "WhatsApp protocol spec: extract, emit, scan")]
struct Cli {
    /// Cellar store root. Defaults to the same location the cellar CLI uses.
    #[arg(long, global = true)]
    store: Option<PathBuf>,

    /// Where generated output lands. Named `generated` because none of it is
    /// hand-written and nothing in it should ever be edited.
    #[arg(long, global = true, default_value = "generated")]
    out: PathBuf,

    #[command(subcommand)]
    cmd: Cmd,
}

#[derive(Subcommand)]
enum Cmd {
    /// List the bundle revisions available to extract from.
    Revisions,

    /// Bundle -> IR. One file per fact, so `git diff` between two revisions
    /// reads as a protocol changelog rather than a wall of JSON.
    Extract {
        /// Revision to extract, or `latest`.
        #[arg(default_value = "latest")]
        revision: String,
    },

    /// Every indexed revision -> a per-fact changelog.
    ///
    /// The project exists because there are too many changes to track by hand.
    /// A pairwise diff answers "what moved between these two"; this answers
    /// "what has this thing done", which is the question you have when you find
    /// something surprising and need to know whether it is new.
    History,

    /// Missing coverage -> the code to add, per library.
    ///
    /// A scan that says "whatsapp-rust is missing 41 things" leaves the work
    /// exactly where it was. This writes the constants, in that library's own
    /// language, ready to paste — which is the whole difference between a report
    /// and a fix.
    Patch {
        /// Same repo config the scanner uses.
        config: PathBuf,
    },

    /// Per-module symbol tables, for go-to-definition in the source viewer.
    ///
    /// Precomputed rather than resolved per request: it is a pure function of a
    /// module, so doing it once per revision beats doing it once per reader.
    Symbols,

    /// IR -> conformance vectors a library can run in CI.
    Vectors,

    /// IR -> helpers in Go, TypeScript, Rust and .proto.
    Emit,

    /// Show what a revision contains, by kind.
    Stat,

    /// Compare two extracted revisions. Takes two `generated` directories,
    /// because comparing output is far cheaper than re-reading two bundles.
    Diff { a: PathBuf, b: PathBuf },

    /// Check the tracked libraries against the IR and write one issue per repo.
    Scan {
        #[arg(long, default_value = "repos.json")]
        config: PathBuf,
    },
}

fn main() -> Result<()> {
    let cli = Cli::parse();
    let store = Store::open(cli.store.clone()).context("opening the cellar store")?;

    match &cli.cmd {
        Cmd::Revisions => {
            for b in store.list_bundles()? {
                println!("{}", b.id);
            }
        }

        Cmd::Extract { revision } => {
            let id = if revision == "latest" {
                store.latest(Platform::Whatsapp)?
            } else {
                store.resolve(revision)?
            };
            let (facts, dispatch) = extract_revision(&store, id, true)?;
            let ir = Ir { version: 1, revision: id.revision, facts }.normalized();
            // Which revisions exist at all. Consumers need this to offer a
            // revision picker, and only the store knows it — an extraction of
            // one revision cannot.
            let known: Vec<u64> = store.list_bundles()?.iter().map(|b| b.id.revision).collect();
            write_ir(&cli.out, &ir, &known, &dispatch)?;

            let mut by_kind: BTreeMap<&str, usize> = BTreeMap::new();
            for f in &ir.facts {
                *by_kind.entry(f.kind.as_str()).or_default() += 1;
            }
            for (k, n) in &by_kind {
                eprintln!("  {k:<6} {n}");
            }
            let routed: usize = dispatch.iter().map(|r| 1 + r.variants.iter().map(|v| 1 + v.variants.len()).sum::<usize>()).sum();
            eprintln!("  routes {routed} across {} stanza tags", dispatch.len());
            eprintln!("  {} facts -> {}", ir.facts.len(), cli.out.display());
        }

        Cmd::Patch { config } => {
            let ir = read_ir(&cli.out)?;
            let rows = scan::run(&ir, &config, &cli.out)?;
            let by_id: BTreeMap<&str, &Fact> =
                ir.facts.iter().map(|f| (f.id.as_str(), f)).collect();
            let cfg: scan::Config =
                serde_json::from_str(&fs::read_to_string(&config)?)?;

            let dir = cli.out.join("patches");
            fs::create_dir_all(&dir)?;

            for repo in cfg.repos.iter().filter(|r| r.enabled) {
                // Only `missing`. `inconclusive` means the scanner could not
                // decide — usually because the library builds the literal at
                // runtime — and handing someone a patch for code they already
                // have is how a tool stops being trusted.
                let missing: Vec<&Fact> = rows.iter()
                    .filter(|r| r.repo == repo.name && r.state == scan::State::Missing)
                    .filter_map(|r| by_id.get(r.id.as_str()).copied())
                    .collect();
                if missing.is_empty() {
                    continue;
                }

                let lang = match repo.ext.as_str() {
                    "go" => "go",
                    "ts" | "js" => "ts",
                    "rs" => "rust",
                    other => other,
                };

                let mut by_kind: BTreeMap<&str, Vec<&Fact>> = BTreeMap::new();
                for f in &missing {
                    by_kind.entry(f.kind.as_str()).or_default().push(f);
                }

                let mut md = format!(
                    "# {} — {} missing at revision {}\n\n\
                     Generated by `jigger patch`. Every snippet below is derived from the \
                     shipped bundle, not written by hand.\n\n\
                     | kind | missing |\n|---|---|\n",
                    repo.name, missing.len(), ir.revision,
                );
                for (k, v) in &by_kind {
                    md.push_str(&format!("| {k} | {} |\n", v.len()));
                }

                for (k, facts) in &by_kind {
                    md.push_str(&format!("\n## {k}\n\n```{lang}\n"));
                    for f in facts {
                        let s = jigger_emit::emit(f);
                        let body = match lang {
                            "go" => s.go,
                            "ts" => s.ts,
                            "rust" => s.rust,
                            _ => None,
                        };
                        match body {
                            Some(b) => md.push_str(&format!("// {}\n{b}\n\n", f.id)),
                            // Said out loud rather than skipped silently: a gap
                            // in the patch that looks like a complete patch is
                            // worse than an admitted gap.
                            None => md.push_str(&format!("// {} — no {lang} form emitted\n\n", f.id)),
                        }
                    }
                    md.push_str("```\n");
                }

                let path = dir.join(format!("{}.md", repo.name));
                fs::write(&path, md)?;
                println!("  {:<16} {} missing -> {}", repo.name, missing.len(), path.display());
            }
        }

        Cmd::Symbols => {
            let id = store.latest(Platform::Whatsapp)?;
            let bundle = store.open_bundle(id)?;
            let index = bundle.index()?;

            // Only the modules something can actually link to. Every module in
            // the bundle would be 237k parses to serve a few thousand pages,
            // and the viewer degrades to no internal links for the rest rather
            // than to something wrong.
            let wanted: BTreeSet<String> = {
                let ir = read_ir(&cli.out).ok();
                let mut w = BTreeSet::new();
                for f in ir.iter().flat_map(|i| &i.facts) {
                    w.insert(f.evidence.module.clone());
                    if let Some(g) = &f.graph {
                        w.extend(g.deps.iter().cloned());
                        w.extend(g.dependents.iter().cloned());
                    }
                    if let Some(u) = &f.usage {
                        w.extend(u.readers.iter().cloned());
                    }
                }
                w
            };

            let dir = cli.out.join("symbols");
            fs::create_dir_all(&dir)?;
            let (mut done, mut skipped) = (0usize, 0usize);

            for e in index.modules.iter().filter(|e| wanted.contains(&e.name)) {
                let Ok(src) = bundle.read_module(e) else { continue };
                match jigger_extract::symbols::symbols(&src) {
                    Some(sym) => {
                        // One file per module: the viewer reads exactly the one
                        // it is showing, so nothing is paid for the rest.
                        fs::write(
                            dir.join(format!("{}.json", e.name.replace('/', "_"))),
                            serde_json::to_string(&sym)?,
                        )?;
                        done += 1;
                    }
                    // Recorded, not hidden. A module that will never have
                    // internal links is worth knowing about.
                    None => skipped += 1,
                }
            }
            println!("  {done} modules resolved, {skipped} unparseable");
            eprintln!("  -> {}/symbols", cli.out.display());
        }

        Cmd::Vectors => {
            let ir = read_ir(&cli.out)?;
            let all: Vec<_> = ir.facts.iter()
                .flat_map(jigger_emit::vectors::vectors_for)
                .collect();
            let mut by_check: BTreeMap<&str, usize> = BTreeMap::new();
            for v in &all {
                *by_check.entry(v.check.as_str()).or_default() += 1;
            }
            fs::write(cli.out.join("vectors.json"), serde_json::to_string_pretty(&serde_json::json!({
                "revision": ir.revision, "vectors": all,
            }))? + "\n")?;
            for (k, n) in &by_check {
                println!("  {k:<10} {n}");
            }
            eprintln!("  {} vectors -> {}/vectors.json", all.len(), cli.out.display());
        }

        Cmd::History => {
            let mut revisions: Vec<_> = store.list_bundles()?
                .into_iter()
                .filter(|b| b.id.platform == Platform::Whatsapp)
                .map(|b| b.id)
                .collect();
            revisions.sort_by_key(|id| id.revision);
            eprintln!("walking {} revisions", revisions.len());

            // id -> the events in its life. Only *events* are stored, never the
            // value at every revision: a fact that never changed would otherwise
            // contribute one entry per revision forever, and the file would be
            // mostly a record of nothing happening.
            let mut lives: BTreeMap<String, History> = BTreeMap::new();
            let mut prev: BTreeMap<String, Fact> = BTreeMap::new();
            let mut revs = Vec::new();

            for id in &revisions {
                let (facts, _) = extract_revision(&store, *id, false)?;
                let rev = id.revision;
                revs.push(rev);
                let now: BTreeMap<String, Fact> =
                    facts.into_iter().map(|f| (f.id.clone(), f)).collect();

                for (fid, f) in &now {
                    match prev.get(fid) {
                        None => {
                            let h = lives.entry(fid.clone()).or_insert_with(|| History {
                                kind: f.kind.as_str().to_string(),
                                name: f.name.clone(),
                                first: rev,
                                last: rev,
                                events: Vec::new(),
                            });
                            h.last = rev;
                            // Re-appearing after a removal is worth saying so.
                            if h.first != rev {
                                h.events.push(Event { rev, what: "returned".into(), changes: vec![] });
                            }
                        }
                        Some(old) => {
                            let h = lives.get_mut(fid).expect("seen before");
                            h.last = rev;
                            if old.data != f.data {
                                h.events.push(Event {
                                    rev,
                                    what: "changed".into(),
                                    changes: field_changes(&old.data, &f.data),
                                });
                            }
                        }
                    }
                }
                for fid in prev.keys() {
                    if !now.contains_key(fid)
                        && let Some(h) = lives.get_mut(fid)
                    {
                        h.events.push(Event { rev, what: "removed".into(), changes: vec![] });
                    }
                }
                eprintln!("  {rev}: {} facts", now.len());
                prev = now;
            }

            let changed = lives.values().filter(|h| !h.events.is_empty()).count();
            fs::write(cli.out.join("history.json"), serde_json::to_string(&serde_json::json!({
                "revisions": revs, "facts": lives,
            }))? + "\n")?;
            eprintln!("  {changed} of {} facts have events -> {}/history.json",
                      lives.len(), cli.out.display());
        }

        Cmd::Emit => {
            let ir = read_ir(&cli.out)?;
            let mut counts: BTreeMap<&str, usize> = BTreeMap::new();
            for f in &ir.facts {
                let s = jigger_emit::emit(f);
                for (lang, body) in [("go", &s.go), ("ts", &s.ts), ("rust", &s.rust), ("proto", &s.proto)] {
                    let Some(body) = body else { continue };
                    let dir = cli.out.join(lang).join(f.kind.as_str());
                    fs::create_dir_all(&dir)?;
                    let ext = match lang { "go" => "go", "ts" => "ts", "rust" => "rs", _ => "proto" };
                    fs::write(dir.join(format!("{}.{ext}", f.slug())), body)?;
                    *counts.entry(lang).or_default() += 1;
                }
            }
            for (lang, n) in &counts {
                eprintln!("  {lang:<6} {n} files");
            }
        }

        Cmd::Diff { a, b } => {
            let d = diff_dirs(a, b)?;
            println!("{} -> {}", d["from"], d["to"]);
            let s = &d["summary"];
            println!("  added {}  changed {}  removed {}  stable {}",
                     s["added"], s["changed"], s["removed"], s["stable"]);
            for (k, v) in s["byKind"].as_object().into_iter().flatten() {
                println!("  {k:<6} +{} ~{} -{}", v["added"], v["changed"], v["removed"]);
            }
            fs::write(cli.out.join("diff.json"), serde_json::to_string_pretty(&d)? + "\n")?;
            eprintln!("  -> {}/diff.json", cli.out.display());
        }

        Cmd::Scan { config } => {
            let ir = read_ir(&cli.out)?;
            let rows = scan::run(&ir, config, &cli.out)?;
            let mut per: BTreeMap<&str, (usize, usize, usize)> = BTreeMap::new();
            for r in &rows {
                let e = per.entry(r.repo.as_str()).or_default();
                match r.state {
                    scan::State::Covered => e.0 += 1,
                    scan::State::Missing => e.1 += 1,
                    scan::State::Inconclusive => e.2 += 1,
                }
            }
            for (repo, (c, m, u)) in &per {
                println!("  {repo:<16} covered {c:<5} missing {m:<5} inconclusive {u}");
            }
        }

        Cmd::Stat => {
            let ir = read_ir(&cli.out)?;
            let mut by_kind: BTreeMap<&str, usize> = BTreeMap::new();
            for f in &ir.facts {
                *by_kind.entry(f.kind.as_str()).or_default() += 1;
            }
            println!("revision {}", ir.revision);
            for (k, n) in &by_kind {
                println!("  {k:<6} {n}");
            }
        }
    }
    Ok(())
}

/// One file per fact. The alternative — a single large JSON — produces diffs
/// nobody can read, which defeats the point of committing the output at all.

/// One revision, extracted.
///
/// Lifted out of the `extract` command so that a history walk can run it over
/// every indexed revision. Extraction is the expensive half and it is a pure
/// function of the bundle, so it is the right unit to repeat.
fn extract_revision(
    store: &Store,
    id: cellar_core::BundleId,
    verbose: bool,
) -> Result<(Vec<Fact>, Vec<jigger_ir::Route>)> {
    let bundle = store.open_bundle(id)?;
    let index = bundle.index()?;
    let entries = &index.modules;
    if verbose {
        eprintln!("{id}: {} modules", entries.len());
    }

    // Reads first: A/B properties need the usage counts to mean anything, and
    // one pass over the bundle is far cheaper than one grep per flag.
    let reads = jigger_extract::abprop_reads(&bundle, entries)?;

    let mut facts = Vec::new();
    facts.extend(jigger_extract::wam::wam(&bundle, entries)?);
    facts.extend(jigger_extract::abprops(&bundle, entries, &reads)?);
    facts.extend(jigger_extract::iq(&bundle, entries)?);
    facts.extend(jigger_extract::consts(&bundle, entries)?);
    facts.extend(jigger_extract::enums::enums(&bundle, entries)?);
    facts.extend(jigger_extract::proto(&bundle, entries)?);
    facts.extend(jigger_extract::mex(&bundle, entries)?);

    // After proto: an action's payload field is resolved against
    // `SyncActionValue` rather than derived from the action's name, which means
    // that message has to exist first.
    let sync_fields: Vec<String> = facts.iter()
        .find(|f| f.name.ends_with("SyncActionValue"))
        .and_then(|f| match &f.data {
            jigger_ir::Data::Proto { fields, .. } => Some(fields.keys().cloned().collect()),
            _ => None,
        })
        .unwrap_or_default();
    facts.extend(jigger_extract::appstate::appstate(&bundle, entries, &sync_fields)?);

    // Inbound last: pairing a response to its request needs the outbound
    // operations already extracted.
    let outbound = facts.clone();
    facts.extend(jigger_extract::sigs(&bundle, entries, &outbound)?);

    jigger_extract::attach_graph(&mut facts, entries);

    // How an inbound stanza reaches its handler. Kept beside the facts rather
    // than folded into them: a route is not a thing on the wire, it is the
    // client's decision procedure *about* things on the wire, and giving it a
    // fact id would put something in the ledger that no literal identifies.
    let dispatch = entries.iter()
        .find(|e| e.name == jigger_extract::dispatch::DISPATCH_MODULE)
        .and_then(|e| bundle.read_module(e).ok())
        .map(|src| jigger_extract::dispatch::routes(&src))
        .unwrap_or_default();

    Ok((facts, dispatch))
}

/// One fact's life across every indexed revision.
#[derive(serde::Serialize)]
struct History {
    kind: String,
    name: String,
    /// The revision it was first seen in. For most facts this is the oldest
    /// revision indexed, which is a statement about the index, not about the
    /// fact — worth remembering before reading it as "introduced in".
    first: u64,
    last: u64,
    events: Vec<Event>,
}

#[derive(serde::Serialize)]
struct Event {
    rev: u64,
    /// `changed`, `removed`, `returned`. Appearance is implied by `first`.
    what: String,
    changes: Vec<FieldChange>,
}

#[derive(serde::Serialize)]
struct FieldChange {
    field: String,
    from: serde_json::Value,
    to: serde_json::Value,
}

/// What actually differs between two payloads, field by field.
///
/// Storing both payloads whole would make the history file enormous and leave a
/// reader to spot the difference themselves. A flag flipping `false` -> `true`
/// is the entire event; the other six fields of that A/B property are noise.
fn field_changes(a: &jigger_ir::Data, b: &jigger_ir::Data) -> Vec<FieldChange> {
    let (Ok(va), Ok(vb)) = (serde_json::to_value(a), serde_json::to_value(b)) else {
        return vec![];
    };
    let (Some(oa), Some(ob)) = (va.as_object(), vb.as_object()) else { return vec![] };
    let mut out = Vec::new();
    for (k, av) in oa {
        let bv = ob.get(k).cloned().unwrap_or(serde_json::Value::Null);
        if av != &bv {
            out.push(FieldChange { field: k.clone(), from: av.clone(), to: bv });
        }
    }
    for (k, bv) in ob {
        if !oa.contains_key(k) {
            out.push(FieldChange { field: k.clone(), from: serde_json::Value::Null, to: bv.clone() });
        }
    }
    out
}

fn write_ir(out: &PathBuf, ir: &Ir, known: &[u64], dispatch: &[jigger_ir::Route]) -> Result<()> {
    let root = out.join("ir");
    // Clear first. Generated output is a pure function of the bundle, so a file
    // left over from a previous shape is not history, it is corruption — and it
    // fails deserialization in whatever reads the tree next.
    if root.exists() {
        fs::remove_dir_all(&root)?;
    }
    for f in &ir.facts {
        let dir = root.join(f.kind.as_str());
        fs::create_dir_all(&dir)?;
        fs::write(dir.join(format!("{}.json", f.slug())), serde_json::to_string_pretty(f)? + "\n")?;
    }
    // Per-fact files are for git: they make a revision-to-revision diff read as
    // a protocol changelog. This aggregate is for consumers — the web tool
    // fetches one file, from disk or straight from GitHub raw, rather than
    // 2,700 requests. Both are generated; neither is edited.
    let bundled: Vec<_> = ir.facts.iter().map(|f| {
        let s = jigger_emit::emit(f);
        let mut v = serde_json::to_value(f).unwrap_or_default();
        if let Some(o) = v.as_object_mut() {
            let mut g = serde_json::Map::new();
            for (lang, body) in [("go", s.go), ("ts", s.ts), ("rust", s.rust), ("proto", s.proto)] {
                if let Some(b) = body { g.insert(lang.into(), serde_json::Value::String(b)); }
            }
            o.insert("generated".into(), serde_json::Value::Object(g));
        }
        v
    }).collect();
    fs::write(out.join("ir.json"), serde_json::to_string(&serde_json::json!({
        "version": ir.version, "revision": ir.revision, "revisions": known,
        "facts": bundled, "dispatch": dispatch
    }))? + "\n")?;

    fs::write(out.join("revision.json"),
              serde_json::to_string_pretty(&serde_json::json!({
                  "version": ir.version, "revision": ir.revision, "facts": ir.facts.len()
              }))? + "\n")?;
    Ok(())
}

fn read_ir(out: &PathBuf) -> Result<Ir> {
    let meta: serde_json::Value =
        serde_json::from_str(&fs::read_to_string(out.join("revision.json")).context("no extraction found; run `jigger extract` first")?)?;
    let mut facts = Vec::new();
    for entry in walkdir::WalkDir::new(out.join("ir")).into_iter().filter_map(Result::ok) {
        if entry.file_type().is_file() && entry.path().extension().is_some_and(|e| e == "json") {
            facts.push(serde_json::from_str::<Fact>(&fs::read_to_string(entry.path())?)?);
        }
    }
    Ok(Ir { version: 1, revision: meta["revision"].as_u64().unwrap_or(0), facts }.normalized())
}

/// Compare two extracted revisions.
///
/// This reads two `generated` trees rather than re-reading bundles, because
/// extraction is the expensive half and its output is already the thing worth
/// comparing. A fact is keyed by id — a wire literal — so "same id, different
/// data" is a genuine protocol change and not a rename.
pub fn diff_dirs(a: &PathBuf, b: &PathBuf) -> Result<serde_json::Value> {
    let (ia, ib) = (read_ir(a)?, read_ir(b)?);
    let map = |ir: &Ir| -> BTreeMap<String, Fact> {
        ir.facts.iter().map(|f| (f.id.clone(), f.clone())).collect()
    };
    let (ma, mb) = (map(&ia), map(&ib));

    let mut added = Vec::new();
    let mut removed = Vec::new();
    let mut changed = Vec::new();
    for (id, f) in &mb {
        match ma.get(id) {
            None => added.push(serde_json::json!({"id": id, "kind": f.kind.as_str(), "name": f.name})),
            // Same identity, different payload: WhatsApp changed the shape of
            // something that already existed, which is the case a plain
            // added/removed diff misses entirely.
            Some(old) if old.data != f.data =>
                changed.push(serde_json::json!({"id": id, "kind": f.kind.as_str(), "name": f.name})),
            _ => {}
        }
    }
    for (id, f) in &ma {
        if !mb.contains_key(id) {
            removed.push(serde_json::json!({"id": id, "kind": f.kind.as_str(), "name": f.name}));
        }
    }

    // Every kind, always, including zeros. A consumer rendering a summary table
    // should not have to guess whether a missing key means "none changed" or
    // "this kind is not tracked".
    let mut by_kind: BTreeMap<&str, serde_json::Value> = BTreeMap::new();
    for k in ["ab", "const", "iq", "proto", "wam"] {
        let c = |v: &Vec<serde_json::Value>| v.iter().filter(|x| x["kind"] == k).count();
        let stable = mb.values().filter(|f| f.kind.as_str() == k && ma.contains_key(&f.id)).count()
            - c(&changed);
        by_kind.insert(k, serde_json::json!({
            "added": c(&added), "removed": c(&removed), "changed": c(&changed), "stable": stable
        }));
    }

    // Grouped by kind rather than emitted flat: a reader asks "what changed in
    // the protobufs" far more often than "what changed overall", and a consumer
    // that wants the flat list can concatenate.
    let group = |v: &Vec<serde_json::Value>| -> BTreeMap<String, Vec<serde_json::Value>> {
        let mut g: BTreeMap<String, Vec<serde_json::Value>> = BTreeMap::new();
        for x in v {
            g.entry(x["kind"].as_str().unwrap_or("?").to_string()).or_default().push(x.clone());
        }
        g
    };

    Ok(serde_json::json!({
        "from": ia.revision, "to": ib.revision,
        "revisions": [ia.revision, ib.revision],
        "summary": { "added": added.len(), "removed": removed.len(),
                     "changed": changed.len(), "stable": ma.len() - removed.len() - changed.len(),
                     "byKind": by_kind },
        "added": group(&added), "removed": group(&removed), "changed": group(&changed)
    }))
}
