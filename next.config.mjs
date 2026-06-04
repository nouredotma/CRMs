/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [{ source: "/login", destination: "/", permanent: true }]
  },
  async rewrites() {
    return [{ source: "/register", destination: "/" }]
  },
}

export default nextConfig
