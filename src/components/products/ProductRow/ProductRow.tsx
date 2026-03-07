import { useState } from 'react'
import type { Product } from '@/types'
import {
  CheckboxUncheckedIcon,
  CheckboxCheckedIcon,
  PlusCircleIcon,
  DotsIcon,
} from '@/components/icons'
import styles from './ProductRow.module.css'

interface Props {
  product: Product
}

export function ProductRow({ product }: Props) {
  const [checked, setChecked] = useState(false)

  const priceWhole = Math.floor(product.price).toLocaleString('ru-RU')
  const ratingLow = product.rating < 3

  return (
    <tr className={styles.row}>
      <td className={styles.tdCheck}>
        <button
          className={styles.checkbox}
          onClick={() => setChecked((v) => !v)}
          aria-label="Выбрать"
        >
          {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        </button>
      </td>

      <td className={styles.tdProduct}>
        <div className={styles.productInner}>
          <img src={product.thumbnail} alt={product.title} className={styles.photo} />
          <div className={styles.name}>
            <span className={styles.title}>{product.title}</span>
            <span className={styles.category}>{product.category}</span>
          </div>
        </div>
      </td>

      <td className={`${styles.cell} ${styles.cellBold}`}>{product.brand || '—'}</td>
      <td className={styles.cell}>{product.sku || '—'}</td>
      <td className={`${styles.cell} ${ratingLow ? styles.ratingLow : ''}`}>
        {product.rating.toFixed(1)}/5
      </td>
      <td className={styles.price}>
        {priceWhole}
        <span className={styles.priceCents}>,00</span>
      </td>

      <td className={styles.tdActions}>
        <div className={styles.actions}>
          <button className={styles.btnAdd} aria-label="Добавить">
            <PlusCircleIcon size={18} color="#fff" />
          </button>
          <button className={styles.btnDots} aria-label="Действия">
            <DotsIcon size={28} color="#b2b3b9" />
          </button>
        </div>
      </td>
    </tr>
  )
}
