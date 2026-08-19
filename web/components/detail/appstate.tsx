"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";

export default function AppStateDetailPage() {
  return (
    <FactPage
      kind="appstate"
      head={(fact) => (
        <>
          <FactIdLine id={fact.id} kind="appstate" />
          <span className="text-lg text-fg">{fact.name}</span>
        </>
      )}
    />
  );
}
