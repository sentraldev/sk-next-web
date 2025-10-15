"use client";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import Image from "next/image";
import { mockProducts } from "../mockProducts";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "@/app/components/ProductCard";

type Review = {
  id: number;
  name: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
};

const reviewsData: Review[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Produk sangat bagus dan sesuai harapan. Pelayanan cepat dan pengiriman tepat waktu. Highly recommended!",
    date: "Feb 28, 2024",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Laptop cepat dan ringan, tapi saya berharap baterainya sedikit lebih tahan lama.",
    date: "Mar 3, 2024",
  },
  // Tambah data ulasan lain sesuai kebutuhan
];

// Hitung rata-rata rating
const averageRating =
  reviewsData.reduce((sum, r) => sum + r.rating, 0) / reviewsData.length;

// Hitung distribusi bintang
const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
  star,
  count: reviewsData.filter((r) => r.rating === star).length,
}));

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
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  if (!product) return notFound();

  // For gallery, just repeat the same image as in the design
  const gallery = Array(5).fill(product.img);

  // Filter reviews berdasarkan rating
  const filteredReviews =
    filterRating === "all"
      ? reviewsData
      : reviewsData.filter((r) => r.rating === filterRating);

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
      {/* <div className="mx-auto content-width max-w-3xl mb-16">
        <h2 className="text-md font-bold mb-4 border-b-2 pb-4">
          Deskripsi Produk
        </h2>

        <p className="text-sm text-gray-600">{product.description}</p>
      </div> */}

      <div className="max-w-screen-lg mx-auto content-width px-4 py-6">
        {/* Tab Buttons */}
        <div className="flex border-b border-gray-300 mb-4 text-sm font-medium">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-6 -mb-px border-b-4 ${
              activeTab === "description"
                ? "border-blue-600 font-semibold text-blue-600"
                : "border-transparent text-gray-700 hover:text-blue-600"
            }`}
            aria-selected={activeTab === "description"}>
            Deskripsi Produk
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-6 -mb-px border-b-4 ${
              activeTab === "reviews"
                ? "border-blue-600 font-semibold text-blue-600"
                : "border-transparent text-gray-700 hover:text-blue-600"
            }`}
            aria-selected={activeTab === "reviews"}>
            Ulasan
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="text-gray-800 text-sm leading-relaxed">
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex gap-8 text-gray-700 md:flex-row flex-col">
            {/* Card rata-rata rating dan histogram dengan fixed height dan scroll jika overflow */}
            <div className="w-full md:w-1/4 border rounded-lg p-5 shadow-lg bg-white max-h-[250px]">
              <div className="flex items-center space-x-2 mb-3">
                <div className="text-3xl font-bold text-yellow-500 leading-none">
                  {averageRating.toFixed(1)}
                </div>
                <div className="mt-1 text-gray-500 text-sm select-none">/5</div>
              </div>
              <div className="text-xs text-gray-600 mb-6">
                {reviewsData.length} rating • {reviewsData.length} ulasan
              </div>
              <div>
                {ratingDistribution.map(({ star, count }) => {
                  const percent = reviewsData.length
                    ? (count / reviewsData.length) * 100
                    : 0;
                  return (
                    <div
                      key={star}
                      className="flex items-center space-x-2 mb-2 text-xs select-none">
                      <div className="w-8 text-right text-yellow-500 font-semibold">
                        {star} <span>★</span>
                      </div>
                      <div className="flex-1 h-3 bg-gray-200 rounded overflow-hidden">
                        <div
                          className="h-3 bg-yellow-400 rounded"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="w-8 text-right tabular-nums">{count}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Daftar ulasan */}
            <div className="flex-1 space-y-6">
              {/* Filter Rating */}
              <h2 className="text-lg font-bold">ULASAN PEMBELI</h2>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    filterRating === "all"
                      ? "bg-blue-600 text-white"
                      : "border border-gray-300"
                  }`}
                  onClick={() => setFilterRating("all")}>
                  Semua Ulasan
                </button>
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full ${
                      filterRating === star
                        ? "bg-blue-600 text-white"
                        : "border border-gray-300"
                    }`}
                    onClick={() => setFilterRating(star)}>
                    <svg
                      className="text-yellow-400 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.92-.755 1.688-1.54 1.118l-3.39-2.461a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.117l1.287-3.967a1 1 0 00-.364-1.118L2.03 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    <span>{star}</span>
                  </button>
                ))}
              </div>
              <div className="space-y-6">
                {filteredReviews.length === 0 && (
                  <p className="text-gray-500 text-sm">
                    Tidak ada ulasan untuk rating ini.
                  </p>
                )}
                {filteredReviews.map(({ id, name, rating, date, comment }) => (
                  <div key={id} className="border-b border-gray-300 pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      {/* Icon user bisa pakai placeholder lingkaran */}
                      <div className="w-10 h-10 rounded-full bg-gray-300" />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {name}
                        </div>
                        <div className="text-xs text-gray-500">{date}</div>
                        <div className="flex mt-1 text-yellow-400 text-sm">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < rating ? "★" : "☆"}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {comment}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Selanjutnya bisa ditambahkan jika ingin paginasi */}
              <div className="flex justify-end">
                <button className="text-gray-400 text-sm font-semibold hover:underline mt-3">
                  Selanjutnya &gt;
                </button>
              </div>
            </div>
          </div>
        )}
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
