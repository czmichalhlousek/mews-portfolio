/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/mews-portfolio',
  assetPrefix: '/mews-portfolio',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
