import { create } from 'zustand';
import type { Product, SortState } from '@/types';
import { fetchProducts } from '@/api/products';

const SORT_KEY = 'products-sort';

function readSort(): SortState {
  try {
    const raw = localStorage.getItem(SORT_KEY);
    if (raw) return JSON.parse(raw) as SortState;
  } catch {
    // ignore
  }
  return { field: null, order: 'asc' };
}

function saveSort(sort: SortState) {
  localStorage.setItem(SORT_KEY, JSON.stringify(sort));
}

interface ProductsState {
  products: Product[];
  localProducts: Product[];
  total: number;
  page: number;
  query: string;
  sort: SortState;
  loading: boolean;
  error: string | null;

  load: (page?: number, query?: string) => Promise<void>;
  setQuery: (query: string) => void;
  setSort: (field: SortState['field']) => void;
  setPage: (page: number) => void;
  addProduct: (product: Product) => void;
  resetLocal: () => void;
}

export const useProductsStore = create<ProductsState>((set, get) => ({
  products: [],
  localProducts: [],
  total: 0,
  page: 1,
  query: '',
  sort: readSort(),
  loading: false,
  error: null,

  load: async (page, query) => {
    const state = get();
    const currentPage = page ?? state.page;
    const currentQuery = query ?? state.query;
    const { sort } = state;

    set({ loading: true, error: null, page: currentPage, query: currentQuery });

    try {
      const data = await fetchProducts({
        query: currentQuery,
        page: currentPage,
        sortBy: sort.field,
        order: sort.order,
      });
      set({ products: data.products, total: data.total, loading: false });
    } catch (e) {
      set({ error: (e as Error).message, loading: false });
    }
  },

  setQuery: (query) => {
    set({ query, page: 1, localProducts: [] });
    void get().load(1, query);
  },

  setSort: (field) => {
    const { sort } = get();
    const newSort: SortState =
      sort.field === field
        ? { field, order: sort.order === 'asc' ? 'desc' : 'asc' }
        : { field, order: 'asc' };

    saveSort(newSort);
    set({ sort: newSort, page: 1 });
    void get().load(1);
  },

  setPage: (page) => {
    set({ page });
    void get().load(page);
  },

  addProduct: (product) => {
    set((s) => ({ localProducts: [product, ...s.localProducts] }));
  },

  resetLocal: () => {
    set({ localProducts: [] });
    void get().load(get().page);
  },
}));
