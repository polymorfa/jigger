"use client";

import { useEffect, useState } from "react";
import { addNote, anchorHolds, notesFor, removeNote, type Note } from "@/lib/notes";

/**
 * Notes on anything — a fact, a module, a stanza.
 *
 * Anchored to a target and optionally to a snippet of text, never to a line
 * number, because every line moves when WhatsApp re-minifies. When an anchor
 * stops matching the note is flagged rather than deleted: the code it described
 * changing is the moment it becomes most worth reading.
 */
export function Notes({
  target,
  revision,
  text,
}: {
  target: string;
  revision: number;
  /** Current text of the thing being annotated, for anchor checking. */
  text?: string | null;
}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [draft, setDraft] = useState("");
  const [anchor, setAnchor] = useState("");

  useEffect(() => setNotes(notesFor(target)), [target]);

  const submit = () => {
    if (!draft.trim()) return;
    addNote({ target, body: draft.trim(), anchor: anchor.trim() || undefined, revision });
    setDraft("");
    setAnchor("");
    setNotes(notesFor(target));
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
        <h2 className="text-md font-semibold text-fg">Notes</h2>
        <span className="text-xs text-fg-faint">local to this browser</span>
      </div>

      {notes.map((n) => {
        const holds = anchorHolds(n, text ?? null);
        return (
          <div key={n.id} className="flex flex-col gap-1 border-b border-hair py-2">
            <p className="text-sm whitespace-pre-wrap text-fg">{n.body}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-fg-faint">
              <span className="data tnum">rev {n.revision}</span>
              {n.anchor && (
                <span className={holds ? "" : "text-cov-missing"}>
                  {holds ? "anchor holds" : "anchor no longer matches — the code it described changed"}
                </span>
              )}
              <button
                onClick={() => {
                  removeNote(n.id);
                  setNotes(notesFor(target));
                }}
                className="ml-auto text-fg-faint underline hover:text-fg"
              >
                delete
              </button>
            </div>
          </div>
        );
      })}

      <div className="flex flex-col gap-1.5 pt-1">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={2}
          placeholder="what did you work out?"
          className="w-full border border-hair bg-ground px-2 py-1.5 text-sm outline-none focus:border-accent"
        />
        <input
          value={anchor}
          onChange={(e) => setAnchor(e.target.value)}
          placeholder="optional: a snippet this is about, so the note can re-find it"
          className="data w-full border border-hair bg-ground px-2 py-1 text-xs outline-none focus:border-accent"
        />
        <button
          onClick={submit}
          disabled={!draft.trim()}
          className="self-start border border-hair px-2 py-1 text-xs hover:bg-surface-2 disabled:opacity-40"
        >
          add note
        </button>
      </div>
    </section>
  );
}
