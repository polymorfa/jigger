import "server-only";
import type { DataSource } from "./source";

/**
 * Fetch one file from the payload branch.
 *
 * Two transports, because the repository may be either visibility and the
 * difference is not cosmetic: `raw.githubusercontent.com` serves public repos
 * anonymously and 404s on private ones — indistinguishably from a missing file,
 * which is the worst possible failure to debug.
 *
 * So when a token is present the Contents API is used instead, which works for
 * both. Raw is preferred otherwise: it has no rate limit worth thinking about,
 * where the API allows 5,000 requests an hour and every module view spends two.
 */
export async function fetchPayloadFile(
  source: DataSource,
  path: string,
): Promise<string | null> {
  if (source.kind === "local") return null;
  const token = process.env.JIGGER_GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  const { owner, repo, ref } = source;

  const url = token
    ? `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(ref)}`
    : `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${path}`;

  try {
    const res = await fetch(url, {
      // A revision's content never changes — a new build is a new revision with
      // its own branch content — so this is cacheable forever.
      cache: "force-cache",
      next: { revalidate: false },
      headers: token
        ? { Authorization: `Bearer ${token}`, Accept: "application/vnd.github.raw" }
        : {},
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}
