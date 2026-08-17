"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon, SearchIcon, XIcon } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  { id: "relevance", label: "Best match first" },
  { id: "name", label: "Name, A → Z" },
  { id: "kind", label: "Grouped by kind" },
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
          {/* Both controls say what they do and what they are currently doing.
              The previous version was a row of bare words — `ab 345`,
              `Relevance` — where nothing said whether a word was a filter, a
              sort, or a result count, and "Kind" appeared as both a sort option
              and a set of filters. */}
          <div className="flex flex-col gap-2 border-y py-2.5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
              <span className="text-muted-foreground w-20 shrink-0 text-xs">
                Show kinds
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {/* Counts come from the unfiltered set, so narrowing never
                    hides what you would narrow to next. */}
                <KindChip
                  label="Everything"
                  count={matched.length}
                  active={kinds.size === 0}
                  onClick={() => {
                    setKinds(new Set());
                    sync({ kinds: new Set() });
                  }}
                />
                {present.map((k) => (
                  <KindChip
                    key={k}
                    label={k}
                    mono
                    count={counts.get(k) ?? 0}
                    active={kinds.has(k)}
                    onClick={() => toggleKind(k)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <Label htmlFor="sort" className="text-muted-foreground w-20 shrink-0 text-xs">
                Order by
              </Label>
              <Select
                value={sort}
                onValueChange={(v) => {
                  setSort(v as Sort);
                  sync({ sort: v as Sort });
                }}
              >
                <SelectTrigger id="sort" size="sm" className="w-[13rem]">
                  <SelectValue>{SORTS.find((s) => s.id === sort)?.label}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {SORTS.map((s) => (
                    <SelectItem key={s.id} value={s.id}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="tnum text-muted-foreground ml-auto text-xs">
                {results.length.toLocaleString()} of {matched.length.toLocaleString()} shown
              </span>
            </div>
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
                  <span className="data min-w-0 truncate text-sm text-fg">{e.id}</span>
                  {e.sub ? (
                    <span className="min-w-0 text-muted-foreground truncate text-xs">{e.sub}</span>
                  ) : (
                    e.name !== e.id.slice(e.id.indexOf(":") + 1) && (
                      <span className="min-w-0 text-muted-foreground truncate text-sm">{e.name}</span>
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

/**
 * A kind filter, in an unmistakable state.
 *
 * Two greys apart is not a state anyone can read — the old chips differed only
 * by background shade, so "which of these am I filtering by" took a careful
 * look. The check mark is the answer, and the count stays visible either way so
 * you can see what turning one on would cost you.
 */
function KindChip({
  label,
  count,
  active,
  onClick,
  mono = false,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  mono?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={
        "flex items-center gap-1.5 border px-2 py-0.5 text-xs transition-colors " +
        (active
          ? "border-brand bg-brand-weak text-fg"
          : "text-muted-foreground hover:border-ring hover:text-foreground")
      }
    >
      <CheckIcon
        className={"size-3 shrink-0 " + (active ? "text-brand" : "opacity-0")}
        aria-hidden="true"
      />
      <span className={mono ? "data" : undefined}>{label}</span>
      <span className="tnum opacity-60">{count.toLocaleString()}</span>
    </button>
  );
}
