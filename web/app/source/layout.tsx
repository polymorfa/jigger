import { DataError } from "@/components/data-error";
import { ModuleList, type ModuleRow } from "@/components/module-list";
import { getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";

/**
 * Master-detail, like every other browser here.
 *
 * The list is the modules a fact was actually read out of, not all 188k in the
 * bundle — cellar is the right tool for browsing the client wholesale. This is
 * an index of the evidence.
 */
export default async function SourceLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const counts = new Map<string, number>();
  for (const f of res.snap.facts) {
    counts.set(f.evidence.module, (counts.get(f.evidence.module) ?? 0) + 1);
  }
  const rows: ModuleRow[] = [...counts.entries()]
    .map(([name, facts]) => ({ name, facts }))
    .sort((a, b) => b.facts - a.facts || a.name.localeCompare(b.name));

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="h-[42%] w-full min-h-0 shrink-0 border-b border-hair md:h-full md:w-[340px] md:border-b-0 md:border-r">
        <ModuleList rows={rows} />
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
