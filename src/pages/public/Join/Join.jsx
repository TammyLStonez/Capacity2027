import { useState } from 'react';
import styles from './Join.module.css';

// Placeholder handles — replace with the real campaign accounts.
const SOCIALS = [
  { label: 'Facebook', handle: '@Capacity2027', href: 'https://facebook.com' },
  { label: 'X (Twitter)', handle: '@Capacity2027', href: 'https://x.com' },
  { label: 'Instagram', handle: '@capacity2027', href: 'https://instagram.com' },
  { label: 'WhatsApp Channel', handle: 'Join the broadcast', href: 'https://whatsapp.com' },
];

const LGAS = [
  'Etche',
  'Omuma',
  'Oyigbo',
  'Ikwerre',
  'Emohua',
  'Port Harcourt',
  'Other',
];

const initialForm = { name: '', email: '', phone: '', lga: '' };

export default function Join() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — will POST to Firestore once backend is wired in.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.page}>
        <section className={styles.confirmation}>
          <p className={styles.eyebrow}>You're In</p>
          <h1 className={styles.headline}>Welcome to the Movement</h1>
          <p className={styles.pledge}>
            Thank you for standing with CAPACITY 2027, {form.name.split(' ')[0] || 'friend'}.
            Real change in Rivers East starts with people who show up, speak
            up, and organize their communities. We'll be in touch with ways
            to get involved, from town halls to voter registration drives.
          </p>

          <div className={styles.socialBlock}>
            <p className={styles.socialHeading}>Follow the campaign</p>
            <ul className={styles.socialList}>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                    <span className={styles.socialPlatform}>{s.label}</span>
                    <span className={styles.socialHandle}>{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Join</p>
        <h1 className={styles.headline}>Join the Movement</h1>
        <p className={styles.subhead}>
          CAPACITY 2027 is built by the people of Rivers East. Sign up to get
          campaign updates, volunteer opportunities, and town hall
          announcements.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            required
            className={styles.input}
            value={form.name}
            onChange={handleChange('name')}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            required
            className={styles.input}
            value={form.email}
            onChange={handleChange('email')}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            required
            className={styles.input}
            value={form.phone}
            onChange={handleChange('phone')}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="lga">Local Government Area</label>
          <select
            id="lga"
            required
            className={styles.select}
            value={form.lga}
            onChange={handleChange('lga')}
          >
            <option value="" disabled>Select your LGA</option>
            {LGAS.map((lga) => (
              <option key={lga} value={lga}>{lga}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          Join the Movement
        </button>
      </form>
    </div>
  );
}
