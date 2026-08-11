import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { FACT_ID_RE, factHref } from "@/lib/ids";

// Renders spec markdown. Inline `code` that is a real fact id (`wam:4750`)
// becomes a deep link to that fact's detail — the whole citation syntax.
export function SpecMarkdown({ content, factIds }: { content: string; factIds: Set<string> }) {
  const components: Components = {
    code({ className, children, ...props }) {
      const text = String(children ?? "");
      const isBlock = /\blanguage-/.test(className ?? "") || text.includes("\n");
      if (!isBlock && FACT_ID_RE.test(text) && factIds.has(text)) {
        return (
          <Link href={factHref(text)} title={text}>
            <code>{text}</code>
          </Link>
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    a({ href, children }) {
      const target = href ?? "#";
      const external = /^https?:\/\//.test(target);
      return (
        <a href={target} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  };

  return (
    <div className="prose">
      <Markdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </Markdown>
    </div>
  );
}
