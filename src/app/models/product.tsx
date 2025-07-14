export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  img: string;
  badge: string;
  discount?: number;
  priceAfterDiscount?: string;
}
