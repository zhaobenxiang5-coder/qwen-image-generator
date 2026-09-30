/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/qwen-image-generator',
  assetPrefix: '/qwen-image-generator/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
