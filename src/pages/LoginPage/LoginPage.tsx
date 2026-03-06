import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { login } from '@/api/auth';
import { useAuthStore } from '@/store/authStore';
import {
  UserIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckboxUncheckedIcon,
  CheckboxCheckedIcon,
} from '@/components/icons';
import styles from './LoginPage.module.css';

const schema = z.object({
  username: z.string().min(1, 'Введите логин'),
  password: z.string().min(1, 'Введите пароль'),
});

type FormData = z.infer<typeof schema>;

export function LoginPage() {
  const navigate = useNavigate();
  const authLogin = useAuthStore((s) => s.login);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setApiError('');
    setLoading(true);
    try {
      const res = await login(data.username, data.password);
      authLogin(res.accessToken, rememberMe);
      void navigate('/products');
    } catch (e) {
      setApiError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={styles.logoWrap}>
            <div className={styles.logoIcon}>
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none">
                <path d="M17.5 3L32 28H3L17.5 3Z" fill="#242edb" opacity="0.9" />
                <path d="M17.5 10L27 28H8L17.5 10Z" fill="#fff" opacity="0.7" />
              </svg>
            </div>
          </div>

          <div className={styles.texts}>
            <h1 className={styles.heading}>Добро пожаловать!</h1>
            <p className={styles.subheading}>Пожалуйста, авторизируйтесь</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fields}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Логин</label>
                <div className={`${styles.inputWrap} ${errors.username ? styles.hasError : ''}`}>
                  <UserIcon size={24} color="#9c9c9c" />
                  <input
                    className={styles.inputField}
                    placeholder="Ваш логин"
                    autoComplete="username"
                    {...register('username')}
                  />
                </div>
                {errors.username && (
                  <span className={styles.fieldError}>{errors.username.message}</span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Пароль</label>
                <div className={`${styles.inputWrap} ${errors.password ? styles.hasError : ''}`}>
                  <LockIcon size={24} color="#9c9c9c" />
                  <input
                    className={styles.inputField}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    autoComplete="current-password"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    className={styles.iconBtn}
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  >
                    {showPassword ? (
                      <EyeIcon size={24} color="#9c9c9c" />
                    ) : (
                      <EyeOffIcon size={24} color="#9c9c9c" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className={styles.fieldError}>{errors.password.message}</span>
                )}
              </div>
            </div>

            <button
              type="button"
              className={styles.remember}
              onClick={() => setRememberMe((v) => !v)}
            >
              {rememberMe ? <CheckboxCheckedIcon size={22} /> : <CheckboxUncheckedIcon size={22} />}
              <span className={styles.rememberLabel}>Запомнить данные</span>
            </button>

            <div className={styles.actions}>
              {apiError && <div className={styles.apiError}>{apiError}</div>}
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Входим...' : 'Войти'}
              </button>
              <div className={styles.divider}>
                <div className={styles.dividerLine} />
                <span className={styles.dividerText}>или</span>
                <div className={styles.dividerLine} />
              </div>
            </div>
          </form>

          <p className={styles.footer}>
            Нет аккаунта?{' '}
            <span className={styles.footerLink}>Создать</span>
          </p>
        </div>
      </div>
    </div>
  );
}
