import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fetchPayloadFile } from "./payload";
import type { DataSource } from "./source";

export type Export = { name: string; used_by: string[]; uses: number };

export type ModuleGraph = {
  deps: string[];
  /** Capped; `dependent_count` carries the real total. */
  dependents: string[];
  dependent_count: number;
  exports: Export[];
};

/**
 * Who relies on a module, and on which of its exports.
 *
 * The direction the bundle cannot answer: a minified call site references its
 * dependencies positionally, so nothing in the source names the callers of a
 * module — let alone the callers of one export. Precomputed for the same reason
 * the symbol tables are: it is a whole-bundle question and the answer is the
 * same for every reader.
 */
export async function loadModuleGraph(
  source: DataSource,
  name: string,
): Promise<ModuleGraph | null> {
  const file = `${name.replace(/\//g, "_")}.json`;
  try {
    return JSON.parse(
      readFileSync(join(process.cwd(), "public", "data", "graph", file), "utf8"),
    ) as ModuleGraph;
  } catch {
    const body = await fetchPayloadFile(source, `graph/${file}`);
    return body ? (JSON.parse(body) as ModuleGraph) : null;
  }
}
