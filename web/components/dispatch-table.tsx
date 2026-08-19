import { ModuleLink } from "@/components/module-link";
import type { Route } from "@/lib/types";

/**
 * The inbound dispatch table: how a stanza finds its handler.
 *
 * Knowing that `<notification type="server_sync">` exists is the easy half.
 * This is the other half — that the client switches on the root tag, then on
 * `type`, and that a couple of arms need a third look at the first child's tag
 * before they mean anything.
 *
 * The order is the client's, not alphabetical, because a `switch` is evaluated
 * in order and the arms that share a body share it positionally. Sorting this
 * list would make it prettier and stop it being a description of the algorithm.
 */
export function DispatchTable({ routes }: { routes: Route[] }) {
  const leaves = count(routes);
  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
        <h2 className="text-md font-semibold text-fg">Dispatch</h2>
        <span className="text-xs text-fg-faint">
          <span className="tnum">{leaves}</span> routes across{" "}
          <span className="tnum">{routes.length}</span> stanza tags
        </span>
      </div>
      <p className="max-w-prose text-sm text-fg-muted">
        Every inbound stanza that is not an answer to something we sent arrives
        at one function and is routed by a nested switch. An arm with no handler
        only re-dispatches; an arm the table never matches falls through to a
        nack rather than being quietly ignored.
      </p>
      <ul className="mt-1 flex flex-col">
        {routes.map((r) => (
          <Row key={r.value} route={r} depth={0} />
        ))}
      </ul>
    </section>
  );
}

function count(routes: Route[]): number {
  return routes.reduce((n, r) => n + 1 + count(r.variants ?? []), 0);
}

function Row({ route, depth }: { route: Route; depth: number }) {
  const kids = route.variants ?? [];
  return (
    <li>
      <div
        className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 border-b border-hair py-1"
        style={{ paddingLeft: depth * 18 }}
      >
        {/* What this level keys on, stated at every level. Two arms can carry
            the same literal at different depths — `status` is both a root tag
            and a notification type — and without the key they read as one. */}
        <span className="text-2xs text-fg-faint">
          {depth === 0 ? "<" : `${route.on ?? "?"}=`}
        </span>
        <span className="data text-sm text-fg">
          {route.value}
          {depth === 0 ? ">" : ""}
        </span>
        {route.handler ? (
          <>
            <span className="text-2xs text-fg-faint">→</span>
            <ModuleLink
              name={route.handler.module}
              references={route.handler.method === "default" ? undefined : route.handler.method}
              className="text-xs"
            />
            {route.handler.method !== "default" && (
              <span className="data text-2xs text-fg-faint">{route.handler.method}</span>
            )}
          </>
        ) : kids.length ? (
          <span className="text-2xs text-fg-faint">re-dispatches on {kids[0]?.on ?? "?"}</span>
        ) : (
          <span className="text-2xs text-cov-missing">no handler reached</span>
        )}
      </div>
      {/* A nested list, not bare `<li>`s. Depth is drawn with padding, so this
          is invisible — but `<li>` inside `<li>` is invalid HTML and the parser
          rewrites it, which shows up as a hydration mismatch. */}
      {kids.length > 0 && (
        <ul>
          {kids.map((k) => (
            <Row key={`${route.value}/${k.value}`} route={k} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
