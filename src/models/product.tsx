export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: string;
  img: string;
  badge: string;
  discount?: number;
  priceAfterDiscount?: string;
  ram: number; // in GB
  storage: string; // e.g. '256GB', '1TB'
  processor: "Intel" | "AMD" | "Apple";
  displaySize: number; // in inches
}
