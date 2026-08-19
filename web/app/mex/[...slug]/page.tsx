import Detail from "@/components/detail/mex";

/**
 * One shell for every mex fact, with the edge mapping each URL onto it.
 *
 * Export wants every dynamic route enumerated, and there are thousands — all
 * differing only in a string the page reads from the address bar. Building them
 * would be a long build to produce identical files.
 */
export function generateStaticParams() {
  return [{ slug: ["_"] }];
}

export default function Page() {
  return <Detail />;
}
