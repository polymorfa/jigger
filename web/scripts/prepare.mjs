// Build-time data preparation. Runs before `dev` and `build`.
//
//   1. Copies the canonical spec markdown from ../spec into content/spec so the
//      app is self-contained (the spec reader reads these at request time).
//   2. Derives `public/citations.json` — which spec document names which fact —
//      from that markdown, so the browser can read it without re-scanning five
//      documents to render one badge.
//
// Everything else the app displays comes from the CDN at runtime. Nothing about
// a revision is baked into the deployment: the payload is replaced when a new
// release lands, and a build that had inlined it would show the release it was
// built against forever.

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
function buildCitations() {
  const dir = join(webRoot, "content", "spec");
  if (!existsSync(dir)) return;
  const out = {};
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const body = readFileSync(join(dir, file), "utf8");
    const slug = file.replace(/\.md$/, "");
    const title = /^#\s+(.+)$/m.exec(body)?.[1]?.trim() ?? slug;
    const seen = new Set();
    for (const m of body.matchAll(/`([^`]+)`/g)) {
      const token = m[1];
      if (!/^(ab|wam|iq|const|proto|enum|appstate|mex|sig):/.test(token) || seen.has(token)) continue;
      seen.add(token);
      (out[token] ??= []).push({ slug, title });
    }
  }
  writeFileSync(join(webRoot, "public", "citations.json"), JSON.stringify(out));
  console.log(`[prepare] ${Object.keys(out).length} cited fact(s) -> public/citations.json`);
}

syncSpec();
buildCitations();
