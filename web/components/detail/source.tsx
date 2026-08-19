"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { SourceView } from "@/components/source-view";
import { ModuleGraphPanel } from "@/components/module-graph";

import { cached, loadModuleFacts, loadModuleSource, loadRevision } from "@/lib/cdn";
import { loadModuleGraph } from "@/lib/module-graph";
import { lineOfMatch, memberLine } from "@/lib/module-source";
import { loadSymbols } from "@/lib/module-symbols";
import { browseHref } from "@/lib/ids";
import { useQueryParam, useRouteTail } from "@/lib/route";
import { rewriteModule } from "@/lib/source-rewrite";

/**
 * Everything the page shows, as one cached promise.
 *
 * Composed rather than fetched piecemeal so it can be handed to `use()`: React
 * suspends on the identity of a promise, and a new one built each render would
 * suspend forever. The symbol table has to come after the rewrite regardless —
 * it is keyed to the exact bytes the viewer will draw.
 */
function view(name: string) {
  return cached(`view:${name}`, async () => {
    const src = await loadModuleSource(name);
    if (src === null) return null;
    const shown = rewriteModule(src);
    const [symbols, graph, facts] = await Promise.all([
      loadSymbols(name, shown),
      loadModuleGraph(name),
      loadModuleFacts(name),
    ]);
    return { src, shown, symbols, graph, facts: facts ?? [] };
  });
}

function Missing({ name }: { name: string }) {
  return (
    <div className="px-6 py-5">
      <h1 className="data text-lg font-semibold">{name}</h1>
      <p className="mt-2 max-w-prose text-sm text-fg-muted">
        This revision’s payload carries no module by that name. The payload holds the modules the
        app can reach — everything named <span className="data">WA*</span> or{" "}
        <span className="data">MAW*</span> and everything they import — so a name outside that set,
        or a stale link from an older revision, lands here.
      </p>
    </div>
  );
}

function Body({ name, match }: { name: string; match: string | null }) {
  const rev = use(loadRevision());
  const data = use(view(name));
  if (!data) return <Missing name={name} />;
  const { src, shown, symbols, graph, facts } = data;

  // `?m=` carries two different things. An evidence pattern is a regex to match;
  // a member name came from a click-through and wants the definition, not the
  // first line that happens to mention it.
  const isMember = Boolean(match && /^[A-Za-z_$][\w$]*$/.test(match));
  const hit = match ? (isMember ? memberLine(src, match) : lineOfMatch(src, match)) : null;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-col gap-1 border-b border-hair px-4 py-2.5">
        <h1 className="data text-lg font-semibold tracking-tight">{name}</h1>
        <div className="data flex flex-wrap gap-4 text-xs text-fg-faint">
          <span className="tnum">revision {rev.revision}</span>
          <span className="tnum">{shown.split("\n").length} lines</span>
          <span className="tnum">
            {facts.length} fact{facts.length === 1 ? "" : "s"} extracted here
          </span>
          {hit && (
            <span className="tnum text-brand">
              {isMember ? `${match} defined at line ${hit}` : `match at line ${hit}`}
            </span>
          )}
        </div>
        {/* What we learned here, not just what it says. A module that is
            evidence for something should say so where you are reading it. */}
        {facts.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-0.5">
            {facts.slice(0, 24).map((f) => (
              <Link key={f.id} href={browseHref(f.kind, f.id)} className="link data text-xs">
                {f.name}
              </Link>
            ))}
            {facts.length > 24 && (
              <span className="text-xs text-fg-faint">and {facts.length - 24} more</span>
            )}
          </div>
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <SourceView
            name={name}
            src={shown}
            revision={rev.revision}
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

function Waiting({ name }: { name?: string }) {
  return (
    <div className="px-6 py-5">
      <h1 className="data text-lg font-semibold tracking-tight">{name ?? " "}</h1>
      <p className="mt-2 text-sm text-fg-faint">Fetching module source…</p>
    </div>
  );
}

/**
 * One module of WhatsApp Web, as shipped.
 *
 * This is what every "source module" reference in the app points at. A claim
 * that cites a module nobody can open is not evidence, it is an assertion.
 */
export default function SourcePage() {
  const name = useRouteTail("/source/");
  const match = useQueryParam("m");
  if (!name) return <Waiting />;
  return (
    <Suspense fallback={<Waiting name={name} />}>
      <Body name={name} match={match} />
    </Suspense>
  );
}
