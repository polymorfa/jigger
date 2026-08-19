"use client";

import { Suspense, use } from "react";
import { ClientOnly } from "@/components/client-only";
import { loadKindIndex, type IndexRow } from "@/lib/cdn";
import type { FactKind } from "@/lib/types";

/**
 * Master list beside detail, which is the shape of every kind's browser.
 *
 * The seven of them had seven copies of this frame, differing in a title and a
 * list component. Sharing it means the panes stay the same width and the same
 * height as each other, which is what made them read as one app rather than
 * seven — and the version that drifted was how the content pane came to jump
 * on every tab switch.
 *
 * The rows come from `index/<kind>.json` in the browser: a few tens of KB of
 * exactly the fields a list draws, instead of the 12 MB ledger a server used to
 * parse to answer the same question.
 */
export function MasterDetail<K extends FactKind>({
  kind,
  title,
  children,
  render,
}: {
  kind: K;
  /** Fixed, or computed from the rows — several panes count something. */
  title: string | ((rows: IndexRow<K>[]) => string);
  children: React.ReactNode;
  render: (rows: IndexRow<K>[]) => React.ReactNode;
}) {
  const waiting = <Header title={typeof title === "string" ? title : "…"} count={null} />;
  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="flex h-[42%] w-full min-h-0 shrink-0 flex-col border-b border-hair md:h-full md:w-[var(--pane)] md:border-b-0 md:border-r">
        <ClientOnly fallback={waiting}>
          <Suspense fallback={waiting}>
            <Pane kind={kind} title={title} render={render} />
          </Suspense>
        </ClientOnly>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}

function Header({ title, count }: { title: string; count: number | null }) {
  return (
    <div className="flex items-baseline justify-between border-b border-hair px-2.5 py-1 text-xs text-fg-muted">
      <span className="min-w-0 truncate">{title}</span>
      <span className="data tnum shrink-0 text-fg-faint">{count ?? "…"}</span>
    </div>
  );
}

function Pane<K extends FactKind>({
  kind,
  title,
  render,
}: {
  kind: K;
  title: string | ((rows: IndexRow<K>[]) => string);
  render: (rows: IndexRow<K>[]) => React.ReactNode;
}) {
  const rows = use(loadKindIndex(kind));
  return (
    <>
      <Header title={typeof title === "string" ? title : title(rows)} count={rows.length} />
      <div className="min-h-0 flex-1 overflow-hidden">{render(rows)}</div>
    </>
  );
}
