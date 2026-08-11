import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Ir } from "./types";
import { type DataSource, rawIrUrl } from "./source";

export const SUPPORTED_VERSION = 1;

export type FailureReason = "network" | "notfound" | "version" | "parse";

export class DataSourceError extends Error {
  constructor(
    public reason: FailureReason,
    message: string,
    public source: DataSource,
  ) {
    super(message);
    this.name = "DataSourceError";
  }
}

// Load the generated IR for a source. Local reads the bundled file; github
// fetches the tagged raw URL (immutable per ref, so force-cache). Every failure
// is a typed DataSourceError with an honest, specific message.
export async function loadIr(source: DataSource): Promise<Ir> {
  let text: string;

  if (source.kind === "local") {
    text = await readFile(join(process.cwd(), "public", "data", "ir.json"), "utf8");
  } else {
    const url = rawIrUrl(source);
    let res: Response;
    try {
      res = await fetch(url, { cache: "force-cache" });
    } catch {
      throw new DataSourceError("network", `Could not reach GitHub. The request to ${url} failed.`, source);
    }
    if (res.status === 404) {
      throw new DataSourceError(
        "notfound",
        `No generated/ir.json at ${source.owner}/${source.repo}@${source.ref} (404). The ref may not exist or may not carry a generated IR.`,
        source,
      );
    }
    if (!res.ok) {
      throw new DataSourceError("network", `GitHub returned HTTP ${res.status} for ${url}.`, source);
    }
    text = await res.text();
  }

  let ir: Ir;
  try {
    ir = JSON.parse(text) as Ir;
  } catch {
    throw new DataSourceError("parse", "The payload is not valid JSON.", source);
  }

  if (typeof ir.version !== "number" || ir.version !== SUPPORTED_VERSION) {
    throw new DataSourceError(
      "version",
      `IR version ${String(ir?.version)} is not understood by this build (expects version ${SUPPORTED_VERSION}).`,
      source,
    );
  }
  if (!Array.isArray(ir.facts)) {
    throw new DataSourceError("parse", "The payload has no facts array.", source);
  }
  return ir;
}
