"use client";

import { Suspense, use } from "react";
import { ClientOnly } from "@/components/client-only";
import { DispatchTable } from "@/components/dispatch-table";
import { Scroll } from "@/components/ui";
import { loadDispatch } from "@/lib/cdn";

function Table() {
  const routes = use(loadDispatch()) ?? [];
  if (routes.length === 0) {
    return (
      <p className="mt-3 max-w-[52ch] text-sm text-fg-faint">
        No dispatch table in this revision’s payload — it is read from{" "}
        <span className="data">WAWebCommsHandleLoggedInStanza</span>, which this revision either
        does not carry or restructured.
      </p>
    );
  }
  return <DispatchTable routes={routes} />;
}

/**
 * The landing pane for inbound stanzas, showing the routing rather than a
 * placeholder.
 *
 * The dispatch table belongs here and not on any one handler's page: it is the
 * one view that answers "what happens to a stanza that arrives", which is the
 * question a library author has before they have picked a handler to read.
 */
export default function SigIndexPage() {
  return (
    <Scroll>
      <div className="px-6 py-5">
        <p className="max-w-[52ch] text-sm text-fg-faint">
          Inbound stanzas, grouped by the root tag a library dispatches on. A{" "}
          <span className="data">response</span> answers something we sent; a{" "}
          <span className="data">server-initiated</span> stanza has nothing to pair against, which
          is why those are the ones libraries miss.
        </p>
        <ClientOnly>
          <Suspense>
            <Table />
          </Suspense>
        </ClientOnly>
      </div>
    </Scroll>
  );
}
