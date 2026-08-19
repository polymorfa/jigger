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
import { listOf, metaOf, termsOf } from "./lib/fact-view.mjs";

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

/**
 * Short type name -> the fact it names.
 *
 * Two questions need this and neither can be answered from one fact. A schema
 * links a field's type to the message it points at, and the expandable tree
 * resolves that type to its fields when you open it. Both are lookups against
 * the whole corpus, which is precisely the kind of thing a reader should not be
 * downloading 12 MB to do.
 *
 * Ambiguous names are dropped rather than resolved to an arbitrary one of
 * several: six messages are called `ImageMessage`, and a link to the wrong one
 * is worse than no link, because it looks right.
 */
const types = new Map();
for (const f of ir.facts) {
  const short = f.name.split(".").pop();
  if (!short || short.length < 4) continue;
  if (types.has(short)) {
    types.set(short, null);
    continue;
  }
  types.set(short, f);
}
for (const [k, f] of types) {
  if (!f) {
    types.delete(k);
    continue;
  }
  // `[kind, id, slug]`, with the slug omitted when it is the id body with the
  // one substitution a filename needs. That is the common case, and spelling it
  // out for every entry doubled the file for nothing.
  const body = f.id.slice(f.kind.length + 1);
  const slug = slugOf.get(f.id);
  types.set(k, slug === body.replace(/\//g, "~") ? [f.kind, f.id] : [f.kind, f.id, slug]);
}
writeFileSync(join(out, "types.json"), JSON.stringify(Object.fromEntries(types)));
console.log(`  types     ${String(types.size).padStart(6)}`);

/**
 * Short name -> proto message, first writer wins.
 *
 * Deliberately laxer than `types.json`, and for a different job. A *link* to
 * the wrong `ImageMessage` is a lie, so ambiguity is dropped there. But
 * *expanding* a field typed `Message` has to show some Message or the tree is
 * useless — 80 of them share a short name, and refusing to expand any leaves
 * the schema flat, which is the thing the tree exists to fix.
 */
const protoTypes = new Map();
for (const f of ir.facts) {
  if (f.kind !== "proto") continue;
  const short = f.name.split(".").pop();
  if (!short || protoTypes.has(short)) continue;
  const body = f.id.slice(f.kind.length + 1);
  const slug = slugOf.get(f.id);
  protoTypes.set(short, slug === body.replace(/\//g, "~") ? [f.id] : [f.id, slug]);
}
writeFileSync(join(out, "proto-types.json"), JSON.stringify(Object.fromEntries(protoTypes)));
console.log(`  proto-ty  ${String(protoTypes.size).padStart(6)}`);

/**
 * Who embeds what — the inverse of the field-type edges.
 *
 * Field types point one way, so "what does `Message` hold" is a lookup and
 * "what holds `ContextInfo`" is unanswerable without inverting the whole set.
 * The second is the question you have when a field changes and you need the
 * blast radius, and it is the one the schema cannot answer on its own.
 *
 * Keyed on the last segment because that is how fields name their types: a
 * field of type `WAE2E.ContextInfo` and one of type `ContextInfo` refer to the
 * same message, and only the short name is common to both.
 */
const embeds = new Map();
for (const f of ir.facts) {
  if (f.kind !== "proto") continue;
  for (const [field, info] of Object.entries(f.data?.fields ?? {})) {
    const key = info?.type_name?.split(".").pop();
    if (!key) continue;
    embeds.set(key, [...(embeds.get(key) ?? []), { message: f.name, field, number: info.number, id: f.id }]);
  }
}
for (const list of embeds.values()) list.sort((a, b) => a.message.localeCompare(b.message));
writeFileSync(join(out, "embedded-by.json"), JSON.stringify(Object.fromEntries(embeds)));
console.log(`  embedded  ${String(embeds.size).padStart(6)}`);

// The inbound dispatch table, read from `WAWebCommsHandleLoggedInStanza`. It
// answers "what happens to a stanza that arrives", which is the question a
// library author has before they have picked a handler to read — and it belongs
// to the revision rather than to any one fact.
if (ir.dispatch) {
  writeFileSync(join(out, "dispatch.json"), JSON.stringify(ir.dispatch));
  console.log(`  dispatch  ${String(ir.dispatch.length).padStart(6)}`);
}

/**
 * The global search index: every fact and every module in one file.
 *
 * One index, because a search that finds `WAWebABPropsConfigs` the fact but not
 * `WAWebABPropsConfigs` the source file is a search you cannot trust to be
 * complete — you end up keeping a second mental index of what it misses.
 */
const search = ir.facts.map((f) => ({
  id: f.id,
  kind: f.kind,
  name: f.name,
  // The module a fact was read out of, as its own facet. It is the answer to
  // "what else came from here", which `contains:` cannot express — evidence is
  // not something the fact carries, it is where the fact came from.
  module: f.evidence?.module,
  meta: metaOf(f).filter(Boolean).map(String),
  terms: termsOf(f),
}));
if (existsSync(modulesDir)) {
  const roles = new Map();
  const note = (name, why) => {
    if (name) roles.set(name, (roles.get(name) ?? new Set()).add(why));
  };
  for (const f of ir.facts) {
    note(f.evidence?.module, "evidence");
    for (const d of f.graph?.deps ?? []) note(d, "import");
    for (const d of f.graph?.dependents ?? []) note(d, "dependent");
    for (const r of f.usage?.readers ?? []) note(r, "reader");
    if (f.data?.kind === "iq") {
      note(f.data.rpc, "rpc");
      for (const r of f.data.responses ?? []) note(r.module, "response");
    }
  }
  for (const [name, why] of roles) {
    // `sub` is what the module is *for*, which is the only thing distinguishing
    // one minified WASmax name from the next in a result list.
    const sorted = [...why].sort();
    search.push({ id: name, kind: "module", name, sub: sorted.join(", "), meta: sorted });
  }
}
writeFileSync(join(out, "search.json"), JSON.stringify(search));
console.log(`  search    ${String(search.length).padStart(6)}`);

// One manifest so a reader can discover what exists without guessing filenames.
writeFileSync(
  join(out, "kinds.json"),
  JSON.stringify(
    [...byKind.entries()]
      .map(([kind, rows]) => ({ kind, count: rows.length }))
      .sort((a, b) => a.kind.localeCompare(b.kind)),
  ),
);

// The handful of numbers the overview leads with, so arriving at the front page
// does not mean downloading the 642 KB A/B index to count one of them.
const ab = byKind.get("ab") ?? [];
writeFileSync(
  join(out, "summary.json"),
  JSON.stringify({
    revision: ir.revision,
    facts: ir.facts.length,
    kinds: Object.fromEntries([...byKind.entries()].map(([k, rows]) => [k, rows.length])),
    ab: { total: ab.length, unwired: ab.filter((r) => r.list.reads === 0).length },
  }),
);
console.log(`  ${total} facts indexed across ${byKind.size} kinds -> ${out}`);
