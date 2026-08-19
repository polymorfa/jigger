// Every byte the app displays, fetched in the browser.
//
// jigger runs as static files. There is no server to read a ledger on your
// behalf, so a page asks the CDN for exactly the artifact it needs — a kind's
// index to list it, one fact's JSON to render it, one module's source to show
// it — and nothing else is transferred. That is the whole reason the extractor
// writes per-fact and per-module files alongside `ir.json`: the 12 MB ledger is
// the archive, and these are what a reader actually opens.

import type { Diff, Fact, FactKind, Ir, IqType, Route } from "./types";

/**
 * Where the payload lives, pinned to an exact commit.
 *
 * The `data` branch is replaced wholesale every release, and jsDelivr serves a
 * branch ref with `s-maxage=43200` at the edge and `max-age=604800` in the
 * browser. Those two facts together are a correctness bug, not a performance
 * one: a reader arriving mid-release gets `revision.json` from the new revision
 * and half the indexes from the old, with nothing on the page admitting it.
 *
 * A commit ref is served `immutable` for a year instead, and is self-consistent
 * by construction. So the branch is resolved to a SHA once — a 60-second-cached
 * GitHub API call, and once per session because the promise is cached — and
 * every artifact after that comes from the pinned tree.
 *
 * Resolution failing is not fatal. A rate-limited or offline reader falls back
 * to the branch, which is the behaviour we are trying to improve on rather than
 * a broken state.
 */
function resolveBase(): Promise<string> {
  return cached("cdn:base", async () => {
    const explicit = (process.env.NEXT_PUBLIC_JIGGER_CDN ?? "").trim();
    if (explicit) return explicit.replace(/\/+$/, "");

    const repo = (process.env.NEXT_PUBLIC_JIGGER_REPO ?? "").trim();
    const ref = (process.env.NEXT_PUBLIC_JIGGER_REF ?? "data").trim() || "data";
    // No repository configured means a local extraction under `public/`, which
    // is what a machine that just ran `jigger extract` should be reading.
    if (!/^[^/]+\/[^/]+$/.test(repo)) return "/data";

    const branch = `https://cdn.jsdelivr.net/gh/${repo}@${ref}`;
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/commits/${ref}`, {
        headers: { Accept: "application/vnd.github.sha" },
        // The timeout is the whole point of this call being safe. A rejection
        // is caught below, but a request that simply never answers is not a
        // rejection — it is a promise nobody resolves, and every page in the
        // app is suspended on it. That renders as a blank shell with no error,
        // which is indistinguishable from the site being broken.
        //
        // GitHub also allows 60 unauthenticated requests an hour per address,
        // so a shared network can lose this without anything being wrong.
        signal: AbortSignal.timeout(2500),
      });
      if (!res.ok) return branch;
      const sha = (await res.text()).trim();
      return /^[0-9a-f]{40}$/.test(sha) ? `https://cdn.jsdelivr.net/gh/${repo}@${sha}` : branch;
    } catch {
      // Falling back to the branch means a reader may see a snapshot mixed
      // across two revisions, which is what pinning exists to prevent. It is
      // still the right trade against showing them nothing.
      return branch;
    }
  });
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
  const url = `${await resolveBase()}/${path}`;
  let res: Response;
  try {
    res = await fetch(url);
  } catch {
    throw new CdnError(path, null, `Could not reach ${url}.`);
  }
  if (!res.ok) throw new CdnError(path, res.status, `${url} returned HTTP ${res.status}.`);
  return res;
}

export function fetchJson<T>(path: string): Promise<T> {
  return cached(path, async () => (await get(path)).json() as Promise<T>);
}

export function fetchText(path: string): Promise<string> {
  return cached(path, async () => (await get(path)).text());
}

/**
 * The same, for artifacts that are legitimately absent rather than broken.
 *
 * Cached under their own key, and that is not an optimisation. These are handed
 * to `use()`, which suspends on the *identity* of a promise — an `async`
 * wrapper returning a fresh one every render suspends forever, and does it
 * silently: the page simply stays on its fallback with nothing in the console.
 */
const absent = (err: unknown): null => {
  if (err instanceof CdnError && err.status === 404) return null;
  throw err;
};

export function fetchJsonOptional<T>(path: string): Promise<T | null> {
  return cached(`opt:${path}`, () => fetchJson<T>(path).catch(absent));
}

export function fetchTextOptional(path: string): Promise<string | null> {
  return cached(`opt:${path}`, () => fetchText(path).catch(absent));
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
  ab: {
    oid: number;
    type: string;
    reads: number;
    /** The modules that read it — what tells you which subsystem it gates. */
    readers: string[];
    on: boolean;
    /** The two shipped defaults disagree: an experiment actually running. */
    split: boolean;
  };
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

/** The numbers the overview leads with, so it needs no index to count them. */
export type Summary = {
  revision: number;
  facts: number;
  kinds: Partial<Record<FactKind, number>>;
  ab: { total: number; unwired: number };
};

export const loadSummary = (): Promise<Summary> => fetchJson<Summary>("index/summary.json");

/** The pairwise diff against the previous indexed revision, when one exists. */
export const loadDiff = (): Promise<Diff | null> => fetchJsonOptional<Diff>("diff.json");

/** The inbound dispatch table for this revision, if one was read. */
export const loadDispatch = (): Promise<Route[] | null> =>
  fetchJsonOptional<Route[]>("index/dispatch.json");

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

/**
 * Where a short type name resolves to: `[kind, id]`, with the filename only
 * when it is not the id body. Ambiguous names are absent — six messages are
 * called `ImageMessage`, and a link to the wrong one is worse than no link.
 */
export type TypeEntry = [FactKind, string] | [FactKind, string, string];

export const loadTypes = (): Promise<Record<string, TypeEntry>> =>
  fetchJson<Record<string, TypeEntry>>("index/types.json");

/**
 * Short name -> the proto message it names: `[id]`, or `[id, slug]` when the
 * filename is not the id body.
 *
 * Laxer than `types.json` and for a different job. A link to the wrong
 * `ImageMessage` is a lie, so ambiguity is dropped there; but expanding a field
 * typed `Message` has to show some Message or the tree stays flat, which is the
 * thing it exists to fix.
 */
export type ProtoType = [string] | [string, string];

export const loadProtoTypes = (): Promise<Record<string, ProtoType>> =>
  fetchJson<Record<string, ProtoType>>("index/proto-types.json");

/** One place a message is embedded: which message, and under which field. */
export type Embedding = { message: string; field: string; number: number; id: string };

export const loadEmbeddings = (): Promise<Record<string, Embedding[]>> =>
  fetchJson<Record<string, Embedding[]>>("index/embedded-by.json");

/**
 * The filename for a fact id.
 *
 * Only the one substitution a path needs. Everything the Rust rule does beyond
 * that — the length cap, the escaping of stranger characters — applies to 89 of
 * 5,382 facts, and those carry their filename explicitly rather than having it
 * guessed from a second implementation of a rule that has to agree exactly.
 */
export const slugOfId = (kind: FactKind, id: string, explicit?: string): string =>
  explicit ?? id.slice(kind.length + 1).replace(/\//g, "~");
