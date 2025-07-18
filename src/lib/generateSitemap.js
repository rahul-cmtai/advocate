import fs from 'fs';
import path from 'path';
import { getCollection } from './firebase';

/**
 * Generate a sitemap.xml file based on static routes and dynamic content from Firebase
 * This script can be run periodically to update the sitemap with the latest content
 */
async function generateSitemap() {
  try {
    // Base URL of the website
    const baseUrl = 'https://www.decodelawwithgauri.com';
    
    // Static routes with their priorities and change frequencies
    const staticRoutes = [
      { url: '/', priority: '1.0', changefreq: 'monthly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/services', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.7', changefreq: 'weekly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
      { url: '/terms', priority: '0.3', changefreq: 'yearly' },
      { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    ];

    // Get dynamic content from Firebase
    const blogs = await getCollection('blogs');
    const services = await getCollection('services');

    // Current date in YYYY-MM-DD format for lastmod
    const currentDate = new Date().toISOString().split('T')[0];

    // Start building the sitemap XML content
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static routes
    staticRoutes.forEach(route => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${route.url}</loc>\n`;
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
      sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${route.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });

    // Add dynamic blog routes
    if (blogs && blogs.length > 0) {
      blogs.forEach(blog => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/blog/${blog.id}</loc>\n`;
        
        // Use blog creation date if available, otherwise current date
        const blogDate = blog.createdAt ? 
          (typeof blog.createdAt.toDate === 'function' ? 
            blog.createdAt.toDate().toISOString().split('T')[0] : 
            new Date(blog.createdAt).toISOString().split('T')[0]) : 
          currentDate;
          
        sitemap += `    <lastmod>${blogDate}</lastmod>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.6</priority>\n';
        sitemap += '  </url>\n';
      });
    }

    // Add dynamic service routes
    if (services && services.length > 0) {
      services.forEach(service => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}/services/${service.id}</loc>\n`;
        sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
        sitemap += '    <changefreq>monthly</changefreq>\n';
        sitemap += '    <priority>0.7</priority>\n';
        sitemap += '  </url>\n';
      });
    }

    // Close the sitemap
    sitemap += '</urlset>';

    // Write the sitemap to the public directory
    const publicDir = path.resolve(process.cwd(), 'public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

export default generateSitemap; 