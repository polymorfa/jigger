import { EmptyDetail } from "@/components/ui";

export default function MexIndexPage() {
  return (
    <EmptyDetail>
      Select an operation. The <span className="data">doc_id</span> is what travels in{" "}
      <span className="data">{'<iq xmlns="w:mex"><query query_id="…"/></iq>'}</span> — it rotates
      between releases, and a library holding a stale one fails silently.
    </EmptyDetail>
  );
}
