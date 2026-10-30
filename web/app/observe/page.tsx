import type { Metadata } from "next";
import { ObservePage } from "@/components/observe-page";

export const metadata: Metadata = { title: "Observation" };

export default function Page() {
  return <ObservePage />;
}
