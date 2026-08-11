import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactDetail } from "@/components/fact-detail";
import { Scroll } from "@/components/ui";
import { DataError } from "@/components/data-error";
import { FactIdLine, abValueText } from "@/components/fact-parts";
import { getSnapshotResult, getTypeIndex } from "@/lib/data";
import { idFromSlug } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { isAb } from "@/lib/types";

type Params = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: idFromSlug("ab", slug) };
}

export default async function AbDetailPage({ params }: Params) {
  const { slug } = await params;
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const fact = res.snap.factMap.get(idFromSlug("ab", slug));
  if (!fact || !isAb(fact)) notFound();
  const unwired = (fact.usage?.read_count ?? 0) === 0;

  return (
    <Scroll>
      <div className="flex max-w-[760px] flex-col gap-4 px-5 py-5">
        <div className="flex flex-col gap-2">
          <FactIdLine id={fact.id} kind="ab" />
          <span className="text-lg text-fg">{fact.name}</span>
        </div>

        {/* the two things that give an opaque id meaning */}
        <div className="flex flex-wrap divide-x divide-hair border border-hair bg-surface">
          <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
            <span className="text-xs text-fg-muted">read_count</span>
            <span className={"data tnum text-xl " + (unwired ? "text-missing" : "text-fg")}>
              {(fact.usage?.read_count ?? 0)}
            </span>
            {unwired ? (
              <span className="text-2xs text-missing">registered but unwired</span>
            ) : (
              <span className="text-2xs text-fg-faint">modules that read it</span>
            )}
          </div>
          <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
            <span className="text-xs text-fg-muted">opaque_id</span>
            <span className="data tnum text-xl text-fg">{fact.data.opaque_id}</span>
            <span className="text-2xs text-fg-faint">wire identifier</span>
          </div>
          <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
            <span className="text-xs text-fg-muted">type · defaults</span>
            <span className="data text-md text-fg">{fact.data.type}</span>
            <span className="data text-2xs text-fg-faint">
              {abValueText(fact.data.default)}
              {abValueText(fact.data.default) !== abValueText(fact.data.alt_default)
                ? ` / ${abValueText(fact.data.alt_default)}`
                : ""}
            </span>
          </div>
        </div>

        <section className="flex flex-col gap-1.5">
          <h2 className="text-sm font-semibold text-fg-muted">IR</h2>
        </section>
      </div>
      <FactDetail fact={fact} types={getTypeIndex(res.snap)} revision={res.snap.ir.revision} revisions={res.snap.ir.revisions ?? []} />
    </Scroll>
  );
}
