import styles from './LoginFooter.module.css'

export function LoginFooter() {
  return (
    <p className={styles.footer}>
      Нет аккаунта? <button type="button" className={styles.footerLink}>Создать</button>
    </p>
  )
}
