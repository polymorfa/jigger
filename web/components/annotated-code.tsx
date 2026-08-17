"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { tokenize, type Lang } from "@/lib/highlight";
import { addNote, anchorHolds, notesFor, removeNote, type Note } from "@/lib/notes";

const CLASS: Record<string, string> = {
  kw: "text-code-kw",
  typ: "text-code-typ",
  str: "text-code-str",
  num: "text-code-num",
  cmt: "text-code-cmt italic",
  tag: "text-code-kw",
  attr: "text-code-typ",
  // The loudest token on screen, on purpose: `jid@lid` vs `jid@user` is where
  // these libraries actually break, and nothing else surfaces it.
  enc: "font-bold text-code-enc",
  pun: "text-fg-faint",
  id: "text-fg",
};

/**
 * A code block you can annotate, line by line.
 *
 * The source viewer has had this since it was written; everywhere else had a
 * single free-text box attached to the whole fact. That is a worse thing in the
 * same clothes: a note about field 17 of a message ends up in a paragraph
 * beside a schema, and a year later nobody can tell which field it meant.
 *
 * So the note attaches to a line, and anchors to that line's *text*, never its
 * number. Schemas are regenerated on every revision and the numbering shifts;
 * the text usually survives. When it does not, the note is shown as drifted
 * rather than deleted — the moment the code it described changed is exactly when
 * it is worth reading.
 */
export function AnnotatedCode({
  src,
  lang,
  target,
  revision,
  links,
}: {
  src: string;
  lang: Lang;
  /** What is being annotated — a fact id, so notes follow it across pages. */
  target: string;
  revision: number;
  /** Token text -> href, for type names that can be followed. */
  links?: Record<string, string>;
}) {
  const rows = useMemo(() => tokenize(src, lang), [src, lang]);
  const raw = useMemo(() => src.split("\n"), [src]);

  const [notes, setNotes] = useState<Note[]>([]);
  const [open, setOpen] = useState<number | null>(null);
  const [draft, setDraft] = useState("");
  useEffect(() => setNotes(notesFor(target)), [target]);

  // Recomputed on every load rather than stored — that is what lets a note
  // follow the line it is about when everything around it moves.
  const byLine = useMemo(() => {
    const m = new Map<number, Note[]>();
    for (const n of notes) {
      if (!n.anchor) continue;
      const i = raw.findIndex((l) => l.includes(n.anchor as string));
      m.set(i + 1, [...(m.get(i + 1) ?? []), n]);
    }
    return m;
  }, [notes, raw]);

  const drifted = notes.filter((n) => !anchorHolds(n, src));

  const save = (line: number) => {
    if (!draft.trim()) return;
    addNote({ target, body: draft.trim(), anchor: raw[line - 1]?.trim().slice(0, 120), revision });
    setDraft("");
    setOpen(null);
    setNotes(notesFor(target));
  };

  return (
    <div className="relative">
      <div className="absolute right-1.5 top-1.5 z-10">
        <CopyButton value={src} title="Copy" />
      </div>
      <div className="bg-surface border">
        <div className="overflow-x-auto py-2">
          {rows.map((toks, i) => {
            const n = i + 1;
            const mine = byLine.get(n) ?? [];
            const isOpen = open === n;
            return (
              <div key={n} className="group">
                <div className="hover:bg-surface-2 flex w-max min-w-full items-start px-3">
                  <code className="data shrink-0 whitespace-pre text-sm leading-[var(--text-sm--line-height)]">
                    {toks.map((t, j) => (
                      <Tok key={j} text={t.t} cls={CLASS[t.c] ?? "text-fg"} links={links} />
                    ))}
                  </code>
                  {/* Always occupies its slot, so nothing reflows on hover and
                      only the paint changes. */}
                  <button
                    onClick={() => {
                      setOpen(isOpen ? null : n);
                      setDraft("");
                    }}
                    title={`Comment on line ${n}`}
                    aria-label={`Comment on line ${n}`}
                    className={
                      "bg-brand text-brand-fg ml-2 flex size-4 shrink-0 items-center justify-center self-center rounded-full text-[11px] font-semibold leading-none transition-opacity " +
                      (mine.length || isOpen
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 focus-visible:opacity-100")
                    }
                  >
                    {mine.length || "+"}
                  </button>
                  {mine.length > 0 && !isOpen && (
                    <span className="text-muted-foreground bg-ground ml-2 min-w-0 truncate self-center border px-1.5 text-xs">
                      {mine[0]?.body.slice(0, 48)}
                      {(mine[0]?.body.length ?? 0) > 48 ? "…" : ""}
                    </span>
                  )}
                </div>

                {isOpen && (
                  <div className="bg-ground border-l-brand mx-3 mb-1 flex flex-col gap-1.5 border border-l-2 px-3 py-2">
                    {mine.map((note) => (
                      <div key={note.id} className="flex items-start justify-between gap-3">
                        <p className="whitespace-pre-wrap text-sm text-fg">{note.body}</p>
                        <button
                          onClick={() => {
                            removeNote(note.id);
                            setNotes(notesFor(target));
                          }}
                          className="text-muted-foreground hover:text-foreground shrink-0 text-xs underline"
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
                      className="bg-surface focus:border-ring w-full border px-2 py-1 text-sm outline-none"
                    />
                    <div className="text-muted-foreground flex items-center gap-3 text-xs">
                      <button
                        onClick={() => save(n)}
                        disabled={!draft.trim()}
                        className="hover:bg-accent border px-2 py-0.5 disabled:opacity-40"
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

        {drifted.length > 0 && (
          <div className="text-muted-foreground border-t px-3 py-2 text-xs">
            <span className="text-missing">{drifted.length} note(s) lost their anchor</span> — the
            line they described changed. Kept, not deleted, because that is when they matter most.
            {drifted.map((n) => (
              <p key={n.id} className="mt-1 text-sm text-fg">
                {n.body} <span className="data text-muted-foreground text-xs">rev {n.revision}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** One token, with any followable name inside it linked. */
function Tok({ text, cls, links }: { text: string; cls: string; links?: Record<string, string> }) {
  if (!links) return <span className={cls}>{text}</span>;
  const parts = text.split(/([A-Za-z_][A-Za-z0-9_]*)/g);
  if (!parts.some((p) => Object.hasOwn(links, p))) return <span className={cls}>{text}</span>;
  return (
    <span className={cls}>
      {parts.map((p, i) => {
        // `Object.hasOwn`, not `links[p]`: a token named `toString` or
        // `constructor` finds a function on the prototype chain, and
        // `<Link href={fn}>` throws. 3,486 modules contain such a name.
        const href = Object.hasOwn(links, p) ? links[p] : undefined;
        return href ? (
          <Link
            key={i}
            href={href}
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            {p}
          </Link>
        ) : (
          p
        );
      })}
    </span>
  );
}
