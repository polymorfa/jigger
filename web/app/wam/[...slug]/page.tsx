import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactDetail } from "@/components/fact-detail";
import { Scroll } from "@/components/ui";
import { CoverageChip } from "@/components/coverage-chip";
import { DataError } from "@/components/data-error";
import { FactIdLine } from "@/components/fact-parts";
import { REPOS } from "@/lib/constants";
import { getCoverageForFact, getSnapshotResult, getTypeIndex } from "@/lib/data";
import { idFromSlug } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { isWam } from "@/lib/types";

type Params = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: idFromSlug("wam", slug) };
}

export default async function WamDetailPage({ params }: Params) {
  const { slug } = await params;
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const fact = res.snap.factMap.get(idFromSlug("wam", slug));
  if (!fact || !isWam(fact)) notFound();

  const byRepo = getCoverageForFact(fact.id);
  const fieldCount = Object.keys(fact.data.fields).length;

  return (
    <Scroll>
      <div className="flex max-w-[var(--reading)] flex-col gap-4 px-5 py-5">
        <div className="flex flex-col gap-2">
          <FactIdLine id={fact.id} kind="wam" />
          <span className="text-lg text-fg">{fact.name}</span>
          <div className="data flex gap-4 text-xs text-fg-faint">
            <span>event_id {fact.data.event_id}</span>
            <span className="tnum">{fieldCount} fields</span>
          </div>
        </div>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-sm font-semibold text-fg-muted">Fields</h2>
        </section>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-sm font-semibold text-fg-muted">Coverage</h2>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {REPOS.map((repo) => (
              <span key={repo} className="flex items-center gap-2">
                <span className="data text-xs text-fg-muted">{repo}</span>
                <CoverageChip state={byRepo[repo]} />
              </span>
            ))}
          </div>
        </section>
      </div>
      <FactDetail fact={fact} types={getTypeIndex(res.snap)} revision={res.snap.ir.revision} revisions={res.snap.ir.revisions ?? []} />
    </Scroll>
  );
}
