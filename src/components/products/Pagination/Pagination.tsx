import { CaretLeftIcon, CaretRightIcon } from '@/components/icons';
import styles from './Pagination.module.css';

const LIMIT = 20;

interface Props {
  total: number;
  page: number;
  onPage: (page: number) => void;
}

export function Pagination({ total, page, onPage }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / LIMIT));
  const from = Math.min((page - 1) * LIMIT + 1, total);
  const to = Math.min(page * LIMIT, total);

  const range: number[] = [];
  const half = 2;
  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, page + half);

  if (end - start < 4) {
    if (start === 1) end = Math.min(totalPages, start + 4);
    else start = Math.max(1, end - 4);
  }

  for (let i = start; i <= end; i++) range.push(i);

  return (
    <div className={styles.pagination}>
      <span className={styles.info}>
        Показано{' '}
        <span className={styles.infoNum}>{from}-{to}</span>{' '}
        из{' '}
        <span className={styles.infoNum}>{total}</span>
      </span>

      <div className={styles.controls}>
        <button
          className={`${styles.btn} ${styles.arrow}`}
          disabled={page <= 1}
          onClick={() => onPage(page - 1)}
          aria-label="Назад"
        >
          <CaretLeftIcon size={16} />
        </button>

        <div className={styles.numbers}>
          {range.map((p) => (
            <button
              key={p}
              className={`${styles.btn} ${p === page ? styles.active : ''}`}
              onClick={() => p !== page && onPage(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          className={`${styles.btn} ${styles.arrow}`}
          disabled={page >= totalPages}
          onClick={() => onPage(page + 1)}
          aria-label="Вперёд"
        >
          <CaretRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}
