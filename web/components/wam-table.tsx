"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VirtualRows } from "./virtual-rows";
import { CoverageDots } from "./coverage-chip";
import { browseHref } from "@/lib/ids";
import type { CoverageState } from "@/lib/types";

export type WamRow = {
  id: string;
  eventId: number;
  name: string;
  fieldCount: number;
  byRepo: Partial<Record<string, CoverageState>>;
};

export function WamTable({ rows }: { rows: WamRow[] }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="grid grid-cols-[92px_1fr_46px_66px] items-center gap-2 border-b border-hair-strong bg-surface px-2.5 py-1.5 text-xs text-fg-muted">
        <span>id</span>
        <span>event</span>
        <span className="text-right">flds</span>
        <span className="text-right">cov</span>
      </div>
      <VirtualRows
        items={rows}
        rowHeight={26}
        getKey={(r) => r.id}
        renderRow={(r) => {
          const active = pathname === browseHref("wam", r.id);
          return (
            <Link
              href={browseHref("wam", r.id)}
              className={
                "grid h-[26px] grid-cols-[92px_1fr_46px_66px] items-center gap-2 border-b border-hair px-2.5 " +
                (active
                  ? "bg-accent-weak shadow-[inset_2px_0_0_0_var(--accent)]"
                  : "hover:bg-surface-2")
              }
            >
              <span className="data tnum truncate text-sm text-fg">{r.id}</span>
              <span className="truncate text-sm text-fg-muted">{r.name}</span>
              <span className="data tnum text-right text-sm text-fg-faint">{r.fieldCount}</span>
              <span className="flex justify-end">
                <CoverageDots byRepo={r.byRepo} />
              </span>
            </Link>
          );
        }}
      />
    </div>
  );
}
