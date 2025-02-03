/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Change from 'export' for better performance
  images: {
    unoptimized: true, // Required for static export
  },
  // Enhanced redirects with additional SEO-friendly rules
  async redirects() {
    return [
      // Maintain existing www to non-www redirect
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
      // Redirect old URLs to maintain SEO juice (add if you have any)
      {
        source: '/tech/:path*',
        destination: '/technology/:path*',
        permanent: true,
      }
    ]
  },
  // Add headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      }
    ]
  },
  // Optimize build output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Minimize output
  swcMinify: true,
}

export default nextConfig