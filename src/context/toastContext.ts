import type { ToastType } from '@/components/ui/Toast/Toast.types'
import { createContext, useContext } from 'react'

interface ToastContextValue {
  show: (message: string, type?: ToastType) => void
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used inside ToastProvider')
  return ctx
}
