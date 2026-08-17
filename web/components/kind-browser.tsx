import Link from "next/link";
import { DataError } from "@/components/data-error";
import { getSnapshotResult } from "@/lib/data";
import { browseHref } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import type { Fact, FactKind } from "@/lib/types";

/**
 * The master pane for a kind, parameterised rather than copied.
 *
 * Every kind had its own hand-written layout, which meant adding one was four
 * near-identical files and a chance for the fifth to drift. The columns that
 * actually differ per kind are the label and the sort, so those are the only
 * things passed in.
 */
export async function KindBrowser({
  kind,
  title,
  children,
  detail,
  sort,
}: {
  kind: FactKind;
  title: string;
  children: React.ReactNode;
  /** The secondary line under each row — what distinguishes one from the next. */
  detail: (f: Fact) => string;
  sort?: (a: Fact, b: Fact) => number;
}) {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return (
      <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />
    );
  }
  const facts = [...(res.snap.byKind.get(kind) ?? [])].sort(
    sort ?? ((a, b) => a.name.localeCompare(b.name)),
  );

  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside
        className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b md:h-full md:w-[var(--pane)] md:border-b-0 md:border-r"
      >
        <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
          <span>{title}</span>
          <span className="data tnum text-fg-faint">{facts.length}</span>
        </div>
        <ul className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
          {facts.map((f) => (
            <li key={f.id} className="border-b border-hair">
              <Link
                href={browseHref(kind, f.id)}
                className="flex items-baseline justify-between gap-3 px-2.5 py-1.5 hover:bg-surface-2"
              >
                <span className="truncate text-sm text-fg">{f.name}</span>
                <span className="data shrink-0 text-xs text-fg-faint">{detail(f)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
