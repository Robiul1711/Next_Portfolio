/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   domains: [
  "aceternity.com",
  "images.unsplash.com",
  "cdn.example.com",
],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
