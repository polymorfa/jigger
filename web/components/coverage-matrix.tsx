"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { VirtualRows } from "./virtual-rows";
import { CoverageChip } from "./coverage-chip";
import { KindBadge } from "./kind-badge";
import { REPOS } from "@/lib/constants";
import { factHref } from "@/lib/ids";
import type { CoveragePivot, CoverageState, FactKind } from "@/lib/types";

const COLS = "minmax(200px,1.6fr) 52px minmax(140px,1.1fr) 108px 108px 108px";
const STATES: CoverageState[] = ["missing", "covered", "inconclusive"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        "flex items-center gap-1.5 border px-2 py-[2px] text-xs " +
        (active
          ? "border-hair-strong bg-surface-3 text-fg"
          : "border-hair bg-surface text-fg-faint hover:text-fg-muted")
      }
    >
      {children}
    </button>
  );
}

export function CoverageMatrix({
  rows,
  kinds,
}: {
  rows: CoveragePivot[];
  kinds: FactKind[];
}) {
  const [kindOn, setKindOn] = useState<Set<FactKind>>(new Set(kinds));
  const [stateOn, setStateOn] = useState<Set<CoverageState>>(new Set(STATES));
  const [repo, setRepo] = useState<"all" | string>("all");

  const filtered = useMemo(() => {
    const scope = repo === "all" ? REPOS : [repo];
    return rows.filter((r) => {
      if (!kindOn.has(r.kind)) return false;
      let matched = false;
      for (const rp of scope) {
        const st = r.byRepo[rp];
        if (st && stateOn.has(st)) {
          matched = true;
          break;
        }
      }
      return matched;
    });
  }, [rows, kindOn, stateOn, repo]);

  const missingShown = useMemo(() => {
    const scope = repo === "all" ? REPOS : [repo];
    let n = 0;
    for (const r of filtered) for (const rp of scope) if (r.byRepo[rp] === "missing") n++;
    return n;
  }, [filtered, repo]);

  const toggleKind = (k: FactKind) =>
    setKindOn((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next.size === 0 ? new Set(kinds) : next; // never empty
    });

  const toggleState = (s: CoverageState) =>
    setStateOn((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next.size === 0 ? new Set(STATES) : next;
    });

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-hair px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fg-muted">kind</span>
          {kinds.map((k) => (
            <Chip key={k} active={kindOn.has(k)} onClick={() => toggleKind(k)}>
              {k}
            </Chip>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-fg-muted">state</span>
          {STATES.map((s) => (
            <Chip key={s} active={stateOn.has(s)} onClick={() => toggleState(s)}>
              <CoverageChip state={s} />
            </Chip>
          ))}
        </div>
        <label className="flex items-center gap-1.5 text-xs text-fg-muted">
          library
          <select
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="data border border-hair bg-surface px-2 py-[2px] text-xs text-fg hover:border-hair-strong focus:border-brand"
          >
            <option value="all">all three</option>
            {REPOS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <span className="data tnum ml-auto text-xs text-fg-faint">
          {filtered.length} facts · <span className="text-missing">{missingShown} missing</span>
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-x-auto">
        <div className="flex h-full min-w-[760px] flex-col">
          <div
            className="grid items-center gap-2 border-b border-hair-strong bg-surface px-4 py-1.5 text-xs text-fg-muted"
            style={{ gridTemplateColumns: COLS }}
          >
            <span>id</span>
            <span>kind</span>
            <span>name</span>
            {REPOS.map((r) => (
              <span key={r} className="data">
                {r}
              </span>
            ))}
          </div>
          <div className="min-h-0 flex-1">
            {filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-fg-faint">No facts match the current filters.</div>
            ) : (
              <VirtualRows
                items={filtered}
                rowHeight={28}
                getKey={(r) => r.id}
                renderRow={(r) => (
                  <Link
                    href={factHref(r.id)}
                    className="grid h-[28px] items-center gap-2 border-b border-hair px-4 hover:bg-surface-2"
                    style={{ gridTemplateColumns: COLS }}
                  >
                    <span className="min-w-0 data truncate text-sm text-fg" title={r.id}>
                      {r.id}
                    </span>
                    <span>
                      <KindBadge kind={r.kind} />
                    </span>
                    <span className="min-w-0 truncate text-sm text-fg-muted" title={r.name}>
                      {r.name}
                    </span>
                    {REPOS.map((rp) => {
                      const st = r.byRepo[rp];
                      return (
                        <span
                          key={rp}
                          className={"flex h-[28px] items-center " + (st === "missing" ? "cell-missing px-1.5" : "")}
                        >
                          <CoverageChip state={st} label={st ?? "—"} />
                        </span>
                      );
                    })}
                  </Link>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
