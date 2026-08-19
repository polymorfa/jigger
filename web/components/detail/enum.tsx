"use client";

import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";

export default function EnumDetailPage() {
  return (
    <FactPage
      kind="enum"
      head={(fact) => (
        <>
          <FactIdLine id={fact.id} kind="enum" />
          <span className="text-lg text-fg">{fact.name}</span>
        </>
      )}
    />
  );
}
