import type { Metadata } from "next";
import { Scroll } from "@/components/ui";
import { DataError } from "@/components/data-error";
import { DiffView } from "@/components/diff-view";
import { getDiff, getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";

export const metadata: Metadata = { title: "Revision diff" };

export default async function DiffPage() {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const diff = getDiff();

  // Which diff entries still exist in the loaded snapshot (so links don't 404).
  const present: string[] = [];
  for (const group of [diff.added, diff.removed]) {
    for (const entries of Object.values(group)) {
      for (const e of entries) if (res.snap.factMap.has(e.id)) present.push(e.id);
    }
  }

  return (
    <Scroll>
      <DiffView diff={diff} revisions={diff.revisions} existing={present} />
    </Scroll>
  );
}
