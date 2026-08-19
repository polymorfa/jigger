"use client";

import { useLang } from "./lang-context";
import { Code } from "@/components/code";
import { ModuleLink } from "@/components/module-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Lang } from "@/lib/highlight";
import { LANGUAGE_LABEL, type Generated, type Language } from "@/lib/types";
import { cn } from "@/lib/utils";

const BASE: Language[] = ["go", "ts", "rust"];

/** The highlighter's name for each target. */
const LANG: Record<Language, Lang> = { go: "go", ts: "ts", rust: "rust", proto: "proto" };

/** The extension each target's emitted file carries on disk. */
const EXT: Record<Language, string> = { go: "go", ts: "ts", rust: "rs", proto: "proto" };

/**
 * The same fact, in each library's language.
 *
 * The choice is sticky across facts — you are one library's maintainer for the
 * length of a session, not switching per page — so it lives in a context rather
 * than in this component's state.
 *
 * A language with no output keeps its tab rather than disappearing. A tab row
 * that changes width as you move between facts is disorienting, and "nothing
 * was generated here" is information; a missing tab is not.
 */
export function GeneratedSection({
  generated,
  protoOption,
  module,
  kind,
  slug,
  links,
}: {
  generated?: Generated;
  protoOption: boolean;
  /** The source module the fact was read out of. */
  module: string;
  kind: string;
  /** The fact's filename in the generated tree. */
  slug: string;
  /** Type names that can be followed, same map the schema uses. */
  links?: Record<string, string>;
}) {
  const { lang, setLang } = useLang();
  const options: Language[] = protoOption || generated?.proto ? [...BASE, "proto"] : BASE;
  const effective: Language = options.includes(lang) ? lang : options[0]!;

  return (
    <section className="flex flex-col gap-2">
      <Tabs value={effective} onValueChange={(v) => setLang(v as Language)}>
        <div className="flex items-center justify-between gap-3 border-b pb-1.5">
          <h2 className="text-md font-semibold text-fg">Generated</h2>
          <TabsList className="h-7">
            {options.map((o) => (
              <TabsTrigger
                key={o}
                value={o}
                className={cn("data px-2.5 text-xs", !generated?.[o] && "opacity-55")}
                title={
                  generated?.[o]
                    ? LANGUAGE_LABEL[o]
                    : `${LANGUAGE_LABEL[o]} — not generated for this fact`
                }
              >
                {LANGUAGE_LABEL[o]}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {options.map((o) => (
          <TabsContent key={o} value={o} className="mt-2">
            {generated?.[o] ? (
              <div className="flex flex-col gap-1">
                {/* Highlighted like every other block. Generated code was the
                    one place still rendering as flat grey text, which made the
                    output look like a dump rather than like the code it is. */}
                <Code src={generated[o]!} lang={LANG[o]} links={links} />
                {/* Where it came from and where it lands. A snippet with no
                    provenance is the same problem the whole app exists to fix:
                    a claim you cannot check. */}
                <p className="text-muted-foreground flex flex-wrap items-baseline gap-x-3 text-2xs">
                  <span>
                    generated from{" "}
                    <ModuleLink name={module} className="text-2xs" />
                  </span>
                  <span className="data">
                    {`generated/${o}/${kind}/${slug}.${EXT[o]}`}
                  </span>
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground bg-surface border px-3 py-3 text-sm">
                No {LANGUAGE_LABEL[o]} output generated for this fact yet.
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
