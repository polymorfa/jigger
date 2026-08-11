/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Type errors fail the build (we also run `npm run typecheck` in CI).
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
