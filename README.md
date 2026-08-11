# jigger

A spec of the WhatsApp protocol, written in English, backed by machine-extracted
evidence, compiled into helpers for every client library, and used to tell those
libraries what they are missing.

```
cellar bundle ──extract──► generated/ir/<kind>/<slug>.json   one file per fact
                                  │                          (git diff = changelog)
                                  ├──emit──► generated/{go,ts,rust,proto}/
                                  ├──diff──► generated/diff.json
                                  └──scan──► generated/coverage.json
                                             generated/issues/<repo>-<rev>.md
```

One static binary. `cargo build --release`, then:

```
jigger revisions            what is available to extract
jigger extract latest       bundle -> IR                        ~5s / 187k modules
jigger emit                 IR -> Go, TypeScript, Rust, .proto
jigger diff A B             two extractions -> what changed
jigger scan                 IR + repos.json -> coverage, issues
```

## The one idea

**A fact's identity is its wire literal.** `wam:4750`, `iq:privacy/get/privacy`,
`ab:wds_web_text_layout`, `proto:WAWebProtobufsE2E.Message`.

A wire literal is the only durable identity here, because it is stable exactly
to the extent that changing it would break the protocol. Module names drift,
line numbers move on every re-minification, and an invented id scheme has no
relationship to anything.

The same string is then the key in the generated data, the citation written in
the spec, the constant emitted into three languages, and the needle the coverage
scanner looks for. One identity space, four consumers, no translation table.

## Reading, not running

Protobuf field numbers, A/B property ids and WAM event ids are all literals in
the parse tree, so they are read with oxc — the same parser cellar indexes with.
Nothing evaluates the bundle. Extraction is deterministic, no untrusted
JavaScript is executed, and the whole thing stays a single binary.

## What goes in `data`, and what does not

`data` is the part a revision diff is about, so anything that churns
independently of the protocol stays out of it. Two things learned the hard way:

* The **module hash** changes on nearly every release even when nothing else
  did. Committed alongside a fact it would mark every fact in a touched module
  as modified.
* **A/B read counts** did exactly that. Left inside `data` they dominated the
  diff 60 to 1 — 297 read-count wobbles against 5 default flips — and a default
  flipping is the rollout signal the whole system exists to surface. Moved to
  `usage`, the noise vanished and 28 real rollout events were left standing,
  including `lid_one_on_one_migration_compatible` going `false -> true`.

## Being wrong is the main risk

A scanner that reports a gap a library does not have is worse than one that
reports nothing, because the first wrong issue is the last one anybody reads.
Every rule below exists because a naive version produced confident nonsense:

| rule | what it prevents |
|---|---|
| `Inconclusive` as a third state | Baileys builds HKDF labels at runtime as `` `WhatsApp ${x} Keys` ``; six correct implementations were called missing |
| `paths` is plural | whatsapp-rust keeps crypto in a sibling crate; seven present facts were called missing |
| proto checked against `.proto` files | a message named `Message` matches as a substring in almost any file |
| A/B matched by quoted name only | the bare five-digit opaque id matched array indices and timeouts, claiming 1,845 of 2,190 properties implemented |

Where a rule cannot be made reliable, the answer is "cannot tell", never a guess.

## Layout

```
apps/jigger        the CLI
crates/jigger-ir       fact types, identity and slug rules
crates/jigger-extract  wam, iq, ab, const, proto extractors
crates/jigger-emit     IR -> Go / TypeScript / Rust / .proto
spec/              the English spec. the only hand-edited thing here
generated/         never edited
web/               Next.js browser over the IR
```

`spec/*.md` cites facts by writing the id in backticks — `` `wam:4750` `` — and
nothing else. The field tables are joined in from the IR rather than retyped.

## Not done

* MEX persisted query ids. They are constructed at runtime, so this needs the
  same oxc treatment the protobuf extractor got.
* The spec is one section. The machinery is real; the prose is not yet written.
