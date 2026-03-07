import { SearchIcon } from '@/components/icons'
import styles from './SearchInput.module.css'

interface Props {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: Props) {
  return (
    <div className={styles.searchWrap}>
      <SearchIcon size={20} color="#999" />
      <input
        className={styles.searchInput}
        placeholder="Найти"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
