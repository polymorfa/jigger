import { AbTable, type AbRow } from "@/components/ab-table";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";
import { isAb } from "@/lib/types";

export default async function AbLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const facts = res.snap.byKind.get("ab")!.filter(isAb);
  const rows: AbRow[] = facts.map((f) => ({
    id: f.id,
    name: f.name,
    opaque_id: f.data.opaque_id,
    type: f.data.type,
    read_count: (f.usage?.read_count ?? 0),
  }));
  const types = [...new Set(rows.map((r) => r.type))].sort();
  const unwired = rows.filter((r) => r.read_count === 0).length;

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[46%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[440px] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>A/B properties · {unwired} unwired</span>
          <span className="data tnum text-fg-faint">{rows.length}</span>
        </div>
        <div className="min-h-0 flex-1">
          <AbTable rows={rows} types={types} />
        </div>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
