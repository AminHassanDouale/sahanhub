/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sahanhub.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [
      '/404',
      '/500',
      '/api/*',
      '/admin/*',
      '/private/*',
      '/dashboard/*',
      '/login',
      '/register',
      '/forgot-password'
  ],
  robotsTxtOptions: {
      policies: [
          {
              userAgent: '*',
              allow: '/',
              disallow: [
                  '/api/',
                  '/admin/',
                  '/private/',
                  '/dashboard/',
                  '/*?*',
                  '/*/amp/'
              ]
          },
          {
              userAgent: 'GPTBot',
              allow: ['/'],
              disallow: ['/private/', '/admin/']
          }
      ],
      additionalSitemaps: [
          'https://sahanhub.com/sitemap.xml',
          'https://sahanhub.com/server-sitemap.xml'
      ],
  },
  transform: async (config, path) => {
      // Custom transform function for dynamic priority
      let priority = config.priority;
      if (path === '/') {
          priority = 1.0;
      } else if (path.startsWith('/services/')) {
          priority = 0.9;
      } else if (path.startsWith('/blog/')) {
          priority = 0.8;
      } else if (path.match(/^\/(about|contact|features)$/)) {
          priority = 0.8;
      } else if (path.startsWith('/tools/')) {
          priority = 0.7;
      }
      
      // Generate lastmod based on path patterns
      let lastmod = new Date().toISOString();
      if (path === '/' || path.startsWith('/services/')) {
          // Update daily
          lastmod = new Date().toISOString();
      } else if (path.startsWith('/blog/')) {
          // Update weekly
          const lastWeek = new Date();
          lastWeek.setDate(lastWeek.getDate() - 7);
          lastmod = lastWeek.toISOString();
      }

      return {
          loc: path,
          changefreq: path === '/' ? 'daily' : 
                    path.startsWith('/services/') ? 'weekly' :
                    path.startsWith('/blog/') ? 'monthly' : 
                    config.changefreq,
          priority: priority,
          lastmod: lastmod,
          alternateRefs: [
              {
                  href: `https://sahanhub.com${path}`,
                  hreflang: 'x-default'
              },
              {
                  href: `https://sahanhub.com/fr${path}`,
                  hreflang: 'fr'
              },
              {
                  href: `https://sahanhub.com/ar${path}`,
                  hreflang: 'ar'
              }
          ]
      }
  },
}