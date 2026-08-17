"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon, SearchIcon, XIcon } from "lucide-react";
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
import { SearchResult } from "@/components/search-result";
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
import { TagField } from "./tag-field";

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

  const hits = useMemo<Scored[]>(
    () => (entries ? runQuery(entries, terms) : []),
    [entries, terms],
  );

  /**
   * What each kind would yield if it were the *only* kind selected.
   *
   * Two things this deliberately does not do. It does not count the current
   * results — that shows 0 beside every kind you have not picked, which reads
   * as "there are none of those" rather than "you filtered them out", exactly
   * backwards for a control whose job is widening a search. And it does not
   * wait for a query: with nothing typed these are the whole index, so the
   * filters are usable as a way *in*, not just as a way to narrow something you
   * already found.
   */
  const counts = useMemo(() => {
    if (!entries) return new Map<SearchKind, number>();
    const withoutKinds = terms.filter((t) => !(t.field === "kind" && !t.negated));
    const base = withoutKinds.length
      ? runQuery(entries, withoutKinds)
      : entries.map((e) => ({ e, score: 8 }));
    return countByKind(base);
  }, [entries, terms]);

  const results = useMemo(() => sortHits(hits, sort), [hits, sort]);
  useEffect(() => setLimit(PAGE), [q, sort]);

  // Every kind, in a fixed order, and present before the index has loaded. The
  // controls popping into existence a beat after the page is the same problem
  // as them not being there — you have already decided the page is a text box.
  const loaded = entries !== null;
  const present = loaded ? SEARCH_KINDS.filter((k) => (counts.get(k) ?? 0) > 0) : SEARCH_KINDS;
  const shown = results.slice(0, limit);
  const total = [...counts.values()].reduce((a, b) => a + b, 0);

  return (
    <div className="flex flex-col gap-4">
      {/* --- The controls, which write the box below them ------------------ */}
      <div className="bg-surface flex flex-col gap-2.5 border p-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <span className="text-muted-foreground w-24 shrink-0 text-xs">Show kinds</span>
          <div className="flex min-w-0 flex-wrap items-center gap-1.5">
            <Chip
              label="Everything"
              count={loaded ? total : undefined}
              active={activeKinds.size === 0}
              onClick={() => edit(clearField(q, "kind"))}
            />
            {present.map((k) => (
              <Chip
                key={k}
                label={k}
                mono
                count={loaded ? (counts.get(k) ?? 0) : undefined}
                active={activeKinds.has(k)}
                onClick={() => edit(toggleTerm(q, "kind", k))}
              />
            ))}
          </div>
        </div>

        <TagField
          label="Must contain"
          hint="A field, attribute, stanza tag or enum variant the result carries"
          values={valuesOf(terms, "contains")}
          onAdd={(v) => edit(addTerm(q, "contains", v))}
          onRemove={(v) => edit(removeTerm(q, "contains", v))}
          placeholder="contextInfo, jid, REACTION…"
        />

        <TagField
          label="Must not contain"
          hint="Excludes anything carrying this"
          tone="negative"
          values={valuesOf(terms, "contains", true)}
          onAdd={(v) => edit(addTerm(q, "contains", v, true))}
          onRemove={(v) => edit(removeTerm(q, "contains", v, true))}
          placeholder="bool, deprecated…"
        />

        <TagField
          label="Name matches"
          hint="Substring of the readable name; /…/ for a regex"
          values={valuesOf(terms, "name")}
          onAdd={(v) => edit(addTerm(q, "name", v))}
          onRemove={(v) => edit(removeTerm(q, "name", v))}
          placeholder="Newsletter, /Query$/…"
        />

        <TagField
          label="Name excludes"
          hint="Drops anything whose name matches"
          tone="negative"
          values={valuesOf(terms, "name", true)}
          onAdd={(v) => edit(addTerm(q, "name", v, true))}
          onRemove={(v) => edit(removeTerm(q, "name", v, true))}
          placeholder="Deprecated, Test…"
        />

        <TagField
          label="Id matches"
          hint="Substring of the wire-literal id"
          values={valuesOf(terms, "id")}
          onAdd={(v) => edit(addTerm(q, "id", v))}
          onRemove={(v) => edit(removeTerm(q, "id", v))}
          placeholder="w:biz, privacy/get…"
        />

        <TagField
          label="From module"
          hint="The source module the fact was read out of"
          values={valuesOf(terms, "module")}
          onAdd={(v) => edit(addTerm(q, "module", v))}
          onRemove={(v) => edit(removeTerm(q, "module", v))}
          placeholder="WAWebABPropsConfigs…"
        />

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
            {q.trim()
              ? `${results.length.toLocaleString()} result${results.length === 1 ? "" : "s"}`
              : "nothing selected yet"}
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
          Bare words match names, ids, modules and contents. Everything above
          writes into this box — a tag row is just{" "}
          <span className="data text-fg">field:value</span>, and{" "}
          <span className="data text-fg">/re/</span> anywhere is a regex.
        </p>
      </div>

      {!q.trim() ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold text-fg">
            Pick a kind above, or start from one of these
          </h2>
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
            <SearchResult key={`${e.kind}:${e.id}`} entry={e} via={via} />
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
  /** Undefined until the index has loaded — shown as a dash, never as 0. A
   *  zero is a claim about the data; a dash is a claim about the page. */
  count?: number;
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
      <span className="tnum opacity-60">{count === undefined ? "—" : count.toLocaleString()}</span>
    </button>
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
