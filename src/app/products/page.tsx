"use client";

import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import ProductCard from "../components/ProductCard";
import { useState, useMemo, useEffect, useRef } from "react";
import SidebarFilter from "../components/SidebarFilter";
import {
  ramOptions,
  storageOptions,
  processorOptions,
  displaySizeOptions,
  brands,
} from "../constants";
import WhatsAppButton from "../components/WhatsAppButton";
import { fetchData } from "../../utils/api";
import type { Product } from "../../models/product";

function toProduct(p: ApiProduct): Product {
  const price = parseFloat(p.price ?? "0");
  // Prefer server-provided discounted_price; else compute from discount_value
  const serverDiscounted = p.discount?.discounted_price
    ? parseFloat(p.discount.discounted_price as string)
    : undefined;
  const apiDiscountPct =
    typeof p.discount?.percentage === "number" &&
    isFinite(p.discount.percentage as number)
      ? (p.discount.percentage as number)
      : undefined;
  const computedDiscounted =
    apiDiscountPct && price > 0
      ? price * (1 - apiDiscountPct / 100)
      : undefined;

  const discounted = serverDiscounted ?? computedDiscounted ?? 0;

  // Determine discount percentage to show on badge
  const discountPct =
    apiDiscountPct ??
    (serverDiscounted && price > 0
      ? Math.round((1 - (serverDiscounted as number) / price) * 100)
      : undefined);

  const firstImg =
    p.images && p.images.length > 0 ? p.images[0] : "/temp/laptop.jpg";

  const rawProcessor = p.laptop?.processor || "";
  const processor: Product["processor"] = /apple/i.test(rawProcessor)
    ? "Apple"
    : /amd/i.test(rawProcessor)
    ? "AMD"
    : "Intel"; // default bucket

  // Try to infer display size from specs like "11.6-inch"
  const specs = p.laptop?.specs || "";
  const sizeMatch = specs.match(/(\d{1,2}(?:\.\d)?)\s*-?\s*(?:in|inch)/i);
  const displaySize = sizeMatch ? parseFloat(sizeMatch[1]) : 0;

  const ram =
    typeof p.laptop?.ram_size === "string"
      ? parseInt(p.laptop!.ram_size, 10)
      : p.laptop?.ram_size || 0;
  const storageNum =
    typeof p.laptop?.storage_size === "string"
      ? parseInt(p.laptop!.storage_size, 10)
      : p.laptop?.storage_size || 0;

  return {
    id: p.id,
    name: p.name,
    category: "Laptop",
    brand: p.brand.name,
    price,
    images: p.images && p.images.length > 0 ? p.images : [firstImg],
    slug: p.slug,
    badge: discountPct ? `${discountPct}%` : "",
    discount: discountPct,
    priceAfterDiscount:
      typeof discounted === "number" && discounted > 0 ? discounted : undefined,
    description: specs,
    ram: Number.isFinite(ram) ? (ram as number) : 0,
    storage: storageNum ? `${storageNum}GB` : "",
    processor,
    displaySize,
  };
}

type FilterValues = {
  ram: number[];
  storage: string[];
  processor: string[];
  displaySize: number[];
  brand: string[];
};

export default function ProductsPage() {
  // ...existing code...
  // Ref for product list section
  const productListRef = useRef<HTMLDivElement>(null);

  const [sort, setSort] = useState("latest");
  const [selected, setSelected] = useState<FilterValues>({
    ram: [],
    storage: [],
    processor: [],
    displaySize: [],
    brand: [],
  });
  const [applied, setApplied] = useState<FilterValues>({
    ram: [],
    storage: [],
    processor: [],
    displaySize: [],
    brand: [],
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [brandOptions, setBrandOptions] = useState<string[]>(brands);

  // Fetch products from API
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetchData<ApiProduct[] | { data: ApiProduct[] }>(
          "api/v1/products",
          "GET"
        );
        const payload: ApiProduct[] = Array.isArray(res.data)
          ? res.data
          : res.data?.data || [];
        const mapped = payload.map(toProduct);
        if (!mounted) return;
        setProducts(mapped);
        // derive unique brands from data
        const uniqueBrands = Array.from(
          new Set(mapped.map((p) => p.brand).filter(Boolean))
        );
        // keep constants as fallback then add any new
        const merged = Array.from(new Set([...brands, ...uniqueBrands]));
        setBrandOptions(merged);
      } catch (e) {
        if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
          console.error("Error fetching products:", e);
        }
        if (!mounted) return;
        setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Scroll to product list when page changes
  useEffect(() => {
    if (productListRef.current) {
      productListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const ramMatch =
        applied.ram.length === 0 || applied.ram.includes(product.ram);
      const storageMatch =
        applied.storage.length === 0 ||
        applied.storage.includes(product.storage);
      const processorMatch =
        applied.processor.length === 0 ||
        applied.processor.includes(product.processor);
      const displaySizeMatch =
        applied.displaySize.length === 0 ||
        applied.displaySize.includes(product.displaySize);
      const brandValue = (product as any).brand ?? "";
      const brandMatch =
        applied.brand.length === 0 || applied.brand.includes(brandValue);
      return (
        ramMatch &&
        storageMatch &&
        processorMatch &&
        displaySizeMatch &&
        brandMatch
      );
    });
  }, [applied, products]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sort === "latest") {
      sorted.sort((a, b) => b.id - a.id);
    } else if (sort === "lowest") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === "highest") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [sort, filteredProducts]);

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
        <SidebarFilter
          ram={ramOptions}
          storage={storageOptions}
          processor={processorOptions}
          displaySize={displaySizeOptions}
          brand={brandOptions}
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
        />
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
                <ProductCard key={product.id} product={product} />
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
