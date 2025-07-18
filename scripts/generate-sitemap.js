// Script to generate sitemap.xml
import generateSitemap from '../src/lib/generateSitemap.js';

// Run the sitemap generator
generateSitemap()
  .then(() => {
    console.log('Sitemap generation completed!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Error during sitemap generation:', error);
    process.exit(1);
  }); 