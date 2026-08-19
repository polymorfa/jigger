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
import { listOf, metaOf } from "./lib/fact-view.mjs";

const [ir_path, out] = process.argv.slice(2);
if (!ir_path || !out) {
  console.error("usage: build-indexes.mjs <ir.json> <out-dir>");
  process.exit(1);
}

const ir = JSON.parse(readFileSync(ir_path, "utf8"));
mkdirSync(out, { recursive: true });

/**
 * The filename each fact was written to, read rather than re-derived.
 *
 * The rule lives in Rust — printable characters mapped, then a 96-byte cap with
 * an FNV suffix — and porting it would be a second implementation of something
 * that has to agree exactly. Reading the directory and matching on `id` cannot
 * drift, and costs one pass over files that are 1.7 KB each.
 */
const slugOf = new Map();
const irDir = join(out, "..", "ir");
if (existsSync(irDir)) {
  for (const kind of readdirSync(irDir)) {
    const dir = join(irDir, kind);
    for (const file of readdirSync(dir)) {
      if (!file.endsWith(".json")) continue;
      try {
        const { id } = JSON.parse(readFileSync(join(dir, file), "utf8"));
        if (id) slugOf.set(id, file.slice(0, -5));
      } catch {
        // A file that will not parse is a broken extraction, not a naming
        // problem; the fact simply has no page until it is fixed.
      }
    }
  }
}

const byKind = new Map();
/**
 * Which facts were read out of which module.
 *
 * The source viewer answers "what did we learn here" as well as "what does it
 * say", and that is a lookup no per-fact file can serve — you would have to
 * open all 5,382 to find the handful that cite one module.
 */
const byModule = new Map();
for (const f of ir.facts) {
  const row = {
    id: f.id,
    name: f.name,
    // Where the full fact lives. Without it a reader has to guess the filename.
    slug: slugOf.get(f.id),
    // The same attribute line the search results show. Derived once, in
    // fact-view.mjs, so a list row and a result row cannot disagree.
    meta: metaOf(f).filter(Boolean).map(String),
    // What the master pane groups, sorts and filters on.
    list: listOf(f),
  };
  byKind.set(f.kind, [...(byKind.get(f.kind) ?? []), row]);

  const from = f.evidence?.module;
  if (from) {
    const refs = byModule.get(from) ?? [];
    refs.push({ id: f.id, kind: f.kind, name: f.name, slug: row.slug });
    byModule.set(from, refs);
  }
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
  const modules = readdirSync(modulesDir)
    .filter((f) => f.endsWith(".js"))
    .map((f) => f.slice(0, -3))
    .sort()
    .map((name) => ({ name, facts: byModule.get(name)?.length ?? 0 }));
  writeFileSync(join(out, "modules.json"), JSON.stringify(modules));
  console.log(`  modules   ${String(modules.length).padStart(6)}`);
}

// One file per module rather than one map of all of them. A source page wants
// the facts for the module it is showing; the combined map is 874 KB, and
// making every reader download all of it to use 300 bytes is the habit this
// whole layout exists to break.
const byModuleDir = join(out, "by-module");
mkdirSync(byModuleDir, { recursive: true });
for (const [name, refs] of byModule) {
  refs.sort((a, b) => a.kind.localeCompare(b.kind) || a.name.localeCompare(b.name));
  writeFileSync(join(byModuleDir, `${name.replace(/\//g, "_")}.json`), JSON.stringify(refs));
}
console.log(`  by-module ${String(byModule.size).padStart(6)}`);

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
