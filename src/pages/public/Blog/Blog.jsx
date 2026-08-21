import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import { CATEGORIES, POSTS } from '../../../data/posts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = useMemo(() => POSTS.find((p) => p.featured), []);

  const gridPosts = useMemo(() => {
    return POSTS.filter((p) => !p.featured).filter(
      (p) => activeCategory === 'All' || p.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Blog</p>
        <h1 className={styles.headline}>News &amp; Updates</h1>
        <p className={styles.subhead}>
          Campaign trail notes, policy explainers, and community stories from
          the CAPACITY 2027 movement.
        </p>
      </header>

      {/* Featured post */}
      {featuredPost && (
        <Link to={`/blog/${featuredPost.slug}`} className={styles.featured}>
          <div className={styles.featuredImage} />
          <div className={styles.featuredContent}>
            <span className={styles.categoryTag}>{featuredPost.category}</span>
            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
            <span className={styles.meta}>{featuredPost.date}</span>
          </div>
        </Link>
      )}

      {/* Category filter pills */}
      <div className={styles.pillRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {gridPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
            <div className={styles.cardImage} />
            <span className={styles.categoryTag}>{post.category}</span>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <span className={styles.meta}>{post.date}</span>
          </Link>
        ))}

        {gridPosts.length === 0 && (
          <p className={styles.empty}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  );
}
