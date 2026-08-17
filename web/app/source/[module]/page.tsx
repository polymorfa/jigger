import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceView } from "@/components/source-view";

import { Scroll } from "@/components/ui";
import { getSnapshotResult } from "@/lib/data";
import { lineOfMatch, loadModule } from "@/lib/module-source";

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

  const src = loadModule(revision, name);
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
  const hit = m ? lineOfMatch(src, m) : null;

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
            {hit && <span className="tnum text-brand">match at line {hit}</span>}
          </div>
      </div>
      <SourceView name={name} src={src} revision={revision} highlight={hit} />
    </div>
  );
}
