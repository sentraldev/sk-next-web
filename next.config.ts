import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portal.sentralkomputer.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "https://sk-next-web-staging.vercel.app/",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
