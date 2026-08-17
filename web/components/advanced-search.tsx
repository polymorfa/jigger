"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon, PlusIcon, SearchIcon, XIcon } from "lucide-react";
import { loadSearchIndex } from "@/lib/client-index";
import {
  addTerm,
  clearField,
  countByKind,
  parseQuery,
  removeTerm,
  runQuery,
  sortHits,
  toggleTerm,
  valuesOf,
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
 * Search as a place, with the controls writing the query.
 *
 * The query text is the only state; every control edits it rather than sitting
 * beside it. That matters twice over: two mechanisms can disagree and one
 * cannot, and nobody discovers `contains:` by reading documentation — they
 * discover it by clicking a chip and watching it appear in the box.
 *
 * So the controls are how you build a query and the box is how you read, tweak
 * and share one. They are the same thing seen twice.
 */
export function AdvancedSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState(params.get("q") ?? "");
  const [sort, setSort] = useState<Sort>((params.get("sort") as Sort) ?? "relevance");
  const [limit, setLimit] = useState(PAGE);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    loadSearchIndex().then(setEntries);
  }, []);

  // The URL is the state. Replaced rather than pushed, so refining a query does
  // not fill the back button with a history entry per keystroke.
  const sync = useCallback(
    (nextQ: string, nextSort: Sort = sort) => {
      const sp = new URLSearchParams();
      if (nextQ) sp.set("q", nextQ);
      if (nextSort !== "relevance") sp.set("sort", nextSort);
      router.replace(sp.size ? `/search?${sp}` : "/search", { scroll: false });
    },
    [sort, router],
  );

  /** Every edit goes through here, so the box and the URL cannot diverge. */
  const edit = useCallback(
    (next: string) => {
      setQ(next);
      sync(next);
    },
    [sync],
  );

  const terms = useMemo(() => parseQuery(q), [q]);
  const activeKinds = useMemo(() => new Set(valuesOf(terms, "kind")), [terms]);
  const contains = useMemo(() => valuesOf(terms, "contains"), [terms]);
  const excluded = useMemo(() => valuesOf(terms, "contains", true), [terms]);

  const hits = useMemo<Scored[]>(
    () => (entries ? runQuery(entries, terms) : []),
    [entries, terms],
  );

  /**
   * What each kind would yield if it were the *only* kind selected.
   *
   * Counting the current results instead would show 0 beside every kind you
   * have not picked, which reads as "there are none of those" rather than "you
   * filtered them out" — and then the chips are useless for widening a search,
   * which is most of what they are for.
   */
  const counts = useMemo(() => {
    if (!entries) return new Map<SearchKind, number>();
    const withoutKinds = terms.filter((t) => !(t.field === "kind" && !t.negated));
    return countByKind(runQuery(entries, withoutKinds));
  }, [entries, terms]);

  const results = useMemo(() => sortHits(hits, sort), [hits, sort]);
  useEffect(() => setLimit(PAGE), [q, sort]);

  const present = SEARCH_KINDS.filter((k) => (counts.get(k) ?? 0) > 0);
  const shown = results.slice(0, limit);
  const total = [...counts.values()].reduce((a, b) => a + b, 0);

  const addContains = (negated: boolean) => {
    const v = draft.trim();
    if (!v) return;
    edit(addTerm(q, "contains", v, negated));
    setDraft("");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* --- The controls, which write the box below them ------------------ */}
      <div className="bg-surface flex flex-col gap-2.5 border p-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-24 shrink-0 text-xs">Show kinds</span>
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <Chip
              label="Everything"
              count={total}
              active={activeKinds.size === 0}
              onClick={() => edit(clearField(q, "kind"))}
            />
            {present.map((k) => (
              <Chip
                key={k}
                label={k}
                mono
                count={counts.get(k) ?? 0}
                active={activeKinds.has(k)}
                onClick={() => edit(toggleTerm(q, "kind", k))}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-24 shrink-0 text-xs">Must contain</span>
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
            {contains.map((v) => (
              <Pill key={v} label={v} onRemove={() => edit(removeTerm(q, "contains", v))} />
            ))}
            {excluded.map((v) => (
              <Pill
                key={`-${v}`}
                label={v}
                negated
                onRemove={() => edit(removeTerm(q, "contains", v, true))}
              />
            ))}
            <div className="focus-within:border-ring flex h-6 items-center border">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addContains(e.altKey);
                  }
                }}
                placeholder="a field, tag or variant"
                aria-label="Field, tag or variant a result must contain"
                spellCheck={false}
                className="placeholder:text-muted-foreground h-full w-44 min-w-0 bg-transparent px-2 text-xs outline-none"
              />
              <button
                type="button"
                onClick={() => addContains(false)}
                disabled={!draft.trim()}
                title="Require this"
                className="text-muted-foreground hover:text-foreground flex h-full w-6 shrink-0 items-center justify-center border-l disabled:opacity-40"
              >
                <PlusIcon className="size-3" />
              </button>
              <button
                type="button"
                onClick={() => addContains(true)}
                disabled={!draft.trim()}
                title="Exclude this"
                className="text-muted-foreground hover:text-missing flex h-full w-6 shrink-0 items-center justify-center border-l text-xs disabled:opacity-40"
              >
                −
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <Label htmlFor="sort" className="text-muted-foreground w-24 shrink-0 text-xs">
            Order by
          </Label>
          <Select
            value={sort}
            onValueChange={(v) => {
              setSort(v as Sort);
              sync(q, v as Sort);
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
          {q && (
            <Button variant="ghost" size="sm" onClick={() => edit("")} className="h-7 text-xs">
              Reset
            </Button>
          )}
          <span className="tnum text-muted-foreground ml-auto text-xs">
            {results.length.toLocaleString()} result{results.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      {/* --- The same query, as text -------------------------------------- */}
      <div className="flex flex-col gap-1.5">
        <div className="focus-within:border-ring flex h-9 items-center gap-2 border px-3 transition-colors">
          <SearchIcon className="text-muted-foreground size-4 shrink-0" />
          <input
            autoFocus
            value={q}
            onChange={(e) => edit(e.target.value)}
            placeholder="Type here, or build a query with the controls above"
            spellCheck={false}
            autoComplete="off"
            aria-label="Query"
            className="placeholder:text-muted-foreground data h-full min-w-0 flex-1 bg-transparent text-sm text-fg outline-none"
          />
          {q && (
            <button
              onClick={() => edit("")}
              aria-label="Clear"
              className="text-muted-foreground hover:text-foreground shrink-0"
            >
              <XIcon className="size-4" />
            </button>
          )}
        </div>
        <p className="text-muted-foreground text-2xs">
          Bare words match names and contents. The controls above write{" "}
          <span className="data text-fg">kind:</span> and{" "}
          <span className="data text-fg">contains:</span> for you;{" "}
          <span className="data text-fg">-</span> excludes,{" "}
          <span className="data text-fg">/re/</span> is a regex.
        </p>
      </div>

      {!q.trim() ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-fg">Try</h2>
          <div className="flex flex-col">
            {EXAMPLES.map((x) => (
              <button
                key={x.q}
                onClick={() => edit(x.q)}
                className="hover:bg-accent flex items-baseline gap-3 border-b px-1 py-1.5 text-left"
              >
                <span className="data shrink-0 text-sm text-brand">{x.q}</span>
                <span className="text-muted-foreground min-w-0 text-xs">{x.what}</span>
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
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
                <span className="text-muted-foreground min-w-0 truncate text-xs">{e.sub}</span>
              ) : (
                e.name !== e.id.slice(e.id.indexOf(":") + 1) && (
                  <span className="text-muted-foreground min-w-0 truncate text-sm">{e.name}</span>
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
    </div>
  );
}

/**
 * A kind filter, in an unmistakable state.
 *
 * Two greys apart is not a state anyone can read — telling on from off should
 * not require comparing shades — so the check mark is the answer. The count
 * stays visible either way, because its job is to say what turning a chip on
 * would cost you.
 */
function Chip({
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

/** One `contains:` requirement, removable. An excluded one reads as negative. */
function Pill({
  label,
  onRemove,
  negated = false,
}: {
  label: string;
  onRemove: () => void;
  negated?: boolean;
}) {
  return (
    <span
      className={
        "flex items-center gap-1 border px-1.5 py-0.5 text-xs " +
        (negated ? "border-missing/40 text-missing" : "border-brand bg-brand-weak text-fg")
      }
    >
      {negated && <span aria-hidden="true">−</span>}
      <span className="data">{label}</span>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${label}`}
        className="opacity-60 hover:opacity-100"
      >
        <XIcon className="size-3" />
      </button>
    </span>
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
