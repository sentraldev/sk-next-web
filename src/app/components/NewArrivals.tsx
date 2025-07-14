import { Product } from "../models/product";
import ProductCard from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 2,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 3,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 4,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 5,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 6,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    discount: 10,
    priceAfterDiscount: "Rp 13,410,000",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 7,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
  {
    id: 8,
    name: "HP Pavilion 14 - EH014TX/EH015TX",
    price: "Rp 14,900,000",
    brand: "HP",
    category: "Laptop",
    img: "/temp/laptop.jpg",
    badge: "10%",
    ram: 16,
    storage: "512GB",
    processor: "Intel",
    displaySize: 14,
  },
];

export default function NewArrivals() {
  return (
    <section className="mt-6 content-width mx-auto">
      <div className="flex items-end gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold ">New Arrivals</h2>
        <a href="#" className="text-blue-900 text-sm font-bold hover:underline">
          Lihat Semua
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
