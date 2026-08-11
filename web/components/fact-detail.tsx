import Link from "next/link";
import { Code, schemaOf } from "@/components/code";
import { CopyButton } from "@/components/copy-button";
import { ModuleLink } from "@/components/module-link";
import { Notes } from "@/components/notes";
import { CoverageChip } from "@/components/coverage-chip";
import { GeneratedSection } from "@/components/generated-section";
import { IqResponses } from "@/components/iq-responses";
import { Timeline } from "@/components/timeline";
import { EmbeddedBy, ProtoTree as ProtoMessageTree } from "@/components/proto-message-tree";
import { REPOS } from "@/lib/constants";
import { getCoverageForFact } from "@/lib/data";

import { historyFor } from "@/lib/history";
import { getCitations, type Citation } from "@/lib/spec";
import type { Embedding, TreeNode } from "@/lib/proto-graph";
import type { Fact, FactKind } from "@/lib/types";
import { isAb, isIq } from "@/lib/types";

/** `.proto` is offered only where it is the fact's native form. */
// `.proto` is protobuf's native form and nothing else's. An IQ stanza is XML,
// and offering a .proto tab on it mislabels the thing it is showing.
const PROTO_LANG_KINDS: FactKind[] = ["proto"];

const LEAD: Record<FactKind, string> = {
  mex: "the persisted id that travels on the wire; it rotates between releases",
  sig: "the stanza shape this handler matches on the way in",
  proto: "field numbers are the wire contract; types link through",
  wam: "numbered fields, in wire order",
  iq: "the stanza this operation sends",
  ab: "the property, its wire id, and its shipped defaults",
  const: "a constant a library must match exactly",
  enum: "the value set a field of this type can hold",
  appstate: "the index, collection and version a mutation syncs under",
};

function Head({ title, note }: { title: string; note: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
      <h2 className="text-md font-semibold text-fg">{title}</h2>
      <span className="text-xs text-fg-faint">{note}</span>
    </div>
  );
}

/**
 * One fact, in full: schema, generated code, and the evidence behind it.
 *
 * Rendered inside each kind's own browser rather than on a separate page. Two
 * destinations for one thing means two things to keep in step, and a reader who
 * is never certain which is canonical.
 */
export function FactDetail({
  fact,
  types,
  revision = 0,
  revisions = [],
  tree,
  embeddedBy,
}: {
  fact: Fact;
  types?: Map<string, string>;
  revision?: number;
  /** Every indexed revision, for reading the timeline against. */
  revisions?: number[];
  /** The message expanded through its field types. Proto facts only. */
  tree?: TreeNode[];
  /** Everything that carries this message. The direction the schema cannot go. */
  embeddedBy?: Embedding[];
}) {
  const { src, lang } = schemaOf(fact);
  const byRepo = getCoverageForFact(fact.id);
  const scanned = REPOS.some((r) => byRepo[r]);
  const citations: Citation[] = getCitations().get(fact.id) ?? [];
  const reads = isAb(fact) ? (fact.usage?.read_count ?? 0) : null;
  const readers = fact.usage?.readers ?? [];

  // A field type is only a link when the message it names is present. A dead
  // link in a schema is worse than plain text, because it implies the target
  // exists and was simply not reached.
  // Any token in the schema that names a type we actually have becomes a link,
  // regardless of kind: a protobuf field pointing at another message, a GraphQL
  // selection naming a concrete type, a WAM field naming an enum. A type that is
  // not in the snapshot stays plain text — a dead link implies the target exists
  // and was merely not reached.
  const links: Record<string, string> = {};
  if (types) {
    for (const word of new Set(src.match(/[A-Za-z_][A-Za-z0-9_.]{3,}/g) ?? [])) {
      const short = word.split(".").pop() ?? word;
      const href = types.get(short);
      if (href && short !== fact.name.split(".").pop()) links[short] = href;
    }
  }

  return (
    <div className="grid grid-cols-1 items-start gap-x-8 gap-y-7 xl:grid-cols-[minmax(0,1fr)_21rem]">
      {/* What you read takes the wide column. Evidence sits beside it rather
          than beneath, because it is reference material you glance at while
          reading, not a second act you scroll to. Stacks on narrow screens. */}
      <div className="flex min-w-0 flex-col gap-7">
      {/* One box, not two. The schema and its expansion are the same object at
          two depths, and splitting them meant reading the field list, scrolling
          past the generated code, and finding the same fields again. */}
      <section className="flex flex-col gap-1.5">
        <Head title="Schema" note={LEAD[fact.kind]} />
        <Code src={src} lang={lang} links={links}>
          {tree && tree.length > 0 && (
            <div className="border-t border-hair px-3 py-2">
              <p className="mb-1 text-2xs text-fg-faint">
                field types followed through — collapsed by default
              </p>
              <ProtoMessageTree nodes={tree} />
            </div>
          )}
        </Code>
      </section>

      {/* Directly under the request, because the two only make sense together:
          the arms are what the stanza above resolves to. */}
      {isIq(fact) && <IqResponses data={fact.data} />}

      <GeneratedSection generated={fact.generated} protoOption={PROTO_LANG_KINDS.includes(fact.kind)} />

      </div>

      <aside className="flex min-w-0 flex-col gap-6 xl:sticky xl:top-4">
      <section className="flex flex-col gap-3">
        <Head title="Proof" note="check it yourself" />

        <div className="flex flex-col gap-1">
          <span className="text-xs text-fg-muted">source module — the whole claim rests on this</span>
          <div className="flex items-center gap-2">
            <ModuleLink name={fact.evidence.module} match={fact.evidence.matches} className="text-md" />
            <CopyButton value={fact.evidence.module} title="Copy module name" />
          </div>
        </div>

        <div className="flex flex-col border-t border-hair py-1.5">
          <span className="text-xs text-fg-muted">located by matching</span>
          <span className="data select-all break-all text-sm text-fg">{fact.evidence.matches}</span>
        </div>

        {reads !== null && (
          <div className="flex flex-col border-t border-hair py-1.5">
            <span className="text-xs text-fg-muted">read by</span>
            <span className="text-sm text-fg">
              <span className="data tnum">{reads}</span> module{reads === 1 ? "" : "s"}
              {reads === 0 && (
                <span className="ml-2 text-cov-missing">
                  registered but unwired — reserved ahead of the feature it gates
                </span>
              )}
            </span>
            {readers.length > 0 && (
              <span className="mt-1.5 flex flex-col gap-0.5">
                {readers.map((m) => (
                  <ModuleLink key={m} name={m} references={fact.name} className="text-xs" />
                ))}
                {reads > readers.length && (
                  <span className="text-xs text-fg-faint">and {reads - readers.length} more</span>
                )}
              </span>
            )}
          </div>
        )}

        {fact.graph && (fact.graph.dependent_count > 0 || fact.graph.dep_count > 0) && (
          <div className="flex flex-col gap-1 border-t border-hair py-1.5">
            <span className="text-xs text-fg-muted">
              module graph — {fact.graph.dependent_count} dependents, {fact.graph.dep_count}{" "}
              dependencies
            </span>
            {fact.graph.dependents.length > 0 && (
              <div className="flex flex-col gap-0.5">
                <span className="text-xs text-fg-faint">used by</span>
                {fact.graph.dependents.map((m) => (
                  <ModuleLink key={m} name={m} references={fact.evidence.module} className="text-xs" />
                ))}
                {fact.graph.dependent_count > fact.graph.dependents.length && (
                  <span className="text-xs text-fg-faint">
                    and {fact.graph.dependent_count - fact.graph.dependents.length} more
                  </span>
                )}
              </div>
            )}
            {fact.graph.deps.length > 0 && (
              <div className="mt-1 flex flex-col gap-0.5">
                <span className="text-xs text-fg-faint">imports</span>
                {fact.graph.deps.map((m) => (
                  <ModuleLink key={m} name={m} className="text-xs" />
                ))}
              </div>
            )}
          </div>
        )}

        {embeddedBy && (
          <div className="flex flex-col gap-1.5 border-t border-hair py-1.5">
            <span className="text-xs text-fg-muted">
              embedded by — <span className="tnum">{embeddedBy.length}</span> message
              {embeddedBy.length === 1 ? "" : "s"} carry this
            </span>
            <EmbeddedBy embeddings={embeddedBy} />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-fg-muted">coverage per library</span>
          {scanned ? (
            <div className="flex flex-wrap gap-x-6 gap-y-1.5">
              {REPOS.map((repo) => (
                <span key={repo} className="flex items-center gap-2">
                  <span className="data text-xs text-fg-muted">{repo}</span>
                  <CoverageChip state={byRepo[repo]} />
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-fg-faint">
              Not tracked for <span className="data">{fact.kind}</span> facts.
            </p>
          )}
        </div>

        {fact.literals.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-fg-muted">literals the scanner looks for</span>
            <div className="flex flex-wrap gap-1">
              {fact.literals.map((l) => (
                <span key={l} className="data border border-hair bg-surface-2 px-1.5 py-[1px] text-xs text-fg">
                  {l}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="flex flex-col gap-2">
        <Head title="History" note="across indexed revisions" />
        <Timeline history={historyFor(fact.id)} revisions={revisions} />
      </section>

      <section className="flex flex-col gap-2">
        <Head title="Documentation" note={citations.length ? "documented" : "undocumented"} />
        {citations.length ? (
          <p className="text-sm text-fg">
            Described in{" "}
            {citations.map((c: Citation, i: number) => (
              <span key={c.slug}>
                {i > 0 ? ", " : ""}
                <Link href={`/spec/${c.slug}`} className="link">
                  {c.title}
                </Link>
              </span>
            ))}
            .
          </p>
        ) : (
          <p className="text-sm text-fg-faint">
            No section of the written spec names this fact yet. It was extracted mechanically and
            has not been described in prose.
          </p>
        )}
      </section>
        <Notes target={fact.id} revision={revision} text={src} />
      </aside>
    </div>
  );
}
