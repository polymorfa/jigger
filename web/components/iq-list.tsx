"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CoverageDots } from "./coverage-chip";
import { browseHref } from "@/lib/ids";
import type { CoverageState, IqType } from "@/lib/types";

export type IqItem = {
  id: string;
  name: string;
  type: IqType;
  byRepo: Partial<Record<string, CoverageState>>;
};
export type IqGroup = { xmlns: string; items: IqItem[] };

const TYPE_LABEL: Record<IqType, string> = { get: "get", set: "set", unknown: "?" };

export function IqList({ groups }: { groups: IqGroup[] }) {
  const pathname = usePathname();
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden">
      {groups.map((g) => (
        <section key={g.xmlns}>
          <div className="sticky top-0 z-10 flex items-baseline justify-between gap-2 border-b border-hair-strong bg-surface px-2.5 py-1">
            <span className="data text-xs text-fg">{g.xmlns}</span>
            <span className="data tnum text-2xs text-fg-faint">{g.items.length}</span>
          </div>
          {g.items.map((it) => {
            const active = pathname === browseHref("iq", it.id);
            return (
              <Link
                key={it.id}
                href={browseHref("iq", it.id)}
                className={
                  "grid grid-cols-[34px_1fr_auto] items-center gap-2 border-b border-hair px-2.5 py-1 " +
                  (active
                    ? "bg-brand-weak shadow-[inset_2px_0_0_0_var(--accent)]"
                    : "hover:bg-surface-2")
                }
              >
                <span className="data text-2xs text-fg-faint" title={`type: ${it.type}`}>
                  {TYPE_LABEL[it.type]}
                </span>
                <span className="min-w-0">
                  <span className="truncate text-sm text-fg">{it.name}</span>
                </span>
                <CoverageDots byRepo={it.byRepo} />
              </Link>
            );
          })}
        </section>
      ))}
    </div>
  );
}
