import type { ProductsResponse } from '@/types';

const BASE = 'https://dummyjson.com/products';
const LIMIT = 20;

interface FetchParams {
  query?: string;
  page?: number;
  sortBy?: string | null;
  order?: string;
}

export async function fetchProducts({
  query = '',
  page = 1,
  sortBy = null,
  order = 'asc',
}: FetchParams = {}): Promise<ProductsResponse> {
  const skip = (page - 1) * LIMIT;

  const params = new URLSearchParams({
    limit: String(LIMIT),
    skip: String(skip),
    select: 'id,title,brand,sku,rating,price,thumbnail,category',
  });

  if (sortBy) {
    params.set('sortBy', sortBy);
    params.set('order', order);
  }

  const endpoint = query
    ? `${BASE}/search?q=${encodeURIComponent(query)}&${params.toString()}`
    : `${BASE}?${params.toString()}`;

  const res = await fetch(endpoint);
  if (!res.ok) throw new Error('Ошибка загрузки товаров');
  return res.json() as Promise<ProductsResponse>;
}
