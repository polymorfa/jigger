"use client";

import { Suspense, use } from "react";
import { ClientOnly, Waiting } from "@/components/client-only";
import { DiffView } from "@/components/diff-view";
import { Scroll } from "@/components/ui";
import { loadDiff } from "@/lib/cdn";

function View() {
  const diff = use(loadDiff());
  if (!diff) {
    return (
      <div className="px-6 py-5">
        <p className="max-w-prose text-sm text-fg-faint">
          Nothing to compare yet. A diff needs two indexed revisions, and this payload carries the
          first one.
        </p>
      </div>
    );
  }
  // Every diff entry links somewhere, and a fact that has since disappeared
  // would link nowhere. Rather than a per-entry existence check against the
  // whole ledger, the diff is a statement about two revisions we did index, so
  // its own entries are the set.
  const present = [diff.added, diff.removed].flatMap((g) =>
    Object.values(g).flatMap((entries) => entries.map((e) => e.id)),
  );
  return <DiffView diff={diff} revisions={diff.revisions} existing={present} />;
}

export default function DiffPage() {
  return (
    <Scroll>
      <ClientOnly fallback={<Waiting what="the revision diff" />}>
        <Suspense fallback={<Waiting what="the revision diff" />}>
          <View />
        </Suspense>
      </ClientOnly>
    </Scroll>
  );
}
