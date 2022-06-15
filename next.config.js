/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['www.dropbox.com', 'dropbox.com', 'drive.google.com'] }
};

module.exports = nextConfig;
