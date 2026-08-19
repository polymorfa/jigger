import { IqList, type IqGroup } from "@/components/iq-list";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";
import { isIq } from "@/lib/types";

export default async function IqLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const facts = res.snap.byKind.get("iq")!.filter(isIq);
  const byNs = new Map<string, IqGroup>();
  for (const f of facts) {
    let g = byNs.get(f.data.xmlns);
    if (!g) {
      g = { xmlns: f.data.xmlns, items: [] };
      byNs.set(f.data.xmlns, g);
    }
    g.items.push({
      id: f.id,
      name: f.name,
      type: f.data.type,
    });
  }
  const groups = [...byNs.values()].sort((a, b) => a.xmlns.localeCompare(b.xmlns));
  for (const g of groups) g.items.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[var(--pane)] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>IQ operations · {groups.length} namespaces</span>
          <span className="data tnum text-fg-faint">{facts.length}</span>
        </div>
        <div className="min-h-0 flex-1">
          <IqList groups={groups} />
        </div>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
