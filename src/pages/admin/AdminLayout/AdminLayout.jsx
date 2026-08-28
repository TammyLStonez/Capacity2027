import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  CreditCard,
  ScrollText,
  UserCircle2,
  Settings,
  LogOut,
  Search,
} from 'lucide-react';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import tokenStyles from '../adminTokens.module.css';
import styles from './AdminLayout.module.css';

const NAV_ITEMS = [
  { key: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'Blog Posts', label: 'Blog posts', icon: FileText },
  { key: 'Gallery', label: 'Gallery', icon: ImageIcon },
  { key: 'Donations', label: 'Donations', icon: CreditCard },
  { key: 'Manifesto', label: 'Manifesto', icon: ScrollText },
  { key: 'Candidate Details', label: 'Candidate details', icon: UserCircle2 },
  { key: 'Payment Settings', label: 'Payment settings', icon: Settings },
];

export default function AdminLayout({ activeSection, onSectionChange, children }) {
  const { logout } = useAdminAuth();

  return (
    <div className={`${tokenStyles.adminTheme} ${styles.shell}`}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          A. CANDIDATE
          <span className={styles.brandSub}>Admin panel</span>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              className={`${styles.navItem} ${activeSection === key ? styles.navItemActive : ''}`}
              onClick={() => onSectionChange(key)}
            >
              <Icon size={15} strokeWidth={2} />
              {label}
            </button>
          ))}
        </nav>

        <button type="button" className={styles.logoutItem} onClick={logout}>
          <LogOut size={14} strokeWidth={2} />
          Log out
        </button>
      </aside>

      <div className={styles.main}>
        <header className={styles.topBar}>
          <h1 className={styles.pageTitle}>{activeSection}</h1>
          <div className={styles.topBarRight}>
            <div className={styles.searchBox}>
              <Search size={13} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search posts, donors..."
                className={styles.searchInput}
              />
            </div>
            <div className={styles.avatar}>AL</div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}