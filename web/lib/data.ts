import { browseHref } from "./ids";
import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cookies } from "next/headers";
import { buildLastSegmentIndex, type ProtoName } from "./proto-tree";
import { DataSourceError, loadIr } from "./load-ir";
import {
  type DataSource,
  makeGithubSource,
  REF_COOKIE,
  SRC_COOKIE,
  sourceKey,
} from "./source";
import { buildEmbeddings, type Embedding } from "@/lib/proto-graph";
import type {
  CoveragePivot,
  CoverageRow,
  CoverageState,
  Diff,
  Fact,
  FactKind,
  Ir,
} from "./types";
import { FACT_KINDS } from "./types";

export { REPOS } from "./constants";

// ============================================================================
// Source-aware snapshot (the generated IR). One immutable Snapshot per source
// key, cached for the process lifetime.
// ============================================================================

export type Snapshot = {
  source: DataSource;
  ir: Ir;
  facts: Fact[];
  factMap: Map<string, Fact>;
  byKind: Map<FactKind, Fact[]>;
  kindCounts: Record<FactKind, number>;
  protoNames: ProtoName[];
  protoLastSeg: Map<string, ProtoName[]>;
  /** Who embeds what — the inverse of the field-type edges. */
  embeddings: Map<string, Embedding[]>;
  /** Short message name -> fact, for walking field types into their messages. */
  protoByShortName: Map<string, Fact>;
};

function buildSnapshot(ir: Ir, source: DataSource): Snapshot {
  const factMap = new Map<string, Fact>();
  const byKind = new Map<FactKind, Fact[]>();
  for (const k of FACT_KINDS) byKind.set(k, []);
  for (const f of ir.facts) {
    factMap.set(f.id, f);
    byKind.get(f.kind)?.push(f);
  }
  const kindCounts = {} as Record<FactKind, number>;
  for (const k of FACT_KINDS) kindCounts[k] = byKind.get(k)!.length;

  const protoNames: ProtoName[] = byKind.get("proto")!.map((f) => ({ id: f.id, name: f.name }));

  return {
    source,
    ir,
    facts: ir.facts,
    factMap,
    byKind,
    kindCounts,
    protoNames,
    protoLastSeg: buildLastSegmentIndex(protoNames),
    embeddings: buildEmbeddings(ir.facts),
    // First writer wins. Two messages can share a last segment, and pointing at
    // an arbitrary one would silently expand the wrong schema.
    protoByShortName: ir.facts.reduce((m: Map<string, Fact>, f: Fact) => {
      const short = f.name.split(".").pop();
      if (f.kind === "proto" && short && !m.has(short)) m.set(short, f);
      return m;
    }, new Map<string, Fact>()),
  };
}

const snapshotCache = new Map<string, Snapshot>();

// Resolve the active source from cookies set by the source control. Defaults to
// the bundled local snapshot.
async function resolveSource(): Promise<DataSource> {
  const c = await cookies();
  if (c.get(SRC_COOKIE)?.value === "github") {
    const gh = makeGithubSource(c.get(REF_COOKIE)?.value);
    if (gh) return gh;
  }
  return { kind: "local" };
}

export async function getSnapshot(): Promise<Snapshot> {
  const source = await resolveSource();
  const key = sourceKey(source);
  const hit = snapshotCache.get(key);
  if (hit) return hit;
  const ir = await loadIr(source);
  const snap = buildSnapshot(ir, source);
  snapshotCache.set(key, snap);
  return snap;
}

export type SnapshotResult =
  | { ok: true; snap: Snapshot }
  | { ok: false; reason: DataSourceError["reason"]; message: string; source: DataSource };

// Never throws for expected data-source failures — pages render an honest error
// panel instead of a blank app. (Unexpected errors still propagate to error.tsx.)
export async function getSnapshotResult(): Promise<SnapshotResult> {
  try {
    return { ok: true, snap: await getSnapshot() };
  } catch (e) {
    if (e instanceof DataSourceError) {
      return { ok: false, reason: e.reason, message: e.message, source: e.source };
    }
    throw e;
  }
}

export function isPresentInSnapshot(snap: Snapshot, id: string): boolean {
  return snap.factMap.has(id);
}

// ============================================================================
// Bundled analysis artifacts (diff.json, coverage.json). Source-independent —
// they ship with the app and are read from local public/data.
// ============================================================================

const DATA_DIR = join(process.cwd(), "public", "data");
function readLocalJson<T>(file: string): T {
  return JSON.parse(readFileSync(join(DATA_DIR, file), "utf8")) as T;
}

let _diff: Diff | null = null;
let _coverage: CoverageRow[] | null = null;
let _covByFact: Map<string, CoveragePivot> | null = null;

export function getDiff(): Diff {
  if (!_diff) _diff = readLocalJson<Diff>("diff.json");
  return _diff;
}

export function getCoverage(): CoverageRow[] {
  if (!_coverage) _coverage = readLocalJson<CoverageRow[]>("coverage.json");
  return _coverage;
}

export function getCoverageByFact(): Map<string, CoveragePivot> {
  if (_covByFact) return _covByFact;
  const m = new Map<string, CoveragePivot>();
  for (const row of getCoverage()) {
    let piv = m.get(row.id);
    if (!piv) {
      piv = { id: row.id, kind: row.kind, name: row.name, byRepo: {} };
      m.set(row.id, piv);
    }
    piv.byRepo[row.repo] = row.state;
  }
  _covByFact = m;
  return m;
}

export function getCoverageForFact(id: string): Partial<Record<string, CoverageState>> {
  return getCoverageByFact().get(id)?.byRepo ?? {};
}

export type RepoCoverage = { repo: string; covered: number; missing: number; inconclusive: number };

export function getCoverageSummary(): {
  covered: number;
  missing: number;
  inconclusive: number;
  total: number;
  /** Broken out per library: a single total hides which one is behind, which is
   *  the only thing a maintainer actually wants to know. */
  perRepo: RepoCoverage[];
} {
  const per = new Map<string, RepoCoverage>();
  let covered = 0;
  let missing = 0;
  let inconclusive = 0;
  for (const row of getCoverage()) {
    let p = per.get(row.repo);
    if (!p) { p = { repo: row.repo, covered: 0, missing: 0, inconclusive: 0 }; per.set(row.repo, p); }
    if (row.state === "covered") { covered++; p.covered++; }
    else if (row.state === "missing") { missing++; p.missing++; }
    else { inconclusive++; p.inconclusive++; }
  }
  return {
    covered, missing, inconclusive, total: covered + missing + inconclusive,
    perRepo: [...per.values()].sort((a, b) => b.missing - a.missing),
  };
}

/**
 * Short type name -> the page for the fact that defines it.
 *
 * Built once per snapshot so a schema can link every type it mentions,
 * whatever kind it belongs to: a protobuf field pointing at another message, a
 * GraphQL selection naming a concrete type, a WAM field naming an enum. The
 * alternative is a per-kind resolver each of which knows about one arrow.
 *
 * Only names of four characters or more are indexed. Short ones collide with
 * ordinary words in a schema (`key`, `data`, `id`) and a wrong link is worse
 * than none, because it implies a relationship the protocol does not have.
 */
export function getTypeIndex(snap: Snapshot): Map<string, string> {
  const m = new Map<string, string>();
  for (const f of snap.facts) {
    const short = f.name.split(".").pop();
    if (!short || short.length < 4) continue;
    // First writer wins, and duplicates are dropped rather than pointing at an
    // arbitrary one of several same-named types.
    if (m.has(short)) {
      m.set(short, "");
      continue;
    }
    m.set(short, browseHref(f.kind, f.id));
  }
  for (const [k, v] of m) if (!v) m.delete(k);
  return m;
}
