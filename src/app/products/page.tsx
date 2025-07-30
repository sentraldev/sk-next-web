"use client";

import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import ProductCard from "../components/ProductCard";
import { fetchData } from "@/utils/api";
// import { mockProducts } from "./mockProducts";
import { useState, useMemo, useEffect, useRef } from "react";
// import {
//   ramOptions,
//   storageOptions,
//   processorOptions,
//   displaySizeOptions,
//   brands,
// } from "../constants";
import WhatsAppButton from "../components/WhatsAppButton";
import { Product } from "@/models/product";

// type FilterValues = {
//   ram: number[];
//   storage: string[];
//   processor: string[];
//   displaySize: number[];
//   brand: string[];
// };

export default function ProductsPage() {
  // ...existing code...
  // Ref for product list section
  const productListRef = useRef<HTMLDivElement>(null);

  const [sort, setSort] = useState("latest");
  // const [selected, setSelected] = useState<FilterValues>({
  //   ram: [],
  //   storage: [],
  //   processor: [],
  //   displaySize: [],
  //   brand: [],
  // });
  // const [applied, setApplied] = useState<FilterValues>({
  //   ram: [],
  //   storage: [],
  //   processor: [],
  //   displaySize: [],
  //   brand: [],
  // });
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Fetch products from API
  useEffect(() => {
    setLoading(true);
    fetchData<Product[]>("api/v1/public/products", "GET")
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch(() => {
        setProducts([]);
        // Optionally handle error
      })
      .finally(() => setLoading(false));
  }, []);

  // Scroll to product list when page changes
  useEffect(() => {
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  // const filteredProducts = useMemo(() => {
  //   return products.filter((product) => {
  //     const ramMatch =
  //       applied.ram.length === 0 || applied.ram.includes(product.ram);
  //     const storageMatch =
  //       applied.storage.length === 0 ||
  //       applied.storage.includes(product.storage);
  //     const processorMatch =
  //       applied.processor.length === 0 ||
  //       applied.processor.includes(product.processor);
  //     const displaySizeMatch =
  //       applied.displaySize.length === 0 ||
  //       applied.displaySize.includes(product.displaySize);
  //     const brandValue = (product as any).brand ?? "";
  //     const brandMatch =
  //       applied.brand.length === 0 || applied.brand.includes(brandValue);
  //     return (
  //       ramMatch &&
  //       storageMatch &&
  //       processorMatch &&
  //       displaySizeMatch &&
  //       brandMatch
  //     );
  //   });
  // }, [applied, products]);

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    if (sort === "latest") {
      sorted.sort((a, b) => b.uuid - a.uuid);
    } else if (sort === "lowest") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "highest") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [sort, products]);

  // Pagination logic
  const PRODUCTS_PER_PAGE = 20;
  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE)
  );
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return sortedProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [sortedProducts, page]);

  return (
    <div className="min-h-screen bg-gray-50 mx-auto">
      <Head>
        <title>Produk | Sentral Komputer</title>
        <meta name="description" content="Daftar Produk Sentral Komputer" />
      </Head>
      <Header />
      <main className="content-width mx-auto flex flex-col md:flex-row gap-4 py-4 flex-1">
        {/* Sidebar Filter */}
        {/* <SidebarFilter
          ram={ramOptions}
          storage={storageOptions}
          processor={processorOptions}
          displaySize={displaySizeOptions}
          brand={brands}
          selected={selected}
          applied={applied}
          onChange={(type, value) => {
            setSelected((prev) => {
              const values = prev[type as keyof FilterValues] as any[];
              let newValues;
              if (values.includes(value)) {
                newValues = values.filter((v) => v !== value);
              } else {
                newValues = [...values, value];
              }
              return { ...prev, [type]: newValues };
            });
          }}
          onApply={() => setApplied(selected)}
          onReset={() => {
            setSelected({
              ram: [],
              storage: [],
              processor: [],
              displaySize: [],
              brand: [],
            });
            setApplied({
              ram: [],
              storage: [],
              processor: [],
              displaySize: [],
              brand: [],
            });
          }}
        /> */}
        {/* Product List */}
        <section ref={productListRef} className="flex-1 flex flex-col">
          <div className="flex flex-row justify-between items-center mb-2">
            <div className="text-sm font-medium">
              {loading ? (
                <span className="font-bold">Loading produk...</span>
              ) : (
                <>
                  Menampilkan total{" "}
                  <span className="font-bold">{products.length}</span> produk
                </>
              )}
            </div>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-xs"
              value={sort}
              onChange={(e) => setSort(e.target.value)}>
              <option value="latest">Terbaru</option>
              <option value="lowest">Harga Terendah</option>
              <option value="highest">Harga Tertinggi</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {loading ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                Loading produk...
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                Tidak ada produk ditemukan.
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <ProductCard key={product.uuid} product={product} />
              ))
            )}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              className="px-2 py-1 rounded border text-xs bg-white"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}>
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`px-2 py-1 rounded border text-xs bg-white ${
                  p === page ? "font-bold border-primary-900" : ""
                }`}
                onClick={() => setPage(p)}
                disabled={p === page}>
                {p}
              </button>
            ))}
            <button
              className="px-2 py-1 rounded border text-xs bg-white"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
              &gt;
            </button>
          </div>
        </section>
      </main>
      <Footer />
      {/* WhatsApp Sticky Button */}
      <WhatsAppButton />
    </div>
  );
}
