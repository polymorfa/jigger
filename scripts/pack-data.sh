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
# Who relies on what. One file per module, so a page reads only the one it shows.
[ -d "$SRC/graph" ] && cp -R "$SRC/graph" "$OUT/graph"
for f in vectors.json diff.json history.json coverage.json; do
  [ -f "$SRC/$f" ] && cp "$SRC/$f" "$OUT/"
done

# Every WhatsApp module, and everything they import.
#
# See reachable-modules.py for why that is the boundary rather than "all of it"
# or "whatever facts cite": following a dependency array must never dead-end,
# and the other ~209,000 files in a bundle are npm packages Meta vendors.
#
# The branch is replaced rather than added to — an orphan commit, force-pushed
# each release — so it is always exactly one revision and never accumulates.
python3 "$(dirname "$0")/reachable-modules.py" "$MODULES" "$OUT/modules" > /dev/null
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
