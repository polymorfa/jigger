"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon, XIcon } from "lucide-react";
import { loadSearchIndex } from "@/lib/client-index";
import {
  FIELDS,
  countByKind,
  parseQuery,
  runQuery,
  sortHits,
  type Scored,
  type Sort,
} from "@/lib/query";
import { SEARCH_KINDS, type SearchEntry, type SearchKind } from "@/lib/types";
import { hrefOf } from "@/components/global-search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Separator } from "@/components/ui/separator";
import { KindBadge } from "./kind-badge";

const PAGE = 200;

const EXAMPLES: { q: string; what: string }[] = [
  { q: "kind:proto contains:contextInfo", what: "messages that embed ContextInfo" },
  { q: "kind:ab contains:regular_high", what: "flags read by high-priority sync" },
  { q: "kind:appstate -contains:regular", what: "mutations outside the regular collections" },
  { q: "name:/^WAWeb.*Query$/", what: "GraphQL queries, by regex" },
  { q: "kind:iq contains:jid", what: "stanzas carrying a jid attribute" },
  { q: "kind:enum contains:REACTION", what: "value sets with a REACTION variant" },
];

const SORTS: { id: Sort; label: string }[] = [
  { id: "relevance", label: "Relevance" },
  { id: "name", label: "Name" },
  { id: "kind", label: "Kind" },
];

/**
 * Search as a place, not a popover.
 *
 * The header field answers "take me to the thing I am thinking of". This
 * answers the other kind of question — the ones with a shape rather than a name
 * — where you want to see the whole result set, narrow it, and still be able to
 * share the URL afterwards. Every control writes to the query string, so a
 * result set is a link.
 */
export function AdvancedSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState(params.get("q") ?? "");
  const [sort, setSort] = useState<Sort>((params.get("sort") as Sort) ?? "relevance");
  const [kinds, setKinds] = useState<Set<SearchKind>>(
    new Set((params.get("kind")?.split(",").filter(Boolean) ?? []) as SearchKind[]),
  );
  const [limit, setLimit] = useState(PAGE);

  useEffect(() => {
    loadSearchIndex().then(setEntries);
  }, []);

  // The URL is the state. Replace rather than push so refining a query does not
  // fill the back button with every keystroke.
  const sync = useCallback(
    (next: { q?: string; sort?: Sort; kinds?: Set<SearchKind> }) => {
      const sp = new URLSearchParams();
      const qq = next.q ?? q;
      const ss = next.sort ?? sort;
      const kk = next.kinds ?? kinds;
      if (qq) sp.set("q", qq);
      if (ss !== "relevance") sp.set("sort", ss);
      if (kk.size) sp.set("kind", [...kk].join(","));
      router.replace(sp.size ? `/search?${sp}` : "/search", { scroll: false });
    },
    [q, sort, kinds, router],
  );

  const terms = useMemo(() => parseQuery(q), [q]);

  /** Everything matching the text, before the kind chips narrow it. */
  const matched = useMemo<Scored[]>(
    () => (entries ? runQuery(entries, terms) : []),
    [entries, terms],
  );
  const counts = useMemo(() => countByKind(matched), [matched]);

  const results = useMemo(
    () => sortHits(kinds.size ? matched.filter((h) => kinds.has(h.e.kind)) : matched, sort),
    [matched, kinds, sort],
  );

  useEffect(() => setLimit(PAGE), [q, sort, kinds]);

  const toggleKind = (k: SearchKind) => {
    const next = new Set(kinds);
    if (!next.delete(k)) next.add(k);
    setKinds(next);
    sync({ kinds: next });
  };

  const present = SEARCH_KINDS.filter((k) => counts.has(k));
  const shown = results.slice(0, limit);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="focus-within:border-ring flex h-10 items-center gap-2 border bg-surface px-3 transition-colors">
          <SearchIcon className="text-muted-foreground size-4 shrink-0" />
          <input
            autoFocus
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              sync({ q: e.target.value });
            }}
            placeholder="kind:proto contains:contextInfo"
            spellCheck={false}
            autoComplete="off"
            aria-label="Query"
            className="placeholder:text-muted-foreground data h-full flex-1 bg-transparent text-sm text-fg outline-none"
          />
          {q && (
            <button
              onClick={() => {
                setQ("");
                sync({ q: "" });
              }}
              aria-label="Clear"
              className="text-muted-foreground hover:text-foreground"
            >
              <XIcon className="size-4" />
            </button>
          )}
        </div>

        {/* The operators, stated rather than hidden behind a help link. A query
            language nobody can see is a query language nobody uses. */}
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-2xs">
          {FIELDS.map((f) => (
            <span key={f.name}>
              <span className="data text-fg">{f.name}:</span> {f.hint}
            </span>
          ))}
          <span>
            <span className="data text-fg">-</span> negates ·{" "}
            <span className="data text-fg">/re/</span> regex ·{" "}
            <span className="data text-fg">&quot;…&quot;</span> phrase
          </span>
        </div>
      </div>

      {!q.trim() ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-fg">Try</h2>
          <div className="flex flex-col">
            {EXAMPLES.map((x) => (
              <button
                key={x.q}
                onClick={() => {
                  setQ(x.q);
                  sync({ q: x.q });
                }}
                className="hover:bg-accent flex items-baseline gap-3 border-b px-1 py-1.5 text-left"
              >
                <span className="data shrink-0 text-sm text-brand">{x.q}</span>
                <span className="text-muted-foreground text-xs">{x.what}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center gap-3">
            {/* Counts are computed before the kind filter, so narrowing never
                hides what you would narrow to next. */}
            <div className="flex flex-wrap items-center gap-1">
              <Button
                size="sm"
                variant={kinds.size === 0 ? "secondary" : "ghost"}
                onClick={() => {
                  setKinds(new Set());
                  sync({ kinds: new Set() });
                }}
                className="h-6 px-2 text-2xs"
              >
                all <span className="tnum ml-1 opacity-70">{matched.length}</span>
              </Button>
              {present.map((k) => (
                <Button
                  key={k}
                  size="sm"
                  variant={kinds.has(k) ? "secondary" : "ghost"}
                  onClick={() => toggleKind(k)}
                  className="h-6 gap-1 px-2 text-2xs"
                >
                  <span className="data">{k}</span>
                  <span className="tnum opacity-70">{counts.get(k)}</span>
                </Button>
              ))}
            </div>

            <Separator orientation="vertical" className="h-5" />

            <div className="flex items-center gap-1" role="group" aria-label="Sort">
              <span className="text-muted-foreground text-2xs">sort</span>
              {SORTS.map((s) => (
                <Button
                  key={s.id}
                  size="sm"
                  variant={sort === s.id ? "secondary" : "ghost"}
                  onClick={() => {
                    setSort(s.id);
                    sync({ sort: s.id });
                  }}
                  className="h-6 px-2 text-2xs"
                >
                  {s.label}
                </Button>
              ))}
            </div>

            <span className="tnum text-muted-foreground ml-auto text-xs">
              {results.length.toLocaleString()} result{results.length === 1 ? "" : "s"}
            </span>
          </div>

          {results.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              {entries ? "Nothing matches." : "Loading index…"}
            </p>
          ) : (
            <div className="flex flex-col">
              {shown.map(({ e, via }) => (
                <Link
                  key={`${e.kind}:${e.id}`}
                  href={hrefOf(e)}
                  className="hover:bg-accent flex items-baseline gap-2.5 border-b px-1 py-1.5"
                >
                  {e.kind === "module" ? (
                    <Badge variant="outline" className="data shrink-0">
                      src
                    </Badge>
                  ) : (
                    <KindBadge kind={e.kind} />
                  )}
                  <span className="data shrink-0 text-sm text-fg">{e.id}</span>
                  {e.sub ? (
                    <span className="text-muted-foreground truncate text-xs">{e.sub}</span>
                  ) : (
                    e.name !== e.id.slice(e.id.indexOf(":") + 1) && (
                      <span className="text-muted-foreground truncate text-sm">{e.name}</span>
                    )
                  )}
                  {via && (
                    <span className="data text-muted-foreground ml-auto shrink-0 text-2xs">
                      contains <span className="text-brand">{via}</span>
                    </span>
                  )}
                </Link>
              ))}

              {results.length > shown.length && (
                <Button
                  variant="ghost"
                  onClick={() => setLimit((n) => n + PAGE)}
                  className="mt-2 self-start text-xs"
                >
                  Show {Math.min(PAGE, results.length - shown.length)} more
                  <span className="text-muted-foreground ml-1">
                    ({results.length - shown.length} left)
                  </span>
                </Button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** Shown while the client component and its index load. */
export function SearchFallback() {
  return (
    <p className="text-muted-foreground text-sm">
      Loading the index… <Kbd>/</Kbd> focuses search from anywhere.
    </p>
  );
}
