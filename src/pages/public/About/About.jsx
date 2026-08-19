import styles from './About.module.css';

const PILLARS = [
  {
    letter: 'C',
    word: 'Competent',
    line: 'Two decades running maritime, energy, and ministry organizations. Real management experience, not just promises.',
  },
  {
    letter: 'A',
    word: 'Accountable',
    line: 'A Justice of the Peace committed to transparent representation and open answers to Rivers East.',
  },
  {
    letter: 'P',
    word: 'Progressive',
    line: "Policy that grows the district's economy, from energy and maritime trade to small business.",
  },
  {
    letter: 'A',
    word: 'Active',
    line: 'Grassroots mobilization and hands on community development across Okrika and Rivers East, not distant governance.',
  },
  {
    letter: 'C',
    word: 'Communicator',
    line: 'Direct engagement with constituents, online and on the ground, so Rivers East is heard, not just represented.',
  },
  {
    letter: 'I',
    word: 'Intelligent',
    line: 'Strategic thinking shaped by decades in business, ministry, and public affairs.',
  },
  {
    letter: 'T',
    word: 'Technologist',
    line: "A blockchain and tech literate voice pushing digital infrastructure for the district's future.",
  },
  {
    letter: 'Y',
    word: 'Youthful',
    line: 'Youth empowerment, education, and opportunity as the foundation of everything else.',
  },
];

const CREDENTIALS = [
  'Founder & General Overseer, Livingstone Home of Miracles Ministry International',
  'President & CEO, Silverling Marine Nigeria Ltd',
  'Founder, Livetech Multinational Oil and Gas Ltd',
  'Justice of the Peace (JP)',
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Bio */}
      <section className={styles.bioSection}>
        <div className={styles.bioGrid}>
          <div className={styles.portrait} role="img" aria-label="Apostle Livingstone Iniabiecheton Lambert, JP" />

          <div className={styles.bioContent}>
            <p className={styles.eyebrow}>About</p>
            <h1 className={styles.headline}>
              Apostle Livingstone Iniabiecheton Lambert, JP
            </h1>

            <p className={styles.bioText}>
              A Nigerian apostolic leader, entrepreneur, maritime and energy
              industry executive, philanthropist, community builder, and
              political mobilizer from Okrika in Rivers State. For more than
              two decades he has been involved in political development,
              grassroots mobilization, economic empowerment, and humanitarian
              service across Rivers State.
            </p>

            <p className={styles.bioText}>
              He leads Livingstone Home of Miracles Ministry International as
              Founder and General Overseer, serves as President and CEO of
              Silverling Marine Nigeria Ltd, and founded Livetech
              Multinational Oil and Gas Ltd. He is from Okrika and lives in
              Port Harcourt.
            </p>

            <p className={styles.bioText}>
              In July 2026, the CAPACITY 2027 campaign introduced him as an
              aspiring Senator for the Rivers East Senatorial District,
              running on a platform of economic growth, youth empowerment,
              education, healthcare, infrastructure, security, environmental
              justice, and sustainable development.
            </p>
          </div>
        </div>

        {/* Credentials strip */}
        <ul className={styles.credentialsStrip}>
          {CREDENTIALS.map((item) => (
            <li key={item} className={styles.credentialItem}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CAPACITY acronym strip */}
      <section className={styles.acronymSection}>
        <div className={styles.acronymStrip}>
          {PILLARS.map((p, i) => (
            <div className={styles.acronymLetter} key={`${p.letter}-${i}`}>
              <span className={styles.acronymChar}>{p.letter}</span>
              <span className={styles.acronymWord}>{p.word}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Eight pillar manifesto grid */}
      <section className={styles.pillarSection}>
        <h2 className={styles.pillarHeading}>The CAPACITY Manifesto</h2>
        <div className={styles.pillarGrid}>
          {PILLARS.map((p, i) => (
            <article className={styles.pillarCard} key={`${p.word}-${i}`}>
              <span className={styles.pillarLetter}>{p.letter}</span>
              <h3 className={styles.pillarWord}>{p.word}</h3>
              <p className={styles.pillarLine}>{p.line}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
