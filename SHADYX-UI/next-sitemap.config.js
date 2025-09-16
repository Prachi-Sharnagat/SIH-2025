// module.exports = {
//   siteUrl: 'https://shadyxui.in',
//   generateRobotsTxt: true,        
//   generateIndexSitemap: true, 
// }
// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://CodeMiningsite.com', // 🔗 replace with your actual domain
  generateRobotsTxt: true,               // will generate robots.txt automatically
  generateIndexSitemap: true,            // creates index-sitemap.xml if you have multiple sitemaps
  sitemapSize: 5000,                     // split sitemap if more than 5000 URLs
  changefreq: 'weekly',                  // hint for search engines
  priority: 0.7,                         // default priority
  exclude: ["/admin/*", "/drafts/*"],    // exclude private routes (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },   // allow all crawlers
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
};
