import { KindBadge } from "@/components/kind-badge";
import type { FactKind } from "@/lib/types";

/**
 * The identity line: kind badge plus the full id, selectable.
 *
 * The id is shown raw and in full rather than prettified, because it is a wire
 * literal — the same string keys the generated helpers and is what the coverage
 * scanner searches for — so people copy it.
 */
export function FactIdLine({ id, kind }: { id: string; kind: FactKind }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <KindBadge kind={kind} />
      <span className="data select-all break-all text-sm text-fg-muted">{id}</span>
    </div>
  );
}

/** Renders an A/B default the way the bundle writes it: strings quoted, so an
 *  empty string is visibly different from an absent value. */
export function abValueText(v: string | number | boolean): string {
  return typeof v === "string" ? JSON.stringify(v) : String(v);
}
