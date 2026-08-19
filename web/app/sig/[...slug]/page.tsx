"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";
import { isSig } from "@/lib/types";

export default function SigDetailPage() {
  return (
    <FactPage
      kind="sig"
      head={(fact) =>
        isSig(fact) ? (
          <div className="flex flex-col gap-1.5">
            <h1 className="data text-lg font-semibold tracking-tight">{fact.name}</h1>
            <FactIdLine id={fact.id} kind="sig" />
            <div className="data flex flex-wrap items-center gap-4 text-xs text-fg-faint">
              <span>&lt;{fact.data.root}&gt;</span>
              {/* Nothing we send triggers a server-initiated stanza, which is
                  exactly why libraries miss them. */}
              <span>
                {fact.data.responds_to
                  ? `response to ${fact.data.responds_to}`
                  : "server-initiated — nothing we send triggers it"}
              </span>
            </div>
          </div>
        ) : null
      }
    />
  );
}
