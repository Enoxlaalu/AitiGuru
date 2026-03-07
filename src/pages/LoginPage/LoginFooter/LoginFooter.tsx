import styles from './LoginFooter.module.css'

export function LoginFooter() {
  return (
    <p className={styles.footer}>
      Нет аккаунта? <span className={styles.footerLink}>Создать</span>
    </p>
  )
}
