import { LogoIcon } from '@/components/icons'
import styles from './LoginHeader.module.css'

export function LoginHeader() {
  return (
    <>
      <div className={styles.logoWrap}>
        <div className={styles.logoIcon}>
          <LogoIcon />
        </div>
      </div>
      <div className={styles.texts}>
        <h1 className={styles.heading}>Добро пожаловать!</h1>
        <p className={styles.subheading}>Пожалуйста, авторизируйтесь</p>
      </div>
    </>
  )
}
