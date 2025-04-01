import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ["example.com"], // Добавьте домены для изображений
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "http://localhost:3000/api/auth/:path*", // Настройка прокси для NextAuth.js
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      externals: [...config.externals, 'oracledb', 'pg', 'pg-query-stream']    
    });
    return config;
  },
};

export default nextConfig;