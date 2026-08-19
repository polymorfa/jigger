"use client";

import { use } from "react";
import Link from "next/link";
import { FactPage } from "@/components/fact-page";
import { FactIdLine } from "@/components/fact-parts";
import { loadTypes } from "@/lib/cdn";
import { browseHref } from "@/lib/ids";
import { splitName } from "@/lib/proto-tree";
import { isProto, type Fact } from "@/lib/types";

/**
 * The namespace path, with each ancestor a link when it is itself a message.
 *
 * `WAE2E.Message.ImageMessage` is three things, and two of them are pages. A
 * breadcrumb that linked segments which are only namespaces would promise pages
 * that do not exist.
 */
function Breadcrumb({ fact }: { fact: Fact }) {
  const types = use(loadTypes());
  const segs = splitName(fact.name);
  return (
    <nav className="data flex flex-wrap items-center text-xs text-fg-faint">
      {segs.map((seg, i) => {
        const self = i === segs.length - 1;
        const hit = types[seg];
        return (
          <span key={i} className="flex items-center">
            {i > 0 ? <span className="px-0.5">.</span> : null}
            {self ? (
              <span className="text-fg-muted">{seg}</span>
            ) : hit && hit[0] === "proto" ? (
              <Link href={browseHref("proto", hit[1])} className="link">
                {seg}
              </Link>
            ) : (
              <span>{seg}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

export default function ProtoDetailPage() {
  return (
    <FactPage
      kind="proto"
      head={(fact) =>
        isProto(fact) ? (
          <div className="flex flex-col gap-2">
            <FactIdLine id={fact.id} kind="proto" />
            <Breadcrumb fact={fact} />
            <div className="data flex flex-wrap items-center gap-4 text-xs text-fg-faint">
              <span className="tnum">{Object.keys(fact.data.fields).length} fields</span>
              <span>module {fact.data.module}</span>
            </div>
          </div>
        ) : null
      }
    />
  );
}
