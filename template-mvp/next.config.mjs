/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/overseas-mvp-pipeline',
  assetPrefix: '/overseas-mvp-pipeline/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
