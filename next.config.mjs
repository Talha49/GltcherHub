/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
    warnings: false,
  },
    images: {
      domains: ['cdn.sanity.io'],
    },
  };
  
  export default nextConfig;
  