/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable Strict Mode to fix react-beautiful-dnd errors
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    domains: ['via.placeholder.com'], // Allow placeholder images
  },
  compiler: {
    styledComponents: true, // Enable styled-components support
  },
};

module.exports = nextConfig;
