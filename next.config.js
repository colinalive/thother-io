/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Cloudflare Pages with Next.js
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
