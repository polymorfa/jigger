/**
 * Row heights the virtualizers need to know before they render anything.
 *
 * A virtualizer computes total scroll height from a row height it cannot
 * measure yet, so the number has to exist in JavaScript. These mirror
 * `--row-code` and `--row-tree` in `globals.css` and must not drift: if the
 * estimate is smaller than the rendered row the list scrolls short, and if it
 * is larger the last rows are unreachable.
 *
 * Both equal a line-height from the type scale, so a row is exactly one line.
 */

/** One line of source, at `text-xs`. Equals `--text-xs--line-height`. */
export const ROW_CODE = 18;

/** One node of a tree, at `text-xs` plus breathing room. */
export const ROW_TREE = 22;

/** One row of a master list or table. Equals `--row-list`. */
export const ROW_LIST = 26;
