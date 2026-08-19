"use client";

import { Suspense, use } from "react";
import { AbMap } from "@/components/ab-map";
import { ClientOnly, Waiting } from "@/components/client-only";
import { Scroll } from "@/components/ui";
import { buildAbMap } from "@/lib/ab-map";
import { loadKindIndex } from "@/lib/cdn";

function Map() {
  const { groups, unwired } = buildAbMap(use(loadKindIndex("ab")));
  return <AbMap groups={groups} unwired={unwired} />;
}

/**
 * The landing pane for A/B properties, as a map rather than a placeholder.
 *
 * "Select a property" is only useful advice if you already know which one. The
 * question you actually arrive with is what is being changed at all, and that is
 * answerable — the reader modules say which subsystem each flag gates.
 */
export default function AbIndexPage() {
  return (
    <Scroll>
      <div className="px-6 py-5">
        <ClientOnly fallback={<Waiting what="A/B properties" />}>
          <Suspense fallback={<Waiting what="A/B properties" />}>
            <Map />
          </Suspense>
        </ClientOnly>
      </div>
    </Scroll>
  );
}
