/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 90, 100],
  },
  turbopack: {
    rules: {
      // Disable font optimization in Turbopack to avoid font loading issues
      "*.woff2": ["raw"],
    },
  },
};

export default nextConfig;
