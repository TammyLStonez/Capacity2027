import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const CATEGORIES = [
  'All',
  'Campaign Trail',
  'Policy',
  'Community',
  'Economy & Energy',
  'Youth & Education',
];

// Placeholder posts — replace with Firestore query once backend is wired in.
const POSTS = [
  {
    slug: 'capacity-2027-officially-launches',
    title: 'CAPACITY 2027 Officially Launches Bid for Rivers East Senate Seat',
    excerpt:
      'Apostle Livingstone Iniabiecheton Lambert, JP formally introduces his campaign, outlining a vision built on competence, accountability, and grassroots representation for Rivers East.',
    category: 'Campaign Trail',
    date: 'Jul 14, 2026',
    featured: true,
  },
  {
    slug: 'maritime-economy-rivers-east',
    title: 'Why Rivers East Needs a Senator Who Understands the Maritime Economy',
    excerpt:
      'From Okrika to Port Harcourt, the district\'s economy runs on the water. A look at what real maritime and energy expertise brings to the National Assembly.',
    category: 'Economy & Energy',
    date: 'Jul 21, 2026',
  },
  {
    slug: 'youth-empowerment-capacity-manifesto',
    title: 'Youth Empowerment: The Backbone of the CAPACITY Manifesto',
    excerpt:
      'Education, opportunity, and a seat at the table — why the "Youthful" pillar isn\'t just a word, it\'s a governing priority.',
    category: 'Youth & Education',
    date: 'Jul 28, 2026',
  },
  {
    slug: 'grassroots-to-government-okrika',
    title: 'Grassroots to Government: Two Decades of Community Service in Okrika',
    excerpt:
      'Before the campaign, there was the community work. A look back at two decades of humanitarian service across Rivers State.',
    category: 'Community',
    date: 'Aug 2, 2026',
  },
  {
    slug: 'breaking-down-eight-pillars',
    title: 'Breaking Down the Eight Pillars of CAPACITY',
    excerpt:
      'Competent, Accountable, Progressive, Active, Communicator, Intelligent, Technologist, Youthful — what each pillar means in practice.',
    category: 'Policy',
    date: 'Aug 6, 2026',
  },
  {
    slug: 'security-environmental-justice-niger-delta',
    title: 'Security and Environmental Justice in the Niger Delta: A Path Forward',
    excerpt:
      'Addressing security and environmental concerns in the creeks requires more than talk. A policy outline for Rivers East.',
    category: 'Policy',
    date: 'Aug 11, 2026',
  },
  {
    slug: 'on-the-ground-in-etche',
    title: 'On the Ground in Etche: Campaign Trail Notes',
    excerpt:
      'Notes from a week of town halls and listening sessions across Etche local government area.',
    category: 'Campaign Trail',
    date: 'Aug 15, 2026',
  },
];

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
