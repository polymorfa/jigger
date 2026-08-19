"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { ClientOnly, Waiting } from "@/components/client-only";
import { KindBadge } from "@/components/kind-badge";
import { loadKindIndex } from "@/lib/cdn";
import { factHref, kindOfId } from "@/lib/ids";
import type { FactKind } from "@/lib/types";

/**
 * The facts a spec document names, resolved against the revision on show.
 *
 * The prose is written against wire literals and ships with the app; whether
 * each one is still extracted is a property of the payload. So the list is
 * built here, in the browser, from the kind indexes — one small fetch per kind
 * the document happens to cite, rather than the ledger.
 *
 * A citation with no matching fact is dropped rather than shown broken. Wire
 * literals move between releases, and prose that has fallen behind should read
 * as a shorter list, not as a page of dead links.
 */
function List({ ids }: { ids: string[] }) {
  const kinds = [...new Set(ids.map(kindOfId).filter(Boolean))] as FactKind[];
  const byId = new Map<string, { name: string; kind: FactKind }>();
  for (const kind of kinds) {
    for (const row of use(loadKindIndex(kind))) byId.set(row.id, { name: row.name, kind });
  }
  const found = ids.map((id) => ({ id, ...byId.get(id) })).filter((f) => f.name);

  if (found.length === 0) {
    return (
      <p className="text-sm text-fg-faint">
        This document cites no facts present in this revision.
      </p>
    );
  }
  return (
    <div className="border border-hair bg-surface">
      {found.map((f) => (
        <Link
          key={f.id}
          href={factHref(f.id)}
          className="flex items-baseline gap-2.5 border-b border-hair px-3 py-1.5 last:border-b-0 hover:bg-surface-2"
        >
          <KindBadge kind={f.kind as FactKind} />
          <span className="data shrink-0 text-sm text-brand">{f.id}</span>
          <span className="min-w-0 truncate text-sm text-fg-muted">{f.name}</span>
        </Link>
      ))}
    </div>
  );
}

export function CitedFacts({ ids }: { ids: string[] }) {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
        <h2 className="text-md font-semibold text-fg">Facts in this section</h2>
        <span className="data tnum text-xs text-fg-faint">{ids.length}</span>
      </div>
      <ClientOnly fallback={<Waiting what="cited facts" />}>
        <Suspense fallback={<Waiting what="cited facts" />}>
          <List ids={ids} />
        </Suspense>
      </ClientOnly>
    </section>
  );
}
