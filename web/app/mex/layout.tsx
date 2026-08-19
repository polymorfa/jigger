"use client";

import Link from "next/link";
import { MasterDetail } from "@/components/master-detail";
import { browseHref } from "@/lib/ids";

/**
 * Persisted GraphQL operations, split by query and mutation.
 *
 * 122 of them, so a plain list is right — this does not need virtualizing and a
 * flat scroll is faster to scan than a tree.
 */
export default function MexLayout({ children }: { children: React.ReactNode }) {
  return (
    <MasterDetail
      kind="mex"
      title="persisted operations"
      render={(rows) => (
        <div className="h-full overflow-y-auto overflow-x-hidden">
          {(["query", "mutation"] as const).map((op) => {
            const items = rows
              .filter((r) => r.list.op === op)
              .sort((a, b) => a.name.localeCompare(b.name));
            return (
              <div key={op}>
                <div className="sticky top-0 border-b border-hair bg-surface-2 px-2.5 py-1 text-xs text-fg-muted">
                  {op} · <span className="tnum">{items.length}</span>
                </div>
                <ul>
                  {items.map((f) => (
                    <li key={f.id} className="border-b border-hair">
                      <Link
                        href={browseHref("mex", f.id)}
                        className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
                      >
                        <span className="min-w-0 truncate text-sm text-fg">
                          {f.name.replace(/^WAWeb/, "")}
                        </span>
                        {/* The doc id is the only part that goes on the wire. */}
                        <span className="data tnum shrink-0 text-xs text-fg-faint">{f.list.doc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    >
      {children}
    </MasterDetail>
  );
}
