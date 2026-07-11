import { blogPosts } from '../../../data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: \`\${post.title} | MerlinFlow Blog\`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container blog-container">
        
        <Link href="/blog" className="back-link">
          &larr; Back to all posts
        </Link>
        
        <article className="glass-panel article-content">
          <div className="article-header">
            <span className="blog-category">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">
              <span>By {post.author}</span>
              <span className="dot">•</span>
              <span>{post.date}</span>
              <span className="dot">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>

      <style jsx>{`
        .blog-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: var(--primary);
          font-weight: 500;
          transition: transform 0.2s;
        }

        .back-link:hover {
          transform: translateX(-5px);
        }

        .article-content {
          padding: 3rem;
          border-radius: 20px;
        }

        .article-header {
          margin-bottom: 3rem;
          text-align: center;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 2rem;
        }

        .blog-category {
          display: inline-block;
          background: var(--bg-alpha-hover);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .article-title {
          font-size: 2.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .dot {
          opacity: 0.5;
        }

        .article-body {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-color);
        }

        .article-body :global(h2) {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-size: 1.8rem;
          color: var(--text-color);
        }

        .article-body :global(h3) {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.4rem;
          color: var(--text-color);
        }

        .article-body :global(p) {
          margin-bottom: 1.5rem;
        }

        .article-body :global(ul), .article-body :global(ol) {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .article-body :global(li) {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .article-content {
            padding: 2rem 1.5rem;
          }
          .article-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
