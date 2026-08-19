import Detail from "@/components/detail/source";

/** One shell for all 28,294 modules; the edge maps each URL onto it. */
export function generateStaticParams() {
  return [{ module: "_" }];
}

export default function Page() {
  return <Detail />;
}
