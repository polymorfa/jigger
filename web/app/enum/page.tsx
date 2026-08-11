import { EmptyDetail } from "@/components/ui";

export default function EnumIndexPage() {
  return (
    <EmptyDetail>
      Named value sets. A WAM field typed <span className="data">MEDIA_TYPE</span> carries a number,
      and <span className="data">34</span> means <span className="data">REACTION</span> only because
      of one of these — a client that logs the integer is reporting telemetry nobody can read.
    </EmptyDetail>
  );
}
