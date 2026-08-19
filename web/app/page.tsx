"use client";

import { Suspense, use } from "react";
import Link from "next/link";
import { ClientOnly } from "@/components/client-only";
import { KindBadge } from "@/components/kind-badge";
import { Scroll, SectionTitle } from "@/components/ui";
import { loadDiff, loadSummary } from "@/lib/cdn";
import { loadCitations } from "@/lib/facts";
import { factHref } from "@/lib/ids";
import type { FactKind } from "@/lib/types";

const fmt = (n: number) => n.toLocaleString("en-US");

const KINDS: Array<[FactKind, string]> = [
  ["ab", "/ab"],
  ["proto", "/proto"],
  ["wam", "/wam"],
  ["iq", "/iq"],
  ["enum", "/enum"],
];

function Overview() {
  const sum = use(loadSummary());
  const diff = use(loadDiff());
  const documented = Object.keys(use(loadCitations())).length;

  // A changed A/B property is a default flipping, which is a rollout either
  // starting or being pulled. It is the single most actionable thing here.
  const rollouts = (diff?.changed?.ab ?? []).slice(0, 14);
  const newFlags = (diff?.added?.ab ?? []).length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <header className="mb-8 border-b border-hair-strong pb-5">
        <h1 className="text-lg font-semibold tracking-tight">WhatsApp Web protocol</h1>
        <p className="mt-1 max-w-prose text-sm text-fg-muted">
          {fmt(sum.facts)} facts extracted from revision{" "}
          <span className="data text-fg">{sum.revision}</span>. Every fact is identified by the
          literal that must appear on the wire, which is why the same string is the id here, the
          constant in the generated helpers, and what a coverage scan looks for.
        </p>
      </header>

      {/* --- what moved --------------------------------------------------- */}
      <SectionTitle>Rollout signal</SectionTitle>
      <p className="mb-3 max-w-prose text-sm text-fg-muted">
        An A/B property whose default changed between revisions is a feature being switched on or
        pulled back.{" "}
        {diff ? (
          <>
            {rollouts.length > 0 ? `${rollouts.length} changed` : "None changed"} since{" "}
            <span className="data">{diff.from}</span>, alongside {fmt(newFlags)} newly registered.
          </>
        ) : (
          "No previous revision has been indexed yet, so there is nothing to compare against."
        )}
      </p>
      {rollouts.length > 0 && (
        <ul className="mb-8 grid gap-x-6 gap-y-1 sm:grid-cols-2">
          {rollouts.map((r: { id: string; name: string }) => (
            <li key={r.id} className="border-b border-hair py-1 text-sm">
              <Link href={factHref(r.id)} className="data hover:text-brand hover:underline">
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* --- inventory ----------------------------------------------------- */}
      <SectionTitle>What is tracked</SectionTitle>
      <div className="mb-8 grid gap-px border border-hair bg-hair sm:grid-cols-5">
        {KINDS.map(([k, href]) => (
          <Link
            key={k}
            href={href}
            className="bg-surface px-3 py-2.5 transition-colors hover:bg-surface-2"
          >
            <div className="tnum text-lg font-medium">{fmt(sum.kinds[k] ?? 0)}</div>
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
              {fmt(sum.ab.unwired)}
            </Link>{" "}
            of {fmt(sum.ab.total)} A/B properties exist in the registry but are read by no module.
            Those are flags reserved ahead of the feature they gate, which makes them the earliest
            visible signal of anything unreleased.
          </p>
        </div>
        <div>
          <SectionTitle>Documented</SectionTitle>
          <p className="max-w-prose text-sm text-fg-muted">
            <Link href="/spec" className="tnum font-medium hover:underline">
              {fmt(documented)}
            </Link>{" "}
            of {fmt(sum.facts)} facts are named by the written spec. The machinery is complete; the
            prose is not. That ratio is shown rather than hidden because it is the honest state of
            the project.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * The overview leads with findings, not with counts.
 *
 * Anyone can read "2,190 A/B properties" and learn nothing. What a maintainer
 * needs on arrival is the short list of things that changed — so that comes
 * first, and the inventory is underneath.
 */
export default function OverviewPage() {
  return (
    <Scroll>
      <ClientOnly>
        <Suspense>
          <Overview />
        </Suspense>
      </ClientOnly>
    </Scroll>
  );
}
