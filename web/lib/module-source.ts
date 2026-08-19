import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { fetchPayloadFile } from "./payload";
import type { DataSource } from "./source";

/**
 * Module source, read straight out of the cellar bundle.
 *
 * Not copied into the app: a bundle is ~188k modules and gigabytes, and the
 * whole point of cellar is that it already stores them addressably. This reads
 * the one module a page asks for.
 *
 * Only works against a local cellar store. When the app is pointed at a GitHub
 * snapshot there is no bundle on disk, so `loadModule` returns null and callers
 * render the reference without a link rather than a broken one.
 */
const STORE = process.env.CELLAR_STORE ?? join(homedir(), ".cellar", "bundles");

export function modulePath(revision: number, name: string): string {
  return join(STORE, `whatsapp-${revision}`, "modules", `${name}.js`);
}

export function hasModule(revision: number, name: string): boolean {
  return existsSync(modulePath(revision, name));
}

/**
 * Module source, wherever it happens to live.
 *
 * On a machine with a cellar store that is the bundle on disk. On a deployment
 * it is the payload branch, fetched one module at a time — the payload holds
 * ~4,800 of them and shipping all 29 MB to serve the one someone opened would
 * be absurd. Cached indefinitely because a revision's source never changes:
 * a new build is a new revision with its own branch content.
 */
export async function fetchModule(source: DataSource, name: string): Promise<string | null> {
  if (source.kind === "local") return null;
  return fetchPayloadFile(source, `modules/${name}.js`);
}

export function loadModule(revision: number, name: string): string | null {
  const p = modulePath(revision, name);
  if (!existsSync(p)) return null;
  try {
    return readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

/**
 * The first line matching a fact's evidence pattern.
 *
 * Evidence is stored content-addressed — a module plus a regex — precisely so a
 * line number never has to be committed. Re-minification moves every line; the
 * pattern usually still matches. So the number is computed here, at read time,
 * and is allowed to be wrong tomorrow without corrupting anything.
 */
export function lineOfMatch(src: string, pattern: string): number | null {
  let re: RegExp;
  try {
    re = new RegExp(pattern);
  } catch {
    return null;
  }
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i] as string)) return i + 1;
  }
  return null;
}

/**
 * The line an exported member is actually defined on.
 *
 * Minification is why this is not a search. `assertTag` appears exactly once in
 * its module — in the export assignment `l.assertTag = s` — while the function
 * itself is called `s`. Landing a click-through on that assignment technically
 * finds the name and shows you nothing: you still have to read off the local and
 * go looking for it yourself, which is the work the link was supposed to save.
 *
 * So: the member's own definition if it has one, otherwise resolve the export to
 * its local and find where *that* is defined, otherwise the first mention. The
 * last case is honest rather than clever — a name that appears nowhere useful is
 * better shown somewhere than not shown at all.
 */
export function memberLine(src: string, member: string): number | null {
  if (!/^[A-Za-z_$][\w$]*$/.test(member)) return null;
  const lines = src.split("\n");
  const lineOf = (re: RegExp): number | null => {
    for (let i = 0; i < lines.length; i++) if (re.test(lines[i] as string)) return i + 1;
    return null;
  };

  const direct = lineOf(
    new RegExp(`function\\s+${member}\\s*\\(|\\b${member}\\s*[:=]\\s*function\\b`),
  );
  if (direct) return direct;

  const exported = new RegExp(`[.\\s]${member}\\s*=\\s*([A-Za-z_$][\\w$]*)`).exec(src);
  if (exported) {
    const local = exported[1] as string;
    const def = lineOf(
      new RegExp(
        `function\\s+${local}\\s*\\(|\\bvar\\s+${local}\\s*=|\\b${local}\\s*=\\s*function\\b`,
      ),
    );
    if (def) return def;
  }

  return lineOf(new RegExp(`\\b${member}\\b`));
}
