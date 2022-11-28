/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
