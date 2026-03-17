/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            async_hooks: false,
        };
    }
    return config;
  },
};

module.exports = nextConfig;
