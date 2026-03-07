import type { Product, SortField, SortState } from '@/types'
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar'
import { ProductRow } from '@/components/products/ProductRow/ProductRow'
import { SortAscIcon, SortDescIcon } from '@/components/icons'
import styles from './ProductsTable.module.css'

interface Props {
  products: Product[]
  loading: boolean
  sort: SortState
  onSort: (field: SortField) => void
}

function SortIndicator({ field, sort }: { field: SortField; sort: SortState }) {
  if (sort.field !== field) {
    return (
      <span className={styles.sortIcon} style={{ opacity: 0.3 }}>
        <SortAscIcon size={10} color="var(--color-text-muted)" />
      </span>
    )
  }
  return sort.order === 'asc' ? (
    <SortAscIcon size={12} color="var(--color-blue)" />
  ) : (
    <SortDescIcon size={12} color="var(--color-blue)" />
  )
}

export function ProductsTable({ products, loading, sort, onSort }: Props) {
  return (
    <div className={styles.wrapper}>
      {loading && <ProgressBar />}

      <div className={styles.header}>
        <div className={styles.headerProduct}>
          <div className={styles.headerCheck} />
          <span className={styles.headerLabel}>Наименование</span>
        </div>
        <div className={styles.headerDetails}>
          <span className={styles.headerCellStatic}>Вендор</span>
          <span className={styles.headerCellStatic}>Артикул</span>
          <button className={styles.headerCell} onClick={() => onSort('rating')}>
            Оценка
            <SortIndicator field="rating" sort={sort} />
          </button>
          <button className={styles.headerCell} onClick={() => onSort('price')}>
            Цена, ₽
            <SortIndicator field="price" sort={sort} />
          </button>
        </div>
        <div className={styles.spacer} />
      </div>

      {products.length === 0 && !loading && <div className={styles.empty}>Товары не найдены</div>}

      {products.map((p) => (
        <ProductRow key={p.id} product={p} />
      ))}
    </div>
  )
}
