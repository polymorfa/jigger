/**
 * Reading a module's text: the parts that are pure computation.
 *
 * Fetching lives in `cdn.ts` — the browser asks for the one module a page
 * opened. What is left here is everything that turns that text into a line
 * number, which is the only form of location the IR ever commits to.
 */

/**
 * The first line matching a fact's evidence pattern.
 *
 * Evidence is stored content-addressed — a module plus a regex — precisely so a
 * line number never has to be committed. Re-minification moves every line; the
 * pattern usually still matches. So the number is computed here, at read time,
 * and is allowed to be wrong tomorrow without corrupting anything.
 */
export function lineOfMatch(src: string, pattern: string): number | null {
  let re: RegExp;
  try {
    re = new RegExp(pattern);
  } catch {
    return null;
  }
  const lines = src.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i] as string)) return i + 1;
  }
  return null;
}

/**
 * The line an exported member is actually defined on.
 *
 * Minification is why this is not a search. `assertTag` appears exactly once in
 * its module — in the export assignment `l.assertTag = s` — while the function
 * itself is called `s`. Landing a click-through on that assignment technically
 * finds the name and shows you nothing: you still have to read off the local and
 * go looking for it yourself, which is the work the link was supposed to save.
 *
 * So: the member's own definition if it has one, otherwise resolve the export to
 * its local and find where *that* is defined, otherwise the first mention. The
 * last case is honest rather than clever — a name that appears nowhere useful is
 * better shown somewhere than not shown at all.
 */
export function memberLine(src: string, member: string): number | null {
  if (!/^[A-Za-z_$][\w$]*$/.test(member)) return null;
  const lines = src.split("\n");
  const lineOf = (re: RegExp): number | null => {
    for (let i = 0; i < lines.length; i++) if (re.test(lines[i] as string)) return i + 1;
    return null;
  };

  const direct = lineOf(
    new RegExp(`function\\s+${member}\\s*\\(|\\b${member}\\s*[:=]\\s*function\\b`),
  );
  if (direct) return direct;

  const exported = new RegExp(`[.\\s]${member}\\s*=\\s*([A-Za-z_$][\\w$]*)`).exec(src);
  if (exported) {
    const local = exported[1] as string;
    const def = lineOf(
      new RegExp(
        `function\\s+${local}\\s*\\(|\\bvar\\s+${local}\\s*=|\\b${local}\\s*=\\s*function\\b`,
      ),
    );
    if (def) return def;
  }

  return lineOf(new RegExp(`\\b${member}\\b`));
}
