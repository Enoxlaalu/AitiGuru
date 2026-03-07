import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.css'
import type { ToastItem, ToastType } from '@/components/ui/Toast/Toast.types'
import { ToastContext } from '@/context/toastContext'

let counter = 0

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const show = useCallback((message: string, type: ToastType = 'info') => {
    const remove = (id: number) => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)))
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 320)
    }

    const id = ++counter
    setToasts((prev) => [...prev, { id, message, type, leaving: false }])
    setTimeout(() => remove(id), 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {createPortal(
        <div className={styles.container}>
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`${styles.toast} ${styles[t.type]} ${t.leaving ? styles.fadeOut : ''}`}
            >
              {t.message}
            </div>
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  )
}
