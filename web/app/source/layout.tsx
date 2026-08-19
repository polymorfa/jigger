"use client";

import { Suspense, use } from "react";
import { ClientOnly, Waiting } from "@/components/client-only";
import { ModuleList } from "@/components/module-list";
import { loadModuleIndex } from "@/lib/cdn";

function List() {
  return <ModuleList rows={use(loadModuleIndex())} />;
}

/**
 * Master-detail, like every other browser here.
 *
 * The list is every module the payload carries — the reachable closure from
 * `WA*` and `MAW*`, not all 188k in the bundle, for which cellar is the right
 * tool. The count beside each name is how many facts were read out of it, which
 * is what turns a list of names into a map of where the protocol lives.
 */
export default function SourceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-0 flex-col md:flex-row">
      <aside className="h-[42%] w-full min-h-0 shrink-0 border-b border-hair md:h-full md:w-[var(--pane)] md:border-b-0 md:border-r">
        <ClientOnly fallback={<Waiting what="the module list" />}>
          <Suspense fallback={<Waiting what="the module list" />}>
            <List />
          </Suspense>
        </ClientOnly>
      </aside>
      <section className="min-h-0 min-w-0 flex-1">{children}</section>
    </div>
  );
}
