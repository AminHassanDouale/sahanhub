/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Remove optimizeCss since it's causing issues
    optimizePackageImports: ['@radix-ui/react-accordion', '@radix-ui/react-navigation-menu', 'lucide-react', 'framer-motion'],
  },
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      minimize: true,
    }
    
    return config
  },
  // Keep redirect configuration
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