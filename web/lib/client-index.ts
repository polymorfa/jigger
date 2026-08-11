import type { SearchEntry } from "./types";

// Lazily fetch the slim search index (built by scripts/prepare.mjs) exactly
// once per page load and share the promise across every client consumer
// (global search + proto tree). Keeps the initial payload small — the 2.7 MB
// ledger never reaches the client.

let cache: Promise<SearchEntry[]> | null = null;

export function loadSearchIndex(): Promise<SearchEntry[]> {
  if (!cache) {
    cache = fetch("/data/search-index.json").then((r) => {
      if (!r.ok) throw new Error(`search-index.json: ${r.status}`);
      return r.json() as Promise<SearchEntry[]>;
    });
  }
  return cache;
}
