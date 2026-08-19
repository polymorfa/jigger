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
# `if` rather than `[ ... ] && cp`: under `set -e` a failing test is a failing
# command, so the first absent optional artifact would end the run.
if [ -d "$SRC/symbols" ]; then cp -R "$SRC/symbols" "$OUT/symbols"; fi
# Who relies on what. One file per module, so a page reads only the one it shows.
if [ -d "$SRC/graph" ]; then cp -R "$SRC/graph" "$OUT/graph"; fi
for f in vectors.json diff.json history.json; do
  if [ -f "$SRC/$f" ]; then cp "$SRC/$f" "$OUT/"; fi
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

# Everything the browser actually reads: per-kind lists, the module list, the
# type and embedding maps, the search index, and one file per module naming the
# facts read out of it.
#
# Run last because it reads what the steps above wrote — the filenames under
# `ir/` and the module set — rather than re-deriving either. The app never opens
# `ir.json`; that stays as the archive.
node "$(dirname "$0")/build-indexes.mjs" "$OUT/ir.json" "$OUT/index" > /dev/null

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
