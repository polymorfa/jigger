"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine, abValueText } from "@/components/fact-parts";
import { isAb } from "@/lib/types";

export default function AbDetailPage() {
  return (
    <FactPage
      kind="ab"
      head={(fact) => {
        if (!isAb(fact)) return null;
        const reads = fact.usage?.read_count ?? 0;
        const shown = abValueText(fact.data.default);
        const alt = abValueText(fact.data.alt_default);
        return (
          <>
            <div className="flex flex-col gap-2">
              <FactIdLine id={fact.id} kind="ab" />
              <span className="text-lg text-fg">{fact.name}</span>
            </div>
            {/* the two things that give an opaque id meaning */}
            <div className="flex flex-wrap divide-x divide-hair border border-hair bg-surface">
              <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">read_count</span>
                <span className={"data tnum text-xl " + (reads === 0 ? "text-missing" : "text-fg")}>
                  {reads}
                </span>
                <span className={reads === 0 ? "text-2xs text-missing" : "text-2xs text-fg-faint"}>
                  {reads === 0 ? "registered but unwired" : "modules that read it"}
                </span>
              </div>
              <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">opaque_id</span>
                <span className="data tnum text-xl text-fg">{fact.data.opaque_id}</span>
                <span className="text-2xs text-fg-faint">wire identifier</span>
              </div>
              <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
                <span className="text-xs text-fg-muted">type · defaults</span>
                <span className="data text-md text-fg">{fact.data.type}</span>
                {/* Two shipped defaults that disagree means the value is being
                    decided server-side right now. */}
                <span className="data text-2xs text-fg-faint">
                  {shown}
                  {shown !== alt ? ` / ${alt}` : ""}
                </span>
              </div>
            </div>
          </>
        );
      }}
    />
  );
}
