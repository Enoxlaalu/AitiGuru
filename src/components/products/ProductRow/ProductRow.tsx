import { useState } from 'react';
import type { Product } from '@/types';
import {
  CheckboxUncheckedIcon,
  CheckboxCheckedIcon,
  PlusCircleIcon,
  DotsIcon,
} from '@/components/icons';
import styles from './ProductRow.module.css';

interface Props {
  product: Product;
}

export function ProductRow({ product }: Props) {
  const [checked, setChecked] = useState(false);

  const priceWhole = Math.floor(product.price).toLocaleString('ru-RU');
  const ratingLow = product.rating < 3;

  return (
    <div className={styles.row}>
      <div className={styles.product}>
        <button
          className={styles.checkbox}
          onClick={() => setChecked((v) => !v)}
          aria-label="Выбрать"
        >
          {checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.photo}
        />
        <div className={styles.name}>
          <span className={styles.title}>{product.title}</span>
          <span className={styles.category}>{product.category}</span>
        </div>
      </div>

      <div className={styles.details}>
        <span className={`${styles.cell} ${styles.cellBold}`}>{product.brand || '—'}</span>
        <span className={styles.cell}>{product.sku || '—'}</span>
        <span className={`${styles.cell} ${ratingLow ? styles.ratingLow : ''}`}>
          {product.rating.toFixed(1)}/5
        </span>
        <span className={styles.price}>
          {priceWhole}
          <span className={styles.priceCents}>,00</span>
        </span>
      </div>

      <div className={styles.actions}>
        <button className={styles.btnAdd} aria-label="Добавить">
          <PlusCircleIcon size={18} color="#fff" />
        </button>
        <button className={styles.btnDots} aria-label="Действия">
          <DotsIcon size={28} color="#b2b3b9" />
        </button>
      </div>
    </div>
  );
}
