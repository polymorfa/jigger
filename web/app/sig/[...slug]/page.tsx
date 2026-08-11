import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DataError } from "@/components/data-error";
import { FactDetail } from "@/components/fact-detail";
import { FactIdLine } from "@/components/fact-parts";
import { Scroll } from "@/components/ui";
import { getSnapshotResult, getTypeIndex } from "@/lib/data";
import { idFromSlug } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { isSig } from "@/lib/types";

type Params = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: idFromSlug("sig", slug) };
}

export default async function SigDetailPage({ params }: Params) {
  const { slug } = await params;
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const fact = res.snap.factMap.get(idFromSlug("sig", slug));
  if (!fact || !isSig(fact)) notFound();

  return (
    <Scroll>
      <div className="flex flex-col gap-6 px-6 py-5">
        <div className="flex flex-col gap-1.5">
          <h1 className="data text-lg font-semibold tracking-tight">{fact.name}</h1>
          <FactIdLine id={fact.id} kind={fact.kind} />
          <div className="data flex flex-wrap items-center gap-4 text-xs text-fg-faint">
            <span>&lt;{fact.data.root}&gt;</span>
            <span>
              {fact.data.responds_to
                ? `response to ${fact.data.responds_to}`
                : "server-initiated — nothing we send triggers it"}
            </span>
          </div>
        </div>
        <FactDetail fact={fact} types={getTypeIndex(res.snap)} revision={res.snap.ir.revision} revisions={res.snap.ir.revisions ?? []} />
      </div>
    </Scroll>
  );
}
