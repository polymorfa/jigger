import "server-only";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// Spec markdown is copied into content/spec at build time by scripts/prepare.mjs.
const SPEC_DIR = join(process.cwd(), "content", "spec");

export type SpecMeta = { slug: string; title: string; file: string };

function titleOf(content: string, fallback: string): string {
  for (const line of content.split("\n")) {
    const m = /^#\s+(.+?)\s*$/.exec(line);
    if (m) return m[1]!;
  }
  return fallback;
}

export function getSpecList(): SpecMeta[] {
  if (!existsSync(SPEC_DIR)) return [];
  return readdirSync(SPEC_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const content = readFileSync(join(SPEC_DIR, file), "utf8");
      return { slug, title: titleOf(content, slug), file };
    });
}

export function getSpec(slug: string): { slug: string; title: string; content: string } | null {
  // guard against path traversal — slug must be a plain filename stem
  if (!/^[A-Za-z0-9._-]+$/.test(slug)) return null;
  const path = join(SPEC_DIR, `${slug}.md`);
  if (!existsSync(path)) return null;
  const content = readFileSync(path, "utf8");
  return { slug, title: titleOf(content, slug), content };
}

export type Citation = { slug: string; title: string };

// Which spec documents cite each fact id (by backtick citation). The tooling no
// longer stamps `claimSource` onto facts, so this reconstructs the fact→spec
// direction by scanning the prose — a fact is "documented" iff some spec names it.
let _citations: Map<string, Citation[]> | null = null;
export function getCitations(): Map<string, Citation[]> {
  if (_citations) return _citations;
  const map = new Map<string, Citation[]>();
  for (const spec of getSpecList()) {
    const content = readFileSync(join(SPEC_DIR, spec.file), "utf8");
    const seenHere = new Set<string>();
    for (const m of content.matchAll(/`([^`]+)`/g)) {
      const token = m[1]!;
      if (!/^(ab|wam|iq|const|proto):/.test(token) || seenHere.has(token)) continue;
      seenHere.add(token);
      const list = map.get(token) ?? [];
      list.push({ slug: spec.slug, title: spec.title });
      map.set(token, list);
    }
  }
  _citations = map;
  return map;
}
