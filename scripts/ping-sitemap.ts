// scripts/ping-sitemap.js
async function pingSitemap() {
  try {
    const response = await fetch(
      'https://www.google.com/ping?sitemap=https://sahanhub.com/sitemap.xml'
    );
    console.log('Google Sitemap Ping Status:', response.status);
  } catch (error) {
    console.error('Error pinging sitemap:', error);
  }
}

pingSitemap();