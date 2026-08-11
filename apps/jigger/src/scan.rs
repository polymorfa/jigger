//! Coverage: which libraries implement which facts, and one issue per repo.
//!
//! The search works because a fact's id *is* a wire literal, so there is no
//! mapping table between "what the spec calls it" and "what to grep for" and
//! therefore nothing to fall out of sync.
//!
//! # Being wrong is the main risk
//!
//! A scanner that reports a gap a library does not have is worse than one that
//! reports nothing, because the first wrong issue is the last one anybody reads.
//! Two real cases shaped the rules below:
//!
//! * Baileys implements every media HKDF label but *builds* them at runtime as
//!   `` `WhatsApp ${mapping[type]} Keys` ``, so the literal appears nowhere. A
//!   plain search called six correct implementations missing.
//! * whatsapp-rust keeps media crypto in a sibling crate. Scanning one crate of
//!   a workspace and calling the rest missing is how a scanner produces
//!   confident nonsense.
//!
//! Hence [`State::Inconclusive`], and hence `paths` being plural. Where a rule
//! cannot be made reliable the answer is "cannot tell", never a guess in either
//! direction.

use anyhow::{Context, Result};
use jigger_ir::{Data, Fact, Ir, Kind};
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::fs;
use std::path::{Path, PathBuf};

#[derive(Debug, Deserialize)]
pub struct Config {
    pub repos: Vec<Repo>,
}

#[derive(Debug, Deserialize)]
pub struct Repo {
    pub name: String,
    #[serde(default)]
    pub remote: Option<String>,
    /// Every source root the library keeps protocol code in.
    pub paths: Vec<PathBuf>,
    /// File extension to consider, without the dot.
    pub ext: String,
    /// Where the library keeps its `.proto` schemas. Separate from `paths`
    /// because protobuf coverage is decided against schema files, not source.
    #[serde(default)]
    pub proto_paths: Vec<PathBuf>,
    #[serde(default = "yes")]
    pub enabled: bool,
    /// Opt-in per kind. A maintainer who does not care about telemetry should
    /// not receive a WAM issue every release.
    pub kinds: Vec<String>,
    /// Paths that, if present, mean this library implements telemetry at all.
    #[serde(default)]
    pub wam_paths: Vec<String>,
    #[serde(default = "fifteen")]
    pub max_per_kind: usize,
}
fn yes() -> bool { true }
fn fifteen() -> usize { 15 }

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum State {
    Covered,
    Missing,
    /// The scan cannot decide. Reported and counted, never asserted as a gap.
    Inconclusive,
}

#[derive(Debug, Serialize)]
pub struct Row {
    pub repo: String,
    pub id: String,
    pub kind: String,
    pub name: String,
    pub state: State,
}

/// Every file of interest, read once. The alternative — one `grep` process per
/// fact per repo — is thousands of spawns for the same bytes.
fn slurp(paths: &[PathBuf], ext: &str) -> Vec<String> {
    let mut out = Vec::new();
    for root in paths {
        for e in walkdir::WalkDir::new(root).into_iter().filter_map(Result::ok) {
            if !e.file_type().is_file() { continue }
            if e.path().extension().is_none_or(|x| x != ext) { continue }
            if e.path().components().any(|c| c.as_os_str() == "node_modules" || c.as_os_str() == "target") { continue }
            if let Ok(s) = fs::read_to_string(e.path()) { out.push(s) }
        }
    }
    out
}

fn has(hay: &[String], needle: &str) -> bool {
    hay.iter().any(|s| s.contains(needle))
}

/// Quoted either way, so a bare word inside an unrelated identifier does not
/// count as an implementation.
fn has_quoted(hay: &[String], needle: &str) -> bool {
    has(hay, &format!("\"{needle}\"")) || has(hay, &format!("'{needle}'"))
}

/// Evidence that a library composes a multi-word literal rather than writing
/// it. Not proof, which is why the caller reports `Inconclusive`.
fn composed(hay: &[String], value: &str) -> bool {
    let words: Vec<&str> = value.split_whitespace().collect();
    if words.len() < 3 { return false }
    let (head, tail) = (words[0], words[words.len() - 1]);
    let middle = words[1..words.len() - 1].join(" ");
    has(hay, &middle) && hay.iter().any(|s| {
        s.lines().any(|l| l.contains(head) && (l.contains("${") || l.contains(tail)))
    })
}

pub fn run(ir: &Ir, cfg_path: &Path, out: &Path) -> Result<Vec<Row>> {
    let cfg: Config = serde_json::from_str(&fs::read_to_string(cfg_path)
        .with_context(|| format!("reading {}", cfg_path.display()))?)?;
    let mut rows = Vec::new();

    for repo in cfg.repos.iter().filter(|r| r.enabled) {
        let missing: Vec<_> = repo.paths.iter().filter(|p| !p.exists()).collect();
        if !missing.is_empty() {
            eprintln!("  skip {}: missing {missing:?}", repo.name);
            continue;
        }
        let src = slurp(&repo.paths, &repo.ext);
        // Protobuf messages are checked against the library's own .proto files,
        // never against source. A message named `Message` or `Call` matches as a
        // bare substring in almost any file, which reported whatsapp-rust as
        // implementing three times more of the schema than whatsmeow — the
        // reverse of the truth. `message <Name>` in a schema file is exact.
        let protos = slurp(&repo.proto_paths, "proto");
        // Without this, every WAM event would be judged by whether its bare
        // number appears somewhere, which matches almost anything.
        let does_wam = repo.wam_paths.iter().any(|w| repo.paths.iter().any(|p| p.join(w).exists()));

        for f in &ir.facts {
            if !repo.kinds.iter().any(|k| k == f.kind.as_str()) { continue }
            let state = match (&f.kind, &f.data) {
                (Kind::Wam, Data::Wam { event_id, .. }) =>
                    if !does_wam { State::Missing }
                    else if has(&src, &event_id.to_string()) { State::Covered }
                    else { State::Missing },

                (Kind::Iq, Data::Iq { xmlns, tags, .. }) =>
                    if has_quoted(&src, xmlns) && tags.iter().any(|t| has_quoted(&src, t)) {
                        State::Covered
                    } else { State::Missing },

                (Kind::Const, Data::Const { value, .. }) =>
                    if has(&src, value) { State::Covered }
                    else if composed(&src, value) { State::Inconclusive }
                    else { State::Missing },

                // Only the quoted name counts. The opaque id travels on the
                // wire but is a bare five-digit integer in source, and matching
                // it reported whatsapp-rust as implementing 1,865 of 2,190
                // properties — 85% of a registry no library reads. A number
                // that collides with any array index, timeout or byte count is
                // not evidence of anything.
                (Kind::Ab, Data::Ab { .. }) =>
                    if has_quoted(&src, &f.name) { State::Covered } else { State::Missing },

                (Kind::Proto, _) => {
                    let short = f.name.rsplit('.').next().unwrap_or(&f.name);
                    if protos.is_empty() {
                        // No schema files found: cannot tell, so do not claim.
                        State::Inconclusive
                    } else if has(&protos, &format!("message {short} "))
                        || has(&protos, &format!("message {short}{{"))
                        || has(&protos, &format!("message {short}\n")) {
                        State::Covered
                    } else { State::Missing }
                }

                _ => State::Inconclusive,
            };
            rows.push(Row { repo: repo.name.clone(), id: f.id.clone(),
                            kind: f.kind.as_str().to_string(), name: f.name.clone(), state });
        }

        write_issue(ir, repo, &rows, out)?;
    }

    fs::create_dir_all(out)?;
    fs::write(out.join("coverage.json"), serde_json::to_string_pretty(&rows)? + "\n")?;
    Ok(rows)
}

/// One issue per repo per revision, never more. At roughly 900 releases a year
/// anything else is a flood, and a flood is indistinguishable from spam.
fn write_issue(ir: &Ir, repo: &Repo, rows: &[Row], out: &Path) -> Result<()> {
    let mine: Vec<_> = rows.iter().filter(|r| r.repo == repo.name).collect();
    let miss: Vec<_> = mine.iter().filter(|r| r.state == State::Missing).collect();
    let unsure = mine.iter().filter(|r| r.state == State::Inconclusive).count();
    if miss.is_empty() { return Ok(()) }

    let by_id: BTreeMap<&str, &Fact> = ir.facts.iter().map(|f| (f.id.as_str(), f)).collect();
    let mut by_kind: BTreeMap<&str, Vec<&&Row>> = BTreeMap::new();
    for m in &miss { by_kind.entry(m.kind.as_str()).or_default().push(m) }

    let mut b = String::new();
    b.push_str(&format!("# jigger: {} facts missing as of {}\n\n", miss.len(), ir.revision));
    b.push_str(&format!("Generated from WhatsApp Web revision `{}`.\n\n", ir.revision));
    b.push_str(&format!("{} of {} tracked facts are not present in this repository.\n\n", miss.len(), mine.len()));
    b.push_str("| kind | missing | tracked |\n|---|---|---|\n");
    for (k, v) in &by_kind {
        let tracked = mine.iter().filter(|m| m.kind == *k).count();
        b.push_str(&format!("| {k} | {} | {tracked} |\n", v.len()));
    }
    if unsure > 0 {
        b.push_str(&format!(
            "\n{unsure} further fact(s) appear to be built at runtime rather than written as \
             literals, so the scan cannot decide either way. They are excluded from the list \
             below rather than reported as gaps.\n"));
    }
    for (k, v) in &by_kind {
        b.push_str(&format!("\n### {k}\n\n"));
        for m in v.iter().take(repo.max_per_kind) {
            b.push_str(&format!("- `{}` — {}\n", m.id, m.name));
            if let Some(f) = by_id.get(m.id.as_str()) {
                b.push_str(&format!("  evidence: `{}` matching `{}`\n", f.evidence.module, f.evidence.matches));
            }
        }
        if v.len() > repo.max_per_kind {
            b.push_str(&format!("\n_and {} more._\n", v.len() - repo.max_per_kind));
        }
    }
    b.push_str("\n---\nAll of these are derived from bundle analysis alone and have not been \
                confirmed against live traffic. Evidence is content-addressed, so every match \
                can be re-verified against any archived revision.\n");

    let dir = out.join("issues");
    fs::create_dir_all(&dir)?;
    fs::write(dir.join(format!("{}-{}.md", repo.name, ir.revision)), b)?;
    Ok(())
}
