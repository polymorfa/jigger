import Link from "next/link";

/**
 * A WhatsApp module name, as a link to its source.
 *
 * Every reference to a module in this app goes through here. A claim that cites
 * a module you cannot open is an assertion, not evidence — and the whole design
 * rests on evidence being checkable in a couple of clicks.
 *
 * `match` carries the evidence pattern through so the source page can locate
 * and report the line, which is never stored because re-minification moves it.
 */
export function ModuleLink({
  name,
  match,
  references,
  className = "",
}: {
  name: string;
  match?: string;
  /**
   * The module this one refers to. Set it and the link lands on the line where
   * the reference is made rather than at the top of a ten-thousand-line file.
   *
   * Every cross-module reference in the bundle spells the target as a quoted
   * string — in the `__d` dependency array and again at each `o("Name")` call
   * site — so the name in quotes is a reliable needle, and the first hit is the
   * declaration.
   */
  references?: string;
  className?: string;
}) {
  const m = match ?? (references ? `"${references}"` : undefined);
  const href = `/source/${encodeURIComponent(name)}` + (m ? `?m=${encodeURIComponent(m)}` : "");
  return (
    <Link href={href} className={`data link break-all ${className}`}>
      {name}
    </Link>
  );
}
