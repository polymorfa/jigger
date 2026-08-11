import { NextResponse, type NextRequest } from "next/server";

/**
 * Version-indexed URLs.
 *
 * `/1044822804/proto/WAWebProtobufsE2E.Message` and `/latest/…` both rewrite to
 * the plain route with the revision carried in a cookie the data layer reads.
 * `middleware.ts` is deprecated in Next 16 and renamed to `proxy.ts`, per
 * node_modules/next/dist/docs — same behaviour, different file and export name.
 *
 * Done as a rewrite rather than by adding a segment to every route because the
 * revision is a *view* over the same pages, not a different page — duplicating
 * fourteen routes under a parameter would mean fourteen places to keep in step.
 *
 * The point is that a pasted link pins what it showed. Without it a URL means
 * "this fact, at whatever revision you happen to be on", which is not a
 * reference at all.
 */
const KINDS = ["ab", "wam", "iq", "proto", "mex", "sig", "const", "source", "spec", "coverage", "diff"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const [, first, ...rest] = pathname.split("/");
  if (!first) return NextResponse.next();

  const isRev = first === "latest" || /^\d{6,}$/.test(first);
  if (!isRev) return NextResponse.next();
  // `/latest` alone, or a revision followed by a real section.
  if (rest.length && !KINDS.includes(rest[0] as string)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/" + rest.join("/");
  const res = NextResponse.rewrite(url);
  res.cookies.set("jigger.rev", first, { path: "/", sameSite: "lax" });
  return res;
}

export const config = {
  matcher: ["/((?!_next|favicon|api).*)"],
};
