/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * A directory of files, served from a CDN, with no functions behind it.
   *
   * There is nothing to render on a server: no users, no writes, no
   * personalisation — only immutable per-revision data that is the same for
   * every reader. Export makes that structural rather than aspirational, since
   * anything that reaches for a request now fails the build instead of quietly
   * becoming a function.
   *
   * Off in development. Export insists every dynamic route be enumerated, and
   * these routes deliberately enumerate one shell each — so `next dev` would
   * refuse to open any real fact or module, which is most of the app. The
   * production build is the one that has to be a directory of files.
   */
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  typescript: {
    // Type errors fail the build (we also run `npm run typecheck` in CI).
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
