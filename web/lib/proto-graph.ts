import type { Fact, ProtoData } from "@/lib/types";

/** One place a message is embedded: which message, and under which field. */
export type Embedding = {
  message: string;
  field: string;
  number: number;
  /** The embedding message's fact id, resolved here so the client component
   *  needs no lookup function — functions cannot cross that boundary. */
  id?: string;
};

/**
 * Who embeds what.
 *
 * Field types point one way — a message names the messages it contains — so
 * "what does `Message` hold" is a lookup and "what holds `ContextInfo`" is
 * unanswerable without inverting the whole set. The second is the question you
 * have when a field changes and you need to know the blast radius, and it is the
 * one the schema cannot answer on its own.
 *
 * Keyed on the last segment because that is how fields name their types: a field
 * of type `WAE2E.ContextInfo` and one of type `ContextInfo` refer to the same
 * message, and only the short name is common to both.
 */
export function buildEmbeddings(facts: Fact[]): Map<string, Embedding[]> {
  const out = new Map<string, Embedding[]>();
  for (const f of facts) {
    if (f.kind !== "proto") continue;
    const d = f.data as ProtoData;
    for (const [field, info] of Object.entries(d.fields)) {
      if (!info.type_name) continue;
      const key = info.type_name.split(".").pop();
      if (!key) continue;
      const list = out.get(key) ?? [];
      list.push({ message: f.name, field, number: info.number, id: f.id });
      out.set(key, list);
    }
  }
  for (const list of out.values()) {
    list.sort((a, b) => a.message.localeCompare(b.message));
  }
  return out;
}

/** A node of the expanded message tree. */
export type TreeNode = {
  field: string;
  number: number;
  type: string;
  /** The fact id of the message this field points at, when we have it. */
  target?: string;
  children?: TreeNode[];
  /** Set when the type was already expanded higher up this branch. */
  cycle?: boolean;
};

/**
 * A message expanded through its field types, to a bounded depth.
 *
 * Reading a protobuf message one hop at a time is the single most tedious thing
 * about this data: `Message` has 80 fields, most of them other messages, and
 * answering "what actually travels in an image message" means opening six pages
 * and holding them in your head.
 *
 * Recursion is real here — `Message` contains `ContextInfo` which contains
 * `Message` — so a repeat on the same branch is marked and stopped rather than
 * expanded. Marking it matters: a silently truncated branch reads as a leaf, and
 * a leaf is a claim that nothing is nested there.
 */
export function buildTree(
  root: Fact,
  byShortName: Map<string, Fact>,
  maxDepth = 3,
): TreeNode[] {
  const expand = (f: Fact, seen: Set<string>, depth: number): TreeNode[] => {
    const d = f.data as ProtoData;
    return Object.entries(d.fields)
      .sort((a, b) => a[1].number - b[1].number)
      .map(([field, info]) => {
        const short = info.type_name?.split(".").pop();
        const target = short ? byShortName.get(short) : undefined;
        const node: TreeNode = {
          field,
          number: info.number,
          type: short ?? "bytes",
          target: target?.id,
        };
        if (!target) return node;
        if (seen.has(short as string)) return { ...node, cycle: true };
        if (depth >= maxDepth) return node;
        node.children = expand(target, new Set([...seen, short as string]), depth + 1);
        return node;
      });
  };
  const short = root.name.split(".").pop() as string;
  return expand(root, new Set([short]), 0);
}
