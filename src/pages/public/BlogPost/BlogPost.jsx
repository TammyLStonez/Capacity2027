import { Link, useParams } from 'react-router-dom';
import styles from './BlogPost.module.css';
import { POSTS } from '../../../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className={styles.page}>
        <p className={styles.eyebrow}>Not Found</p>
        <h1 className={styles.headline}>We couldn't find that post</h1>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
      </div>
    );
  }

  const otherPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className={styles.page}>
      <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>

      <header className={styles.header}>
        <span className={styles.categoryTag}>{post.category}</span>
        <h1 className={styles.headline}>{post.title}</h1>
        <span className={styles.meta}>{post.date}</span>
      </header>

      <div className={styles.featuredImage} />

      <div className={styles.body}>
        {post.body.map((paragraph, i) => (
          <p key={i} className={styles.paragraph}>{paragraph}</p>
        ))}
      </div>

      {otherPosts.length > 0 && (
        <section className={styles.related}>
          <h2 className={styles.relatedHeading}>More from the campaign</h2>
          <div className={styles.relatedGrid}>
            {otherPosts.map((p) => (
              <Link to={`/blog/${p.slug}`} key={p.slug} className={styles.relatedCard}>
                <div className={styles.relatedImage} />
                <span className={styles.categoryTag}>{p.category}</span>
                <h3 className={styles.relatedTitle}>{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
