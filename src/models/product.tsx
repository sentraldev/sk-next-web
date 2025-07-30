import { Brand } from "./brand";
import { Category } from "./category";

export interface Product {
  uuid: number;
  name: string;
  category_uuid: string;
  category: Category;
  // brand: string;
  price: number;
  image_urls: string[];
  // badge: string;
  // discount?: number;
  // priceAfterDiscount?: number;
  description: string;
  brand_uuid: string;
  brand: Brand;
  highlight: string;
  // ram: number; // in GB
  // storage: string; // e.g. '256GB', '1TB'
  // processor: "Intel" | "AMD" | "Apple";
  // displaySize: number; // in inches
}
