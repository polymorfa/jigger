import Link from "next/link";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { browseHref } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { isSig } from "@/lib/types";

/**
 * Inbound stanzas: what the server sends us, grouped by root tag.
 *
 * Grouped by root because that is what a library dispatches on. The split that
 * matters is inside each group: a *response* answers something we sent, while a
 * *notification* is server-initiated with nothing to pair against — which is
 * exactly why those get missed, since nothing in a library's outbound code
 * hints that the stanza exists.
 */
export default async function SigLayout({ children }: { children: React.ReactNode }) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const facts = (res.snap.byKind.get("sig") ?? []).filter(isSig);
  const byRoot = new Map<string, typeof facts>();
  for (const f of facts) {
    const g = byRoot.get(f.data.root) ?? [];
    g.push(f);
    byRoot.set(f.data.root, g);
  }
  const groups = [...byRoot.entries()].sort((a, b) => b[1].length - a[1].length);
  const unpaired = facts.filter((f) => !f.data.responds_to).length;

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[var(--pane)] md:border-b-0 md:border-r">
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>inbound · {unpaired} server-initiated</span>
          <span className="data tnum text-fg-faint">{facts.length}</span>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          {groups.map(([root, items]) => (
            <div key={root}>
              <div className="sticky top-0 border-b border-hair bg-surface-2 px-2.5 py-1 text-xs text-fg-muted">
                <span className="data">&lt;{root}&gt;</span> · <span className="tnum">{items.length}</span>
              </div>
              <ul>
                {items
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((f) => (
                    <li key={f.id} className="border-b border-hair">
                      <Link
                        href={browseHref("sig", f.id)}
                        className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
                      >
                        <span className="truncate text-sm text-fg">{f.name}</span>
                        <span className="shrink-0 text-xs text-fg-faint">
                          {f.data.responds_to ? "response" : "server-initiated"}
                        </span>
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
