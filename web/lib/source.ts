// Data source descriptor + helpers. Pure and client-safe (no next/headers, no
// fs) so both the server loader and the client source-control can import it.
// The generated IR can be read from the bundled snapshot or from a tagged commit
// in a public GitHub repo — revisions are tagged (e.g. `rev/1044822804`), so a
// ref is how you browse the protocol as it was at a past revision.

export type DataSource =
  | { kind: "local" }
  | { kind: "github"; owner: string; repo: string; ref: string };

export const SRC_COOKIE = "jigger_src";
export const REF_COOKIE = "jigger_ref";

// owner/repo and default ref come from env (NEXT_PUBLIC_* so the client sees them).
const ENV_REPO = (process.env.NEXT_PUBLIC_JIGGER_REPO ?? "").trim();
// The payload lives on its own branch, not on `main`. `main` carries code; a
// revision's facts, modules and symbols are 65 MB and are replaced wholesale
// each release, which is not a thing to keep in the branch people clone.
export const DEFAULT_REF = (process.env.NEXT_PUBLIC_JIGGER_REF ?? "data").trim() || "data";

export function githubConfigured(): boolean {
  return /^[^/]+\/[^/]+$/.test(ENV_REPO);
}

export function githubOwnerRepo(): { owner: string; repo: string } | null {
  if (!githubConfigured()) return null;
  const [owner, repo] = ENV_REPO.split("/");
  return { owner: owner!, repo: repo! };
}

export function makeGithubSource(ref?: string): DataSource | null {
  const or = githubOwnerRepo();
  if (!or) return null;
  return { kind: "github", owner: or.owner, repo: or.repo, ref: (ref ?? DEFAULT_REF).trim() || DEFAULT_REF };
}

export const LOCAL_SOURCE: DataSource = { kind: "local" };

export function sourceKey(s: DataSource): string {
  return s.kind === "local" ? "local" : `github:${s.owner}/${s.repo}@${s.ref}`;
}

export function sourceLabel(s: DataSource): string {
  return s.kind === "local" ? "local snapshot" : `github ${s.owner}/${s.repo} @ ${s.ref}`;
}

type Gh = Extract<DataSource, { kind: "github" }>;

/** Raw URL for any file in the payload. */
export function rawUrl(s: Gh, path: string): string {
  return `https://raw.githubusercontent.com/${s.owner}/${s.repo}/${s.ref}/${path}`;
}

export function rawIrUrl(s: Gh): string {
  return rawUrl(s, "ir.json");
}

/**
 * Where a module's source and symbol table live in the payload.
 *
 * Fetched per page rather than bundled: the payload holds ~4,800 modules and a
 * deployment that shipped all of them would carry 29 MB nobody asked for to
 * serve the one file a reader opened.
 */
export function rawModuleUrl(s: Gh, name: string): string {
  return rawUrl(s, `modules/${encodeURIComponent(name)}.js`);
}

export function rawSymbolsUrl(s: Gh, name: string): string {
  return rawUrl(s, `symbols/${encodeURIComponent(name.replace(/\//g, "_"))}.json`);
}
