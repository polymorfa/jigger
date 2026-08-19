"use client";

import { MasterDetail } from "@/components/master-detail";
import { ProtoTree } from "@/components/proto-tree";

export default function ProtoLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="proto"
      title="Protobuf messages"
      render={(rows) =>
        rows.length === 0 ? (
          <p className="px-3 py-3 text-sm text-fg-faint">
            No protobuf messages in this revision’s payload.
          </p>
        ) : (
          <ProtoTree names={rows.map((r) => ({ id: r.id, name: r.name }))} />
        )
      }
    >
      {children}
    </MasterDetail>
  );
}
