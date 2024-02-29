/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'burgerhub00.github.io',
        port: '',
        pathname: '/data/**',
      },
    ],
  },
};

export default nextConfig;
