#!/usr/bin/env bash
# Assemble the payload the site reads, from a finished extraction.
#
# Split deliberately from the workflow so the same thing can be run by hand when
# something looks wrong in CI — a build step you cannot reproduce locally is a
# build step you cannot debug.
#
#   pack-data.sh <extract-dir> <bundle-modules-dir> <out-dir>
set -euo pipefail

SRC="${1:?extract dir}"
MODULES="${2:?bundle modules dir}"
OUT="${3:?output dir}"
REV="$(jq -r .revision "$SRC/revision.json")"

rm -rf "$OUT"
mkdir -p "$OUT/modules"

# The ledger, the per-fact tree, and everything derived from them.
cp "$SRC/ir.json" "$SRC/revision.json" "$OUT/"
cp -R "$SRC/ir" "$OUT/ir"
[ -d "$SRC/symbols" ] && cp -R "$SRC/symbols" "$OUT/symbols"
for f in vectors.json diff.json history.json coverage.json; do
  [ -f "$SRC/$f" ] && cp "$SRC/$f" "$OUT/"
done

# Every module of the revision.
#
# Not a curated subset. The viewer can reach any module — a dependency array
# names things nothing extracted a fact from, and following a reference into a
# module that "was not indexed" is a dead end for no reason the reader can see.
#
# It costs ~409 MB packed, which only works because the branch is *replaced*
# each release rather than added to: an orphan commit, force-pushed, so the
# branch is always exactly one revision and history never accumulates. The full
# history lives in the release assets.
cp -R "$MODULES/." "$OUT/modules/"
n=$(find "$OUT/modules" -name '*.js' | wc -l | tr -d ' ')

# One manifest, so a reader can tell what it is holding without listing a
# directory of five thousand files.
jq -n \
  --arg rev "$REV" \
  --argjson facts "$(jq '.facts | length' "$SRC/ir.json")" \
  --argjson modules "$n" \
  --arg packed "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  '{revision: $rev, facts: $facts, modules: $modules, packed: $packed}' \
  > "$OUT/manifest.json"

echo "revision $REV: $(jq '.facts|length' "$SRC/ir.json") facts, $n modules -> $OUT"
du -sh "$OUT"
