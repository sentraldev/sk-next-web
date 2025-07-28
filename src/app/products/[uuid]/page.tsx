"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Image from "next/image";
import { mockProducts } from "../mockProducts";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "@/app/components/ProductCard";

export default function ProductDetail() {
  // Get product id from URL
  const params = useParams();
  const id = Number(params?.uuid);
  const product = mockProducts.find((p) => p.id === id);
  const [mainImg, setMainImg] = useState(product?.img || "/temp/laptop.jpg");
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    Number(product?.discount ? product.priceAfterDiscount : product?.price) || 0
  );

  if (!product) return notFound();

  // For gallery, just repeat the same image as in the design
  const gallery = Array(5).fill(product.img);

  console.log("Test Staging");

  return (
    <>
      <Header />
      <div className="content-width mx-auto py-8 flex flex-col md:flex-row gap-16">
        {/* Left: Image Gallery */}
        <div className="flex flex-col items-center ">
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
        <div className="flex-1">
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
              {product.discount
                ? product.priceAfterDiscount!.toLocaleString("id-ID")
                : product.price.toLocaleString("id-ID")}
            </span>
            {product.discount && (
              <>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Rp {product.discount.toLocaleString("id-ID")}%
                </span>
                <span className="text-gray-400 line-through text-sm">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
              </>
            )}
          </div>
          <div className="border-t border-gray-200 mb-4 pt-2">
            <h2 className="font-bold mb-2 text-base">Detail Produk</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Brand: {product.brand}</li>
              <li>Processor: {product.processor}</li>
              <li>Display: {product.displaySize} inch</li>
              <li>RAM: {product.ram} GB</li>
              <li>Storage: {product.storage}</li>
            </ul>
          </div>

          {/* Pick up location confirmation */}
          <div className="border-t border-gray-200 mb-4 pt-2">
            <p className="text-sm font-light mb-2">
              Produk tersedia di{" "}
              <span className="font-bold">Sentral Komputer</span> untuk di pick
              up secara langsung!
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xs">
          <div className="flex flex-col gap-2 mb-4 bg-white shadow-lg p-3 rounded-lg">
            <h3 className="text-sm font-bold  mb-2">
              Jumlah yang ingin dibeli
            </h3>
            <div className="flex flex-row">
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="quantity-input"
                  className="   border border-gray-300 rounded-s-lg p-3 h-11 focus:outline-none"
                  onClick={() => {
                    setQty((prev) => {
                      const newQty = prev - 1;
                      setTotalPrice(
                        Number(
                          product.discount
                            ? product.priceAfterDiscount
                            : product.price
                        ) * newQty
                      );
                      return newQty;
                    });
                  }}>
                  <svg
                    className="w-3 h-3 text-gray-900 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  data-input-counter
                  aria-describedby="helper-text-explanation"
                  className="border border-x-0 h-11 text-center border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={qty.toString()}
                  defaultValue={qty}
                  onChange={(e) => {
                    setQty(Number(e.target.value));
                    setTotalPrice(totalPrice * Number(e.target.value));
                  }}
                  required
                />
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="quantity-input"
                  className="border border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none"
                  onClick={() => {
                    setQty((prev) => {
                      const newQty = prev + 1;
                      setTotalPrice(
                        Number(
                          product.discount
                            ? product.priceAfterDiscount
                            : product.price
                        ) * newQty
                      );
                      return newQty;
                    });
                  }}>
                  <svg
                    className="w-3 h-3 text-gray-900 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs text-gray-400">Subtotal</span>
              <div className="text-2xl font-bold text-gray-900">
                Rp {totalPrice.toLocaleString("id-ID")}
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2 transition">
              Tambahkan ke Keranjang
            </button>
            <button className="border bg-white border-blue-600 text-blue-600 font-semibold rounded-lg px-6 py-2 transition hover:bg-blue-50">
              Beli Sekarang
            </button>

            <div className="flex gap-4 text-sm mt-2 justify-center items-center text-center">
              <span className="flex-1 cursor-pointer hover:underline">
                <FontAwesomeIcon icon={faHeart} className="mr-1" />
                Wishlist
              </span>
              <div className="h-8 w-[0.5] bg-gray-100" />
              <span className="flex-1 cursor-pointer hover:underline">
                <FontAwesomeIcon icon={faShare} className="mr-1" />
                Share
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto content-width max-w-3xl mb-16">
        <h2 className="text-md font-bold mb-4 border-b-2 pb-4">
          Deskripsi Produk
        </h2>

        <p className="text-sm text-gray-600">{product.description}</p>
      </div>

      {/* Other product recommendations */}
      <div className="content-width mx-auto mb-16">
        <h2 className="text-lg font-bold mb-4">Produk Lainnya</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mockProducts
            .filter((p) => p.id !== product.id)
            .slice(0, 6)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
