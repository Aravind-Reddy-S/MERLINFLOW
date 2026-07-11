import Link from 'next/link';
import { blogPosts } from '../../data/blogData';

export const metadata = {
  title: "Blog | MerlinFlow Technologies",
  description: "Insights, updates, and news on ERP solutions for Education, Health, and Hospitality.",
};

export default function BlogListingPage() {
  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
            The <span className="text-gradient">MerlinFlow</span> Blog
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Latest news, industry insights, and updates on next-generation ERP solutions.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card glass-panel">
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime}</span>
                  <span className="blog-read-more">Read More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .blog-card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .blog-category {
          background: var(--bg-alpha-hover);
          color: var(--primary);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-weight: 600;
        }

        .blog-date {
          color: var(--text-muted);
        }

        .blog-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--text-color);
          transition: color 0.2s;
        }
        
        .blog-card:hover .blog-title {
          color: var(--primary);
        }

        .blog-excerpt {
          color: var(--text-muted);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          font-weight: 500;
          border-top: 1px solid var(--glass-border);
          padding-top: 1rem;
        }

        .blog-read-time {
          color: var(--text-muted);
        }

        .blog-read-more {
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
