import { EmptyDetail } from "@/components/ui";

export default function ProtoIndexPage() {
  return (
    <EmptyDetail>
      Select a message from the tree. The hierarchy is built from dotted (and <span className="data">$</span>
      -nested) message names; each leaf shows its field table sorted by field number, with cross-links to
      referenced messages.
    </EmptyDetail>
  );
}
