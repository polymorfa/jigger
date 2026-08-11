import { REPOS } from "@/lib/constants";
import type { CoverageState } from "@/lib/types";

// The single place coverage state becomes colour. Weighted on purpose:
//   missing        -> loud (the only state that should draw the eye)
//   covered        -> quiet
//   inconclusive   -> neutral, hollow (scanner could not decide — NOT a failure)
//   absent (undefined) -> a dim dash (repo did not scan this fact)

const LABEL: Record<CoverageState, string> = {
  covered: "covered",
  missing: "missing",
  inconclusive: "inconclusive",
};

const CLS: Record<CoverageState, string> = {
  covered: "cov cov-covered",
  missing: "cov cov-missing",
  inconclusive: "cov cov-inconclusive",
};

const TITLE: Record<CoverageState, string> = {
  covered: "Implemented in this library",
  missing: "Not implemented — needs attention",
  inconclusive: "Scanner could not decide (often built at runtime)",
};

export function CoverageChip({
  state,
  label,
}: {
  state?: CoverageState;
  label?: string;
}) {
  if (!state) {
    return (
      <span className="cov cov-absent" title="Not scanned by this library">
        {label ?? "not scanned"}
      </span>
    );
  }
  return (
    <span className={CLS[state]} title={TITLE[state]}>
      {label ?? LABEL[state]}
    </span>
  );
}

const DOT_CLS: Record<CoverageState, string> = {
  covered: "text-covered opacity-80",
  missing: "text-missing",
  inconclusive: "text-inconclusive",
};

// Compact per-repo state, one small mark per repo. For dense table rows.
export function CoverageDots({
  byRepo,
}: {
  byRepo: Partial<Record<string, CoverageState>>;
}) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden="true">
      {REPOS.map((repo) => {
        const st = byRepo[repo];
        const title = `${repo}: ${st ?? "not scanned"}`;
        if (!st) {
          return (
            <span key={repo} title={title} className="inline-block h-[1px] w-[7px] bg-absent align-middle" />
          );
        }
        const isHollow = st === "inconclusive";
        return (
          <span
            key={repo}
            title={title}
            className={
              "inline-block h-[7px] w-[7px] align-middle " +
              DOT_CLS[st] +
              (isHollow ? " border border-current" : " bg-current")
            }
          />
        );
      })}
    </span>
  );
}
