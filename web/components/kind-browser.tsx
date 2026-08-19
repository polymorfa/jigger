"use client";

import Link from "next/link";
import { MasterDetail } from "@/components/master-detail";
import type { IndexRow } from "@/lib/cdn";
import { browseHref } from "@/lib/ids";
import type { FactKind } from "@/lib/types";

/**
 * A plain alphabetical list of a kind, for the kinds that need nothing more.
 *
 * The ones that group or sort by something structural build their own list and
 * hand it to `MasterDetail` directly.
 */
export function KindBrowser<K extends FactKind>({
  kind,
  title,
  children,
  detail,
  sort,
}: {
  kind: K;
  title: string;
  children: React.ReactNode;
  /** The trailing column — what distinguishes one row from the next. */
  detail: (row: IndexRow<K>) => string;
  sort?: (a: IndexRow<K>, b: IndexRow<K>) => number;
}) {
  return (
    <MasterDetail
      kind={kind}
      title={title}
      render={(rows) => (
        <ul className="h-full overflow-y-auto overflow-x-hidden">
          {[...rows]
            .sort(sort ?? ((a, b) => a.name.localeCompare(b.name)))
            .map((f) => (
              <li key={f.id} className="border-b border-hair">
                <Link
                  href={browseHref(kind, f.id)}
                  className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
                >
                  <span className="min-w-0 truncate text-sm text-fg">{f.name}</span>
                  <span className="data shrink-0 text-xs text-fg-faint">{detail(f)}</span>
                </Link>
              </li>
            ))}
        </ul>
      )}
    >
      {children}
    </MasterDetail>
  );
}
