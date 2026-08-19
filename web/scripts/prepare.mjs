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
import { metaOf, termsOf } from "../../scripts/lib/fact-view.mjs";

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

  // A token is required for a private repository and harmless for a public one.
  // Raw would 404 on private indistinguishably from a missing file, which is
  // the kind of failure that costs an afternoon.
  const token = process.env.JIGGER_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  for (const file of ["ir.json", "revision.json", "manifest.json", "diff.json", "history.json", "vectors.json"]) {
    const url = token
      ? `https://api.github.com/repos/${repo}/contents/${file}?ref=${ref}`
      : `https://raw.githubusercontent.com/${repo}/${ref}/${file}`;
    try {
      const res = await fetch(url, {
        headers: token
          ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.raw" }
          : {},
      });
      if (!res.ok) continue;
      writeFileSync(join(dir, file), Buffer.from(await res.arrayBuffer()));
      got++;
    } catch {
      // A missing optional file is normal — `history.json` only exists once the
      // history walk has run, and the app renders without it.
    }
  }
  console.log(`[prepare] fetched ${got} file(s) from ${repo}@${ref}`);
  if (got === 0) {
    // Configured but empty means misconfiguration — a wrong ref, a private repo
    // with no token, a branch that has not been seeded. The app degrades to an
    // honest error panel on every page, which is the right behaviour at runtime
    // and the wrong one for a deploy: better a build that fails than a site
    // that ships looking broken.
    throw new Error(
      `[prepare] no payload at ${repo}@${ref}. Check NEXT_PUBLIC_JIGGER_REF, ` +
        `and set JIGGER_GITHUB_TOKEN if the repository is private.`,
    );
  }
  return true;
}

function buildSearchIndex() {
  const irPath = join(webRoot, "public", "data", "ir.json");
  if (!existsSync(irPath)) {
    console.warn(`[prepare] ir.json not found at ${irPath}; skipping search index`);
    return;
  }
  const ir = JSON.parse(readFileSync(irPath, "utf8"));
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
