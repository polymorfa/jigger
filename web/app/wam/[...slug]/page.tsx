import Detail from "@/components/detail/wam";

/**
 * One shell for every wam fact, with the edge mapping each URL onto it.
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
