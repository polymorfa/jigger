import { FACT_KINDS, type FactKind } from "./types";

// Fact ids are wire literals and contain ':', '/', spaces, '+', '$', '.'. They
// live inside a single dynamic route segment, so they must be percent-encoded
// on the way into a URL. Next decodes `params` for us on the way back, so
// `decodeFactId` is only a defensive no-op when the value is already decoded.

export function encodeFactId(id: string): string {
  return encodeURIComponent(id);
}

export function decodeFactId(param: string): string {
  // `params` are already decoded by Next; only touch it if it still looks
  // encoded (contains a percent-escape).
  return /%[0-9a-fA-F]{2}/.test(param) ? decodeURIComponent(param) : param;
}

export function factHref(id: string): string {
  // Straight to the kind's browser. The old `/fact/<encoded>` route still
  // redirects here for links already committed elsewhere, but nothing should
  // generate it: one hop is one hop too many, and the encoded form is exactly
  // what the flat scheme exists to get rid of.
  const kind = kindOfId(id);
  return kind ? browseHref(kind, id) : "/";
}

export function browseHref(kind: FactKind, id: string): string {
  // The kind prefix is already the first path segment, so it is dropped rather
  // than repeated. Everything after it passes through untouched: ids are built
  // from wire literals, and an id's own separators become path separators —
  // `iq:privacy/get/privacy` is `/iq/privacy/get/privacy`, no encoding anywhere.
  const rest = id.startsWith(`${kind}:`) ? id.slice(kind.length + 1) : id;
  return `/${kind}/${rest}`;
}

/** Rebuild the id that a route's catch-all segments refer to. */
export function idFromSlug(kind: FactKind, slug: string[]): string {
  return `${kind}:${slug.map(decodeURIComponent).join("/")}`;
}

// The part of an id after its `kind:` prefix, e.g. "privacy/set/category".
export function idBody(id: string): string {
  const i = id.indexOf(":");
  return i === -1 ? id : id.slice(i + 1);
}

export function kindOfId(id: string): FactKind | null {
  const i = id.indexOf(":");
  if (i === -1) return null;
  const k = id.slice(0, i);
  // Every kind, from the one list. A hand-written disjunction here silently
  // dropped `enum` and `appstate` the day they were added.
  return (FACT_KINDS as string[]).includes(k) ? (k as FactKind) : null;
}

// Matches a fact-id citation inside spec prose, e.g. `wam:4750`.
export const FACT_ID_RE = /^(ab|wam|iq|const|proto):/;
