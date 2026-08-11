import type { FactKind } from "@/lib/types";

// Kind is a neutral, monochrome label. Colour is reserved for coverage state,
// so kinds are distinguished only by their (fixed-width) letters.
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
    <span
      className="data inline-flex h-[15px] shrink-0 items-center border border-hair bg-surface-2 px-1 text-2xs text-fg-muted"
      title={`kind: ${kind}`}
    >
      {LABEL[kind]}
    </span>
  );
}
