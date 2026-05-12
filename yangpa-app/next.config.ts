import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'styangpa.blob.core.windows.net',
      }
    ]
  },
  logging:{
    fetches:{
      fullUrl: true,
    },
  },
};

export default nextConfig;
