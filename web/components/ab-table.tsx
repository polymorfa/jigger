"use client";

import { useMemo, useState } from "react";
import { usePath } from "@/lib/route";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
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
        "flex items-center gap-1.5 border px-2 py-[2px] text-xs transition-colors " +
        (active
          ? "border-brand bg-brand-weak text-fg"
          : "text-muted-foreground hover:border-ring hover:text-foreground")
      }
    >
      <CheckIcon
        className={"size-3 shrink-0 " + (active ? "text-brand" : "opacity-0")}
        aria-hidden="true"
      />
      {children}
    </button>
  );
}

export function AbTable({ rows, types }: { rows: AbRow[]; types: string[] }) {
  const pathname = usePath() ?? "";
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
      {/* Every control is named. This toolbar used to be three unlabelled rows
          of words — `all unwired wired`, then the type names, then
          `sort: name` — with nothing saying which row did what, or that the
          middle one was a filter at all. */}
      <div className="flex flex-col gap-1.5 border-b border-hair px-2.5 py-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-14 shrink-0 text-xs">Show</span>
          <div className="flex items-center gap-1">
            {(
              [
                ["all", "All flags"],
                ["wired", "Read by some module"],
                ["unwired", "Never read"],
              ] as [ReadState, string][]
            ).map(([s, label]) => (
              <Chip key={s} active={read === s} onClick={() => setRead(s)}>
                {label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-14 shrink-0 text-xs">Types</span>
          <div className="flex flex-wrap items-center gap-1">
            {types.map((t) => (
              <Chip key={t} active={typeOn.has(t)} onClick={() => toggleType(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-14 shrink-0 text-xs">Order</span>
          <div className="flex items-center gap-1">
            <Chip active={sort === "name"} onClick={() => setSort("name")}>
              Name, A → Z
            </Chip>
            <Chip active={sort === "reads"} onClick={() => setSort("reads")}>
              Most read first
            </Chip>
          </div>
          <span className="data tnum text-muted-foreground ml-auto text-xs">
            {filtered.length} shown · <span className="text-missing">{unwiredShown} never read</span>
          </span>
        </div>
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
                      <span className="min-w-0 data truncate text-sm text-fg" title={r.name}>
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
