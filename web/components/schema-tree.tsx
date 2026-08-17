"use client";

import { useState } from "react";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { browseHref } from "@/lib/ids";
import type { TreeNode } from "@/lib/proto-graph";

/**
 * The schema, expandable in place.
 *
 * A flat `.proto` message answers "what fields does this have" and stops. The
 * question you actually have is what *travels* — and answering it from a flat
 * schema means opening six pages and holding them in your head, because most of
 * the fields are other messages.
 *
 * So the schema is the tree. A field whose type is a message we have opens
 * underneath it, indented, still reading as the schema it is. Nothing is
 * duplicated into a second box saying the same thing at a different depth.
 */
export function SchemaTree({
  module,
  name,
  nodes,
}: {
  module: string;
  name: string;
  nodes: TreeNode[];
}) {
  return (
    <div className="relative border border-hair bg-surface">
      <div className="absolute right-1.5 top-1.5 z-10">
        <CopyButton value={flatten(module, name, nodes)} title="Copy as .proto" />
      </div>
      <pre className="overflow-x-auto p-3 text-sm leading-[19px]">
        <code className="data block">
          <span className="block whitespace-pre text-code-cmt italic">{`// ${module}`}</span>
          <span className="block whitespace-pre">
            <span className="text-code-kw">message</span>{" "}
            <span className="text-code-typ">{name}</span>{" "}
            <span className="text-fg-faint">{"{"}</span>
          </span>
          {nodes.map((n) => (
            <Row key={`${n.number}:${n.field}`} node={n} depth={1} />
          ))}
          <span className="block whitespace-pre text-fg-faint">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}

/** The plain `.proto` text, for copying. Only the top level: a paste target
 *  wants the message, not a transitive expansion of the whole graph. */
function flatten(module: string, name: string, nodes: TreeNode[]): string {
  const pad = Math.max(...nodes.map((n) => n.type.length), 5);
  const fpad = Math.max(...nodes.map((n) => n.field.length), 1);
  const body = nodes
    .map((n) => `  optional ${n.type.padEnd(pad)} ${n.field.padEnd(fpad)} = ${n.number};`)
    .join("\n");
  return `// ${module}\nmessage ${name} {\n${body}\n}`;
}

function Row({ node, depth }: { node: TreeNode; depth: number }) {
  const [open, setOpen] = useState(false);
  const kids = node.children ?? [];
  const expandable = kids.length > 0;
  const indent = "  ".repeat(depth);

  return (
    <>
      <span className="group block whitespace-pre hover:bg-surface-2">
        {/* The affordance sits in the indent rather than pushing the line over,
            so an unexpandable field lines up with an expandable one and the
            column of types stays a column. */}
        <button
          onClick={() => setOpen((o) => !o)}
          disabled={!expandable}
          aria-label={open ? `Collapse ${node.field}` : `Expand ${node.field}`}
          className={
            "inline-block w-3 text-left text-2xs " +
            (expandable ? "text-fg-faint hover:text-brand" : "text-transparent")
          }
        >
          {expandable ? (open ? "−" : "+") : "·"}
        </button>
        {indent}
        <span className="text-code-kw">optional</span>{" "}
        {node.target ? (
          <Link
            href={browseHref("proto", node.target)}
            className="text-code-typ underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            {node.type}
          </Link>
        ) : (
          <span className="text-code-typ">{node.type}</span>
        )}{" "}
        <span className="text-fg">{node.field}</span>{" "}
        <span className="text-fg-faint">=</span>{" "}
        <span className="text-code-num">{node.number}</span>
        <span className="text-fg-faint">;</span>
        {/* A branch stopped by recursion that rendered as a leaf would be a
            claim that nothing is nested there. `Message` contains `ContextInfo`
            contains `Message`, so this is not hypothetical. */}
        {node.cycle && (
          <span className="ml-2 text-2xs text-fg-faint">↺ expanded above</span>
        )}
      </span>
      {open && kids.map((k) => <Row key={`${k.number}:${k.field}`} node={k} depth={depth + 1} />)}
    </>
  );
}
