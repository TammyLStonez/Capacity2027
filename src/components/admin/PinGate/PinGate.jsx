import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../../context/AdminAuthContext';
import styles from './PinGate.module.css';

export default function PinGate() {
  const { isGateOpen, closeGate, submitPin, error } = useAdminAuth();
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  if (!isGateOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = submitPin(pin);
    if (success) {
      setPin('');
      navigate('/admin');
    }
  };

  return (
    <div className={styles.overlay} onClick={closeGate}>
      <form
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <p className={styles.eyebrow}>Admin Access</p>
        <h2 className={styles.title}>Enter PIN</h2>

        <input
          type="password"
          inputMode="numeric"
          autoFocus
          className={styles.input}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.buttonRow}>
          <button type="button" className={styles.cancelButton} onClick={closeGate}>
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            Unlock
          </button>
        </div>
      </form>
    </div>
  );
}