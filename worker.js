export default {
  async fetch(request, env) {
    const host = request.headers.get('host') || '';
    if (host.startsWith('www.')) {
      const url = new URL(request.url);
      url.hostname = host.slice(4);
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
}
