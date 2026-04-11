/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set output for GitHub Pages static export
  ...(process.env.GITHUB_PAGES === 'true' ? {
    output: 'export',
    basePath: '/mews-portfolio',
    assetPrefix: '/mews-portfolio',
  } : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
