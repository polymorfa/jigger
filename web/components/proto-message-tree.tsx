"use client";

import { useState } from "react";
import Link from "next/link";
import { browseHref } from "@/lib/ids";
import type { Embedding, TreeNode } from "@/lib/proto-graph";

/**
 * A message expanded through its field types.
 *
 * Answering "what actually travels in an image message" from a flat schema means
 * opening six pages and holding them in your head. Collapsed by default so the
 * top level still reads as a schema; a branch opens only when you ask.
 */
export function ProtoTree({ nodes }: { nodes: TreeNode[] }) {
  if (nodes.length === 0) return null;
  return (
    <ul className="flex flex-col">
      {nodes.map((n) => (
        <Row key={`${n.number}:${n.field}`} node={n} />
      ))}
    </ul>
  );
}

function Row({ node }: { node: TreeNode }) {
  const [open, setOpen] = useState(false);
  const kids = node.children ?? [];
  const expandable = kids.length > 0;

  return (
    <li>
      <div className="flex items-baseline gap-2 border-b border-hair py-0.5">
        <button
          onClick={() => setOpen((o) => !o)}
          disabled={!expandable}
          className={`data w-3 shrink-0 text-2xs ${
            expandable ? "text-fg-faint hover:text-fg" : "text-transparent"
          }`}
          aria-label={open ? "Collapse" : "Expand"}
        >
          {expandable ? (open ? "−" : "+") : "·"}
        </button>
        <span className="data tnum w-8 shrink-0 text-right text-2xs text-fg-faint">
          {node.number}
        </span>
        {node.target ? (
          <Link href={browseHref("proto", node.target)} className="data link text-xs">
            {node.type}
          </Link>
        ) : (
          <span className="data text-xs text-fg-faint">{node.type}</span>
        )}
        <span className="data text-xs text-fg">{node.field}</span>
        {/* A truncated branch that rendered as a leaf would be a claim that
            nothing is nested there. `Message` contains `ContextInfo` contains
            `Message`, so this is not an edge case. */}
        {node.cycle && <span className="text-2xs text-fg-faint">↺ already above</span>}
      </div>
      {open && kids.length > 0 && (
        <div className="ml-4 border-l border-hair pl-2">
          <ProtoTree nodes={kids} />
        </div>
      )}
    </li>
  );
}

/**
 * Where a message is used.
 *
 * The schema points one way. This is the other direction, and it is the one you
 * need when a field changes: everything listed here carries the message you are
 * looking at, so everything listed here is affected.
 */
export function EmbeddedBy({ embeddings }: { embeddings: Embedding[] }) {
  const [all, setAll] = useState(false);
  if (embeddings.length === 0) {
    return (
      <p className="text-sm text-fg-faint">
        Nothing embeds this. It is either a root message or dead weight.
      </p>
    );
  }
  const shown = all ? embeddings : embeddings.slice(0, 12);

  return (
    <div className="flex flex-col gap-0.5">
      {shown.map((e) => {
        const id = e.id;
        return (
          <div key={`${e.message}.${e.field}`} className="flex items-baseline gap-2">
            {id ? (
              <Link href={browseHref("proto", id)} className="data link text-xs">
                {e.message.split(".").pop()}
              </Link>
            ) : (
              <span className="data text-xs text-fg">{e.message}</span>
            )}
            <span className="data text-2xs text-fg-faint">
              .{e.field} = {e.number}
            </span>
          </div>
        );
      })}
      {embeddings.length > shown.length && (
        <button
          onClick={() => setAll(true)}
          className="mt-1 self-start text-2xs text-fg-faint underline hover:text-fg"
        >
          show all {embeddings.length}
        </button>
      )}
    </div>
  );
}
