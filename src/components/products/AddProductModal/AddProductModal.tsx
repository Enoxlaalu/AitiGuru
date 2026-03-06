import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Product } from '@/types';
import styles from './AddProductModal.module.css';

const schema = z.object({
  title: z.string().min(1, 'Введите наименование'),
  brand: z.string().min(1, 'Введите вендора'),
  sku: z.string().min(1, 'Введите артикул'),
  price: z.string().min(1, 'Введите цену').refine(
    (v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0,
    'Цена должна быть больше 0'
  ),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onAdd: (product: Product) => void;
}

export function AddProductModal({ onClose, onAdd }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const product: Product = {
      id: Date.now(),
      title: data.title,
      brand: data.brand,
      sku: data.sku,
      price: parseFloat(data.price),
      rating: 0,
      thumbnail: '',
      category: '',
    };
    onAdd(product);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Добавить товар</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label className={styles.label}>Наименование</label>
            <input
              className={`${styles.input} ${errors.title ? styles.hasError : ''}`}
              placeholder="Название товара"
              {...register('title')}
            />
            {errors.title && <span className={styles.error}>{errors.title.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Вендор</label>
            <input
              className={`${styles.input} ${errors.brand ? styles.hasError : ''}`}
              placeholder="Производитель"
              {...register('brand')}
            />
            {errors.brand && <span className={styles.error}>{errors.brand.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Артикул</label>
            <input
              className={`${styles.input} ${errors.sku ? styles.hasError : ''}`}
              placeholder="SKU"
              {...register('sku')}
            />
            {errors.sku && <span className={styles.error}>{errors.sku.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Цена, ₽</label>
            <input
              className={`${styles.input} ${errors.price ? styles.hasError : ''}`}
              placeholder="0.00"
              inputMode="decimal"
              {...register('price')}
            />
            {errors.price && <span className={styles.error}>{errors.price.message}</span>}
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnSecondary} onClick={onClose}>
              Отмена
            </button>
            <button type="submit" className={styles.btnPrimary}>
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
