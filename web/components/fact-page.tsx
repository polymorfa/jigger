"use client";

import { Suspense, use } from "react";
import { ClientOnly } from "@/components/client-only";
import { FactDetail } from "@/components/fact-detail";
import { Scroll } from "@/components/ui";
import { loadRevision } from "@/lib/cdn";
import { loadFactById } from "@/lib/facts";
import { useFactId, useTitle } from "@/lib/route";
import type { Fact, FactKind } from "@/lib/types";

/**
 * One fact, in full.
 *
 * Eight of these existed, differing in a header and identical everywhere else,
 * each one loading a 12 MB ledger to find a 1.7 KB record. What is left per
 * kind is the header — the handful of attributes that only make sense for that
 * kind — and everything below it is the same page it always was.
 */
export function FactPage({
  kind,
  head,
}: {
  kind: FactKind;
  /** The attributes particular to this kind, above the schema. */
  head: (fact: Fact) => React.ReactNode;
}) {
  const id = useFactId(kind);
  return (
    <ClientOnly fallback={<Waiting />}>
      <Suspense fallback={<Waiting />}>{id ? <Body kind={kind} id={id} head={head} /> : <Waiting />}</Suspense>
    </ClientOnly>
  );
}

function Body({
  kind,
  id,
  head,
}: {
  kind: FactKind;
  id: string;
  head: (fact: Fact) => React.ReactNode;
}) {
  const fact = use(loadFactById(kind, id));
  const rev = use(loadRevision());
  useTitle(fact?.name ?? id);

  if (!fact) {
    return (
      <div className="px-5 py-5">
        <h1 className="data text-lg font-semibold">{id}</h1>
        <p className="mt-2 max-w-prose text-sm text-fg-muted">
          No fact with that id in revision <span className="data tnum">{rev.revision}</span>. Wire
          literals move between releases — an id that was real last month can simply stop being
          extracted — so an old link landing here is expected rather than broken.
        </p>
      </div>
    );
  }

  return (
    <Scroll>
      <div className="flex max-w-[var(--reading)] flex-col gap-4 px-5 pt-5">{head(fact)}</div>
      <div className="px-5 py-5">
        <FactDetail fact={fact} revision={rev.revision} />
      </div>
    </Scroll>
  );
}

function Waiting() {
  return <div className="px-5 py-5 text-sm text-fg-faint">Loading…</div>;
}
