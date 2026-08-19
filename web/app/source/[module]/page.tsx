import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceView } from "@/components/source-view";

import { Scroll } from "@/components/ui";
import { getSnapshotResult } from "@/lib/data";
import { fetchModule, lineOfMatch, loadModule, memberLine } from "@/lib/module-source";
import { applyRenames, fetchSymbols, loadSymbols } from "@/lib/module-symbols";
import { ModuleGraphPanel } from "@/components/module-graph";
import { loadModuleGraph } from "@/lib/module-graph";
import { makeGithubSource } from "@/lib/source";
import { rewriteModule } from "@/lib/source-rewrite";

type Params = { params: Promise<{ module: string }>; searchParams: Promise<{ m?: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { module } = await params;
  return { title: decodeURIComponent(module) };
}

/**
 * One module of WhatsApp Web, as shipped.
 *
 * This is what every "source module" reference in the app points at. A claim
 * that cites a module nobody can open is not evidence, it is an assertion.
 */
export default async function SourcePage({ params, searchParams }: Params) {
  const { module } = await params;
  const { m } = await searchParams;
  const name = decodeURIComponent(module);

  const res = await getSnapshotResult();
  if (!res.ok) notFound();
  const revision = res.snap.ir.revision;

  // Disk when there is a cellar store, the payload branch otherwise.
  //
  // The snapshot's own source is not the right thing to ask. `ir.json` is on
  // disk on a deployment too — the build fetched it — so the snapshot reads as
  // local while the modules, which are far too many to bundle, are not there.
  // What decides this is whether a cellar store exists, not where the ledger
  // came from.
  const remote = res.snap.source.kind === "github" ? res.snap.source : makeGithubSource();
  const src = loadModule(revision, name) ?? (remote && (await fetchModule(remote, name)));
  if (src === null) {
    return (
      <Scroll>
        <div className="px-6 py-5">
          <h1 className="data text-lg font-semibold">{name}</h1>
          <p className="mt-2 max-w-prose text-sm text-fg-muted">
            No local copy of revision <span className="data">{revision}</span>. Module source is
            read from the cellar store on disk, so it is unavailable when the app is pointed at a
            remote snapshot. Index the revision with{" "}
            <span className="data">cellar bundle add</span> to read it here.
          </p>
        </div>
      </Scroll>
    );
  }

  // Facts extracted from this module, so the page answers "what did we learn
  // here" as well as "what does it say".
  const cited = res.snap.facts.filter((f) => f.evidence.module === name);
  // `?m=` carries two different things. An evidence pattern is a regex to match;
  // a member name came from a click-through and wants the definition, not the
  // first line that happens to mention it.
  // Two stages. The first is textual — `__d` becomes `define`, the minified
  // require becomes `require` — and is duplicated in Rust so the offsets can be
  // precomputed. The second gives the factory's parameters their names, and
  // cannot be done here: telling the factory's `t` from the `t` of every nested
  // function needs a binder, so the spans are resolved at extraction time and
  // arrive with the symbol table.
  //
  // Which means the table is loaded against the intermediate text and the
  // rendered text is derived from the table. When there is none, the module
  // still renders — as `t, n, r, o, a, i, l`, which is what it says on disk.
  const rewritten = rewriteModule(src);
  const symbols =
    loadSymbols(name, rewritten) ?? (remote ? await fetchSymbols(remote, name, rewritten) : null);
  const shown = symbols ? applyRenames(rewritten, symbols.renames) : rewritten;

  // Who relies on this, and on which export. The direction the source itself
  // cannot answer.
  const graph = await loadModuleGraph(remote ?? res.snap.source, name);

  const isMember = Boolean(m && /^[A-Za-z_$][\w$]*$/.test(m));
  const hit = m ? (isMember ? memberLine(src, m) : lineOfMatch(src, m)) : null;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-col gap-1 border-b border-hair px-4 py-2.5">
          <h1 className="data text-lg font-semibold tracking-tight">{name}</h1>
          <div className="data flex flex-wrap gap-4 text-xs text-fg-faint">
            <span className="tnum">revision {revision}</span>
            <span className="tnum">{src.split("\n").length} lines</span>
            <span className="tnum">
              {cited.length} fact{cited.length === 1 ? "" : "s"} extracted here
            </span>
            {hit && (
              <span className="tnum text-brand">
                {isMember ? `${m} defined at line ${hit}` : `match at line ${hit}`}
              </span>
            )}
          </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <SourceView
            name={name}
            src={shown}
            revision={revision}
            highlight={hit}
            symbols={symbols}
          />
        </div>
        {/* Beside the source, not beneath it: "what relies on this" is read
            while reading the code, not after scrolling past all of it. */}
        {graph && (
          <aside className="w-full shrink-0 overflow-y-auto border-t px-3 py-3 lg:w-[var(--pane)] lg:border-l lg:border-t-0">
            <ModuleGraphPanel graph={graph} />
          </aside>
        )}
      </div>
    </div>
  );
}
