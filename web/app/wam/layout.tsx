import { WamTable, type WamRow } from "@/components/wam-table";
import { DataError } from "@/components/data-error";
import { getCoverageForFact, getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";
import { isWam } from "@/lib/types";

export default async function WamLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const rows: WamRow[] = res.snap
    .byKind.get("wam")!
    .filter(isWam)
    .map((f) => ({
      id: f.id,
      eventId: f.data.event_id,
      name: f.name,
      fieldCount: Object.keys(f.data.fields).length,
      byRepo: getCoverageForFact(f.id),
    }))
    .sort((a, b) => a.eventId - b.eventId);

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[360px] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>WAM analytics events</span>
          <span className="data tnum text-fg-faint">{rows.length}</span>
        </div>
        <div className="min-h-0 flex-1">
          <WamTable rows={rows} />
        </div>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
