import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FactDetail } from "@/components/fact-detail";
import { DataError } from "@/components/data-error";
import { FactIdLine } from "@/components/fact-parts";
import { Scroll } from "@/components/ui";
import { getSnapshotResult, getTypeIndex } from "@/lib/data";
import { idFromSlug } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";

type Params = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: idFromSlug("appstate", slug) };
}

export default async function DetailPage({ params }: Params) {
  const { slug } = await params;
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const fact = res.snap.factMap.get(idFromSlug("appstate", slug));
  if (!fact) notFound();

  return (
    <Scroll>
      <div className="flex flex-col gap-2 px-5 pt-5">
        <FactIdLine id={fact.id} kind="appstate" />
        <span className="text-lg text-fg">{fact.name}</span>
      </div>
      <div className="px-5 py-4">
        <FactDetail fact={fact} types={getTypeIndex(res.snap)} revision={res.snap.ir.revision} revisions={res.snap.ir.revisions ?? []} />
      </div>
    </Scroll>
  );
}
