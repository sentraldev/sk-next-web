"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import { mockProducts } from "../mockProducts";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetail() {
  // Get product id from URL
  const params = useParams();
  const id = Number(params?.uuid);
  const product = mockProducts.find((p) => p.id === id);
  const [mainImg, setMainImg] = useState(product?.img || "/temp/laptop.jpg");
  if (!product) return notFound();

  // For gallery, just repeat the same image as in the design
  const gallery = Array(5).fill(product.img);

  return (
    <>
      <Header />
      <div className="content-width mx-auto py-8 flex flex-col md:flex-row gap-8">
        {/* Left: Image Gallery */}
        <div className="flex flex-col items-center md:w-1/2">
          <div className="border rounded-lg overflow-hidden w-[340px] h-[260px] flex items-center justify-center bg-white">
            <Image
              src={mainImg}
              alt={product.name}
              width={320}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="flex gap-3 mt-4">
            {gallery.map((img, i) => (
              <button
                key={i}
                className={`border rounded-lg w-14 h-14 flex items-center justify-center bg-white ${
                  mainImg === img ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setMainImg(img)}>
                <Image
                  src={img}
                  alt={product.name + " thumb"}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 max-w-xl">
          <div className="mb-2 text-xs text-gray-500">
            Produk &gt; {product.name}
          </div>
          <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-sm">★ 5.0</span>
            <span className="text-xs text-gray-400">
              (3 rating) | 20 terjual
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {product.discount ? product.priceAfterDiscount : product.price}
            </span>
            {product.discount && (
              <>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}%
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {product.price}
                </span>
              </>
            )}
          </div>
          <div className="mb-4">
            <span className="text-xs text-gray-400">Subtotal</span>
            <div className="text-lg font-semibold text-gray-900">
              {product.discount ? product.priceAfterDiscount : product.price}
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-6 py-2 transition">
              Tambahkan ke Keranjang
            </button>
            <button className="border border-blue-600 text-blue-600 font-semibold rounded px-6 py-2 transition hover:bg-blue-50">
              Beli Sekarang
            </button>
          </div>
          <div className="flex gap-4 text-xs text-gray-500 mb-6">
            <span className="cursor-pointer hover:underline">♡ Wishlist</span>
            <span className="cursor-pointer hover:underline">⇪ Share</span>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-base">Detail Produk</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Brand: {product.brand}</li>
              <li>Processor: {product.processor}</li>
              <li>Display: {product.displaySize} inch</li>
              <li>RAM: {product.ram} GB</li>
              <li>Storage: {product.storage}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
