"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";
import Link from "next/link";

interface PromoItem {
  id: number;
  title: string;
  period: string;
  imageUrl: string;
}

const promoWebsite: PromoItem[] = [
  {
    id: 1,
    title: "RAMADAN BLESSINGS PROMO, Free GoPay up to 300k!",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo1.png", // ganti dengan URL gambar yang sesuai
  },
  {
    id: 2,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo2.png",
  },
  {
    id: 3,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo2.png",
  },
  {
    id: 4,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo2.png",
  },
  {
    id: 5,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo2.png",
  },
  // Bisa tambah promo lain sesuai kebutuhan
];

const promoStore: PromoItem[] = [
  {
    id: 11,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "../../temp/promo1.png",
  },
  {
    id: 12,
    title: "Promo spesial toko Sentral Komputer bulan ini",
    period: "01 Januari 2025 - 31 Januari 2025",
    imageUrl: "../../temp/promo2.png",
  },
  // Bisa tambah promo lain sesuai kebutuhan
];

export default function PromoPage() {
  const [activeTab, setActiveTab] = useState<"website" | "store">("website");

  const currentPromos = activeTab === "website" ? promoWebsite : promoStore;

  return (
    <>
    <Header />
    
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex border-b border-gray-300 mb-6">
        <button
          className={`px-6 py-3 font-semibold ${
            activeTab === "website"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("website")}
        >
          Promo Website
        </button>
        <button
          className={`px-6 py-3 font-semibold ${
            activeTab === "store"
              ? "border-b-4 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }`}
          onClick={() => setActiveTab("store")}
        >
          Promo Toko
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPromos.map((promo) => (
          <Link key={promo.id} href={`/promos/${promo.id}`} className="block border rounded shadow-sm overflow-hidden hover:shadow-lg transition-shadow bg-white">
            <div className="overflow-hidden">
              <img
                src={promo.imageUrl}
                alt={promo.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h6 className="font-semibold mb-2 text-sm line-clamp-2">
                {promo.title}
              </h6>
              <p className="text-sm text-gray-500">Periode : {promo.period}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
  </>
  );
}
