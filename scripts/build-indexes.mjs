/**
 * Per-kind index files, so no page ever needs the whole ledger.
 *
 * `ir.json` is 12 MB and exists because a server reads it. A list page needs a
 * name, an id and the attribute line under it — a few dozen bytes per fact —
 * and a detail page needs exactly one fact. Splitting the ledger by kind is what
 * lets both come from a CDN instead of a function.
 *
 *   build-indexes.mjs <ir.json> <out-dir>
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { metaOf } from "./lib/fact-view.mjs";

const [ir_path, out] = process.argv.slice(2);
if (!ir_path || !out) {
  console.error("usage: build-indexes.mjs <ir.json> <out-dir>");
  process.exit(1);
}

const ir = JSON.parse(readFileSync(ir_path, "utf8"));
mkdirSync(out, { recursive: true });

const byKind = new Map();
for (const f of ir.facts) {
  const row = {
    id: f.id,
    name: f.name,
    // The same attribute line the search results show. Derived once, in
    // fact-view.mjs, so a list row and a result row cannot disagree.
    meta: metaOf(f).filter(Boolean).map(String),
  };
  byKind.set(f.kind, [...(byKind.get(f.kind) ?? []), row]);
}

let total = 0;
for (const [kind, rows] of byKind) {
  // Sorted here rather than in the browser: the order is a property of the data
  // and every reader would otherwise sort the same list again.
  rows.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
  writeFileSync(join(out, `${kind}.json`), JSON.stringify(rows));
  total += rows.length;
  console.log(`  ${kind.padEnd(9)} ${String(rows.length).padStart(6)}`);
}

// The source browser lists modules, not facts, so it needs its own index —
// every module in the payload, with how many facts were read out of it.
const modulesDir = join(out, "..", "modules");
if (existsSync(modulesDir)) {
  const cited = new Map();
  for (const f of ir.facts) {
    const m = f.evidence?.module;
    if (m) cited.set(m, (cited.get(m) ?? 0) + 1);
  }
  const modules = readdirSync(modulesDir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => f.slice(0, -3))
    .sort()
    .map((name) => ({ name, facts: cited.get(name) ?? 0 }));
  writeFileSync(join(out, "modules.json"), JSON.stringify(modules));
  console.log(`  modules   ${String(modules.length).padStart(6)}`);
}

// One manifest so a reader can discover what exists without guessing filenames.
writeFileSync(
  join(out, "kinds.json"),
  JSON.stringify(
    [...byKind.entries()]
      .map(([kind, rows]) => ({ kind, count: rows.length }))
      .sort((a, b) => a.kind.localeCompare(b.kind)),
  ),
);
console.log(`  ${total} facts indexed across ${byKind.size} kinds -> ${out}`);
