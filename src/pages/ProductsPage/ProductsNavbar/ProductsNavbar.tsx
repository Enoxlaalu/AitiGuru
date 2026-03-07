import { useProductsStore } from '@/store/productsStore'
import { SearchInput } from '../SearchInput/SearchInput'
import styles from './ProductsNavbar.module.css'

export function ProductsNavbar() {
  const { query, setQuery } = useProductsStore()

  return (
    <nav className={styles.navbar}>
      <span className={styles.navTitle}>Товары</span>
      <SearchInput defaultValue={query} onSearch={setQuery} />
    </nav>
  )
}
