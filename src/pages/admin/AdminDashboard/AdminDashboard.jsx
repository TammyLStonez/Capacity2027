import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '../AdminLayout/AdminLayout';
import { POSTS } from '../../../data/posts.js';
import { DONATIONS, DONATION_STATS } from '../../../data/donations.js';
import styles from './AdminDashboard.module.css';

// Mirrors the pillar content in About.jsx. Once Firestore is wired in,
// both this dashboard and About.jsx should read from the same collection
// instead of keeping separate copies.
const PILLARS = [
  { letter: 'C', word: 'Competent', line: 'Two decades running maritime, energy, and ministry organizations.' },
  { letter: 'A', word: 'Accountable', line: 'A Justice of the Peace committed to transparent representation.' },
  { letter: 'P', word: 'Progressive', line: "Policy that grows the district's economy." },
  { letter: 'A', word: 'Active', line: 'Grassroots mobilization across Okrika and Rivers East.' },
  { letter: 'C', word: 'Communicator', line: 'Direct engagement with constituents, online and on the ground.' },
  { letter: 'I', word: 'Intelligent', line: 'Strategic thinking shaped by decades in business, ministry, and public affairs.' },
  { letter: 'T', word: 'Technologist', line: "A blockchain and tech literate voice for the district's future." },
  { letter: 'Y', word: 'Youthful', line: 'Youth empowerment, education, and opportunity as the foundation.' },
];

// Placeholder bank transfer details — mirrors Donate.jsx. Not a payment
// gateway; the campaign accepts donations via manual bank transfer.
const BANK_DETAILS = {
  bankName: 'First Bank of Nigeria',
  accountNumber: '0123456789',
  accountName: 'CAPACITY 2027 Campaign Account',
};

function formatNaira(amount) {
  return `₦${Number(amount).toLocaleString('en-NG')}`;
}

// All posts are placeholder data, so every row shows Published for now —
// a real status field belongs on each Firestore post document.
function StatusBadge() {
  return <span className={styles.statusPublished}>Published</span>;
}

export default function AdminDashboard() {
  const [section, setSection] = useState('Dashboard');

  return (
    <AdminLayout activeSection={section} onSectionChange={setSection}>
      <p className={styles.notice}>
        This dashboard is a UI preview. Edits here are not saved yet —
        Firestore and Cloudinary integration are still to come.
      </p>

      {section === 'Dashboard' && (
        <>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Total raised</p>
              <p className={styles.statValue}>{formatNaira(DONATION_STATS.totalRaised)}</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Donors</p>
              <p className={styles.statValue}>{DONATION_STATS.donorCount}</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Published posts</p>
              <p className={styles.statValue}>{POSTS.length}</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Site visits (7d)</p>
              <p className={styles.statValue}>—</p>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent blog posts</h2>
            <button type="button" className={styles.addButton}>
              <Plus size={13} strokeWidth={2.5} /> Add post
            </button>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Date</th>
                <th className={styles.actionsHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {POSTS.slice(0, 3).map((post) => (
                <tr key={post.slug}>
                  <td>{post.title}</td>
                  <td><StatusBadge /></td>
                  <td className={styles.muted}>{post.date}</td>
                  <td className={styles.rowActions}>
                    <button type="button" className={styles.iconButton} aria-label="Edit post">
                      <Pencil size={13} strokeWidth={2} />
                    </button>
                    <button type="button" className={styles.iconButtonDanger} aria-label="Delete post">
                      <Trash2 size={13} strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Payment settings</h2>
          </div>
          <div className={styles.miniCardRow}>
            <div className={styles.miniCard}>
              <p className={styles.statLabel}>Donation method</p>
              <p className={styles.miniCardValue}>Manual bank transfer</p>
            </div>
            <div className={styles.miniCard}>
              <p className={styles.statLabel}>Payout account</p>
              <p className={styles.miniCardValue}>
                {BANK_DETAILS.bankName} •••• {BANK_DETAILS.accountNumber.slice(-4)}
              </p>
            </div>
          </div>
        </>
      )}

      {section === 'Blog Posts' && (
        <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>All blog posts</h2>
            <button type="button" className={styles.addButton}>
              <Plus size={13} strokeWidth={2.5} /> Add post
            </button>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th className={styles.actionsHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {POSTS.map((post) => (
                <tr key={post.slug}>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td><StatusBadge /></td>
                  <td className={styles.muted}>{post.date}</td>
                  <td className={styles.rowActions}>
                    <button type="button" className={styles.iconButton} aria-label="Edit post">
                      <Pencil size={13} strokeWidth={2} />
                    </button>
                    <button type="button" className={styles.iconButtonDanger} aria-label="Delete post">
                      <Trash2 size={13} strokeWidth={2} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {section === 'Gallery' && (
        <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <button type="button" className={styles.addButton}>
              <Plus size={13} strokeWidth={2.5} /> Upload to Cloudinary
            </button>
          </div>
          <p className={styles.emptyState}>
            No media connected yet. Once Cloudinary is wired in, uploaded
            images (candidate photo, blog post images, etc.) will appear
            here as a grid for reuse across the site.
          </p>
        </>
      )}

      {section === 'Donations' && (
        <>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Total raised</p>
              <p className={styles.statValue}>{formatNaira(DONATION_STATS.totalRaised)}</p>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>Donors</p>
              <p className={styles.statValue}>{DONATION_STATS.donorCount}</p>
            </div>
          </div>

          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent donations</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Donor</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {DONATIONS.map((d, i) => (
                <tr key={i}>
                  <td>{d.name}</td>
                  <td>{formatNaira(d.amount)}</td>
                  <td className={styles.muted}>{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {section === 'Manifesto' && (
        <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>CAPACITY pillars</h2>
          </div>
          <div className={styles.pillarList}>
            {PILLARS.map((p) => (
              <div className={styles.pillarRow} key={p.word}>
                <span className={styles.pillarLetter}>{p.letter}</span>
                <div className={styles.pillarText}>
                  <p className={styles.pillarWord}>{p.word}</p>
                  <p className={styles.pillarLine}>{p.line}</p>
                </div>
                <button type="button" className={styles.iconButton} aria-label="Edit pillar">
                  <Pencil size={13} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {section === 'Candidate Details' && (
        <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Candidate bio</h2>
            <button type="button" className={styles.addButton}>Save changes</button>
          </div>
          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Full Name</span>
              <input className={styles.input} defaultValue="Apostle Livingstone Iniabiecheton Lambert, JP" />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Hero Tagline</span>
              <input
                className={styles.input}
                defaultValue="Apostle Livingstone Iniabiecheton Lambert, JP — bringing competence, accountability, and results to the National Assembly."
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Bio Paragraph 1</span>
              <textarea
                className={styles.textarea}
                rows={4}
                defaultValue="A Nigerian apostolic leader, entrepreneur, maritime and energy industry executive, philanthropist, community builder, and political mobilizer from Okrika in Rivers State."
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Credentials (one per line)</span>
              <textarea
                className={styles.textarea}
                rows={4}
                defaultValue={[
                  'Founder & General Overseer, Livingstone Home of Miracles Ministry International',
                  'President & CEO, Silverling Marine Nigeria Ltd',
                  'Founder, Livetech Multinational Oil and Gas Ltd',
                  'Justice of the Peace (JP)',
                ].join('\n')}
              />
            </label>
          </div>
        </>
      )}

      {section === 'Payment Settings' && (
        <>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Bank transfer details</h2>
            <button type="button" className={styles.addButton}>Save changes</button>
          </div>
          <p className={styles.hint}>
            Donations are collected via manual bank transfer, not a payment
            gateway. These details populate the account card on the public
            Donate page.
          </p>
          <div className={styles.formGrid}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Bank Name</span>
              <input className={styles.input} defaultValue={BANK_DETAILS.bankName} />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Account Number</span>
              <input className={styles.input} defaultValue={BANK_DETAILS.accountNumber} />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Account Name</span>
              <input className={styles.input} defaultValue={BANK_DETAILS.accountName} />
            </label>
          </div>
        </>
      )}
    </AdminLayout>
  );
}