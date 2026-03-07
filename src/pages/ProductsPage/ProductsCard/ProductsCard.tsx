import { useState } from 'react'
import { useProductsStore } from '@/store/productsStore'
import { ProductsTable } from '@/components/products/ProductsTable/ProductsTable'
import { Pagination } from '@/components/products/Pagination/Pagination'
import { AddProductModal } from '@/components/products/AddProductModal/AddProductModal'
import { ProductsCardHeader } from './ProductsCardHeader/ProductsCardHeader'
import { useToast } from '@/context/toastContext'
import type { Product } from '@/types'
import styles from './ProductsCard.module.css'

export function ProductsCard() {
  const { products, localProducts, total, page, sort, loading, setSort, setPage, addProduct } =
    useProductsStore()
  const toast = useToast()
  const [showModal, setShowModal] = useState(false)

  const allProducts = [...localProducts, ...products]

  const handleAdd = (product: Product) => {
    addProduct(product)
    toast.show('Товар успешно добавлен', 'success')
  }

  return (
    <div className={styles.card}>
      <ProductsCardHeader onAdd={() => setShowModal(true)} />

      <ProductsTable products={allProducts} loading={loading} sort={sort} onSort={setSort} />

      <Pagination total={total} page={page} onPage={setPage} />

      {showModal && <AddProductModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}
    </div>
  )
}
