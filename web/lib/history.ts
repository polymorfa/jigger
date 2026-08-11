import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export type FieldChange = { field: string; from: unknown; to: unknown };
export type HistoryEvent = { rev: number; what: string; changes: FieldChange[] };

export type FactHistory = {
  kind: string;
  name: string;
  /**
   * The revision it was first seen in.
   *
   * For most facts this is the oldest revision indexed, which is a statement
   * about the index rather than about the fact. Read as "not newer than", never
   * as "introduced in".
   */
  first: number;
  last: number;
  events: HistoryEvent[];
};

export type History = { revisions: number[]; facts: Record<string, FactHistory> };

let cache: History | null | undefined;

/**
 * The per-fact changelog, or null when it has not been built.
 *
 * Null rather than an exception: history is produced by a separate walk over
 * every indexed revision, and a snapshot that predates it is a normal state, not
 * a broken one. Every caller renders without it.
 */
export function getHistory(): History | null {
  if (cache !== undefined) return cache;
  try {
    const raw = readFileSync(join(process.cwd(), "public", "data", "history.json"), "utf8");
    cache = JSON.parse(raw) as History;
  } catch {
    cache = null;
  }
  return cache;
}

export function historyFor(id: string): FactHistory | null {
  return getHistory()?.facts[id] ?? null;
}

/** Everything that changed at a given revision, most-changed kinds first. */
export function changesAt(rev: number): { id: string; h: FactHistory; e: HistoryEvent }[] {
  const h = getHistory();
  if (!h) return [];
  const out: { id: string; h: FactHistory; e: HistoryEvent }[] = [];
  for (const [id, fh] of Object.entries(h.facts)) {
    for (const e of fh.events) {
      if (e.rev === rev) out.push({ id, h: fh, e });
    }
  }
  return out.sort((a, b) => a.h.kind.localeCompare(b.h.kind) || a.id.localeCompare(b.id));
}
