"use client";

import { AbTable, type AbRow } from "@/components/ab-table";
import { MasterDetail } from "@/components/master-detail";

export default function AbLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="ab"
      // Unwired properties are the interesting count: registered but read by
      // nothing means a feature gated ahead of the code that uses it.
      title={(rows) => `A/B properties · ${rows.filter((r) => r.list.reads === 0).length} unwired`}
      render={(rows) => {
        const table: AbRow[] = rows.map((r) => ({
          id: r.id,
          name: r.name,
          opaque_id: r.list.oid,
          type: r.list.type,
          read_count: r.list.reads,
        }));
        return <AbTable rows={table} types={[...new Set(table.map((r) => r.type))].sort()} />;
      }}
    >
      {children}
    </MasterDetail>
  );
}
