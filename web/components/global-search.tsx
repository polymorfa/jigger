"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import { loadSearchIndex } from "@/lib/client-index";
import { browseHref } from "@/lib/ids";
import { parseQuery, runQuery, sortHits, type Scored } from "@/lib/query";
import type { FactKind, SearchEntry } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";
import { KindBadge } from "./kind-badge";

const LIMIT = 40;

/** Where a hit goes. Modules have their own viewer; facts go to their browser. */
export function hrefOf(e: SearchEntry): string {
  return e.kind === "module"
    ? `/source/${encodeURIComponent(e.name)}`
    : browseHref(e.kind as FactKind, e.id);
}

/**
 * The header search: a field and a dropdown, not a command palette.
 *
 * A palette is for jumping somewhere you already have in mind. Most of the
 * questions here are not that — they are *which messages carry this field*,
 * *what does the newsletter code gate on* — and those want a results page you
 * can sit in and refine. So this stays a quick jump, and hands anything longer
 * to `/search` with the query intact.
 */
export function GlobalSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [entries, setEntries] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const ensureIndex = useCallback(() => {
    if (!entries) loadSearchIndex().then(setEntries);
  }, [entries]);

  // `/` focuses from anywhere, unless you are already typing in a field.
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

  const hits = useMemo<Scored[]>(() => {
    if (!entries || !q.trim()) return [];
    return sortHits(runQuery(entries, parseQuery(q)), "relevance");
  }, [entries, q]);

  const shown = hits.slice(0, LIMIT);
  useEffect(() => setActive(0), [q]);

  const advancedHref = `/search?q=${encodeURIComponent(q)}`;

  const go = (e: SearchEntry) => {
    setOpen(false);
    setQ("");
    inputRef.current?.blur();
    router.push(hrefOf(e));
  };

  const onKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      setActive((a) => Math.min(a + 1, shown.length - 1));
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (ev.key === "Enter") {
      // Plain Enter jumps to the highlighted hit; ⌘/Ctrl+Enter opens the full
      // results page, which is what you want the moment there are more hits
      // than the dropdown can show.
      if (ev.metaKey || ev.ctrlKey || shown.length === 0) {
        setOpen(false);
        router.push(advancedHref);
      } else if (shown[active]) go(shown[active].e);
    } else if (ev.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="relative w-full max-w-[560px]">
      <div className="focus-within:border-ring flex h-8 items-center gap-2 border bg-surface px-2.5 transition-colors">
        <SearchIcon className="text-muted-foreground size-3.5 shrink-0" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            ensureIndex();
            setOpen(true);
          }}
          onBlur={() => window.setTimeout(() => setOpen(false), 160)}
          onKeyDown={onKeyDown}
          placeholder="Search facts and modules"
          spellCheck={false}
          autoComplete="off"
          aria-label="Search"
          className="placeholder:text-muted-foreground h-full flex-1 bg-transparent text-sm text-fg outline-none"
        />
        {q ? (
          <span className="tnum text-muted-foreground shrink-0 text-2xs">{hits.length}</span>
        ) : (
          <Kbd className="shrink-0">/</Kbd>
        )}
        <Link
          href={advancedHref}
          onMouseDown={(e) => e.preventDefault()}
          title="Advanced search — filter by kind, contents, regex"
          className="text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1 border-l pl-2 text-2xs transition-colors"
        >
          <SlidersHorizontal className="size-3" />
          <span className="hidden sm:inline">Advanced</span>
        </Link>
      </div>

      {open && q.trim().length > 0 && (
        <div className="bg-popover absolute inset-x-0 top-[calc(100%+3px)] z-50 max-h-[70vh] overflow-y-auto overflow-x-hidden border shadow-lg">
          {shown.length === 0 ? (
            <p className="text-muted-foreground px-3 py-2 text-sm">
              {entries ? "No fact or module matches." : "Loading index…"}
            </p>
          ) : (
            <ul>
              {shown.map(({ e, via }, i) => (
                <li key={`${e.kind}:${e.id}`}>
                  <button
                    type="button"
                    onMouseDown={(ev) => {
                      ev.preventDefault();
                      go(e);
                    }}
                    onMouseEnter={() => setActive(i)}
                    className={
                      "flex w-full items-baseline gap-2 border-b px-2.5 py-1 text-left " +
                      (i === active ? "bg-brand-weak" : "hover:bg-accent")
                    }
                  >
                    {e.kind === "module" ? (
                      <Badge variant="outline" className="data shrink-0">
                        src
                      </Badge>
                    ) : (
                      <KindBadge kind={e.kind} />
                    )}
                    <span className="data shrink-0 truncate text-sm text-fg">{e.id}</span>
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
                  </button>
                </li>
              ))}
            </ul>
          )}
          {hits.length > shown.length && (
            <Link
              href={advancedHref}
              onMouseDown={(e) => e.preventDefault()}
              className="text-muted-foreground hover:bg-accent hover:text-foreground flex items-center justify-between px-2.5 py-1.5 text-2xs"
            >
              <span>
                showing {shown.length} of {hits.length}
              </span>
              <span className="flex items-center gap-1">
                open all <Kbd>⌘</Kbd>
                <Kbd>↵</Kbd>
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
