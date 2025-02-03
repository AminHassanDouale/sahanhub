// scripts/ping-sitemap.ts
async function pingSitemap() {
    try {
      // Ping Google
      const googleResponse = await fetch(
        'https://www.google.com/ping?sitemap=https://sahanhub.com/sitemap.xml'
      );
      console.log('Google Sitemap Ping Status:', googleResponse.status);
  
      // You can add more search engines here if needed
    } catch (error) {
      console.error('Error pinging sitemap:', error);
    }
  }
  
  // Run the ping
  pingSitemap();