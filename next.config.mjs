/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "th.bing.com" },
      { hostname: "scontent.cdninstagram.com" },
    ],
  },
};

export default nextConfig;
