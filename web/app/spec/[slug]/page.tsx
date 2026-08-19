import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Scroll } from "@/components/ui";
import { SpecMarkdown } from "@/components/markdown";
import { CitedFacts } from "@/components/cited-facts";
import { FACT_ID_RE } from "@/lib/ids";
import { getSpec, getSpecList } from "@/lib/spec";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSpecList().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpec(slug);
  return { title: spec ? spec.title : "Spec not found" };
}

/** Fact ids this document cites, by backtick citation, in order of first mention. */
function citedIds(content: string): string[] {
  const seen = new Set<string>();
  for (const m of content.matchAll(/`([^`]+)`/g)) {
    const token = m[1]!;
    if (FACT_ID_RE.test(token)) seen.add(token);
  }
  return [...seen];
}

export default async function SpecPage({ params }: Params) {
  const { slug } = await params;
  const spec = getSpec(slug);
  if (!spec) notFound();

  const cited = citedIds(spec.content);

  return (
    <Scroll>
      <div className="mx-auto flex max-w-[var(--reading)] flex-col gap-6 px-5 py-5">
        <Link href="/spec" className="link -mb-2 inline-block text-xs">
          ← all spec documents
        </Link>

        <SpecMarkdown content={spec.content} factIds={new Set(cited)} />

        <CitedFacts ids={cited} />
      </div>
    </Scroll>
  );
}
