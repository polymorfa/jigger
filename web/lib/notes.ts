/**
 * Annotations that survive the bundle changing under them.
 *
 * A note anchored to a line number is worthless here: WhatsApp re-minifies on
 * every release and every line moves. So a note is anchored the same way
 * evidence is — to a fact id, plus an optional snippet of the text it was
 * attached to. The snippet is what lets a note re-find its place after the
 * source shifts, and what lets the UI say "this moved" rather than silently
 * pointing at the wrong code.
 *
 * Stored locally. Notes are working memory, not published claims: a claim that
 * belongs to everyone goes in `spec/` as prose and gets reviewed.
 */
export type Note = {
  id: string;
  /** Fact id or `module:<name>` — whatever the note is about. */
  target: string;
  body: string;
  /** The text the note was attached to, if any. Used to re-anchor. */
  anchor?: string;
  /** Revision the note was written against, so drift is visible. */
  revision: number;
  createdAt: number;
};

const KEY = "jigger.notes.v1";

function read(): Note[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "[]") as Note[];
  } catch {
    return [];
  }
}

function write(notes: Note[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(notes));
  } catch {
    /* quota or private mode: notes are best-effort, never load-bearing */
  }
}

export function notesFor(target: string): Note[] {
  return read()
    .filter((n) => n.target === target)
    .sort((a, b) => a.createdAt - b.createdAt);
}

export function addNote(n: Omit<Note, "id" | "createdAt">): Note {
  const note: Note = { ...n, id: crypto.randomUUID(), createdAt: Date.now() };
  write([...read(), note]);
  return note;
}

export function removeNote(id: string) {
  write(read().filter((n) => n.id !== id));
}

/**
 * Whether a note still finds its anchor in the current text.
 *
 * `false` does not mean the note is wrong — it means the code it described has
 * changed, which is exactly the moment a human should look at it again. Notes
 * are never dropped automatically.
 */
export function anchorHolds(note: Note, text: string | null): boolean {
  if (!note.anchor || !text) return true;
  return text.includes(note.anchor);
}
