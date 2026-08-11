import type { FactHistory } from "@/lib/history";

function short(v: unknown): string {
  if (typeof v === "string") return v.length > 60 ? `${v.slice(0, 57)}…` : JSON.stringify(v);
  const s = JSON.stringify(v);
  if (s === undefined) return "—";
  return s.length > 60 ? `${s.slice(0, 57)}…` : s;
}

/**
 * What this fact has done across the indexed revisions.
 *
 * The whole project exists because there are too many changes to follow by hand.
 * A pairwise diff answers "what moved between these two releases"; this answers
 * "what has *this* done", which is the question you have the moment you find
 * something surprising and need to know whether it is new.
 *
 * Only events are shown. A revision where nothing happened is not a row —
 * padding the list with them would bury the one line that matters.
 */
export function Timeline({
  history,
  revisions,
}: {
  history: FactHistory | null;
  revisions: number[];
}) {
  if (!history) {
    return (
      <p className="text-sm text-fg-faint">
        No history walked yet. Run <span className="data">jigger history</span> to build the
        per-fact changelog across every indexed revision.
      </p>
    );
  }

  const oldest = revisions[0];
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-fg-muted">
        {history.events.length === 0 ? (
          <>
            Unchanged across{" "}
            <span className="tnum">{revisions.length}</span> indexed revision
            {revisions.length === 1 ? "" : "s"}.
          </>
        ) : (
          <>
            <span className="tnum">{history.events.length}</span> event
            {history.events.length === 1 ? "" : "s"}.
          </>
        )}{" "}
        {/* Said plainly, because "first seen" reads as "introduced in" and for
            most facts it only means the index does not go back further. */}
        {history.first === oldest ? (
          <span className="text-fg-faint">
            Present in the oldest revision indexed (<span className="tnum">{oldest}</span>), so
            no first-appearance can be claimed.
          </span>
        ) : (
          <span>
            First seen in <span className="data tnum">{history.first}</span>.
          </span>
        )}
      </p>

      {history.events.length > 0 && (
        <ul className="flex flex-col">
          {history.events.map((e, i) => (
            <li key={`${e.rev}-${i}`} className="flex flex-col gap-0.5 border-t border-hair py-1.5">
              <div className="flex items-baseline gap-2">
                <span className="data tnum text-xs text-fg-faint">{e.rev}</span>
                <span
                  className={
                    "data border px-1 text-2xs " +
                    (e.what === "removed"
                      ? "border-cov-missing/40 text-cov-missing"
                      : "border-hair text-fg-muted")
                  }
                >
                  {e.what}
                </span>
              </div>
              {e.changes.map((c) => (
                <div key={c.field} className="flex flex-wrap items-baseline gap-1.5 pl-1 text-xs">
                  <span className="data text-fg-muted">{c.field}</span>
                  <span className="data text-cov-missing line-through">{short(c.from)}</span>
                  <span className="text-fg-faint">→</span>
                  <span className="data text-cov-covered">{short(c.to)}</span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
