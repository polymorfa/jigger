"""Copy every WhatsApp module and everything it imports.

Not a curated subset — the closure of what a reader can reach. Following a
dependency array must never dead-end, so anything a `WA*`/`MAW*` module declares
comes too, including the lowercase infrastructure it leans on (`nullthrows`,
`asyncToGeneratorRuntime`, `gkx`).

What this leaves out is the other ~209,000 files in a bundle: `xstate`,
`youtube-player`, `zipWith` — the npm packages Meta vendors, 89% of the bundle
by count and nothing to do with the protocol. Shipping those means 1.3 GB and
237k files in a tree git takes minutes to commit and GitHub cannot diff.
"""
import os, re, shutil, sys

src, dst = sys.argv[1], sys.argv[2]
names = {f[:-3] for f in os.listdir(src) if f.endswith(".js")}
wa = {n for n in names if n.startswith(("WA", "MAW"))}
head = re.compile(r'__d\(\s*"[^"]+"\s*,\s*\[([^\]]*)\]')
quoted = re.compile(r'"([^"]+)"')

reach = set(wa)
for n in wa:
    try:
        with open(os.path.join(src, n + ".js"), errors="ignore") as f:
            h = head.search(f.read(4000))
    except OSError:
        continue
    if h:
        reach |= {d for d in quoted.findall(h.group(1)) if d in names}

for n in sorted(reach):
    p = os.path.join(src, n + ".js")
    if os.path.exists(p):
        shutil.copyfile(p, os.path.join(dst, n + ".js"))
print(len(reach))
