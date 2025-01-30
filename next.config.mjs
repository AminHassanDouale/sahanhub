/** @type {import('next').NextConfig} */
const nextConfig = {
    // Cloudflare specific config
    experimental: {
      isrMemoryCacheSize: 0, // Recommended for Cloudflare Pages
    },
    async redirects() {
      return [
        {
          source: '/:path*', // This will catch all paths, not just root
          has: [
            {
              type: 'host',
              value: 'www.sahan-hub.com',
            },
          ],
          destination: 'https://sahan-hub.com/:path*',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;