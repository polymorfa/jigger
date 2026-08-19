import { fetchJson } from "./cdn";
import type { SearchEntry } from "./types";

/**
 * The global search index — every fact and every module, in one file.
 *
 * Fetched once per page load and shared by every consumer. 2.4 MB, which is
 * large for one file and small for what it replaces: the alternative is a
 * search that can only look at what a page already loaded, which is not a
 * search of the protocol, it is a filter on the current list.
 */
export function loadSearchIndex(): Promise<SearchEntry[]> {
  return fetchJson<SearchEntry[]>("index/search.json");
}
