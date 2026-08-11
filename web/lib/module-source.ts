import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

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
