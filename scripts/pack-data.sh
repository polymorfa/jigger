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

# Source, for the modules the ledger actually references.
#
# Not the whole revision: that is 1.3 GB and ~875 releases a year, which is a
# terabyte of git history to serve a viewer that can only open the modules
# something links to. The full bundle goes to the release asset instead, so
# nothing is lost — it is just not in everyone's clone.
n=0
if [ -d "$SRC/symbols" ]; then
  for f in "$SRC"/symbols/*.json; do
    name="$(basename "$f" .json)"
    [ -f "$MODULES/$name.js" ] || continue
    cp "$MODULES/$name.js" "$OUT/modules/$name.js"
    n=$((n + 1))
  done
fi

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
