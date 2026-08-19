"use client";

import { MasterDetail } from "@/components/master-detail";
import { WamTable, type WamRow } from "@/components/wam-table";

export default function WamLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="wam"
      title="WAM analytics events"
      render={(rows) => {
        // By event id, which is the number that goes on the wire and the one
        // you have in hand when you are staring at a capture.
        const table: WamRow[] = rows
          .map((r) => ({ id: r.id, eventId: r.list.event, name: r.name, fieldCount: r.list.fields }))
          .sort((a, b) => a.eventId - b.eventId);
        return <WamTable rows={table} />;
      }}
    >
      {children}
    </MasterDetail>
  );
}
