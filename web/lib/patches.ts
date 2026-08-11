import "server-only";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type Patch = { repo: string; body: string };

/**
 * The per-library patches, if `jigger patch` has been run.
 *
 * Read from disk rather than recomputed here: generating them needs the
 * scanner's verdicts, which need the libraries checked out. The web app is a
 * reader of that work, not a second implementation of it.
 */
export function getPatches(): Patch[] {
  const dir = join(process.cwd(), "public", "data", "patches");
  try {
    return readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ repo: f.replace(/\.md$/, ""), body: readFileSync(join(dir, f), "utf8") }))
      .sort((a, b) => a.repo.localeCompare(b.repo));
  } catch {
    return [];
  }
}
