/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Disable font optimization in Turbopack to avoid font loading issues
      "*.woff2": ["raw"],
    },
  },
};

export default nextConfig;
