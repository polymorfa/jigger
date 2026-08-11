import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { tokenize, type Lang } from "@/lib/highlight";
import type { Fact, IqNode } from "@/lib/types";
import { isAb, isAppState, isConst, isEnum, isIq, isMex, isProto, isWam } from "@/lib/types";

const CLASS: Record<string, string> = {
  kw: "text-code-kw",
  typ: "text-code-typ",
  str: "text-code-str",
  num: "text-code-num",
  cmt: "text-code-cmt italic",
  tag: "text-code-kw",
  attr: "text-code-typ",
  // The loudest token on screen, on purpose: `jid@lid` vs `jid@user` is where
  // these libraries actually break, and nothing else surfaces it.
  enc: "font-bold text-code-enc",
  pun: "text-fg-faint",
  id: "text-fg",
};

export function Code({
  src,
  lang,
  copy = true,
  lines = false,
  links,
}: {
  src: string;
  lang: Lang;
  copy?: boolean;
  lines?: boolean;
  /** Token text -> href. A schema whose types cannot be followed is a picture of
   *  a schema; this is what makes it navigable. */
  links?: Record<string, string>;
}) {
  const rows = tokenize(src, lang);
  return (
    <div className="relative">
      {copy && (
        <div className="absolute right-1.5 top-1.5 z-10">
          <CopyButton value={src} title="Copy" />
        </div>
      )}
      <div className="border border-hair bg-surface">
      <pre className="overflow-x-auto p-3 text-sm leading-[19px]">
        <code className="data block">
          {rows.map((toks, i) => (
            <span key={i} className="block whitespace-pre">
              {lines && (
                <span className="mr-3 inline-block w-6 select-none text-right text-fg-faint">
                  {i + 1}
                </span>
              )}
              {toks.map((t, j) => (
                <Linked key={j} text={t.t} cls={CLASS[t.c] ?? "text-fg"} links={links} />
              ))}
            </span>
          ))}
        </code>
      </pre>
      </div>
    </div>
  );
}

/**
 * One token, with any type names inside it turned into links.
 *
 * The tokenizer merges adjacent runs of the same class, so a schema line arrives
 * as one blob — `"  MEDIA_TYPE        message_media_type"` — and looking the
 * whole token up in the link table never matches. Splitting the run back into
 * words is what makes a schema navigable at all; matching on the token as a
 * whole silently produced a schema where nothing was ever clickable.
 */
function Linked({
  text,
  cls,
  links,
}: {
  text: string;
  cls: string;
  links?: Record<string, string>;
}) {
  if (!links) return <span className={cls}>{text}</span>;
  const parts = text.split(/([A-Za-z_][A-Za-z0-9_]*)/g);
  if (!parts.some((p) => links[p])) return <span className={cls}>{text}</span>;
  return (
    <span className={cls}>
      {parts.map((p, i) => {
        const href = links[p];
        return href ? (
          <Link
            key={i}
            href={href}
            className="underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            {p}
          </Link>
        ) : (
          p
        );
      })}
    </span>
  );
}

/**
 * A stanza, as the XML it is.
 *
 * Pinned attributes print their value, because that value is the contract.
 * Everything else prints its type in braces, so `jid="{jid}"` reads as "supply
 * a JID here and the server validates it" rather than as an example someone
 * might copy literally. A trailing `?` marks optional; `[]` marks repeated.
 */
export function renderStanza(n: IqNode, depth = 0): string {
  const pad = "  ".repeat(depth);
  const attrs = (n.attrs ?? [])
    .map((a) => {
      const v = a.literal !== undefined ? a.literal : `{${a.ty}}`;
      return ` ${a.name}${a.optional ? "?" : ""}="${v}"`;
    })
    .join("");
  const mark = n.card === "repeated" ? " []" : n.card === "optional" ? " ?" : "";
  const kids = n.children ?? [];
  if (kids.length === 0) return `${pad}<${n.tag}${attrs}/>${mark}`;
  return [
    `${pad}<${n.tag}${attrs}>${mark}`,
    ...kids.map((c) => renderStanza(c, depth + 1)),
    `${pad}</${n.tag}>`,
  ].join("\n");
}

/**
 * The schema for a fact, as text.
 *
 * Deliberately not a table of field names and numbers. A schema is the form
 * these things are actually written in — a `.proto` message *is* a protobuf
 * schema, and reading one takes a second where scanning a two-column table
 * takes real effort. Field numbers stay leftmost because they are the wire
 * contract; the name is the part you already know.
 */
export function schemaOf(fact: Fact): { src: string; lang: Lang } {
  if (isProto(fact)) {
    // Its own native form, and the one every library's toolchain already reads.
    const short = fact.name.split(".").pop() ?? fact.name;
    const fields = Object.entries(fact.data.fields).sort((a, b) => a[1].number - b[1].number);
    const pad = Math.max(...fields.map(([n]) => n.length), 1);
    // Type column padded too, so the `=` signs line up and the field numbers
    // read as a column. They are the wire contract; they should be scannable.
    const tpad = Math.max(
      ...fields.map(([, f]) => (f.type_name?.split(".").pop() ?? "bytes").length),
      5,
    );
    const body = fields
      .map(([n, f]) => {
        const ty = (f.type_name?.split(".").pop() ?? "bytes").padEnd(tpad);
        return `  optional ${ty} ${n.padEnd(pad)} = ${f.number};`;
      })
      .join("\n");
    return { src: `// ${fact.data.module}\nmessage ${short} {\n${body}\n}`, lang: "proto" };
  }

  if (isWam(fact)) {
    // Wire names, not the client's camelCase keys — the wire name is what a
    // library has to emit and the two differ on every field.
    const fields = Object.entries(fact.data.fields).sort((a, b) => a[1].id - b[1].id);
    const pad = Math.max(...fields.map(([n, f]) => (f.wire || n).length), 1);
    const tpad = Math.max(...fields.map(([, f]) => f.type.length), 4);
    const body = fields
      .map(([n, f]) => {
        const c = f.constraints?.length ? `   // ${f.constraints.join("; ")}` : "";
        return `  ${String(f.id).padStart(3)}  ${f.type.padEnd(tpad)}  ${(f.wire || n).padEnd(pad)}${c}`;
      })
      .join("\n");
    const ch = fact.data.channel ? ` channel=${fact.data.channel}` : "";
    const w = fact.data.weights?.length ? ` weights=[${fact.data.weights.join(",")}]` : "";
    return {
      src: `event ${fact.name} = ${fact.data.event_id}${ch}${w} {\n${body}\n}`,
      lang: "proto",
    };
  }

  if (isEnum(fact)) {
    // Values written out because the value is what travels; the name is the
    // part you already know from the field that referenced it.
    const pad = Math.max(...fact.data.variants.map((v) => v.name.length), 1);
    const body = fact.data.variants
      .map((v) => `  ${v.name.padEnd(pad)} = ${JSON.stringify(v.value)};`)
      .join("\n");
    return { src: `// ${fact.data.module}\nenum ${fact.name} {\n${body}\n}`, lang: "proto" };
  }

  if (isAppState(fact)) {
    const d = fact.data;
    const idx = Object.entries(d.index_fields ?? {})
      .map(([k, v]) => `\n  index.${k.replace(/Index$/, "")} = ${v}`)
      .join("");
    return {
      src:
        `action ${fact.name} {\n` +
        `  index      ${JSON.stringify(d.index_name)}\n` +
        `  collection ${JSON.stringify(d.collection ?? "unresolved")}\n` +
        `  version    ${d.version ?? "unresolved"}\n` +
        `  payload    SyncActionValue.${d.value_field ?? "<unresolved>"}` +
        `${idx}\n}`,
      lang: "proto",
    };
  }

  if (isIq(fact)) {
    // The real stanza when we could read it. The tag list is the fallback, and
    // it is a much poorer thing: it says which elements appear but not what
    // they carry, which is the half a library has to get right.
    if (fact.data.request) return { src: renderStanza(fact.data.request), lang: "xml" };
    const kids = fact.data.tags.map((t) => `  <${t}/>`).join("\n");
    return {
      src: `<iq type="${fact.data.type}" xmlns="${fact.data.xmlns}" to="s.whatsapp.net">\n${kids}\n</iq>`,
      lang: "xml",
    };
  }

  if (isAb(fact)) {
    const v = (x: unknown) => (typeof x === "string" ? JSON.stringify(x) : String(x));
    return {
      src:
        `property ${fact.name} = ${fact.data.opaque_id} {\n` +
        `  type     ${fact.data.type}\n` +
        `  default  ${v(fact.data.default)}\n` +
        `  alt      ${v(fact.data.alt_default)}\n}`,
      lang: "proto",
    };
  }

  if (isMex(fact)) {
    // Rendered as the GraphQL it is. The document body lives on the server —
    // that is what "persisted" means — so the operation name and its variables
    // are the whole of what a caller controls, and the doc_id is the handle.
    const op = fact.data.operation;
    const name = fact.name.replace(/^WAWeb/, "").replace(/(Query|Mutation)$/, "");
    const vars = fact.data.variables.length
      ? `(\n${fact.data.variables.map((v) => `  $${v}`).join(",\n")}\n)`
      : "";
    return {
      src:
        `# persisted document, id ${fact.data.doc_id}\n` +
        `# sent as <iq xmlns="w:mex"><query query_id="${fact.data.doc_id}"/></iq>\n` +
        `${op} ${name}${vars} {\n  # body is server-side\n}`,
      lang: "graphql",
    };
  }

  if (isConst(fact)) {
    return { src: `${fact.data.group}.${fact.name} = ${JSON.stringify(fact.data.value)}`, lang: "proto" };
  }

  return { src: fact.name, lang: "proto" };
}
