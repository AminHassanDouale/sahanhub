/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://sahan-hub.com',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: [
      '/404',
      '/500',
      '/api/*',
      '/admin/*'
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://sahan-hub.com/sitemap.xml',
      ],
    },
    transform: async (config, path) => {
      // Custom transform function
      // Adjust priority based on path
      let priority = config.priority;
      if (path === '/') {
        priority = 1.0;
      } else if (path.startsWith('/services')) {
        priority = 0.8;
      } else if (path.startsWith('/blog')) {
        priority = 0.6;
      }
      
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: priority,
        lastmod: new Date().toISOString(),
      }
    },
  }