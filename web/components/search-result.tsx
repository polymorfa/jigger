"use client";

import Link from "next/link";
import { browseHref } from "@/lib/ids";
import type { FactKind, SearchEntry } from "@/lib/types";

/** Where a hit goes. Modules have their own viewer; facts go to their browser. */
export function hrefOf(e: SearchEntry): string {
  return e.kind === "module"
    ? `/source/${encodeURIComponent(e.name)}`
    : browseHref(e.kind as FactKind, e.id);
}

const KIND_LABEL: Record<string, string> = {
  ab: "A/B property",
  wam: "WAM event",
  iq: "IQ operation",
  proto: "protobuf message",
  enum: "value set",
  appstate: "app-state mutation",
  mex: "GraphQL operation",
  sig: "inbound stanza",
  const: "constant",
  module: "source module",
};

/**
 * One result: what it is called, then what it is.
 *
 * The kind is an attribute on the second line rather than a badge in the
 * margin. A badge is a filing label — it tells you which bucket a row came from
 * and nothing else — whereas the question you are actually asking of a list is
 * "is this the one", and that is answered by the row's own attributes sitting
 * together in one sentence: `A/B property · id 5842 · bool · default false ·
 * read by 12`.
 *
 * The attributes come pre-formatted from the index. Deciding how to render nine
 * different payload shapes is the extractor's business, not a component's.
 */
export function SearchResult({
  entry,
  via,
  active = false,
  onSelect,
  compact = false,
}: {
  entry: SearchEntry;
  /** The contained term that matched, when it was not the name. */
  via?: string;
  active?: boolean;
  /** Set in the header dropdown, where a click has to beat the input's blur. */
  onSelect?: () => void;
  /** Tighter, for the dropdown. */
  compact?: boolean;
}) {
  const body = (
    <>
      <div className="flex min-w-0 items-baseline gap-2">
        <span className="data min-w-0 truncate text-sm text-fg">{entry.name}</span>
        {/* The id only earns its place when it says something the name does
            not — for most kinds it is the name with a prefix. */}
        {entry.id !== `${entry.kind}:${entry.name}` && entry.kind !== "module" && (
          <span className="data text-muted-foreground min-w-0 truncate text-2xs">{entry.id}</span>
        )}
        {via && (
          <span className="data text-muted-foreground ml-auto shrink-0 text-2xs">
            contains <span className="text-brand">{via}</span>
          </span>
        )}
      </div>

      <div className="text-muted-foreground flex min-w-0 flex-wrap items-baseline gap-x-1.5 text-2xs">
        <span className="text-fg-faint">{KIND_LABEL[entry.kind] ?? entry.kind}</span>
        {(entry.meta ?? []).map((m) => (
          <span key={m} className="flex items-baseline gap-1.5">
            <span aria-hidden="true" className="opacity-40">
              ·
            </span>
            <span className="data">{m}</span>
          </span>
        ))}
      </div>
    </>
  );

  const className =
    "flex w-full flex-col gap-0.5 border-b px-2.5 text-left " +
    (compact ? "py-1" : "py-1.5") +
    (active ? " bg-brand-weak" : " hover:bg-accent");

  // A dropdown item has to commit before the input's blur closes the panel, so
  // it is a button on mousedown rather than a link.
  if (onSelect) {
    return (
      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          onSelect();
        }}
        className={className}
      >
        {body}
      </button>
    );
  }
  return (
    <Link href={hrefOf(entry)} className={className}>
      {body}
    </Link>
  );
}
