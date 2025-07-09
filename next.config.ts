/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors from breaking deploys
  },
}

export default nextConfig
