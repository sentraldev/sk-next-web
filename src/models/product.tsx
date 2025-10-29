export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  brand: string;
  price: number;
  images: string[];
  badge: string;
  discount?: number;
  priceAfterDiscount?: number;
  description: string;
  ram: number; // in GB
  storage: string; // e.g. '256GB', '1TB'
  processor: "Intel" | "AMD" | "Apple";
  displaySize: number; // in inches
}
