import { blogPosts } from '../data/blogData';

export default function sitemap() {
  const baseUrl = 'https://merlinflow.in';
  
  const routes = [
    '',
    '/about',
    '/products',
    '/features',
    '/how-it-works',
    '/integrations',
    '/security',
    '/pricing',
    '/testimonials',
    '/contact',
    '/privacy-policy',
    '/blog'
  ];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
