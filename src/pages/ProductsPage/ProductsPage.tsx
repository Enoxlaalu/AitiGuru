import { useEffect, useRef, useState } from 'react';
import { useProductsStore } from '@/store/productsStore';
import { ProductsTable } from '@/components/products/ProductsTable/ProductsTable';
import { Pagination } from '@/components/products/Pagination/Pagination';
import { AddProductModal } from '@/components/products/AddProductModal/AddProductModal';
import { SearchIcon, RefreshIcon, PlusCircleIcon } from '@/components/icons';
import { useToast } from '@/components/ui/Toast/Toast';
import type { Product, SortField } from '@/types';
import styles from './ProductsPage.module.css';

const DEBOUNCE_MS = 400;

export function ProductsPage() {
  const {
    products,
    localProducts,
    total,
    page,
    query,
    sort,
    loading,
    load,
    setQuery,
    setSort,
    setPage,
    addProduct,
    resetLocal,
  } = useProductsStore();

  const toast = useToast();
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState(query);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    void load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setQuery(val);
    }, DEBOUNCE_MS);
  };

  const handleSort = (field: SortField) => {
    setSort(field);
  };

  const handleAdd = (product: Product) => {
    addProduct(product);
    toast.show('Товар успешно добавлен', 'success');
  };

  const handleRefresh = () => {
    resetLocal();
  };

  const allProducts = [...localProducts, ...products];

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <span className={styles.navTitle}>Товары</span>
        <div className={styles.searchWrap}>
          <SearchIcon size={20} color="#999" />
          <input
            className={styles.searchInput}
            placeholder="Найти"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </nav>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Все позиции</h2>
          <div className={styles.actions}>
            <button
              className={styles.btnRefresh}
              onClick={handleRefresh}
              aria-label="Обновить"
            >
              <RefreshIcon size={20} color="#333" />
            </button>
            <button
              className={styles.btnAdd}
              onClick={() => setShowModal(true)}
            >
              <PlusCircleIcon size={18} color="#ebf3ea" />
              Добавить
            </button>
          </div>
        </div>

        <ProductsTable
          products={allProducts}
          loading={loading}
          sort={sort}
          onSort={handleSort}
        />

        <Pagination total={total} page={page} onPage={setPage} />
      </div>

      {showModal && (
        <AddProductModal
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}
