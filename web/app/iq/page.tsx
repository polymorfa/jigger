import { EmptyDetail } from "@/components/ui";

export default function IqIndexPage() {
  return (
    <EmptyDetail>
      Select an operation to render its stanza. Operations are grouped by their <span className="data">xmlns</span>{" "}
      namespace — the routing key the server dispatches on.
    </EmptyDetail>
  );
}
