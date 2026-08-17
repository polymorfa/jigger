import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Scroll } from "@/components/ui";
import { DataError } from "@/components/data-error";
import { SpecMarkdown } from "@/components/markdown";
import { KindBadge } from "@/components/kind-badge";
import { getSnapshotResult } from "@/lib/data";
import { FACT_ID_RE, factHref } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { getSpec, getSpecList } from "@/lib/spec";
import type { Fact } from "@/lib/types";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSpecList().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpec(slug);
  return { title: spec ? spec.title : "Spec not found" };
}

// Facts this document cites, by backtick citation, in order of first mention.
function citedFacts(content: string, factMap: Map<string, Fact>): Fact[] {
  const seen = new Set<string>();
  const out: Fact[] = [];
  for (const m of content.matchAll(/`([^`]+)`/g)) {
    const token = m[1]!;
    if (!FACT_ID_RE.test(token) || seen.has(token)) continue;
    seen.add(token);
    const f = factMap.get(token);
    if (f) out.push(f);
  }
  return out;
}

export default async function SpecPage({ params }: Params) {
  const { slug } = await params;
  const spec = getSpec(slug);
  if (!spec) notFound();

  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const factMap = res.snap.factMap;
  const factIds = new Set(factMap.keys());
  const facts = citedFacts(spec.content, factMap);

  return (
    <Scroll>
      <div className="mx-auto flex max-w-[var(--reading)] flex-col gap-6 px-5 py-5">
        <Link href="/spec" className="link -mb-2 inline-block text-xs">
          ← all spec documents
        </Link>

        <SpecMarkdown content={spec.content} factIds={factIds} />

        <section className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
            <h2 className="text-md font-semibold text-fg">Facts in this section</h2>
            <span className="data tnum text-xs text-fg-faint">{facts.length}</span>
          </div>
          {facts.length === 0 ? (
            <p className="text-sm text-fg-faint">
              This document cites no facts present in the loaded snapshot.
            </p>
          ) : (
            <div className="border border-hair bg-surface">
              {facts.map((f) => (
                <Link
                  key={f.id}
                  href={factHref(f.id)}
                  className="flex items-baseline gap-2.5 border-b border-hair px-3 py-1.5 last:border-b-0 hover:bg-surface-2"
                >
                  <KindBadge kind={f.kind} />
                  <span className="data shrink-0 text-sm text-brand">{f.id}</span>
                  <span className="truncate text-sm text-fg-muted">{f.name}</span>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </Scroll>
  );
}
