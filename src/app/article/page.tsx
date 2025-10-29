"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import React from "react";

interface ArticleItem {
  id: number;
  title: string;
  period: string;
  imageUrl: string;
}

const articles: ArticleItem[] = [
  {
    id: 1,
    title: "RAMADAN BLESSINGS PROMO, Free GoPay up to 300k!",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "/temp/promo1.png",
  },
  {
    id: 2,
    title: "Free backpack dan mouse logitech untuk setiap pembelian laptop",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "/temp/promo2.png",
  },
  {
    id: 3,
    title: "PROMO LENOVO SPESIAL RAMADAN",
    period: "29 Februari 2025 - 31 Maret 2025",
    imageUrl: "/temp/promo2.png",
  },
  {
    id: 4,
    title: "MSI GAMING PROMO BULAN INI",
    period: "26 Februari 2025 - 10 Maret 2025",
    imageUrl: "/temp/promo2.png",
  },
  {
    id: 5,
    title: "DISKON AKHIR BULAN - UP TO 50%",
    period: "1 Maret 2025 - 31 Maret 2025",
    imageUrl: "/temp/promo2.png",
  },
];

export default function ArticlePage() {
  return (
    <>
      <Header />

      <section className="content-width mx-auto py-6">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-zinc-900">Artikel</h2>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {articles.map((item) => (
            <Link
              key={item.id}
              href={`/article/${item.id}`}
              className="block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm text-zinc-900 line-clamp-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">Periode: {item.period}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
