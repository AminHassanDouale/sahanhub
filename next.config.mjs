/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Changed to export
  images: {
    unoptimized: true, // Required for export
  },
  // Remove experimental features
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sahan-hub.com',
          },
        ],
        destination: 'https://sahan-hub.com/:path*',
        permanent: true,
      },
    ]
  }
}

export default nextConfig