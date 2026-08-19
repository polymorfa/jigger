import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { rawSymbolsUrl, type DataSource } from "./source";

/** line, column, length, reference count. */
export type Decl = [number, number, number, number];
/** line, column, length, declaration line, declaration column. */
export type Ref = [number, number, number, number, number];

export type Symbols = { hash: string; decls: Decl[]; refs: Ref[] };

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
    const res = await fetch(rawSymbolsUrl(source, module), {
      cache: "force-cache",
      next: { revalidate: false },
    });
    if (!res.ok) return null;
    const sym = (await res.json()) as Symbols;
    // The same guarantee as the local path: offsets against different bytes are
    // not approximately right, they are meaningless.
    return sym.hash === fnv1a(rewritten) ? sym : null;
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
    return sym.hash === fnv1a(rewritten) ? sym : null;
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
