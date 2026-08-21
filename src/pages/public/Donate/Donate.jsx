import { useRef, useState } from 'react';
import styles from './Donate.module.css';

const PRESET_AMOUNTS = [5000, 10000, 25000, 50000];

// Placeholder bank details — swap for the real campaign account before launch.
const BANK_DETAILS = {
  bankName: 'First Bank of Nigeria',
  accountNumber: '0123456789',
  accountName: 'CAPACITY 2027 Campaign Account',
};

const STEPS = ['Amount', 'Bank Details', 'Confirm'];

function formatNaira(amount) {
  return `₦${Number(amount).toLocaleString('en-NG')}`;
}

export default function Donate() {
  const [step, setStep] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const effectiveAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleCopy = async (field, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, value is still visible to copy manually.
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setScreenshot(file);
  };

  const handleSubmit = () => {
    // Placeholder — will POST to Firestore + Cloudinary once backend is wired in.
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Donate</p>
        <h1 className={styles.headline}>Support the Campaign</h1>
        <p className={styles.subhead}>
          Every contribution helps bring CAPACITY 2027 to every ward in
          Rivers East. Donations are made via direct bank transfer.
        </p>
      </header>

      {/* Step indicator */}
      <ol className={styles.stepIndicator}>
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={`${styles.stepItem} ${i === step ? styles.stepItemActive : ''} ${i < step ? styles.stepItemDone : ''}`}
          >
            <span className={styles.stepNumber}>{i + 1}</span>
            <span className={styles.stepLabel}>{label}</span>
          </li>
        ))}
      </ol>

      {/* Step 1: Amount */}
      {step === 0 && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Choose an amount</h2>
          <div className={styles.amountGrid}>
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`${styles.amountButton} ${selectedAmount === amount && !customAmount ? styles.amountButtonActive : ''}`}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
              >
                {formatNaira(amount)}
              </button>
            ))}
          </div>

          <label className={styles.customLabel} htmlFor="customAmount">
            Or enter a custom amount
          </label>
          <input
            id="customAmount"
            type="number"
            min="1"
            placeholder="e.g. 15000"
            className={styles.customInput}
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
          />

          <button
            type="button"
            className={styles.primaryButton}
            disabled={!effectiveAmount}
            onClick={() => setStep(1)}
          >
            Continue
          </button>
        </section>
      )}

      {/* Step 2: Bank details */}
      {step === 1 && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>
            Transfer {effectiveAmount ? formatNaira(effectiveAmount) : ''} to the account below
          </h2>

          <div className={styles.detailsCard}>
            {[
              ['Bank Name', 'bankName', BANK_DETAILS.bankName],
              ['Account Number', 'accountNumber', BANK_DETAILS.accountNumber],
              ['Account Name', 'accountName', BANK_DETAILS.accountName],
            ].map(([label, field, value]) => (
              <div className={styles.detailsRow} key={field}>
                <div>
                  <p className={styles.detailsLabel}>{label}</p>
                  <p className={styles.detailsValue}>{value}</p>
                </div>
                <button
                  type="button"
                  className={styles.copyButton}
                  onClick={() => handleCopy(field, value)}
                >
                  {copiedField === field ? 'Copied' : 'Copy'}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.buttonRow}>
            <button type="button" className={styles.secondaryButton} onClick={() => setStep(0)}>
              Back
            </button>
            <button type="button" className={styles.primaryButton} onClick={() => setStep(2)}>
              I've made the transfer
            </button>
          </div>
        </section>
      )}

      {/* Step 3: Upload proof */}
      {step === 2 && !submitted && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Upload proof of payment</h2>
          <p className={styles.panelHint}>
            A screenshot of your transfer confirmation helps us match your
            donation and send a receipt.
          </p>

          <button
            type="button"
            className={styles.uploadZone}
            onClick={() => fileInputRef.current?.click()}
          >
            {screenshot ? (
              <span className={styles.uploadFileName}>{screenshot.name}</span>
            ) : (
              <>
                <span className={styles.uploadTitle}>Click to upload screenshot</span>
                <span className={styles.uploadHint}>PNG or JPG, up to 5MB</span>
              </>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg"
            className={styles.hiddenInput}
            onChange={handleFileChange}
          />

          <div className={styles.buttonRow}>
            <button type="button" className={styles.secondaryButton} onClick={() => setStep(1)}>
              Back
            </button>
            <button
              type="button"
              className={styles.primaryButton}
              disabled={!screenshot}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </section>
      )}

      {/* Confirmation */}
      {submitted && (
        <section className={styles.panel}>
          <h2 className={styles.panelTitle}>Thank you for your support</h2>
          <p className={styles.panelHint}>
            We've received your donation details. A member of the CAPACITY
            2027 team will confirm your contribution shortly.
          </p>
        </section>
      )}
    </div>
  );
}
