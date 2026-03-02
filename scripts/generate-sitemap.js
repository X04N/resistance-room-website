import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all URLs from the site
const baseUrl = 'https://www.resistanceroom.com';

const routes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/reservas-lanzadera-alien-nave-espacial/', priority: '1.0', changefreq: 'weekly' },
  { url: '/precios/', priority: '0.9', changefreq: 'monthly' },
  { url: '/que-es-un-escape-room-2/', priority: '0.8', changefreq: 'monthly' },
  { url: '/escaperoom_faq/', priority: '0.8', changefreq: 'monthly' },
  { url: '/contacto/', priority: '0.7', changefreq: 'monthly' },
  { url: '/blog/', priority: '0.7', changefreq: 'weekly' },
  { url: '/terminos-y-condiciones/', priority: '0.3', changefreq: 'yearly' },
  { url: '/politica-de-cookies/', priority: '0.3', changefreq: 'yearly' },
  // Blog posts
  { url: '/consejos-para-tu-primer-escape-room/', priority: '0.6', changefreq: 'monthly' },
  { url: '/historia-escape-rooms/', priority: '0.6', changefreq: 'monthly' },
  { url: '/escape-rooms-team-building/', priority: '0.6', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✓ Sitemap generated at ${sitemapPath}`);
  console.log(`✓ Total URLs: ${routes.length}`);
};

generateSitemap();
