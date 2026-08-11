import Link from "next/link";
import { DataError } from "@/components/data-error";
import { KindBadge } from "@/components/kind-badge";
import { Scroll, SectionTitle } from "@/components/ui";
import { getCoverageSummary, getDiff, getSnapshotResult, type RepoCoverage } from "@/lib/data";
import { factHref } from "@/lib/ids";
import { sourceLabel } from "@/lib/source";
import { getCitations } from "@/lib/spec";
import { isAb, type FactKind } from "@/lib/types";

const fmt = (n: number) => n.toLocaleString("en-US");

/**
 * The overview leads with findings, not with counts.
 *
 * Anyone can read "2,190 A/B properties" and learn nothing. What a maintainer
 * needs on arrival is the short list of things that changed and the short list
 * of things their library is missing — so those come first, and the inventory
 * is underneath.
 */
export default async function OverviewPage() {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />;
  }
  const { snap } = res;
  const cov = getCoverageSummary();
  const diff = getDiff();

  const abFacts = snap.byKind.get("ab") ?? [];
  const unwired = abFacts.filter((f) => isAb(f) && (f.usage?.read_count ?? 0) === 0).length;

  // A changed A/B property is a default flipping, which is a rollout either
  // starting or being pulled. It is the single most actionable thing here.
  const rollouts = (diff.changed?.ab ?? []).slice(0, 14);
  const newFlags = (diff.added?.ab ?? []).length;

  const citations = getCitations();
  const documented = [...citations.keys()].filter((id) => snap.factMap.has(id)).length;

  const kinds: Array<[FactKind, string]> = [
    ["ab", "/ab"], ["proto", "/proto"], ["wam", "/wam"], ["iq", "/iq"], ["const", "/coverage"],
  ];

  return (
    <Scroll>
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="mb-8 border-b border-hair-strong pb-5">
          <h1 className="text-lg font-semibold tracking-tight">WhatsApp Web protocol</h1>
          <p className="mt-1 max-w-prose text-sm text-fg-muted">
            {fmt(snap.facts.length)} facts extracted from revision{" "}
            <span className="data text-fg">{snap.ir.revision}</span>. Every fact is identified by the
            literal that must appear on the wire, which is why the same string is the id here, the
            constant in the generated helpers, and what the coverage scan looks for.
          </p>
        </header>

        {/* --- what moved --------------------------------------------------- */}
        <SectionTitle>Rollout signal</SectionTitle>
        <p className="mb-3 max-w-prose text-sm text-fg-muted">
          An A/B property whose default changed between revisions is a feature being switched on or
          pulled back. {rollouts.length > 0 ? `${rollouts.length} changed` : "None changed"} since{" "}
          <span className="data">{diff.from}</span>, alongside {fmt(newFlags)} newly registered.
        </p>
        {rollouts.length > 0 && (
          <ul className="mb-8 grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {rollouts.map((r: { id: string; name: string }) => (
              <li key={r.id} className="border-b border-hair py-1 text-sm">
                <Link href={factHref(r.id)} className="data hover:text-accent hover:underline">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* --- who is behind ------------------------------------------------ */}
        <SectionTitle>Library coverage</SectionTitle>
        <p className="mb-3 max-w-prose text-sm text-fg-muted">
          Measured by searching each library for the wire literal. Where a library builds a literal
          at runtime the result is <em>inconclusive</em> rather than missing, because a wrong issue
          is worse than none.
        </p>
        <div className="mb-8 overflow-x-auto border border-hair bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-hair-strong bg-surface-2 text-left text-xs text-fg-muted">
                <th className="px-3 py-1.5 font-medium">library</th>
                <th className="px-3 py-1.5 text-right font-medium">covered</th>
                <th className="px-3 py-1.5 text-right font-medium">missing</th>
                <th className="px-3 py-1.5 text-right font-medium">inconclusive</th>
              </tr>
            </thead>
            <tbody>
              {cov.perRepo.map((r: RepoCoverage) => (
                <tr key={r.repo} className="border-b border-hair last:border-0">
                  <td className="px-3 py-1.5">
                    <Link href="/coverage" className="data hover:text-accent hover:underline">
                      {r.repo}
                    </Link>
                  </td>
                  <td className="px-3 py-1.5 text-right tnum text-cov-covered">{fmt(r.covered)}</td>
                  <td className="px-3 py-1.5 text-right tnum font-medium text-cov-missing">{fmt(r.missing)}</td>
                  <td className="px-3 py-1.5 text-right tnum text-cov-inconclusive">
                    {fmt(r.inconclusive)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- inventory ----------------------------------------------------- */}
        <SectionTitle>What is tracked</SectionTitle>
        <div className="mb-8 grid gap-px border border-hair bg-hair sm:grid-cols-5">
          {kinds.map(([k, href]) => (
            <Link
              key={k}
              href={href}
              className="bg-surface px-3 py-2.5 transition-colors hover:bg-surface-2"
            >
              <div className="tnum text-lg font-medium">{fmt(snap.kindCounts[k] ?? 0)}</div>
              <div className="mt-0.5">
                <KindBadge kind={k} />
              </div>
            </Link>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <SectionTitle>Registered but unwired</SectionTitle>
            <p className="max-w-prose text-sm text-fg-muted">
              <Link href="/ab" className="tnum font-medium text-cov-missing hover:underline">
                {fmt(unwired)}
              </Link>{" "}
              of {fmt(abFacts.length)} A/B properties exist in the registry but are read by no
              module. Those are flags reserved ahead of the feature they gate, which makes them the
              earliest visible signal of anything unreleased.
            </p>
          </div>
          <div>
            <SectionTitle>Documented</SectionTitle>
            <p className="max-w-prose text-sm text-fg-muted">
              <Link href="/spec" className="tnum font-medium hover:underline">
                {fmt(documented)}
              </Link>{" "}
              of {fmt(snap.facts.length)} facts are named by the written spec. The machinery is
              complete; the prose is not. That ratio is shown rather than hidden because it is the
              honest state of the project.
            </p>
          </div>
        </div>
      </div>
    </Scroll>
  );
}
