import Redirect from "@/components/detail/fact-redirect";

/** A redirect shell for old `/fact/<id>` links. */
export function generateStaticParams() {
  return [{ id: "_" }];
}

export default function Page() {
  return <Redirect />;
}
