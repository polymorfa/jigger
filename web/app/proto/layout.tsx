import { ProtoTree } from "@/components/proto-tree";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";

export default async function ProtoLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const count = res.snap.kindCounts.proto;

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[45%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[380px] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>Protobuf messages</span>
          <span className="data tnum text-fg-faint">{count}</span>
        </div>
        <div className="min-h-0 flex-1">
          {count === 0 ? (
            <p className="px-3 py-3 text-sm text-fg-faint">
              No protobuf messages in this snapshot. The proto extractor has not been ported to the Rust
              tooling yet; it will return here once it lands.
            </p>
          ) : (
            <ProtoTree />
          )}
        </div>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
