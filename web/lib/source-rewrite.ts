/**
 * The module wrapper, in a form a human reads.
 *
 * The bundle ships Metro's wrapper with every name minified to a single letter:
 *
 * ```text
 * __d("WAWebStarMessageSync", ["WAWebSyncdConst"], (function(t, n, r, o, a, i, l) {
 *   e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
 * }), 98);
 * ```
 *
 * `__d` is a define, and `o`, `n` and `r` are all the module require — they are
 * positional parameters of the factory, so which letter is which varies per
 * module and none of them mean anything on sight. Reading around that is a tax
 * you pay on every line.
 *
 * The rewrite is deliberately *mechanical*: two textual substitutions and
 * nothing else. It does not reformat, rename locals, or reorder anything, so
 * line numbers survive exactly — which matters because every note in this app is
 * anchored to line text, every evidence pattern is matched against the source,
 * and a `#L412` link has to keep pointing at line 412.
 */

/** `__d(` and any single-letter require call. */
const DEFINE = /\b__d\(/g;

/** `o("Anything")` — a one- or two-letter identifier applied to a string. */
const REQUIRE = /\b[a-z]{1,2}\(("([^"]+)")\)/g;

/** Module names as the bundle writes them: `WAWebFoo`, `WAWebFoo.pb`, `$InternalEnum`. */
const MODULE_NAME = /^(?:[A-Z][A-Za-z0-9_]*(?:\.[a-z]+)?|\$[A-Za-z][A-Za-z0-9_]*)$/;

/**
 * The modules this one declared it can require.
 *
 * `define("Name", ["A", "B"], …)` — the array is exhaustive, so it is the exact
 * set of strings a require call can hold. Checking against it rather than
 * against a name pattern is what makes the rewrite provably safe: a pattern has
 * to guess whether `t("nullthrows")` is a module (it is) or whether some
 * one-letter helper taking a lowercase string is not, and gets one of the two
 * wrong. The declared list has no such ambiguity.
 */
export function dependenciesOf(src: string): Set<string> {
  const head = /(?:__d|define)\(\s*"[^"]+"\s*,\s*\[([^\]]*)\]/.exec(src);
  if (!head) return new Set();
  return new Set([...head[1]!.matchAll(/"([^"]+)"/g)].map((m) => m[1]!));
}

export function rewriteModule(src: string): string {
  const deps = dependenciesOf(src);
  return src.replace(DEFINE, "define(").replace(REQUIRE, (m, arg: string, name: string) =>
    deps.has(name) ? `require(${arg})` : m,
  );
}

/**
 * Where each word on a line can be followed to.
 *
 * Computed from the line's *text*, not from token adjacency. The highlighter
 * merges adjacent runs of one class, so `require`, `(`, `"WAWebFoo"` and `.bar`
 * do not arrive as four predictable tokens — they arrive as however many that
 * merge left, which varies with the surrounding punctuation. Matching the
 * source text and keying by word sidesteps that entirely, and is the same
 * approach the schema view already uses for type names.
 *
 * Two destinations per call. The module name opens the module; the property
 * after it opens the module *at that member*, which is most of the value — a
 * call site tells you which function, and following it by hand otherwise means
 * opening the file and searching for the name yourself.
 *
 * Keyed by word, so if one line calls two modules that share a member name the
 * later wins. Rare, and the alternative is threading character offsets through
 * the renderer to save one click.
 */
export function linksForLine(
  line: string,
  inHeader: boolean,
  deps?: Set<string>,
): Record<string, string> {
  const out: Record<string, string> = {};

  // The dependency array: every string in it is a module you can open.
  //
  // Matched against the declared set rather than against a name shape. Shape
  // matching works until the header detection is off by a line — on a module
  // whose factory opens on the same line as the array, say — and then every
  // ordinary string literal in the file becomes a link to a module that does
  // not exist. The declared set cannot produce a dead link.
  if (inHeader) {
    for (const m of line.matchAll(/"([^"]+)"/g)) {
      const name = m[1]!;
      if (deps ? deps.has(name) : MODULE_NAME.test(name)) {
        out[name] = `/source/${encodeURIComponent(name)}`;
      }
    }
    return out;
  }

  for (const m of line.matchAll(/require\("([^"]+)"\)(?:\.([A-Za-z_][A-Za-z0-9_]*))?/g)) {
    const name = m[1]!;
    out[name] = `/source/${encodeURIComponent(name)}`;
    if (m[2]) out[m[2]] = `/source/${encodeURIComponent(name)}?m=${encodeURIComponent(m[2])}`;
  }
  return out;
}

/** Where the `define(…, [deps], …)` header ends, in lines. */
export function headerLines(raw: string[]): number {
  const i = raw.findIndex((l) => l.includes("]"));
  return i === -1 ? 1 : i + 1;
}
