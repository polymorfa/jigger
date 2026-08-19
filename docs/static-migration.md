# Migration: server-rendered → static, zero functions

**Status:** in progress. Delete this file when the last step lands.

## Why

Every page view is a Vercel Function invocation, and each one parses the 12 MB
`ir.json` to answer a question about one fact. That is ~200–400 ms of CPU and a
few hundred MB of memory to serve 1.7 KB of data.

The app has no state to be stateful about: no users, no writes, no
personalisation. The cookie-backed source selector was the only thing that ever
justified a server, and it is gone. Everything left is a reader of immutable
per-revision data, which is a job for a CDN.

## Target

Static shell, data fetched by the browser from a CDN. Zero functions.

| page | fetches | size |
|---|---|---|
| a fact | `ir/<kind>/<slug>.json` | ~1.7 KB |
| a module | `modules/<n>.js` + `symbols/<n>.json` + `graph/<n>.json` | ~3.8 + ~5 + ~0.6 KB |
| a list | `index/<kind>.json` | tens of KB |

Nothing needs `ir.json`. That file exists only because a server reads it.

### URLs stay as they are

`output: "export"` requires every dynamic route to be enumerated by
`generateStaticParams`, and there are 33,676 of them — 5,382 facts and 28,294
modules. Prerendering that many shells is a 30-minute build to change 78 facts.

So: one static page per section, and a `vercel.json` rewrite maps
`/source/:name` → `/source/index.html`. The client reads the path from
`window.location.pathname`. Rewrites are edge config, not functions, so this
stays free. URLs are unchanged — `/proto/WAE2E.ContextInfo` still works.

**Consequence:** `useParams()` stops working under the rewrite. Every page reads
its own parameter from the pathname. This is the one invasive change.

## Steps

Each step is independently verifiable and leaves the app working.

1. **Per-kind index files.** Emit `index/<kind>.json` (id, name, and the `meta`
   line the search index already computes). List pages read this instead of the
   ledger. `search-index.json` is already 90% of this shape.

2. **Client data layer.** One module: CDN base URL from
   `NEXT_PUBLIC_JIGGER_CDN`, a typed fetch per artifact, an in-memory cache so a
   page that reads the same file twice pays once.

3. **List pages → client.** `/ab`, `/wam`, `/iq`, `/mex`, `/sig`, `/proto`,
   `/enum`, `/appstate`, `/source`. Each reads its index file.

4. **Detail pages → client.** Each reads one per-fact JSON. Path parsed from
   `window.location`, not `useParams`.

5. **Source page → client.** Module, symbols and graph fetched in the browser.
   `rewriteModule`, `memberLine`, `linksForLine` are already pure — they move as
   they are.

6. **Spec pages** stay prerendered: the markdown ships with the app and there
   are five of them.

7. **Delete the server layer.** `proxy.ts`, the source/ref cookies,
   `getSnapshot`, `loadIr`, `lib/payload.ts`, the build-time payload fetch in
   `prepare.mjs`. The 12 MB `ir.json` stops being deployed.

8. **`output: "export"`** plus the rewrite rules. Verify zero `ƒ` routes.

9. **CI:** `pack-data.sh` emits `index/`, and the workflow keeps publishing the
   payload to the `data` branch unchanged.

## Verification

After each step, with the headless-Chrome harness (`/tmp/cdp.mjs`):
no console errors, and the page renders its data. The final check is the route
table showing `○` for everything.

## Risks

- **jsDelivr vs raw.githubusercontent.** raw is rate-limited and not meant to
  serve an app; jsDelivr is a real CDN over the same content. Needs the repo to
  be public. If it stays private, the data has to be copied into `public/`
  instead — 321 MB per deploy, which works but is wasteful.
- **Largest module is 1.2 MB** (`WAWebLottieStoryData`). Same bytes as today —
  the function already fetches it and inlines it — but now visible as a slow
  fetch rather than a slow response.
- **No SSR.** No server-rendered HTML for first paint or crawlers. Acceptable
  for a tool you navigate rather than land on.
