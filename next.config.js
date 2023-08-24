/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "cloud.appwrite.io"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
