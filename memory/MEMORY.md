# TMU1 Project Memory

## Project Overview
- **Site**: todomitrautama.com (PT. Todo Mitra Utama - kontraktor ME Jakarta)
- **Stack**: Vite + TypeScript + Tailwind CSS
- **Deployment**: Cloudflare Workers (`wrangler deploy`) - project name `tmu`
- **Build output**: `./dist`

## Key Files
- `wrangler.json` - Cloudflare Worker config (main: `./worker.js`, assets binding: `ASSETS`)
- `worker.js` - Custom Worker script: redirects www → non-www (301), then serves static assets
- `public/sitemap.xml` - XML sitemap for all 6 pages
- `public/robots.txt` - allows all, points to sitemap
- `index.html`, `about.html`, `services.html`, `product.html`, `portfolio.html`, `contact.html` - source HTML files
- `src/` - TypeScript source files for each page

## Deploy Command
```bash
npx wrangler login   # first time only
npx wrangler deploy
```

## SEO Setup
- All pages have canonical tags pointing to `https://todomitrautama.com/` (non-www)
- JSON-LD structured data on index.html
- Sitemap submitted to Google Search Console
- www → non-www redirect handled in `worker.js` (not Page Rules, as Worker runs before Page Rules)

## Architecture Notes
- Cloudflare DNS: both root domain and www use Worker binding (Proxied)
- Page Rules alone don't work for www redirect because Worker bypasses them
- Static assets served via `env.ASSETS.fetch(request)` in worker.js
