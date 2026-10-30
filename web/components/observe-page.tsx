"use client";

import { Suspense, use } from "react";
import { ClientOnly } from "./client-only";
import { Scroll } from "@/components/ui";
import { ObserveView } from "@/components/observe-view";
import { fetchJsonOptional } from "@/lib/cdn";
import type { Observed } from "@/lib/types";

function Body() {
  const observed = use(fetchJsonOptional<Observed>("observe.json"));

  // Absent is not an error and must not look like one. The analysis needs both
  // revisions' *source*, not just their extracted facts, and the previous
  // bundle stops being served eventually — so say what is missing and why,
  // rather than rendering empty tables that read as "nothing changed".
  if (!observed) {
    return (
      <Scroll>
        <div className="flex max-w-2xl flex-col gap-3 py-6">
          <h1 className="text-md font-semibold text-fg">No observation for this revision</h1>
          <p className="text-sm text-fg-muted">
            Joining the fact diff to the code diff needs both revisions&apos; module source, and
            only the current one ships with a release. The previous bundle is re-fetched when it is
            still being served; once it is not, this analysis cannot be produced for that pair and
            is left out rather than approximated.
          </p>
          <p className="text-sm text-fg-muted">
            Locally, with both revisions in the cellar store:{" "}
            <code className="data bg-surface-2 px-1.5 py-0.5 text-xs">
              jigger observe &lt;old-generated-dir&gt; &lt;new-generated-dir&gt;
            </code>
          </p>
        </div>
      </Scroll>
    );
  }

  return (
    <Scroll>
      <ObserveView observed={observed} />
    </Scroll>
  );
}

export function ObservePage() {
  return <ClientOnly><Suspense fallback={<Scroll><p className="py-6 text-sm text-fg-muted">Fetching observation…</p></Scroll>}><Body /></Suspense></ClientOnly>;
}
