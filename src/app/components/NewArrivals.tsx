"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { Product } from "../../models/product";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData<Product[]>("api/v1/public/products", "GET")
      .then((res) => setProducts(res.data || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mt-6 content-width mx-auto">
      <div className="flex items-end gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold ">New Arrivals</h2>
        <a href="#" className="text-blue-900 text-sm font-bold hover:underline">
          Lihat Semua
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {loading ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            Loading produk...
          </div>
        ) : products.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            Tidak ada produk ditemukan.
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.uuid} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
