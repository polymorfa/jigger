"use client";

import Link from "next/link";
import { MasterDetail } from "@/components/master-detail";
import { browseHref } from "@/lib/ids";

/**
 * Inbound stanzas: what the server sends us, grouped by root tag.
 *
 * Grouped by root because that is what a library dispatches on. The split that
 * matters is inside each group: a *response* answers something we sent, while a
 * *notification* is server-initiated with nothing to pair against — which is
 * exactly why those get missed, since nothing in a library's outbound code
 * hints that the stanza exists.
 */
export default function SigLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="sig"
      title={(rows) => `inbound · ${rows.filter((r) => !r.list.answers).length} server-initiated`}
      render={(rows) => {
        const byRoot = new Map<string, typeof rows>();
        for (const f of rows) byRoot.set(f.list.root, [...(byRoot.get(f.list.root) ?? []), f]);
        const groups = [...byRoot.entries()].sort((a, b) => b[1].length - a[1].length);
        return (
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {groups.map(([root, items]) => (
              <div key={root}>
                <div className="sticky top-0 border-b border-hair bg-surface-2 px-2.5 py-1 text-xs text-fg-muted">
                  <span className="data">&lt;{root}&gt;</span> ·{" "}
                  <span className="tnum">{items.length}</span>
                </div>
                <ul>
                  {[...items]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((f) => (
                      <li key={f.id} className="border-b border-hair">
                        <Link
                          href={browseHref("sig", f.id)}
                          className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
                        >
                          <span className="min-w-0 truncate text-sm text-fg">{f.name}</span>
                          <span className="shrink-0 text-xs text-fg-faint">
                            {f.list.answers ? "response" : "server-initiated"}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        );
      }}
    >
      {children}
    </MasterDetail>
  );
}
