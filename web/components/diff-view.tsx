"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { KindBadge } from "./kind-badge";
import { factHref } from "@/lib/ids";
import type { Diff, DiffEntry, DiffKindSummary, FactKind } from "@/lib/types";

const KINDS: FactKind[] = ["proto", "wam", "iq", "const"];
const ZERO: DiffKindSummary = { added: 0, removed: 0, changed: 0, stable: 0 };
const fmt = (n: number) => n.toLocaleString("en-US");

type Display = {
  added: Record<string, DiffEntry[]>;
  removed: Record<string, DiffEntry[]>;
  summary: Diff["summary"];
  status: "ok" | "same" | "none";
};

function invert(diff: Diff): Pick<Display, "added" | "removed" | "summary"> {
  const byKind: Record<string, DiffKindSummary> = {};
  for (const [k, v] of Object.entries(diff.summary.byKind)) {
    // Inverting a diff swaps added and removed. `changed` is symmetric —
    // a reshaped fact is reshaped in either direction — so it carries over.
    byKind[k] = { added: v.removed, removed: v.added, changed: v.changed, stable: v.stable };
  }
  return {
    added: diff.removed,
    removed: diff.added,
    summary: {
      added: diff.summary.removed,
      removed: diff.summary.added,
      changed: diff.summary.changed,
      stable: diff.summary.stable,
      byKind,
    },
  };
}

function RevSelect({
  label,
  value,
  onChange,
  revisions,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  revisions: number[];
}) {
  return (
    <label className="flex items-center gap-1.5 text-sm text-fg-muted">
      <span>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="data border border-hair bg-surface px-2 py-[2px] text-sm text-fg hover:border-hair-strong focus:border-brand"
      >
        {revisions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </label>
  );
}

function EntryList({ entries, existing }: { entries: DiffEntry[]; existing: Set<string> }) {
  if (entries.length === 0) {
    return <div className="px-2.5 py-1.5 text-xs text-fg-faint">none</div>;
  }
  return (
    <div className="max-h-[340px] overflow-y-auto overflow-x-hidden">
      {entries.map((e) => {
        const present = existing.has(e.id);
        const inner = (
          <>
            <span className={"data shrink-0 text-sm " + (present ? "text-fg" : "text-fg-faint")}>{e.id}</span>
            {e.name !== e.id.slice(e.id.indexOf(":") + 1) ? (
              <span className="min-w-0 truncate text-xs text-fg-muted">{e.name}</span>
            ) : null}
            <span className="data ml-auto shrink-0 text-2xs text-fg-faint">{e.module}</span>
          </>
        );
        return present ? (
          <Link
            key={e.id}
            href={factHref(e.id)}
            className="flex items-baseline gap-2 border-b border-hair px-2.5 py-1 last:border-b-0 hover:bg-surface-2"
          >
            {inner}
          </Link>
        ) : (
          <div
            key={e.id}
            title="Not in the currently-loaded snapshot"
            className="flex items-baseline gap-2 border-b border-hair px-2.5 py-1 last:border-b-0"
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export function DiffView({
  diff,
  revisions,
  existing,
}: {
  diff: Diff;
  revisions: number[];
  existing: string[];
}) {
  const sorted = useMemo(() => revisions.slice().sort((a, b) => a - b), [revisions]);
  const existingSet = useMemo(() => new Set(existing), [existing]);
  const [from, setFrom] = useState(diff.from);
  const [to, setTo] = useState(diff.to);

  const display: Display = useMemo(() => {
    if (from === to) return { added: {}, removed: {}, changed: {}, summary: { added: 0, removed: 0, changed: 0, stable: 0, byKind: {} }, status: "same" };
    if (from === diff.from && to === diff.to) {
      return { added: diff.added, removed: diff.removed, summary: diff.summary, status: "ok" };
    }
    if (from === diff.to && to === diff.from) {
      return { ...invert(diff), status: "ok" };
    }
    return { added: {}, removed: {}, changed: {}, summary: { added: 0, removed: 0, changed: 0, stable: 0, byKind: {} }, status: "none" };
  }, [from, to, diff]);

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-5 px-5 py-5">
      <header className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <h1 className="text-xl font-semibold tracking-tight text-fg">Revision diff</h1>
        </div>
        <p className="border-l-2 border-hair-strong bg-surface-2 px-3 py-2 text-xs text-fg-muted">
          Bundled precomputed diff from an earlier (proto-era) extraction. Entries dimmed grey are not in the
          currently-loaded snapshot and are shown for the record; live ref-to-ref diffing will replace this once
          revisions are tagged in the repo.
        </p>
        <div className="flex flex-wrap items-center gap-3 border border-hair bg-surface px-3 py-2">
          <RevSelect label="from" value={from} onChange={setFrom} revisions={sorted} />
          <span className="text-fg-faint">→</span>
          <RevSelect label="to" value={to} onChange={setTo} revisions={sorted} />
          <button
            type="button"
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
            className="ml-1 border border-hair px-2 py-[2px] text-sm text-fg-muted hover:border-hair-strong hover:text-fg"
          >
            swap
          </button>
        </div>
      </header>

      {display.status === "same" ? (
        <p className="text-sm text-fg-faint">Pick two different revisions to compare.</p>
      ) : display.status === "none" ? (
        <p className="text-sm text-fg-faint">
          No diff is available for this pair. Only adjacent captured revisions are compared.
        </p>
      ) : (
        <>
          <section className="flex flex-col gap-2">
            <div className="flex flex-wrap divide-x divide-hair border border-hair bg-surface">
              <div className="flex min-w-[130px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">added</span>
                <span className="data tnum text-xl text-fg">+{fmt(display.summary.added)}</span>
              </div>
              <div className="flex min-w-[130px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">removed</span>
                <span className="data tnum text-xl text-fg">−{fmt(display.summary.removed)}</span>
              </div>
              <div className="flex min-w-[130px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">stable</span>
                <span className="data tnum text-xl text-fg-muted">{fmt(display.summary.stable)}</span>
              </div>
            </div>

            <div className="overflow-x-auto border border-hair">
              <table className="grid-table">
                <thead>
                  <tr>
                    <th>kind</th>
                    <th className="text-right">added</th>
                    <th className="text-right">removed</th>
                    <th className="text-right">stable</th>
                  </tr>
                </thead>
                <tbody>
                  {KINDS.map((k) => {
                    const s = display.summary.byKind[k] ?? ZERO;
                    return (
                      <tr key={k}>
                        <td>
                          <KindBadge kind={k} />
                        </td>
                        <td className="data tnum text-right text-fg">{s.added ? `+${fmt(s.added)}` : "0"}</td>
                        <td className="data tnum text-right text-fg">{s.removed ? `−${fmt(s.removed)}` : "0"}</td>
                        <td className="data tnum text-right text-fg-muted">{fmt(s.stable)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {KINDS.map((k) => {
            const added = display.added[k] ?? [];
            const removed = display.removed[k] ?? [];
            if (added.length === 0 && removed.length === 0) return null;
            return (
              <section key={k} className="flex flex-col gap-2">
                <div className="flex items-center gap-2 border-b border-hair pb-1.5">
                  <KindBadge kind={k} />
                  <h2 className="text-md font-semibold text-fg">{k}</h2>
                  <span className="data tnum text-xs text-fg-faint">
                    +{added.length} · −{removed.length}
                  </span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-fg-muted">added ({added.length})</span>
                    <div className="border border-hair bg-surface">
                      <EntryList entries={added} existing={existingSet} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-fg-muted">removed ({removed.length})</span>
                    <div className="border border-hair bg-surface">
                      <EntryList entries={removed} existing={existingSet} />
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      )}
    </div>
  );
}
