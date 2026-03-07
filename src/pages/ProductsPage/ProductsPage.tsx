import { useEffect } from 'react'
import { useProductsStore } from '@/store/productsStore'
import { ProductsNavbar } from './ProductsNavbar/ProductsNavbar'
import { ProductsCard } from './ProductsCard/ProductsCard'
import styles from './ProductsPage.module.css'

export function ProductsPage() {
  const load = useProductsStore((s) => s.load)

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.page}>
      <ProductsNavbar />
      <ProductsCard />
    </div>
  )
}
