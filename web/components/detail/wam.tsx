"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";
import { isWam } from "@/lib/types";

export default function WamDetailPage() {
  return (
    <FactPage
      kind="wam"
      head={(fact) =>
        isWam(fact) ? (
          <div className="flex flex-col gap-2">
            <FactIdLine id={fact.id} kind="wam" />
            <span className="text-lg text-fg">{fact.name}</span>
            <div className="data flex gap-4 text-xs text-fg-faint">
              <span>event_id {fact.data.event_id}</span>
              <span className="tnum">{Object.keys(fact.data.fields).length} fields</span>
            </div>
          </div>
        ) : null
      }
    />
  );
}
