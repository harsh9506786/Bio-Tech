import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // 🔥 ADD THIS (important for CI/CD stability)
  distDir: "out",

  reactCompiler: true,

  images: {
    unoptimized: true, // 🔥 required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;