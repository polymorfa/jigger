import { Badge } from "@/components/ui/badge";
import type { FactKind } from "@/lib/types";

// Kind is a neutral label. Colour is reserved for coverage state, so kinds are
// distinguished only by their (fixed-width) letters.
const LABEL: Record<FactKind, string> = {
  mex: "gql",
  sig: "in",
  ab: "ab",
  proto: "proto",
  wam: "wam",
  iq: "iq",
  const: "const",
  enum: "enum",
  appstate: "sync",
};

export function KindBadge({ kind }: { kind: FactKind }) {
  return (
    <Badge variant="outline" className="data shrink-0 font-normal" title={`kind: ${kind}`}>
      {LABEL[kind]}
    </Badge>
  );
}
