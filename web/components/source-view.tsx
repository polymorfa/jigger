"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { tokenize } from "@/lib/highlight";
import { ROW_CODE } from "@/lib/metrics";
import { addNote, anchorHolds, notesFor, removeNote, type Note } from "@/lib/notes";

const CLASS: Record<string, string> = {
  kw: "text-code-kw",
  typ: "text-code-typ",
  str: "text-code-str",
  num: "text-code-num",
  cmt: "text-code-cmt italic",
  tag: "text-code-kw",
  attr: "text-code-typ",
  enc: "font-bold text-code-enc",
  pun: "text-fg-faint",
  id: "text-fg",
};


/**
 * The source view, as a code editor rather than a wiki page.
 *
 * Three things make the difference: a gutter you can click, comments that open
 * inline on the line they are about, and virtualization so a 13,000-line module
 * scrolls at all. Modules here run to tens of thousands of lines, so rendering
 * them whole is not an option.
 *
 * A comment anchors to the *text* of its line, never to the line number.
 * WhatsApp re-minifies on every release and every number shifts; the text
 * usually survives. When it does not, the note is shown as drifted rather than
 * deleted — the code it described changing is when it matters most.
 */
export function SourceView({
  name,
  src,
  revision,
  highlight,
}: {
  name: string;
  src: string;
  revision: number;
  /** 1-indexed line to jump to, from the evidence pattern. */
  highlight?: number | null;
}) {
  const lines = useMemo(() => tokenize(src, "ts"), [src]);
  const raw = useMemo(() => src.split("\n"), [src]);
  const target = `module:${name}`;

  const [notes, setNotes] = useState<Note[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [draft, setDraft] = useState("");
  useEffect(() => setNotes(notesFor(target)), [target]);

  // Notes keyed by the line their anchor currently matches, recomputed on every
  // load rather than stored — that is what lets them follow the code.
  const byLine = useMemo(() => {
    const m = new Map<number, Note[]>();
    for (const n of notes) {
      if (!n.anchor) continue;
      const i = raw.findIndex((l) => l.includes(n.anchor as string));
      const key = i >= 0 ? i + 1 : -1;
      m.set(key, [...(m.get(key) ?? []), n]);
    }
    return m;
  }, [notes, raw]);

  const parentRef = useRef<HTMLDivElement>(null);
  // Measured, not fixed. An open comment makes its row genuinely taller and
  // pushes the rest of the file down, the way a GitHub review thread does —
  // rather than floating over the lines beneath it, which is what forced all the
  // z-index juggling before. ROW_CODE stays as the estimate for unmeasured rows.
  const virt = useVirtualizer({
    count: lines.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_CODE,
    measureElement: (el) => el.getBoundingClientRect().height,
    overscan: 30,
  });

  // A `#L412` in the URL targets a line directly. It is what the gutter copies,
  // so a link someone pasted into a review has to land on the line it names —
  // and it wins over the evidence pattern, because it was chosen deliberately.
  const [pinned, setPinned] = useState<number | null>(null);
  useEffect(() => {
    const read = () => {
      const m = /^#L(\d+)$/.exec(window.location.hash);
      setPinned(m ? Number(m[1]) : null);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const focusLine = pinned ?? highlight;
  useEffect(() => {
    if (focusLine) virt.scrollToIndex(Math.max(0, focusLine - 6), { align: "start" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusLine]);

  const save = (lineNo: number) => {
    if (!draft.trim()) return;
    addNote({ target, body: draft.trim(), anchor: raw[lineNo - 1]?.trim().slice(0, 120), revision });
    setDraft("");
    setOpen(null);
    setNotes(notesFor(target));
  };

  const drifted = notes.filter((n) => !anchorHolds(n, src));

  const [copied, setCopied] = useState<number | null>(null);
  const flash = (n: number) => {
    setCopied(n);
    window.setTimeout(() => setCopied((c) => (c === n ? null : c)), 900);
  };

  /**
   * A link to one line, with the revision baked in.
   *
   * Without the revision a shared link points at "line 412 of whatever ships
   * today", which after the next re-minification is a different line of a
   * different function.
   */
  const copyLink = (n: number) => {
    const url = new URL(window.location.href);
    url.hash = `L${n}`;
    void navigator.clipboard.writeText(url.toString());
    flash(n);
  };

  /**
   * Rebuilds copied text from the source rather than from the DOM.
   *
   * Every row here is two nested block elements — the positioned wrapper the
   * virtualizer needs, and the flex row inside it — and browsers emit a line
   * break for each one it crosses, so a plain copy came out double-spaced. The
   * gutter is a button, which some browsers serialise too, interleaving line
   * numbers with the code.
   *
   * Reading `data-index` off the selection's endpoints and slicing the original
   * text sidesteps both. A selection inside a single line is left to the browser,
   * which handles partial-line selection correctly and is what you want when
   * grabbing one identifier.
   */
  const onCopy = (e: React.ClipboardEvent) => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const rowOf = (node: Node | null): number | null => {
      let el = node instanceof Element ? node : node?.parentElement;
      while (el && !el.hasAttribute?.("data-index")) el = el.parentElement;
      const i = el?.getAttribute("data-index");
      return i == null ? null : Number(i);
    };
    const a = rowOf(sel.anchorNode);
    const b = rowOf(sel.focusNode);
    if (a == null || b == null || a === b) return;
    const [lo, hi] = a < b ? [a, b] : [b, a];
    e.clipboardData.setData("text/plain", raw.slice(lo, hi + 1).join("\n"));
    e.preventDefault();
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-hair px-3 py-1 text-xs text-fg-muted">
        <span className="data">{name}</span>
        <span className="flex gap-4">
          <span className="tnum">{lines.length.toLocaleString()} lines</span>
          <span className="tnum">{notes.length} notes</span>
          {drifted.length > 0 && (
            <span className="tnum text-cov-missing">{drifted.length} drifted</span>
          )}
        </span>
      </div>

      <div
        ref={parentRef}
        onCopy={onCopy}
        className="min-h-0 flex-1 select-none overflow-auto bg-surface"
      >
        <div style={{ height: virt.getTotalSize(), position: "relative" }}>
          {virt.getVirtualItems().map((vi) => {
            const n = vi.index + 1;
            const lineNotes = byLine.get(n) ?? [];
            const isOpen = open === n;
            return (
              <div
                key={vi.key}
                data-index={vi.index}
                ref={virt.measureElement}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${vi.start}px)`,
                }}
                className="group bg-surface"
              >
                <div
                  className={`flex w-max min-w-full items-start ${
                    highlight === n ? "bg-brand-weak" : "hover:bg-surface-2"
                  }`}
                  style={{ minHeight: ROW_CODE }}
                >
                  {/* The line number stays a line number. Swapping it for the
                      comment affordance on hover meant losing your place in the
                      file at exactly the moment you were pointing at a line.

                      Clicking it copies a link to that line, which is the thing
                      you actually want when you have found something and need to
                      tell someone where it is. */}
                  <button
                    onClick={() => copyLink(n)}
                    title={`Copy a link to line ${n}`}
                    className={`data w-14 shrink-0 select-none pr-3 text-right text-xs leading-[var(--row-code)] transition-colors ${
                      copied === n ? "text-brand" : "text-fg-faint hover:text-fg"
                    }`}
                  >
                    {n}
                  </button>
                  {/* `select-text` and nothing else selectable to its left, so a
                      drag down the file yields the source and not a column of
                      line numbers interleaved with it. */}
                  <code className="data shrink-0 select-text whitespace-pre text-xs leading-[var(--row-code)]">
                    {(lines[vi.index] ?? []).map((t, j) => (
                      <span key={j} className={CLASS[t.c] ?? "text-fg"}>
                        {t.t}
                      </span>
                    ))}
                  </code>

                  {/* Comment affordance, right of the code. Always occupies its
                      slot so nothing reflows on hover; only its paint changes. */}
                  <button
                    onClick={() => {
                      setOpen(isOpen ? null : n);
                      setDraft("");
                    }}
                    title={`Comment on line ${n}`}
                    aria-label={`Comment on line ${n}`}
                    className={`ml-2 flex size-4 shrink-0 items-center justify-center self-center rounded-full text-[11px] font-semibold leading-none transition-opacity ${
                      lineNotes.length || isOpen
                        ? "bg-brand text-brand-fg opacity-100"
                        : "bg-brand text-brand-fg opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
                    }`}
                  >
                    {lineNotes.length ? lineNotes.length : "+"}
                  </button>

                  {lineNotes.length > 0 && !isOpen && (
                    <span className="ml-2 self-center truncate border border-hair bg-ground px-1.5 text-xs text-fg-muted">
                      {lineNotes[0]?.body.slice(0, 48)}
                      {(lineNotes[0]?.body.length ?? 0) > 48 ? "…" : ""}
                    </span>
                  )}
                </div>

                {isOpen && (
                  <div className="ml-14 mr-4 mb-1 flex flex-col gap-1.5 border border-hair border-l-2 border-l-accent bg-ground px-3 py-2">
                    {lineNotes.map((note) => (
                      <div key={note.id} className="flex items-start justify-between gap-3">
                        <p className="text-sm whitespace-pre-wrap text-fg">{note.body}</p>
                        <button
                          onClick={() => {
                            removeNote(note.id);
                            setNotes(notesFor(target));
                          }}
                          className="shrink-0 text-xs text-fg-faint underline hover:text-fg"
                        >
                          delete
                        </button>
                      </div>
                    ))}
                    <textarea
                      autoFocus
                      rows={2}
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) save(n);
                        if (e.key === "Escape") setOpen(null);
                      }}
                      placeholder={`Comment on line ${n} — anchors to the text, not the number`}
                      className="w-full border border-hair bg-surface px-2 py-1 text-sm outline-none focus:border-brand"
                    />
                    <div className="flex items-center gap-3 text-xs text-fg-faint">
                      <button
                        onClick={() => save(n)}
                        disabled={!draft.trim()}
                        className="border border-hair px-2 py-0.5 hover:bg-surface-2 disabled:opacity-40"
                      >
                        save
                      </button>
                      <span>⌘↵ to save · esc to close</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {drifted.length > 0 && (
        <div className="border-t border-hair px-3 py-2 text-xs text-fg-muted">
          <span className="text-cov-missing">{drifted.length} note(s) lost their anchor</span> — the
          code they described changed. Kept, not deleted, because that is when they matter most.
          {drifted.map((n) => (
            <p key={n.id} className="mt-1 text-sm text-fg">
              {n.body} <span className="data text-xs text-fg-faint">rev {n.revision}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
