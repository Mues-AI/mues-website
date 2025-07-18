/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async rewrites() {
    return [
      {
        source: '/web-api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
