"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VirtualRows } from "./virtual-rows";
import { browseHref } from "@/lib/ids";

export type AbRow = {
  id: string;
  name: string;
  opaque_id: number;
  type: string;
  read_count: number;
};

const COLS = "minmax(180px,1.7fr) 96px 60px 62px";
type ReadState = "all" | "unwired" | "wired";
type Sort = "name" | "reads";

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        "border px-2 py-[2px] text-xs " +
        (active ? "border-hair-strong bg-surface-3 text-fg" : "border-hair bg-surface text-fg-faint hover:text-fg-muted")
      }
    >
      {children}
    </button>
  );
}

export function AbTable({ rows, types }: { rows: AbRow[]; types: string[] }) {
  const pathname = usePathname();
  const [read, setRead] = useState<ReadState>("all");
  const [typeOn, setTypeOn] = useState<Set<string>>(new Set(types));
  const [sort, setSort] = useState<Sort>("name");

  const filtered = useMemo(() => {
    const out = rows.filter((r) => {
      if (read === "unwired" && r.read_count !== 0) return false;
      if (read === "wired" && r.read_count === 0) return false;
      if (!typeOn.has(r.type)) return false;
      return true;
    });
    out.sort(
      sort === "name"
        ? (a, b) => a.name.localeCompare(b.name)
        : (a, b) => b.read_count - a.read_count || a.name.localeCompare(b.name),
    );
    return out;
  }, [rows, read, typeOn, sort]);

  const unwiredShown = useMemo(() => filtered.filter((r) => r.read_count === 0).length, [filtered]);

  const toggleType = (t: string) =>
    setTypeOn((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next.size === 0 ? new Set(types) : next;
    });

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-hair px-2.5 py-2">
        <div className="flex items-center gap-1">
          {(["all", "unwired", "wired"] as ReadState[]).map((s) => (
            <Chip key={s} active={read === s} onClick={() => setRead(s)}>
              {s === "unwired" ? "unwired (0)" : s}
            </Chip>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {types.map((t) => (
            <Chip key={t} active={typeOn.has(t)} onClick={() => toggleType(t)}>
              {t}
            </Chip>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setSort((s) => (s === "name" ? "reads" : "name"))}
          className="border border-hair px-2 py-[2px] text-xs text-fg-muted hover:border-hair-strong hover:text-fg"
          title="Toggle sort"
        >
          sort: {sort === "name" ? "name" : "reads"}
        </button>
        <span className="data tnum ml-auto text-xs text-fg-faint">
          {filtered.length} · <span className="text-missing">{unwiredShown} unwired</span>
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-x-auto">
        <div className="flex h-full min-w-[440px] flex-col">
          <div
            className="grid items-center gap-2 border-b border-hair-strong bg-surface px-2.5 py-1.5 text-xs text-fg-muted"
            style={{ gridTemplateColumns: COLS }}
          >
            <span>property</span>
            <span className="text-right">opaque_id</span>
            <span>type</span>
            <span className="text-right">reads</span>
          </div>
          <div className="min-h-0 flex-1">
            {filtered.length === 0 ? (
              <div className="px-2.5 py-3 text-sm text-fg-faint">No properties match.</div>
            ) : (
              <VirtualRows
                items={filtered}
                rowHeight={26}
                getKey={(r) => r.id}
                renderRow={(r) => {
                  const active = pathname === browseHref("ab", r.id);
                  const unwired = r.read_count === 0;
                  return (
                    <Link
                      href={browseHref("ab", r.id)}
                      className={
                        "grid h-[var(--row-list)] items-center gap-2 border-b border-hair px-2.5 " +
                        (active ? "bg-brand-weak shadow-[inset_2px_0_0_0_var(--accent)]" : "hover:bg-surface-2")
                      }
                      style={{ gridTemplateColumns: COLS }}
                    >
                      <span className="data truncate text-sm text-fg" title={r.name}>
                        {r.name}
                      </span>
                      <span className="data tnum text-right text-sm text-fg-muted">{r.opaque_id}</span>
                      <span className="data text-sm text-fg-faint">{r.type}</span>
                      <span
                        className={"data tnum text-right text-sm " + (unwired ? "text-missing" : "text-fg-muted")}
                        title={unwired ? "registered but unwired" : undefined}
                      >
                        {r.read_count}
                      </span>
                    </Link>
                  );
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
