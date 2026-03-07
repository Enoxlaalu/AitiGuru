import { useProductsStore } from '@/store/productsStore'
import { RefreshIcon, PlusCircleIcon } from '@/components/icons'
import styles from './ProductsCardHeader.module.css'

interface Props {
  onAdd: () => void
}

export function ProductsCardHeader({ onAdd }: Props) {
  const resetLocal = useProductsStore((s) => s.resetLocal)

  return (
    <div className={styles.cardHeader}>
      <h2 className={styles.cardTitle}>Все позиции</h2>
      <div className={styles.actions}>
        <button className={styles.btnRefresh} onClick={resetLocal} aria-label="Обновить">
          <RefreshIcon size={20} color="#333" />
        </button>
        <button className={styles.btnAdd} onClick={onAdd}>
          <PlusCircleIcon size={18} color="#ebf3ea" />
          Добавить
        </button>
      </div>
    </div>
  )
}
