/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Disable font optimization in Turbopack to avoid font loading issues
        "*.woff2": ["raw"],
      },
    },
  },
  // Disable Google Fonts optimization to use local fonts instead
  optimizeFonts: false,
};

export default nextConfig;
