"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { VirtualRows } from "@/components/virtual-rows";

export type ModuleRow = { name: string; facts: number };

/**
 * The module sidebar.
 *
 * Filtered client-side over the whole list rather than paged: it is a few
 * thousand names and the useful query is usually a fragment in the middle
 * ("Wam", "Blocklist"), which a prefix-only search would never find.
 */
export function ModuleList({ rows }: { rows: ModuleRow[] }) {
  const [q, setQ] = useState("");
  const pathname = usePathname();
  const active = decodeURIComponent(pathname.replace(/^\/source\//, ""));

  const shown = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t ? rows.filter((r) => r.name.toLowerCase().includes(t)) : rows;
  }, [rows, q]);

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-hair p-1.5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="filter modules…"
          className="w-full border border-hair bg-ground px-2 py-1 text-sm outline-none focus:border-brand"
        />
      </div>
      <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
        <span>modules cited by a fact</span>
        <span className="data tnum text-fg-faint">{shown.length}</span>
      </div>
      <div className="min-h-0 flex-1">
        <VirtualRows
          items={shown}
          rowHeight={26}
          getKey={(r) => r.name}
          renderRow={(r) => {
            const on = r.name === active;
            return (
              <Link
                href={`/source/${encodeURIComponent(r.name)}`}
                className={`flex h-[26px] items-center justify-between gap-2 border-b border-hair px-2.5 ${
                  on ? "bg-brand-weak" : "hover:bg-surface-2"
                }`}
              >
                <span className="data truncate text-xs text-fg">{r.name}</span>
                <span className="data tnum shrink-0 text-xs text-fg-faint">{r.facts}</span>
              </Link>
            );
          }}
        />
      </div>
    </div>
  );
}
