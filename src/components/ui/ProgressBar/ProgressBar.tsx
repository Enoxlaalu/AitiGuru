import styles from './ProgressBar.module.css';

export function ProgressBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner} />
    </div>
  );
}
