"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";
import { isIq } from "@/lib/types";

export default function IqDetailPage() {
  return (
    <FactPage
      kind="iq"
      head={(fact) =>
        isIq(fact) ? (
          <div className="flex flex-col gap-2">
            <FactIdLine id={fact.id} kind="iq" />
            <span className="text-lg text-fg">{fact.name}</span>
            <div className="data flex flex-wrap gap-4 text-xs text-fg-faint">
              <span>xmlns {fact.data.xmlns}</span>
              <span>type {fact.data.type}</span>
              {fact.data.tags.length ? <span>tags {fact.data.tags.join(", ")}</span> : null}
            </div>
          </div>
        ) : null
      }
    />
  );
}
