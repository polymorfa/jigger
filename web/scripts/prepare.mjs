// Build-time data preparation. Runs before `dev` and `build`.
//
//   1. Copies the canonical spec markdown from ../spec into content/spec so the
//      app is self-contained (the spec reader reads these at request time).
//   2. Derives a slim search index (id, kind, name per fact) from the 2.7 MB
//      ir.json so the client-side global search and proto tree can fetch a
//      ~200 KB file instead of the whole ledger.
//
// Both outputs are generated (git-ignored); this keeps the client payload small
// and the app buildable from `web/` alone.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const webRoot = join(here, "..");
const repoRoot = join(webRoot, "..");

function syncSpec() {
  const src = join(repoRoot, "spec");
  const dest = join(webRoot, "content", "spec");
  mkdirSync(dest, { recursive: true });
  if (!existsSync(src)) {
    console.warn(`[prepare] spec source not found at ${src}; skipping spec sync`);
    return;
  }
  const files = readdirSync(src).filter((f) => f.endsWith(".md"));
  for (const f of files) {
    copyFileSync(join(src, f), join(dest, f));
  }
  console.log(`[prepare] synced ${files.length} spec file(s) -> content/spec`);
}

/**
 * Pull the ledger from the payload branch when there is no local extraction.
 *
 * A deployment has no cellar store and no `jigger extract` — the facts come
 * from the branch CI publishes them to. Only the small files are fetched here:
 * module source and symbol tables are per-page and are fetched at request time,
 * because bundling ~4,800 modules into a deployment to serve the one someone
 * opens would be 29 MB of dead weight.
 */
async function fetchPayload() {
  const repo = (process.env.NEXT_PUBLIC_JIGGER_REPO ?? "").trim();
  const ref = (process.env.NEXT_PUBLIC_JIGGER_REF ?? "data").trim() || "data";
  if (!repo) return false;

  const dir = join(webRoot, "public", "data");
  mkdirSync(dir, { recursive: true });
  let got = 0;

  for (const file of ["ir.json", "revision.json", "manifest.json", "diff.json", "history.json", "vectors.json"]) {
    const url = `https://raw.githubusercontent.com/${repo}/${ref}/${file}`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      writeFileSync(join(dir, file), Buffer.from(await res.arrayBuffer()));
      got++;
    } catch {
      // A missing optional file is normal — `history.json` only exists once the
      // history walk has run, and the app renders without it.
    }
  }
  console.log(`[prepare] fetched ${got} file(s) from ${repo}@${ref}`);
  return got > 0;
}

function buildSearchIndex() {
  const irPath = join(webRoot, "public", "data", "ir.json");
  if (!existsSync(irPath)) {
    console.warn(`[prepare] ir.json not found at ${irPath}; skipping search index`);
    return;
  }
  const ir = JSON.parse(readFileSync(irPath, "utf8"));
  // What a fact *contains*, not just what it is called.
  //
  // "Every stanza carrying a `lid` attribute", "every message with a
  // `contextInfo` field", "which enum has a `PQ_FALLBACK` variant" are the
  // questions you actually have, and none of them are answerable from ids and
  // names. Terms are deduped and capped per fact: the point is to make a fact
  // findable, and a hundredth field name does not change whether it is.
  const termsOf = (f) => {
    const t = new Set();
    const d = f.data ?? {};
    switch (f.kind) {
      case "proto":
      case "wam":
        for (const [k, v] of Object.entries(d.fields ?? {})) {
          t.add(k);
          if (v?.wire) t.add(v.wire);
          if (v?.enum_ref) t.add(v.enum_ref);
          if (v?.type_name) t.add(String(v.type_name).split(".").pop());
        }
        if (d.channel) t.add(d.channel);
        break;
      case "iq": {
        // Both directions: an attribute you saw on the wire could have been in
        // the request or in any reply arm, and you rarely know which.
        const walk = (n) => {
          if (!n) return;
          t.add(n.tag);
          for (const a of n.attrs ?? []) t.add(a.name);
          for (const c of n.children ?? []) walk(c);
        };
        walk(d.request);
        for (const r of d.responses ?? []) {
          walk(r.node);
          for (const e of r.errors ?? []) t.add(e);
        }
        t.add(d.xmlns);
        break;
      }
      case "enum":
        for (const v of d.variants ?? []) t.add(v.name);
        break;
      case "appstate":
        t.add(d.index_name);
        if (d.collection) t.add(d.collection);
        if (d.value_field) t.add(d.value_field);
        break;
      case "sig":
        t.add(d.root);
        for (const c of d.children ?? []) t.add(c);
        break;
      case "mex":
        t.add(d.operation);
        for (const v of d.variables ?? []) t.add(v);
        if (d.root_field) t.add(d.root_field);
        break;
      case "ab":
        t.add(d.type);
        break;
    }
    t.delete(undefined);
    t.delete("");
    // The fact's own name is already indexed; repeating it wastes bytes.
    t.delete(f.name);
    return [...t].slice(0, 64);
  };

  // The handful of attributes that distinguish one result from the next.
  //
  // A results list showing only a name and a kind makes you open things to find
  // out whether they are the thing you wanted. What that costs is a round trip
  // per candidate; what it takes to avoid is four short strings per fact, which
  // is the difference between scanning and hunting.
  //
  // Pre-formatted rather than structured: the client renders these verbatim, so
  // the shapes of nine different payloads stay here instead of turning into a
  // switch in a component.
  const metaOf = (f) => {
    const d = f.data ?? {};
    const n = (x) => (x ?? []).length;
    switch (f.kind) {
      case "ab": {
        const reads = f.usage?.read_count ?? 0;
        return [
          `id ${d.opaque_id}`,
          d.type,
          `default ${JSON.stringify(d.default)}`,
          // The rollout signal: two shipped defaults that disagree means the
          // value is being decided server-side right now.
          d.default !== d.alt_default ? "split" : null,
          reads === 0 ? "never read" : `read by ${reads}`,
        ];
      }
      case "wam":
        return [
          `event ${d.event_id}`,
          `${Object.keys(d.fields ?? {}).length} fields`,
          d.channel && `channel ${d.channel}`,
        ];
      case "iq":
        return [
          d.xmlns,
          d.type,
          n(d.responses) ? `${n(d.responses)} reply arms` : "no reply parsed",
        ];
      case "proto":
        return [`${Object.keys(d.fields ?? {}).length} fields`, d.module];
      case "enum":
        return [`${n(d.variants)} variants`, d.module];
      case "appstate":
        return [
          d.index_name,
          d.collection ?? "collection unresolved",
          d.version != null ? `v${d.version}` : null,
        ];
      case "mex":
        return [d.operation, `doc ${d.doc_id}`, n(d.variables) ? `${n(d.variables)} vars` : null];
      case "sig":
        return [`<${d.root}>`, d.responds_to ? `answers ${d.responds_to}` : "server-initiated"];
      case "const":
        return [d.group];
      default:
        return [];
    }
  };

  const index = ir.facts.map((f) => ({
    id: f.id,
    kind: f.kind,
    name: f.name,
    // The module a fact was read out of, as its own facet. It is the answer to
    // "what else came from here", which `contains:` cannot express — evidence
    // is not something the fact carries, it is where the fact came from.
    module: f.evidence?.module,
    meta: metaOf(f).filter(Boolean).map(String),
    terms: termsOf(f),
  }));

  // Modules are searchable too. Everything the app can open by name belongs in
  // one index — a search that finds `WAWebABPropsConfigs` the fact but not
  // `WAWebABPropsConfigs` the source file is a search you cannot trust to be
  // complete, and you end up keeping a second mental index of what it misses.
  //
  // Every module the IR mentions in any role is included: where a fact was read,
  // what imports it, what it imports, which modules read an A/B property, and
  // the RPC and response modules behind an IQ. That is the set the source viewer
  // can actually display.
  const modules = new Map();
  const note = (name, why) => {
    if (!name) return;
    const seen = modules.get(name);
    if (seen) seen.add(why);
    else modules.set(name, new Set([why]));
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
  for (const [name, roles] of modules) {
    // `sub` is what the module is *for*, which is the only thing distinguishing
    // one minified WASmax name from the next in a result list.
    index.push({
      id: name,
      kind: "module",
      name,
      sub: [...roles].sort().join(", "),
      meta: [...roles].sort(),
    });
  }
  console.log(`[prepare] ${modules.size} modules indexed alongside ${ir.facts.length} facts`);
  const out = join(webRoot, "public", "data", "search-index.json");
  writeFileSync(out, JSON.stringify(index));
  console.log(`[prepare] wrote search index with ${index.length} entries -> public/data/search-index.json`);
}

syncSpec();
// Local extraction wins: a machine that just ran `jigger extract` should see
// what it extracted, not what CI published an hour ago.
if (!existsSync(join(webRoot, "public", "data", "ir.json"))) {
  await fetchPayload();
}
buildSearchIndex();
