import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Candidate photo — placeholder until Cloudinary asset is wired in */}
      <div className={styles.photo} role="img" aria-label="Apostle Livingstone Iniabiecheton Lambert, JP" />
      <div className={styles.scrim} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Rivers East Senatorial District · 2027</p>

        <h1 className={styles.headline}>
          Capacity to Serve.
          <br />
          <span className={styles.headlineAccent}>
            Character to Lead.
            <svg
              className={styles.stroke}
              viewBox="0 0 420 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className={styles.strokePath}
                d="M4 18C70 6 140 4 210 10C280 16 350 20 416 8"
                stroke="var(--color-gold)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className={styles.tagline}>
          Apostle Livingstone Iniabiecheton Lambert, JP — bringing competence,
          accountability, and results to the National Assembly.
        </p>

        <div className={styles.ctaRow}>
          <Link to="/join" className={styles.ctaPrimary}>Join the Movement</Link>
          <Link to="/manifesto" className={styles.ctaSecondary}>Read the Manifesto</Link>
        </div>
      </div>
    </section>
  );
}
