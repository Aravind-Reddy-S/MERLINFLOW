export default function sitemap() {
  const baseUrl = 'https://merlinflow.in';
  
  const routes = [
    '',
    '/about',
    '/products',
    '/projects',
    '/features',
    '/how-it-works',
    '/integrations',
    '/security',
    '/pricing',
    '/testimonials',
    '/contact',
    '/privacy-policy'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
