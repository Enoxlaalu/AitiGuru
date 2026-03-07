import { useRef, useState } from 'react'
import { SearchIcon } from '@/components/icons'
import { debounce } from '@/utils/debounce'
import styles from './SearchInput.module.css'

const DEBOUNCE_MS = 400

interface Props {
  defaultValue?: string
  onSearch: (value: string) => void
}

export function SearchInput({ defaultValue = '', onSearch }: Props) {
  const [value, setValue] = useState(defaultValue)
  const debouncedSearch = useRef(debounce(onSearch, DEBOUNCE_MS)).current

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div className={styles.searchWrap}>
      <SearchIcon size={20} color="#999" />
      <input
        className={styles.searchInput}
        placeholder="Найти"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
