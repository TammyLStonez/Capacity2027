import styles from './Footer.module.css';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useTripleTap } from '../../hooks/useTripleTap';

export default function Footer() {
  const { openGate } = useAdminAuth();
  const handleWordmarkTap = useTripleTap(openGate);

  return (
    <footer className={styles.footer}>
      {/* Triple-tap this wordmark to reveal the hidden admin PIN gate. */}
      <div className={styles.logo} onClick={handleWordmarkTap}>
        CAPACITY <span>2027</span>
      </div>
      <p className={styles.note}>© 2027 Capacity Campaign. All rights reserved.</p>
    </footer>
  );
}
