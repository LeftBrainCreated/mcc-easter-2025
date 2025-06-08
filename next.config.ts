import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 async redirects() {
    return [
      {
        source: '/legacy-2025',
        destination: '/legacy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
