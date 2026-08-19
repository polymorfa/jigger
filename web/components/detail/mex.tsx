"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";
import { isMex } from "@/lib/types";

export default function MexDetailPage() {
  return (
    <FactPage
      kind="mex"
      head={(fact) =>
        isMex(fact) ? (
          <div className="flex flex-col gap-1.5">
            <h1 className="data text-lg font-semibold tracking-tight">{fact.name}</h1>
            <FactIdLine id={fact.id} kind="mex" />
            <div className="data flex flex-wrap items-center gap-4 text-xs text-fg-faint">
              <span>{fact.data.operation}</span>
              <span className="tnum">doc_id {fact.data.doc_id}</span>
              <span>
                {fact.data.variables.length
                  ? `variables: ${fact.data.variables.join(", ")}`
                  : "no variables"}
              </span>
            </div>
          </div>
        ) : null
      }
    />
  );
}
