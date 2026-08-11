"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { loadSearchIndex } from "@/lib/client-index";
import { browseHref } from "@/lib/ids";
import type { FactKind, SearchEntry, SearchKind } from "@/lib/types";
import { SEARCH_KINDS } from "@/lib/types";
import { KindBadge } from "./kind-badge";

type Indexed = SearchEntry & { idl: string; nl: string };

/** A hit, with the contained term that matched when it was not the id or name. */
type Hit = { e: Indexed; s: number; via?: string };

const LIMIT = 120;

type Sort = "relevance" | "name" | "kind";

const SORTS: { id: Sort; label: string; note: string }[] = [
  { id: "relevance", label: "relevance", note: "closest match to what you typed" },
  { id: "name", label: "name", note: "alphabetical" },
  { id: "kind", label: "kind", note: "grouped, best match first within each" },
];

/**
 * How well an entry matches, lower is better.
 *
 * Prefix matches on the id beat prefix matches on the name, which beat matches
 * anywhere. Position is folded in as a fraction so an early substring hit sorts
 * above a late one without ever crossing into the band above it.
 */
function rank(e: Indexed, q: string): { s: number; via?: string } {
  if (e.idl === q) return { s: 0 };
  if (e.idl.startsWith(q)) return { s: 1 };
  if (e.nl.startsWith(q)) return { s: 2 };
  const i = e.idl.indexOf(q);
  if (i >= 0) return { s: 3 + i / 10000 };
  const n = e.nl.indexOf(q);
  if (n >= 0) return { s: 4 + n / 10000 };

  // Deep match: something the fact contains. Ranked strictly below every name
  // match, because a thing actually called `contextInfo` should always beat the
  // eighty messages that merely have a field by that name — but those eighty
  // are the answer when nothing is called that.
  let best: { s: number; via?: string } = { s: Infinity };
  for (const t of e.terms ?? []) {
    const tl = t.toLowerCase();
    const s = tl === q ? 5 : tl.startsWith(q) ? 6 : tl.includes(q) ? 7 : Infinity;
    if (s < best.s) best = { s, via: t };
  }
  return best;
}

/** Where a hit goes. Modules have their own viewer; facts go to their browser. */
function hrefOf(e: SearchEntry): string {
  return e.kind === "module"
    ? `/source/${encodeURIComponent(e.name)}`
    : browseHref(e.kind as FactKind, e.id);
}

/**
 * Search over everything the app knows: every fact kind, and every module.
 *
 * One index rather than a search per section, because you rarely know which
 * bucket a name belongs to before you look — `WAWebABPropsConfigs` is both a
 * module you can read and the source of two thousand facts, and a search that
 * made you pick first would be a search you had to already know the answer to.
 *
 * Filtering and sorting operate on the whole result set, and the kind counts are
 * computed *before* the kind filter is applied, so the row of chips always shows
 * what else the query would have found. A filter that hides its own alternatives
 * makes an empty result look like an absence rather than a narrowing.
 */
export function GlobalSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [entries, setEntries] = useState<Indexed[] | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [kinds, setKinds] = useState<Set<SearchKind>>(new Set());
  const [sort, setSort] = useState<Sort>("relevance");

  const ensureIndex = useCallback(() => {
    if (entries) return;
    loadSearchIndex().then((raw) =>
      setEntries(raw.map((e) => ({ ...e, idl: e.id.toLowerCase(), nl: e.name.toLowerCase() }))),
    );
  }, [entries]);

  // `/` focuses search from anywhere (unless already typing in a field).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t?.isContentEditable) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** Everything that matches, before the kind filter narrows it. */
  const matched = useMemo<Hit[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q || !entries) return [];
    const out: Hit[] = [];
    for (const e of entries) {
      const { s, via } = rank(e, q);
      if (s !== Infinity) out.push({ e, s, via });
    }
    return out;
  }, [query, entries]);

  /** The classification: how the whole match set breaks down by kind. */
  const counts = useMemo(() => {
    const m = new Map<SearchKind, number>();
    for (const { e } of matched) m.set(e.kind, (m.get(e.kind) ?? 0) + 1);
    return m;
  }, [matched]);

  const results = useMemo<Hit[]>(() => {
    const kept = kinds.size ? matched.filter((x) => kinds.has(x.e.kind)) : matched;
    const byScore = (a: Hit, b: Hit) => a.s - b.s || a.e.id.length - b.e.id.length;
    const sorted = [...kept];
    if (sort === "name") sorted.sort((a, b) => a.e.name.localeCompare(b.e.name) || byScore(a, b));
    else if (sort === "kind")
      sorted.sort((a, b) => a.e.kind.localeCompare(b.e.kind) || byScore(a, b));
    else sorted.sort(byScore);
    return sorted.slice(0, LIMIT);
  }, [matched, kinds, sort]);

  useEffect(() => setActive(0), [query, kinds, sort]);

  const go = useCallback(
    (e: SearchEntry) => {
      setOpen(false);
      setQuery("");
      inputRef.current?.blur();
      router.push(hrefOf(e));
    },
    [router],
  );

  const toggle = (k: SearchKind) =>
    setKinds((prev) => {
      const next = new Set(prev);
      if (!next.delete(k)) next.add(k);
      return next;
    });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      const hit = results[active];
      if (hit) go(hit.e);
    } else if (e.key === "Escape") {
      if (kinds.size) setKinds(new Set());
      else {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
  };

  useEffect(() => {
    const el = listRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const showPanel = open && query.trim().length > 0;
  const present = SEARCH_KINDS.filter((k) => counts.has(k));

  return (
    <div className="relative w-full max-w-[560px]">
      <div className="flex items-center gap-2 border border-hair bg-surface px-2 focus-within:border-accent">
        <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" className="text-fg-faint" fill="none" stroke="currentColor" strokeWidth="1.3">
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5L14 14" />
        </svg>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            ensureIndex();
            setOpen(true);
          }}
          // Long enough for a click on a filter chip to register first.
          onBlur={() => window.setTimeout(() => setOpen(false), 160)}
          onKeyDown={onKeyDown}
          placeholder="Search facts and modules"
          spellCheck={false}
          autoComplete="off"
          aria-label="Search all facts and modules"
          className="data h-[26px] w-full bg-transparent text-sm text-fg outline-none placeholder:text-fg-faint"
        />
        {query ? (
          <span className="tnum shrink-0 text-2xs text-fg-faint">
            {results.length}
            {matched.length > results.length ? `/${matched.length}` : ""}
          </span>
        ) : (
          <span className="kbd" aria-hidden="true">
            /
          </span>
        )}
      </div>

      {showPanel && (
        <div className="absolute left-0 right-0 top-[calc(100%+3px)] z-40 flex max-h-[70vh] flex-col border border-hair-strong bg-surface shadow-lg">
          {/* Counts come from the unfiltered match set, so narrowing never hides
              the thing you would have narrowed to next. */}
          {present.length > 0 && (
            <div className="flex shrink-0 flex-wrap items-center gap-1 border-b border-hair px-2 py-1.5">
              <button
                type="button"
                onMouseDown={(ev) => {
                  ev.preventDefault();
                  setKinds(new Set());
                }}
                className={
                  "border px-1.5 text-2xs " +
                  (kinds.size === 0
                    ? "border-accent bg-accent-weak text-fg"
                    : "border-hair text-fg-muted hover:bg-surface-2")
                }
              >
                all <span className="tnum">{matched.length}</span>
              </button>
              {present.map((k) => (
                <button
                  key={k}
                  type="button"
                  onMouseDown={(ev) => {
                    ev.preventDefault();
                    toggle(k);
                  }}
                  className={
                    "flex items-center gap-1 border px-1.5 text-2xs " +
                    (kinds.has(k)
                      ? "border-accent bg-accent-weak text-fg"
                      : "border-hair text-fg-muted hover:bg-surface-2")
                  }
                >
                  {k === "module" ? <span className="data">module</span> : <KindBadge kind={k} />}
                  <span className="tnum">{counts.get(k)}</span>
                </button>
              ))}

              <span className="ml-auto flex items-center gap-1">
                <span className="text-2xs text-fg-faint">sort</span>
                {SORTS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    title={s.note}
                    onMouseDown={(ev) => {
                      ev.preventDefault();
                      setSort(s.id);
                    }}
                    className={
                      "border px-1.5 text-2xs " +
                      (sort === s.id
                        ? "border-accent bg-accent-weak text-fg"
                        : "border-hair text-fg-muted hover:bg-surface-2")
                    }
                  >
                    {s.label}
                  </button>
                ))}
              </span>
            </div>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-3 py-2 text-sm text-fg-faint">
                {!entries
                  ? "Loading index…"
                  : matched.length > 0
                    ? "Nothing of that kind. The counts above are for the whole query."
                    : "No fact or module matches."}
              </div>
            ) : (
              <ul ref={listRef}>
                {results.map(({ e, via }, i) => (
                  <li key={`${e.kind}:${e.id}`}>
                    <button
                      type="button"
                      // onMouseDown so it fires before the input's onBlur closes the panel
                      onMouseDown={(ev) => {
                        ev.preventDefault();
                        go(e);
                      }}
                      onMouseEnter={() => setActive(i)}
                      className={
                        "flex w-full items-baseline gap-2 border-b border-hair px-2.5 py-1 text-left " +
                        (i === active ? "bg-accent-weak" : "hover:bg-surface-2")
                      }
                    >
                      {e.kind === "module" ? (
                        <span className="data shrink-0 border border-hair px-1 text-2xs text-fg-muted">
                          src
                        </span>
                      ) : (
                        <KindBadge kind={e.kind} />
                      )}
                      <span className="data shrink-0 text-sm text-fg">{e.id}</span>
                      {e.sub ? (
                        <span className="truncate text-xs text-fg-faint">{e.sub}</span>
                      ) : (
                        e.name !== e.id.slice(e.id.indexOf(":") + 1) && (
                          <span className="truncate text-sm text-fg-muted">{e.name}</span>
                        )
                      )}
                      {/* Why this matched, when it was not the name. Without it a
                          deep hit looks like an unexplained result. */}
                      {via && (
                        <span className="data ml-auto shrink-0 text-2xs text-fg-faint">
                          contains <span className="text-accent">{via}</span>
                        </span>
                      )}
                    </button>
                  </li>
                ))}
                {matched.length > results.length && (
                  <li className="px-2.5 py-1 text-2xs text-fg-faint">
                    showing {results.length} of {matched.length} — narrow the query or filter by kind
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
