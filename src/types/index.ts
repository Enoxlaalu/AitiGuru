export interface Product {
  id: number;
  title: string;
  brand: string;
  sku: string;
  rating: number;
  price: number;
  thumbnail: string;
  category: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export type SortField = 'price' | 'rating';
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  field: SortField | null;
  order: SortOrder;
}
