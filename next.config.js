/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    domains: ['via.placeholder.com'], // Add this line for placeholder images
  },
  // Remove the experimental section if it only contained appDir
  // Add other configurations here if needed
  
}

module.exports = nextConfig