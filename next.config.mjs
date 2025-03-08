/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: "/yidhir",
  assetPrefix: "/yidhir",
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  images :
  {
    unoptimized: true,
  },
  
}
export default nextConfig;

