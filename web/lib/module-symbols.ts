import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fetchPayloadFile } from "./payload";
import type { DataSource } from "./source";

/** line, column, length, reference count. */
export type Decl = [number, number, number, number];
/** line, column, length, declaration line, declaration column. */
export type Ref = [number, number, number, number, number];

/** line, column, length, and the name to put there. */
export type Rename = [number, number, number, string];

export type Symbols = { hash: string; decls: Decl[]; refs: Ref[]; renames?: Rename[] };

/**
 * Give the factory's parameters their real names.
 *
 * `__d("M", […], function(t, n, r, o, a, i, l) { … l.go = u … })` — those seven
 * letters are the module's entire interface to the loader, and none of them
 * mean anything on sight. Renamed, the same line reads `exports.go = u`.
 *
 * The spans are computed in Rust and shipped, rather than derived here, because
 * this substitution needs a binder. `t`, `n`, `r` and the rest are also the
 * first names the minifier hands out to locals, so the same letters occur as
 * unrelated bindings throughout the module — `function u(t)` shadows the
 * factory's `t` — and a textual pass would rewrite all of them. Applying spans
 * somebody else resolved is the only way to do this without a parser in the
 * browser.
 *
 * Right to left within each line, so a replacement never invalidates the
 * columns of the ones before it.
 */
export function applyRenames(src: string, renames: Rename[] = []): string {
  if (renames.length === 0) return src;
  const byLine = new Map<number, Rename[]>();
  for (const r of renames) byLine.set(r[0], [...(byLine.get(r[0]) ?? []), r]);

  const lines = src.split("\n");
  for (const [line, edits] of byLine) {
    const i = line - 1;
    if (i < 0 || i >= lines.length) continue;
    let text = lines[i]!;
    for (const [, col, len, name] of [...edits].sort((a, b) => b[1] - a[1])) {
      if (col < 0 || col + len > text.length) continue;
      text = text.slice(0, col) + name + text.slice(col + len);
    }
    lines[i] = text;
  }
  return lines.join("\n");
}

/**
 * FNV-1a over UTF-8, matching the Rust side byte for byte.
 *
 * The pair exists to catch drift between two implementations of the same
 * rewrite, and it earned its keep immediately: the first run disagreed because
 * the Rust constant had an extra digit. Without the check the symbol offsets
 * would simply have been a few characters off — links landing next to the thing
 * they name, which looks like it works.
 */
function fnv1a(s: string): string {
  let h = 0xcbf29ce484222325n;
  for (const byte of Buffer.from(s, "utf8")) {
    h ^= BigInt(byte);
    h = BigInt.asUintN(64, h * 0x100000001b3n);
  }
  return h.toString(16).padStart(16, "0");
}

/**
 * Whether a table describes the text that will actually be rendered.
 *
 * The hash covers the source *after* renaming, because that is what ends up on
 * screen — so the table's own renames are applied before comparing. A table is
 * therefore all-or-nothing: if the hash disagrees, both the offsets and the
 * renames are discarded together, and the module renders as raw minified text
 * with no links. Half-applying it would put names on screen that the offsets no
 * longer describe.
 */
function matches(sym: Symbols, rewritten: string): boolean {
  return sym.hash === fnv1a(applyRenames(rewritten, sym.renames));
}

/**
 * The symbol table for a module, if one was precomputed *and* still describes
 * the text we are about to render.
 *
 * The hash comparison is the whole safety story. Offsets are meaningless
 * against different bytes, and a symbol table that half-matches produces links
 * that land beside the identifier they name — worse than no links, because it
 * looks correct.
 */
/** The same table, from the payload branch, for a deployment with no store. */
export async function fetchSymbols(
  source: DataSource,
  module: string,
  rewritten: string,
): Promise<Symbols | null> {
  if (source.kind === "local") return null;
  try {
    const body = await fetchPayloadFile(source, `symbols/${module.replace(/\//g, "_")}.json`);
    if (!body) return null;
    const sym = JSON.parse(body) as Symbols;
    // The same guarantee as the local path: offsets against different bytes are
    // not approximately right, they are meaningless.
    return matches(sym, rewritten) ? sym : null;
  } catch {
    return null;
  }
}

export function loadSymbols(module: string, rewritten: string): Symbols | null {
  try {
    const raw = readFileSync(
      join(process.cwd(), "public", "data", "symbols", `${module.replace(/\//g, "_")}.json`),
      "utf8",
    );
    const sym = JSON.parse(raw) as Symbols;
    return matches(sym, rewritten) ? sym : null;
  } catch {
    // Not every module has one: the pass covers what the ledger references, and
    // the viewer can open anything. No symbols means no internal links, which
    // is the honest degradation.
    return null;
  }
}

/**
 * Definitions indexed by line, for the renderer.
 *
 * Keyed by line because that is how the viewer works — it draws one line at a
 * time and needs the few spans on it, not a scan of the whole module.
 */
export function byLine(sym: Symbols): {
  refs: Map<number, Ref[]>;
  decls: Map<number, Decl[]>;
} {
  const refs = new Map<number, Ref[]>();
  const decls = new Map<number, Decl[]>();
  for (const r of sym.refs) refs.set(r[0], [...(refs.get(r[0]) ?? []), r]);
  for (const d of sym.decls) decls.set(d[0], [...(decls.get(d[0]) ?? []), d]);
  return { refs, decls };
}
