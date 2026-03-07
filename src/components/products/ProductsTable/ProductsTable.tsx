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

      <table className={styles.table}>
        <colgroup>
          <col className={styles.colCheck} />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className={styles.colActions} />
        </colgroup>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.thCheck}>
              <div className={styles.headerCheck} />
            </th>
            <th className={styles.thProduct}>Наименование</th>
            <th className={styles.th}>Вендор</th>
            <th className={styles.th}>Артикул</th>
            <th className={styles.th}>
              <button className={styles.headerCell} onClick={() => onSort('rating')}>
                Оценка
                <SortIndicator field="rating" sort={sort} />
              </button>
            </th>
            <th className={styles.th}>
              <button className={styles.headerCell} onClick={() => onSort('price')}>
                Цена, ₽
                <SortIndicator field="price" sort={sort} />
              </button>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && !loading && (
            <tr>
              <td colSpan={7} className={styles.empty}>
                Товары не найдены
              </td>
            </tr>
          )}
          {products.map((p) => (
            <ProductRow key={p.id} product={p} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
