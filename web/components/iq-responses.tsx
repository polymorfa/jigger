import { Code, renderStanza } from "@/components/code";
import { ModuleLink } from "@/components/module-link";
import type { IqData } from "@/lib/types";

/**
 * What comes back, and in what order it is tried.
 *
 * A client does not receive "a response". It receives whichever arm's parser
 * accepts the stanza first, and the arms after it are never consulted. So the
 * order shown here is not presentation — it is the algorithm, and a library that
 * checks them in a different order will classify replies differently.
 *
 * The named errors matter for the same reason at a finer grain: `RateOverlimit`
 * is worth retrying and `Forbidden` never is, and an implementation that only
 * knows "an error came back" cannot tell those apart.
 */
export function IqResponses({ data }: { data: IqData }) {
  const responses = data.responses ?? [];
  if (responses.length === 0) {
    return (
      <section className="flex flex-col gap-1.5">
        <Header n={0} rpc={data.rpc} />
        <p className="max-w-prose text-sm text-fg-faint">
          No RPC module sends this request, so there is nothing that names its
          reply. Either it is built by hand at the call site, or it is fire-and-forget.
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-3">
      <Header n={responses.length} rpc={data.rpc} />

      <div className="flex flex-col gap-4">
        {responses.map((r, i) => (
          <div key={r.module} className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline gap-2">
              {/* The index is the point: it is the order the client tries. */}
              <span className="tnum text-2xs text-fg-faint">{i + 1}</span>
              <span
                className={
                  "data border px-1.5 text-sm " +
                  (r.errors?.length
                    ? "border-cov-missing/40 text-cov-missing"
                    : "border-cov-covered/40 text-cov-covered")
                }
              >
                {r.arm}
              </span>
              <ModuleLink name={r.module} className="text-xs" />
            </div>

            <Code src={renderStanza(r.node)} lang="xml" />

            {r.errors && r.errors.length > 0 && (
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-xs text-fg-muted">resolves to one of</span>
                {r.errors.map((e) => (
                  <span
                    key={e}
                    className="data border border-hair bg-surface-2 px-1.5 py-[1px] text-xs text-fg"
                  >
                    {e}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Header({ n, rpc }: { n: number; rpc?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
      <h2 className="text-md font-semibold text-fg">Responses</h2>
      <span className="flex items-baseline gap-3 text-xs text-fg-faint">
        {n > 0 && <span>tried in this order</span>}
        {rpc && <ModuleLink name={rpc} className="text-xs" />}
      </span>
    </div>
  );
}
