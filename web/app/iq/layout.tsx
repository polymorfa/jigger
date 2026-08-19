"use client";

import { IqList, type IqGroup } from "@/components/iq-list";
import { MasterDetail } from "@/components/master-detail";

export default function IqLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="iq"
      title={(rows) => `IQ operations · ${new Set(rows.map((r) => r.list.ns)).size} namespaces`}
      render={(rows) => {
        // Grouped by namespace, because that is the axis the protocol itself is
        // organised on — an `xmlns` is a subsystem.
        const byNs = new Map<string, IqGroup>();
        for (const r of rows) {
          const g = byNs.get(r.list.ns) ?? { xmlns: r.list.ns, items: [] };
          g.items.push({ id: r.id, name: r.name, type: r.list.type });
          byNs.set(r.list.ns, g);
        }
        const groups = [...byNs.values()].sort((a, b) => a.xmlns.localeCompare(b.xmlns));
        for (const g of groups) g.items.sort((a, b) => a.name.localeCompare(b.name));
        return <IqList groups={groups} />;
      }}
    >
      {children}
    </MasterDetail>
  );
}
