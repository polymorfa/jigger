import type { SearchEntry, SearchKind } from "@/lib/types";

/**
 * A small query language for the ledger.
 *
 * Typing a word into a box answers "is there something called this". The
 * questions that actually come up are narrower — *which protobuf messages carry
 * a `lid` attribute*, *which A/B flags does the newsletter code read*, *what
 * inbound stanzas are not responses* — and none of them are expressible as a
 * word.
 *
 * ```text
 * kind:proto contains:contextInfo      messages that embed it
 * kind:ab -contains:bool               non-boolean flags
 * name:/^WAWeb.*Query$/                regex on the name
 * "user feedback"                      a phrase, matched whole
 * ```
 *
 * Bare words search id, name and contents together. Everything else is a
 * `field:value` term, negatable with a leading `-`. Unknown fields are treated
 * as bare words rather than dropped: a typo silently narrowing your results to
 * nothing is worse than one that merely fails to match.
 */

export type Field = "kind" | "name" | "id" | "contains" | "module" | "any";

export type Term = {
  field: Field;
  value: string;
  negated: boolean;
  /** `/…/` in the source becomes a real regex, compiled once. */
  regex?: RegExp;
  /** Exactly as it was typed.
   *
   * The controls edit the query by rewriting this text, so a term has to
   * round-trip byte for byte. Re-serialising from `field` and `value` would
   * quietly turn `name:/^WAWeb/` into `name:^WAWeb` — a regex into a literal —
   * the first time someone clicked an unrelated chip. */
  raw: string;
};

export const FIELDS: { name: Field; hint: string }[] = [
  { name: "kind", hint: "ab, wam, iq, proto, enum, appstate, mex, sig, const, module" },
  { name: "name", hint: "the readable name" },
  { name: "id", hint: "the wire-literal id" },
  { name: "contains", hint: "a field, attribute, tag or enum variant it carries" },
  { name: "module", hint: "the source module it was read out of" },
];

const TOKEN = /(-?)(?:(\w+):)?(?:"([^"]*)"|\/((?:[^/\\]|\\.)*)\/|(\S+))/g;

export function parseQuery(input: string): Term[] {
  const out: Term[] = [];
  for (const m of input.matchAll(TOKEN)) {
    const [, neg, rawField, quoted, rx, bare] = m;
    const value = quoted ?? rx ?? bare ?? "";
    if (!value) continue;

    const known = FIELDS.some((f) => f.name === rawField);
    // An unrecognised prefix is content, not a filter. `WAWap:JID` is a real
    // thing someone might paste; treating it as a broken field would return
    // nothing and look like the data was missing.
    const field: Field = known ? (rawField as Field) : "any";
    const term: Term = {
      field,
      value: known ? value : (m[0].startsWith("-") ? m[0].slice(1) : m[0]),
      negated: neg === "-",
      raw: m[0],
    };
    if (rx !== undefined) {
      try {
        term.regex = new RegExp(rx, "i");
      } catch {
        // An unfinished regex is what a half-typed query looks like. Fall back
        // to a literal match so results keep updating as you type.
      }
    }
    out.push(term);
  }
  return out;
}

/** Whether one term accepts an entry, ignoring negation. */
function hit(e: SearchEntry, t: Term): boolean {
  const v = t.value.toLowerCase();
  const test = (s: string) => (t.regex ? t.regex.test(s) : s.toLowerCase().includes(v));

  switch (t.field) {
    case "kind":
      return e.kind.toLowerCase() === v;
    case "name":
      return test(e.name);
    case "id":
      return test(e.id);
    case "contains":
      // Exact on a contained term, not substring: `contains:id` should not
      // match every field whose name happens to end in `Id`.
      return (e.terms ?? []).some((x) => (t.regex ? t.regex.test(x) : x.toLowerCase() === v));
    case "module":
      return e.module ? test(e.module) : false;
    case "any":
      return (
        test(e.id) ||
        test(e.name) ||
        (e.module ? test(e.module) : false) ||
        (e.terms ?? []).some(test)
      );
  }
}

export type Scored = { e: SearchEntry; score: number; via?: string };

/**
 * Run a parsed query.
 *
 * Terms are ANDed. `kind:` terms are the exception and OR among themselves —
 * `kind:proto kind:enum` obviously means either, and ANDing them would return
 * nothing while looking like a valid query.
 */
export function runQuery(entries: SearchEntry[], terms: Term[]): Scored[] {
  if (terms.length === 0) return [];

  const kinds = terms.filter((t) => t.field === "kind" && !t.negated);
  const rest = terms.filter((t) => !(t.field === "kind" && !t.negated));
  const out: Scored[] = [];

  for (const e of entries) {
    if (kinds.length > 0 && !kinds.some((t) => hit(e, t))) continue;
    let ok = true;
    for (const t of rest) {
      if (hit(e, t) === t.negated) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    out.push(score(e, terms));
  }
  return out;
}

/**
 * How well an entry matches, lower is better.
 *
 * Driven by the free-text terms only. A `kind:` filter is a yes/no, and letting
 * it contribute would rank an arbitrary member of the kind above an exact name
 * match somewhere else.
 */
function score(e: SearchEntry, terms: Term[]): Scored {
  const words = terms.filter((t) => !t.negated && (t.field === "any" || t.field === "name" || t.field === "id"));
  if (words.length === 0) return { e, score: 8 };

  let best = Infinity;
  let via: string | undefined;
  for (const t of words) {
    const q = t.value.toLowerCase();
    const idl = e.id.toLowerCase();
    const nl = e.name.toLowerCase();
    let s: number;
    if (idl === q) s = 0;
    else if (idl.startsWith(q)) s = 1;
    else if (nl.startsWith(q)) s = 2;
    else if (idl.includes(q)) s = 3 + idl.indexOf(q) / 10000;
    else if (nl.includes(q)) s = 4 + nl.indexOf(q) / 10000;
    else {
      // Deep hit. Ranked strictly below every name match: a thing actually
      // called `contextInfo` should always beat the eighty messages that merely
      // have a field by that name — but those eighty are the answer when
      // nothing is called that.
      s = Infinity;
      for (const term of e.terms ?? []) {
        const tl = term.toLowerCase();
        const d = tl === q ? 5 : tl.startsWith(q) ? 6 : tl.includes(q) ? 7 : Infinity;
        if (d < s) {
          s = d;
          via = term;
        }
      }
    }
    if (s < best) best = s;
  }
  return { e, score: best === Infinity ? 8 : best, via };
}

export type Sort = "relevance" | "name" | "kind";

export function sortHits(hits: Scored[], sort: Sort): Scored[] {
  const byScore = (a: Scored, b: Scored) => a.score - b.score || a.e.id.length - b.e.id.length;
  const out = [...hits];
  if (sort === "name") out.sort((a, b) => a.e.name.localeCompare(b.e.name) || byScore(a, b));
  else if (sort === "kind") out.sort((a, b) => a.e.kind.localeCompare(b.e.kind) || byScore(a, b));
  else out.sort(byScore);
  return out;
}

export function countByKind(hits: Scored[]): Map<SearchKind, number> {
  const m = new Map<SearchKind, number>();
  for (const { e } of hits) m.set(e.kind, (m.get(e.kind) ?? 0) + 1);
  return m;
}

/* ==========================================================================
   Editing a query from the controls.

   The text is the single source of truth and the controls write into it. The
   alternative — filter state beside the box — gives you two mechanisms that can
   disagree, and leaves the query language undiscoverable: you would only ever
   find `contains:` by reading documentation. This way clicking a chip *shows*
   you the operator it just wrote.
   ========================================================================== */

/** How a term is written when a control adds one. */
function serialize(field: Field, value: string, negated = false): string {
  const quoted = /\s/.test(value) ? JSON.stringify(value) : value;
  const prefix = negated ? "-" : "";
  return field === "any" ? `${prefix}${quoted}` : `${prefix}${field}:${quoted}`;
}

/** Every value currently bound to a field, in query order. */
export function valuesOf(terms: Term[], field: Field, negated = false): string[] {
  return terms.filter((t) => t.field === field && t.negated === negated).map((t) => t.value);
}

/** Rebuilds a query from terms, each written exactly as it was typed. */
function join(terms: Term[]): string {
  return terms.map((t) => t.raw).join(" ");
}

/** Adds a term, unless an identical one is already there. */
export function addTerm(input: string, field: Field, value: string, negated = false): string {
  const terms = parseQuery(input);
  if (terms.some((t) => t.field === field && t.value === value && t.negated === negated)) {
    return input;
  }
  const next = join(terms);
  return next ? `${next} ${serialize(field, value, negated)}` : serialize(field, value, negated);
}

export function removeTerm(input: string, field: Field, value: string, negated = false): string {
  return join(
    parseQuery(input).filter(
      (t) => !(t.field === field && t.value === value && t.negated === negated),
    ),
  );
}

/** The one the chips use: on if absent, off if present. */
export function toggleTerm(input: string, field: Field, value: string): string {
  const has = parseQuery(input).some(
    (t) => t.field === field && t.value === value && !t.negated,
  );
  return has ? removeTerm(input, field, value) : addTerm(input, field, value);
}

/** Drops every term bound to a field — "clear the kind filter". */
export function clearField(input: string, field: Field): string {
  return join(parseQuery(input).filter((t) => t.field !== field));
}
