export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const response = await env.ASSETS.fetch(request);
      let headers = new Headers(response.headers);

      if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (url.pathname.startsWith('/api/')) {
        headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      } else if (url.pathname.endsWith('/')) {
        headers.set('Cache-Control', 'public, max-age=3600');
      }

      return new Response(response.body, {
        status: response.status,
        headers
      });
    } catch (e) {
      return new Response(`${e.message}\n${e.stack}`, { status: 500 });
    }
  }
};