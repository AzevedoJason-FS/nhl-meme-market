const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { routes } = require('./src/routes');

const sitemap = new SitemapStream({ hostname: 'https://orbitlymarketing.com' }); // Replace with your actual domain

// Create a write stream to public/sitemap.xml
const writeStream = fs.createWriteStream('./public/sitemap.xml');

// Pipe the sitemap stream directly to the write stream
sitemap.pipe(writeStream);

// Add each route to the sitemap
routes.forEach((route) => {
  sitemap.write({ url: route, changefreq: 'monthly', priority: 0.8 });
});

// End the sitemap stream
sitemap.end();

// Wait for the stream to finish
streamToPromise(sitemap)
  .then(() => {
    console.log('✅ Plain sitemap generated at public/sitemap.xml');
  })
  .catch((err) => {
    console.error('❌ Error generating sitemap:', err);
  });
