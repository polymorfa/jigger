"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useVirtualizer } from "@tanstack/react-virtual";
import { loadSearchIndex } from "@/lib/client-index";
import { browseHref } from "@/lib/ids";
import {
  ancestorKeys,
  buildProtoTree,
  flattenTree,
  type FlatRow,
  type ProtoName,
} from "@/lib/proto-tree";

const ROW = 22;

/**
 * The message hierarchy, as a tree.
 *
 * 1,200 messages in a flat list is not a list anyone reads. They nest — with
 * either `.` or `$` — and the namespace is most of what distinguishes
 * `WAE2E.Message.ImageMessage` from the six other `ImageMessage`s, so the
 * hierarchy is the index.
 *
 * Virtualized because a fully expanded tree is thousands of rows, and filtering
 * expands everything that matches.
 */
export function ProtoTree() {
  const pathname = usePathname();
  const [names, setNames] = useState<ProtoName[] | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadSearchIndex().then((idx) =>
      setNames(idx.filter((e) => e.kind === "proto").map((e) => ({ id: e.id, name: e.name }))),
    );
  }, []);

  const q = filter.trim().toLowerCase();
  const shown = useMemo(
    () => (names ?? []).filter((n) => !q || n.name.toLowerCase().includes(q)),
    [names, q],
  );
  const roots = useMemo(() => buildProtoTree(shown), [shown]);

  // Filtering expands what survives: a match hidden inside a collapsed branch
  // reads as no match at all.
  const open = useMemo(() => {
    if (!q) return expanded;
    const all = new Set<string>();
    for (const n of shown) for (const k of ancestorKeys(n.name)) all.add(k);
    return all;
  }, [q, shown, expanded]);

  const rows = useMemo(() => flattenTree(roots, open), [roots, open]);

  const parentRef = useRef<HTMLDivElement>(null);
  const virt = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW,
    overscan: 20,
  });

  // Reveal the message the URL is on, so arriving by link does not land you in
  // a collapsed tree with no indication of where you are.
  useEffect(() => {
    if (!names) return;
    const id = decodeURIComponent(pathname.replace(/^\/proto\/?/, ""));
    if (!id) return;
    const hit = names.find((n) => n.id.endsWith(id) || n.name === id);
    if (hit) setExpanded((prev) => new Set([...prev, ...ancestorKeys(hit.name)]));
  }, [pathname, names]);

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (!next.delete(key)) next.add(key);
      return next;
    });

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b border-hair px-2 py-1">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter messages"
          spellCheck={false}
          className="data h-[22px] w-full bg-transparent text-xs text-fg outline-none placeholder:text-fg-faint"
        />
      </div>
      <div ref={parentRef} className="min-h-0 flex-1 overflow-auto">
        <div style={{ height: virt.getTotalSize(), position: "relative" }}>
          {virt.getVirtualItems().map((vi) => {
            const r = rows[vi.index] as FlatRow;
            return (
              <div
                key={r.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: ROW,
                  transform: `translateY(${vi.start}px)`,
                  paddingLeft: 6 + r.depth * 12,
                }}
                className="flex items-center gap-1"
              >
                <button
                  onClick={() => toggle(r.key)}
                  disabled={!r.hasChildren}
                  className={`data w-3 shrink-0 text-2xs ${
                    r.hasChildren ? "text-fg-faint hover:text-fg" : "text-transparent"
                  }`}
                  aria-label={r.expanded ? "Collapse" : "Expand"}
                >
                  {r.hasChildren ? (r.expanded ? "−" : "+") : "·"}
                </button>
                {/* A namespace node is not a message and has nothing to open. */}
                {r.factId ? (
                  <Link
                    href={browseHref("proto", r.factId)}
                    className="data truncate text-xs text-fg hover:text-brand"
                  >
                    {r.seg}
                  </Link>
                ) : (
                  <span className="data truncate text-xs text-fg-faint">{r.seg}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
