import {
  cached,
  loadEmbeddings,
  loadFact,
  loadKindIndex,
  loadProtoTypes,
  loadTypes,
  slugOfId,
  type Embedding,
} from "./cdn";
import { browseHref } from "./ids";
import type { Fact, FactKind } from "./types";
import type { TreeNode } from "./proto-graph";

/** Where a fact is described in the written spec. */
export type Citation = { slug: string; title: string };

/**
 * Which spec documents cite which fact.
 *
 * Served by the app rather than the CDN: the prose ships with the code, and it
 * is a build output of the same repository, not part of a revision's payload.
 */
export function loadCitations(): Promise<Record<string, Citation[]>> {
  return cached("citations", async () => {
    const res = await fetch("/citations.json");
    // Nothing cited yet is a normal state for a young spec, not a failure.
    return res.ok ? ((await res.json()) as Record<string, Citation[]>) : {};
  });
}

/**
 * One fact, from the id in the address bar.
 *
 * The URL carries the id and the CDN stores the file under a name derived from
 * it, and the two are not quite the same string. The kind's index knows both,
 * and the list pane on the same screen has already fetched it, so this costs
 * one request rather than two.
 */
export function loadFactById(kind: FactKind, id: string): Promise<Fact | null> {
  return cached(`fact:${id}`, async () => {
    const row = (await loadKindIndex(kind)).find((r) => r.id === id);
    return row?.slug ? loadFact(kind, row.slug) : null;
  });
}

/** Short type name -> where to link it. The shape `FactDetail` wants. */
export function loadTypeIndex(): Promise<Map<string, string>> {
  return cached("types:map", async () => {
    const types = await loadTypes();
    return new Map(
      Object.entries(types).map(([short, [kind, id]]) => [short, browseHref(kind, id)]),
    );
  });
}

/** Everything that carries this message. Empty rather than absent when none do. */
export function loadEmbeddedBy(shortName: string): Promise<Embedding[]> {
  return cached(`embeds:${shortName}`, async () => (await loadEmbeddings())[shortName] ?? []);
}

/**
 * A message's fields as tree rows, resolving each field's type to the message
 * it names.
 *
 * One level. The old build expanded three levels up front for every message on
 * every page load, which is a lot of schema nobody opened — `Message` alone has
 * 80 fields. Now a branch is fetched when it is expanded, which is also when
 * the reader has said they want it.
 */
export function loadTreeFor(fact: Fact): Promise<TreeNode[]> {
  return cached(`tree:${fact.id}`, async () => {
    if (fact.kind !== "proto") return [];
    const types = await loadProtoTypes();
    const fields = (fact.data as { fields: Record<string, { number: number; type_name?: string }> })
      .fields;
    return Object.entries(fields)
      .sort((a, b) => a[1].number - b[1].number)
      .map(([field, info]) => {
        const short = info.type_name?.split(".").pop();
        const hit = short ? types[short] : undefined;
        return {
          field,
          number: info.number,
          type: short ?? "bytes",
          // Only a message we actually have is expandable. A field typed by
          // something outside the snapshot is a leaf, and saying otherwise
          // promises a branch that cannot open.
          target: hit?.[0],
        };
      });
  });
}

/** The children of one node, fetched when it is opened. */
export function loadChildren(targetId: string): Promise<TreeNode[]> {
  return cached(`children:${targetId}`, async () => {
    const types = await loadProtoTypes();
    const entry = Object.values(types).find((t) => t[0] === targetId);
    const fact = await loadFact("proto", slugOfId("proto", targetId, entry?.[1]));
    return loadTreeFor(fact);
  });
}
