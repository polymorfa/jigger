"use client";

import { useState } from "react";
import Link from "next/link";
import type { Export, ModuleGraph } from "@/lib/module-graph";

/**
 * What relies on this module, and on what exactly.
 *
 * Every module has an entry, so walking ten hops up the graph is ten clicks
 * rather than a precomputed closure — which would be the wrong shape anyway:
 * `WASmaxParseUtils` has 1,723 dependents and its transitive set is most of the
 * bundle.
 *
 * Exports are ordered by how many modules use them, because that is the order
 * in which they matter to someone deciding whether a change is safe. "1,723
 * modules import this" and "1,349 of them call `assertTag`" are different
 * facts, and only the second says what to read.
 */
export function ModuleGraphPanel({ graph }: { graph: ModuleGraph }) {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between gap-3 border-b pb-1">
          <h2 className="text-sm font-semibold text-fg">Relied on by</h2>
          <span className="tnum text-muted-foreground text-xs">
            {graph.dependent_count.toLocaleString()} module
            {graph.dependent_count === 1 ? "" : "s"}
          </span>
        </div>
        {graph.dependent_count === 0 ? (
          <p className="text-muted-foreground text-xs">
            Nothing imports this. It is an entry point, or dead.
          </p>
        ) : (
          <Names names={graph.dependents} total={graph.dependent_count} />
        )}
      </section>

      {graph.exports.length > 0 && (
        <section className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3 border-b pb-1">
            <h2 className="text-sm font-semibold text-fg">Exports</h2>
            <span className="tnum text-muted-foreground text-xs">
              {graph.exports.length}
            </span>
          </div>
          <div className="flex flex-col">
            {graph.exports.map((e) => (
              <ExportRow key={e.name} entry={e} />
            ))}
          </div>
        </section>
      )}

      {graph.deps.length > 0 && (
        <section className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-3 border-b pb-1">
            <h2 className="text-sm font-semibold text-fg">Imports</h2>
            <span className="tnum text-muted-foreground text-xs">{graph.deps.length}</span>
          </div>
          <Names names={graph.deps} total={graph.deps.length} />
        </section>
      )}
    </div>
  );
}

function ExportRow({ entry }: { entry: Export }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen((o) => !o)}
        disabled={entry.uses === 0}
        className="hover:bg-accent flex w-full items-baseline gap-2 py-1 text-left disabled:hover:bg-transparent"
      >
        <span className="data w-3 shrink-0 text-2xs text-fg-faint">
          {entry.uses > 0 ? (open ? "−" : "+") : "·"}
        </span>
        <span className="data min-w-0 truncate text-xs text-fg">{entry.name}</span>
        <span className="tnum text-muted-foreground ml-auto shrink-0 text-2xs">
          {entry.uses === 0 ? "no known caller" : `${entry.uses.toLocaleString()} callers`}
        </span>
      </button>
      {open && (
        <div className="pb-1.5 pl-5">
          <Names names={entry.used_by} total={entry.uses} member={entry.name} />
        </div>
      )}
    </div>
  );
}

function Names({
  names,
  total,
  member,
}: {
  names: string[];
  total: number;
  /** When set, links land on the line that uses this export. */
  member?: string;
}) {
  const [all, setAll] = useState(false);
  const shown = all ? names : names.slice(0, 30);
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
        {shown.map((n) => (
          <Link
            key={n}
            href={`/source/${encodeURIComponent(n)}${member ? `?m=${encodeURIComponent(member)}` : ""}`}
            className="data link text-xs"
          >
            {n}
          </Link>
        ))}
      </div>
      {names.length > shown.length && (
        <button
          onClick={() => setAll(true)}
          className="text-muted-foreground hover:text-foreground mt-1 self-start text-2xs underline"
        >
          show all {names.length}
        </button>
      )}
      {/* The list is capped at index time; saying so keeps a truncated list
          from reading as the complete one. */}
      {total > names.length && (
        <span className="text-muted-foreground mt-1 text-2xs">
          and {(total - names.length).toLocaleString()} more, not listed
        </span>
      )}
    </div>
  );
}
