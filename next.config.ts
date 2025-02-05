import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = withMDX({
  /* config options here */
})({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

export default nextConfig;