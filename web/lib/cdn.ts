// Every byte the app displays, fetched in the browser.
//
// jigger runs as static files. There is no server to read a ledger on your
// behalf, so a page asks the CDN for exactly the artifact it needs — a kind's
// index to list it, one fact's JSON to render it, one module's source to show
// it — and nothing else is transferred. That is the whole reason the extractor
// writes per-fact and per-module files alongside `ir.json`: the 12 MB ledger is
// the archive, and these are what a reader actually opens.

import type { Fact, FactKind, Ir, IqType } from "./types";

/**
 * Where the payload lives.
 *
 * An explicit `NEXT_PUBLIC_JIGGER_CDN` wins. Otherwise a configured repository
 * is served through jsDelivr, which fronts GitHub with a real CDN — raw
 * .githubusercontent.com would work but is rate-limited per IP, and the limit
 * is shared by everyone behind an office NAT.
 *
 * With neither, `/data` is the local extraction under `public/`, which is what
 * a machine that just ran `jigger extract` should be reading.
 */
function base(): string {
  const explicit = (process.env.NEXT_PUBLIC_JIGGER_CDN ?? "").trim();
  if (explicit) return explicit.replace(/\/+$/, "");
  const repo = (process.env.NEXT_PUBLIC_JIGGER_REPO ?? "").trim();
  const ref = (process.env.NEXT_PUBLIC_JIGGER_REF ?? "data").trim() || "data";
  if (/^[^/]+\/[^/]+$/.test(repo)) return `https://cdn.jsdelivr.net/gh/${repo}@${ref}`;
  return "/data";
}

export const CDN_BASE = base();

export function cdnUrl(path: string): string {
  return `${CDN_BASE}/${path}`;
}

export class CdnError extends Error {
  constructor(
    readonly path: string,
    readonly status: number | null,
    message: string,
  ) {
    super(message);
    this.name = "CdnError";
  }
}

/**
 * One in-flight or settled request per path, for the life of the page.
 *
 * The promise is cached rather than the value, so two components mounting at
 * once make one request instead of two — and because the same promise comes
 * back every time, it can be handed straight to React's `use()` without a
 * render loop. Nothing is ever evicted: a revision's
 * files are immutable, and the payload a reader touches in one session is a
 * handful of megabytes at the very worst.
 */
const inflight = new Map<string, Promise<unknown>>();

export function cached<T>(path: string, load: () => Promise<T>): Promise<T> {
  const seen = inflight.get(path);
  if (seen) return seen as Promise<T>;
  const p = load().catch((err) => {
    // A failure must not be cached. The usual cause is a dropped connection,
    // and a reader who retries deserves an actual retry rather than the
    // remembered error.
    inflight.delete(path);
    throw err;
  });
  inflight.set(path, p);
  return p;
}

async function get(path: string): Promise<Response> {
  let res: Response;
  try {
    res = await fetch(cdnUrl(path));
  } catch {
    throw new CdnError(path, null, `Could not reach ${cdnUrl(path)}.`);
  }
  if (!res.ok) throw new CdnError(path, res.status, `${cdnUrl(path)} returned HTTP ${res.status}.`);
  return res;
}

export function fetchJson<T>(path: string): Promise<T> {
  return cached(path, async () => (await get(path)).json() as Promise<T>);
}

export function fetchText(path: string): Promise<string> {
  return cached(path, async () => (await get(path)).text());
}

/** The same, for artifacts that are legitimately absent rather than broken. */
export async function fetchJsonOptional<T>(path: string): Promise<T | null> {
  try {
    return await fetchJson<T>(path);
  } catch (err) {
    if (err instanceof CdnError && err.status === 404) return null;
    throw err;
  }
}

export async function fetchTextOptional(path: string): Promise<string | null> {
  try {
    return await fetchText(path);
  } catch (err) {
    if (err instanceof CdnError && err.status === 404) return null;
    throw err;
  }
}

// ---------------------------------------------------------------------------
// Indexes — enough to render a list, and no more.
// ---------------------------------------------------------------------------

/**
 * What a master pane groups, sorts and filters on, per kind.
 *
 * Typed rather than pre-formatted: IQ groups by namespace, WAM sorts by event
 * id, A/B filters by type and counts what nothing reads. A list cannot do any
 * of that against `"id 4750"`.
 */
export type ListFields = {
  ab: { oid: number; type: string; reads: number };
  wam: { event: number; fields: number };
  iq: { ns: string; type: IqType };
  mex: { op: "query" | "mutation"; doc: string };
  sig: { root: string; answers: boolean };
  enum: { variants: number };
  appstate: { index: string };
  const: { group: string };
  proto: Record<string, never>;
};

/** A fact as a list needs it: what to show, and where the full record is. */
export type IndexRow<K extends FactKind = FactKind> = {
  id: string;
  name: string;
  /** The file under `ir/<kind>/`. Absent if the extraction wrote no record. */
  slug?: string;
  /** Prose attributes, for a human scanning. */
  meta: string[];
  list: ListFields[K];
};

export type ModuleRow = { name: string; facts: number };

export type KindRow = { kind: FactKind; count: number };

export const loadKindIndex = <K extends FactKind>(kind: K): Promise<IndexRow<K>[]> =>
  fetchJson<IndexRow<K>[]>(`index/${kind}.json`);

export const loadModuleIndex = (): Promise<ModuleRow[]> => fetchJson<ModuleRow[]>("index/modules.json");

export const loadKinds = (): Promise<KindRow[]> => fetchJson<KindRow[]>("index/kinds.json");

// ---------------------------------------------------------------------------
// Records
// ---------------------------------------------------------------------------

export const loadFact = (kind: FactKind, slug: string): Promise<Fact> =>
  fetchJson<Fact>(`ir/${kind}/${encodeURIComponent(slug)}.json`);

export type Revision = Pick<Ir, "revision" | "version"> & { facts: number };

export const loadRevision = (): Promise<Revision> => fetchJson<Revision>("revision.json");

/** Files stored under a flat directory encode `/` in a module name as `_`. */
export const flatName = (name: string): string => name.replace(/\//g, "_");

export const loadModuleSource = (name: string): Promise<string | null> =>
  fetchTextOptional(`modules/${name}.js`);

/** Which facts were read out of one module. */
export type FactRef = { id: string; kind: FactKind; name: string; slug?: string };

export const loadModuleFacts = (name: string): Promise<FactRef[] | null> =>
  fetchJsonOptional<FactRef[]>(`index/by-module/${flatName(name)}.json`);
