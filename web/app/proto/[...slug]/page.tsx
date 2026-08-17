import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FactDetail } from "@/components/fact-detail";
import { Scroll } from "@/components/ui";
import { DataError } from "@/components/data-error";
import { FactIdLine } from "@/components/fact-parts";
import { getSnapshotResult, getTypeIndex } from "@/lib/data";
import { browseHref, idFromSlug } from "@/lib/ids";
import { splitName } from "@/lib/proto-tree";
import { sourceLabel } from "@/lib/source";
import { buildTree } from "@/lib/proto-graph";
import { isProto } from "@/lib/types";

type Params = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return { title: idFromSlug("proto", slug) };
}

export default async function ProtoDetailPage({ params }: Params) {
  const { slug } = await params;
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const { snap } = res;
  const fact = snap.factMap.get(idFromSlug("proto", slug));
  if (!fact || !isProto(fact)) notFound();

  const segs = splitName(fact.name);

  const fieldCount = Object.keys(fact.data.fields).length;

  return (
    <Scroll>
      <div className="flex max-w-[var(--reading)] flex-col gap-4 px-5 py-5">
        <div className="flex flex-col gap-2">
          <FactIdLine id={fact.id} kind="proto" />
          <nav className="data flex flex-wrap items-center text-xs text-fg-faint">
            {segs.map((seg, i) => {
              const partial = "proto:" + segs.slice(0, i + 1).join(".");
              const isSelf = i === segs.length - 1;
              const exists = snap.factMap.has(partial);
              return (
                <span key={i} className="flex items-center">
                  {i > 0 ? <span className="px-0.5">.</span> : null}
                  {isSelf ? (
                    <span className="text-fg-muted">{seg}</span>
                  ) : exists ? (
                    <Link href={browseHref("proto", partial)} className="link">
                      {seg}
                    </Link>
                  ) : (
                    <span>{seg}</span>
                  )}
                </span>
              );
            })}
          </nav>
          <div className="data flex flex-wrap items-center gap-4 text-xs text-fg-faint">
            <span className="tnum">{fieldCount} fields</span>
            <span>module {fact.data.module}</span>
          </div>
        </div>

      </div>
      <FactDetail
        fact={fact}
        types={getTypeIndex(res.snap)}
        revision={res.snap.ir.revision} revisions={res.snap.ir.revisions ?? []}
        tree={buildTree(fact, res.snap.protoByShortName)}
        embeddedBy={res.snap.embeddings.get(fact.name.split(".").pop() ?? "") ?? []}
      />
    </Scroll>
  );
}
