/**
 * A small hand-rolled tokenizer.
 *
 * No dependency: shiki and prism both ship a grammar engine and megabytes of
 * language definitions, and what actually needs colouring here is a few dozen
 * lines of generated Go, TypeScript, Rust, `.proto` and XML — code this project
 * emitted itself, so its shape is known rather than arbitrary.
 *
 * Five token classes, not fifteen. A carnival of hues makes short code *harder*
 * to scan, and the point of the Generated panel is that a maintainer reads it
 * in two seconds and copies it.
 *
 * One deliberate exception: in XML, the encoding suffix on a value — the `@lid`
 * in `jid@lid`, the `@unix_ms` in a timestamp — is the loudest token on screen.
 * Encoding mismatches are the most common real defect across these libraries
 * and no other tool surfaces them at all.
 */

export type Lang = "go" | "ts" | "rust" | "proto" | "xml" | "json" | "graphql";
export type Tok = { t: string; c: string };

const KEYWORDS: Record<string, Set<string>> = {
  go: new Set("func type struct interface map return if else for range var const package import nil true false switch case default chan go defer".split(" ")),
  ts: new Set("export const let var function return if else for of interface type as async await import from class extends implements readonly".split(" ")),
  rust: new Set("pub fn struct enum impl use mod let const static match if else for in return self Self where trait type as dyn ref mut".split(" ")),
  proto: new Set("syntax package message enum optional repeated required reserved oneof map returns service rpc import".split(" ")),
  json: new Set("true false null".split(" ")),
  xml: new Set(),
  graphql: new Set("query mutation subscription fragment on schema type input enum scalar directive".split(" ")),
};

const TYPES: Record<string, Set<string>> = {
  go: new Set("string int int32 int64 uint32 uint64 bool byte error float64 any".split(" ")),
  ts: new Set("string number boolean unknown never void Record Array Promise".split(" ")),
  rust: new Set("u8 u16 u32 u64 i32 i64 usize bool str String Vec Option Result f64".split(" ")),
  proto: new Set("string bytes bool int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 double float".split(" ")),
  json: new Set(),
  xml: new Set(),
  // Variables are the interesting part of a persisted operation: the document
  // itself is server-side, so `$name` is all a caller actually controls.
  graphql: new Set(),
};

const isWordStart = (c: string) => /[A-Za-z_$]/.test(c);
const isVar = (w: string) => w.startsWith("$") && w.length > 1;
const isWord = (c: string) => /[A-Za-z0-9_$]/.test(c);

/** Line-comment opener per language. Block comments are not emitted by our
 *  generators, so they are not handled — better to omit than to half-handle. */
const LINE_COMMENT: Record<string, string> = { go: "//", ts: "//", rust: "//", proto: "//", json: "", xml: "", graphql: "#" };

export function tokenize(src: string, lang: Lang): Tok[][] {
  return src.split("\n").map((line) => tokenizeLine(line, lang));
}

function tokenizeLine(line: string, lang: Lang): Tok[] {
  if (lang === "xml") return tokenizeXml(line);

  const out: Tok[] = [];
  const push = (t: string, c: string) => {
    if (!t) return;
    const last = out[out.length - 1];
    if (last && last.c === c) last.t += t;
    else out.push({ t, c });
  };

  const cmt = LINE_COMMENT[lang];
  let i = 0;
  while (i < line.length) {
    const rest = line.slice(i);

    if (cmt && rest.startsWith(cmt)) {
      push(rest, "cmt");
      break;
    }
    const ch = line[i] as string;

    // strings, including the doc-comment-ish `///` handled above as comment
    if (ch === '"' || ch === "'" || ch === "`") {
      let j = i + 1;
      while (j < line.length && line[j] !== ch) j += line[j] === "\\" ? 2 : 1;
      push(line.slice(i, Math.min(j + 1, line.length)), "str");
      i = j + 1;
      continue;
    }
    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < line.length && /[0-9a-fx._]/i.test(line[j] as string)) j++;
      push(line.slice(i, j), "num");
      i = j;
      continue;
    }
    if (isWordStart(ch)) {
      let j = i;
      while (j < line.length && isWord(line[j] as string)) j++;
      const w = line.slice(i, j);
      const kws = KEYWORDS[lang] ?? new Set<string>();
      const tys = TYPES[lang] ?? new Set<string>();
      push(w, isVar(w) ? "typ" : kws.has(w) ? "kw" : tys.has(w) ? "typ" : "id");
      i = j;
      continue;
    }
    push(ch, /[{}()[\],;:.<>=+\-*/&|!?]/.test(ch) ? "pun" : "id");
    i++;
  }
  return out;
}

/**
 * XML gets its own scanner because the interesting part is not the syntax, it
 * is the attribute *values* — and specifically the `@encoding` suffix inside
 * them, which is what libraries get wrong.
 */
function tokenizeXml(line: string): Tok[] {
  const out: Tok[] = [];
  const push = (t: string, c: string) => t && out.push({ t, c });
  let i = 0;
  while (i < line.length) {
    const ch = line[i] as string;
    if (ch === "<") {
      let j = i + 1;
      while (j < line.length && /[^\s>/]/.test(line[j] as string)) j++;
      push(line.slice(i, j), "tag");
      i = j;
      continue;
    }
    if (ch === '"') {
      let j = i + 1;
      while (j < line.length && line[j] !== '"') j++;
      const value = line.slice(i, Math.min(j + 1, line.length));
      const at = value.indexOf("@");
      if (at > 0) {
        push(value.slice(0, at), "str");
        push(value.slice(at).replace(/"$/, ""), "enc");
        push('"', "str");
      } else {
        push(value, "str");
      }
      i = j + 1;
      continue;
    }
    if (isWordStart(ch)) {
      let j = i;
      while (j < line.length && isWord(line[j] as string)) j++;
      push(line.slice(i, j), "attr");
      i = j;
      continue;
    }
    push(ch, "pun");
    i++;
  }
  return out;
}

/** Best guess for a snippet whose language is implied by the panel it sits in. */
export function langFor(id: string, fallback: Lang): Lang {
  if (id.startsWith("go")) return "go";
  if (id.startsWith("ts")) return "ts";
  if (id.startsWith("rust")) return "rust";
  if (id.startsWith("proto")) return "proto";
  return fallback;
}
