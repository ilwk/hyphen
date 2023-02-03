/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  transpilePackages: ['ui'],
};
