import { LoginHeader } from './LoginHeader/LoginHeader'
import { LoginForm } from './LoginForm/LoginForm'
import { LoginFooter } from './LoginFooter/LoginFooter'
import styles from './LoginPage.module.css'

export function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </div>
  )
}
