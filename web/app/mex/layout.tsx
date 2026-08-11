import Link from "next/link";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { browseHref } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { isMex } from "@/lib/types";

/**
 * Persisted GraphQL operations, split by query and mutation.
 *
 * 122 of them, so a plain list is right — this does not need virtualizing and a
 * flat scroll is faster to scan than a tree.
 */
export default async function MexLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const facts = (res.snap.byKind.get("mex") ?? []).filter(isMex);
  const groups = (["query", "mutation"] as const).map((kind) => ({
    kind,
    items: facts
      .filter((f) => f.data.operation === kind)
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[380px] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>persisted operations</span>
          <span className="data tnum text-fg-faint">{facts.length}</span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {groups.map((g) => (
            <div key={g.kind}>
              <div className="sticky top-0 border-b border-hair bg-surface-2 px-2.5 py-1 text-xs text-fg-muted">
                {g.kind} · <span className="tnum">{g.items.length}</span>
              </div>
              <ul>
                {g.items.map((f) => (
                  <li key={f.id} className="border-b border-hair">
                    <Link
                      href={browseHref("mex", f.id)}
                      className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
                    >
                      <span className="truncate text-sm text-fg">
                        {f.name.replace(/^WAWeb/, "")}
                      </span>
                      {/* The doc id is the only part that goes on the wire. */}
                      <span className="data tnum shrink-0 text-xs text-fg-faint">{f.data.doc_id}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
