import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },
  // Provide fallback env vars so the build doesn't crash on Vercel
  // when real keys are set as Vercel Environment Variables
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_placeholder",
  },
};

export default nextConfig;
