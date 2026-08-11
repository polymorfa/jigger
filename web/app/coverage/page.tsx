import type { Metadata } from "next";
import { CoverageMatrix } from "@/components/coverage-matrix";
import { getCoverageByFact } from "@/lib/data";
import type { CoveragePivot, FactKind } from "@/lib/types";

export const metadata: Metadata = { title: "Coverage" };

const KIND_ORDER: Record<FactKind, number> = {
  ab: 0, wam: 1, iq: 2, mex: 3, sig: 4, const: 5, proto: 6, enum: 7, appstate: 8,
};

export default function CoveragePage() {
  const rows: CoveragePivot[] = [...getCoverageByFact().values()].sort(
    (a, b) =>
      KIND_ORDER[a.kind] - KIND_ORDER[b.kind] ||
      a.id.localeCompare(b.id, undefined, { numeric: true }),
  );

  const kinds = [...new Set(rows.map((r) => r.kind))].sort((a, b) => KIND_ORDER[a] - KIND_ORDER[b]);

  return (
    <div className="h-full">
      <CoverageMatrix rows={rows} kinds={kinds} />
    </div>
  );
}
