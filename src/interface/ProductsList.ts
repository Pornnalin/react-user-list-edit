interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
export interface ProductList {
  product: Product[];
}
