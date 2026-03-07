import { useRef, useState } from 'react'
import { useProductsStore } from '@/store/productsStore'
import { debounce } from '@/utils/debounce'
import { SearchInput } from '../SearchInput/SearchInput'
import styles from './ProductsNavbar.module.css'

const DEBOUNCE_MS = 400

export function ProductsNavbar() {
  const { query, setQuery } = useProductsStore()
  const [searchValue, setSearchValue] = useState(query)
  const debouncedSearch = useRef(debounce(setQuery, DEBOUNCE_MS)).current

  const handleSearch = (value: string) => {
    setSearchValue(value)
    debouncedSearch(value)
  }

  return (
    <nav className={styles.navbar}>
      <span className={styles.navTitle}>Товары</span>
      <SearchInput value={searchValue} onChange={handleSearch} />
    </nav>
  )
}
