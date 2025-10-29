"use client";

import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

type RelatedItem = {
  id: number;
  title: string;
  date: string;
  img: string;
};

type ArticleData = {
  id: number;
  title: string;
  date: string;
  category?: string;
  heroImage?: string;
  body?: string; // HTML dari CMS
  related?: RelatedItem[];
};

export default function ArticleDetail({ uuid }: { uuid?: string }) {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(uuid));
  const [error, setError] = useState<string | null>(null);

  // Data fallback bila fetch gagal
  const fallback: ArticleData = {
    id: 1,
    title: "RAMADAN BLESSINGS PROMO, Free GoPay up to 300k!",
    date: "31 Februari 2025",
    category: "Hardware Komputer",
    heroImage: "/temp/promo1.png",
    body: `
      <p><strong>Intel® Core™ Ultra 7</strong> unlocks new AI experience on Intel® “Evo™” Edition.</p>
      <p>Free GoPay up to IDR 300K & Free Merchandise. Periode 11–31 Maret 2025.</p>
      <p>Klaim di <a href="https://promosi.sentralkomputer.com" class="text-blue-600 underline">promosi.sentralkomputer.com</a> atau kunjungi cabang Sentral Komputer terdekat.<br>Syarat dan ketentuan berlaku.</p>
    `,
    related: [
      {
        id: 1,
        title: "PROMO LENOVO SPESIAL RAMADAN",
        date: "29 Februari 2025",
        img: "/temp/promo1.png",
      },
      {
        id: 2,
        title: "ASUS AI LAPTOP SERIES HADIR",
        date: "28 Februari 2025",
        img: "/temp/promo1.png",
      },
      {
        id: 3,
        title: "MSI GAMING PROMO BULAN INI",
        date: "27 Februari 2025",
        img: "/temp/promo1.png",
      },
      {
        id: 4,
        title: "DISKON AKHIR BULAN",
        date: "26 Februari 2025",
        img: "/temp/promo1.png",
      },
    ],
  };

  useEffect(() => {
    if (!uuid) {
      setArticle(fallback);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    // fetch API backend berdasarkan uuid
    fetch(`/api/articles/${encodeURIComponent(uuid)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as ArticleData;
        if (!cancelled) {
          setArticle(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to load article", err);
        if (!cancelled) {
          setError("Gagal memuat artikel. Menampilkan konten cadangan.");
          setArticle(fallback);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [uuid]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="h-64 bg-gray-200 rounded" />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const a = article ?? fallback;

  return (
    <>
      <Header />

      <section className="content-width mx-auto px-6 py-6">
       <Breadcrumb
                 items={[
                   { label: "Artikel", href: "/article" },
                   { label: a.title },
                 ]}
               />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ===== KIRI: KONTEN ARTIKEL ===== */}
          <article className="md:col-span-3">
            <header className="mb-5">
              <h1 className="text-xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
                {a.title}
              </h1>
            </header>
            <div className="text-sm font-bold text-gray-500 mb-3 leading-6">
              {a.category ?? "Artikel"} <br /> <time className="font-normal italic">{a.date}</time>
            </div>

            {a.heroImage && (
              <figure className="w-full rounded-xl overflow-hidden mb-6">
                <img
                  src={a.heroImage}
                  alt={a.title}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="eager"
                />
              </figure>
            )}

            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: a.body ?? "<p>-</p>" }}
            />
          </article>

          {/* RIGHT: RELATED ARTICLES */}
          <aside className="md:col-span-1">
            <div className="border-b border-gray-700 mb-6">
              <h2 className="text-xl font-bold mb-5">Baca Artikel Lainnya</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {(a.related ?? []).map((r) => (
                <a
                  key={r.id}
                  href={`/article/${r.id}`}
                  className="block rounded-xl overflow-hidden bg-white transition-shadow duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      className="w-full h-full object-cover transform transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-gray-500 mb-1">{r.date}</div>
                    <h3 className="text-sm font-bold  leading-snug line-clamp-2 hover:text-zinc-700 transition">
                      {r.title}
                    </h3>
                  </div>
                </a>
              ))}

              {(!a.related || a.related.length === 0) && (
                <div className="text-sm text-gray-500">Tidak ada artikel terkait.</div>
              )}
            </div>

          </aside>

        </div>

        {/* {error && (
          <div className="mt-6 text-sm text-yellow-700 bg-yellow-50 p-3 rounded">
            {error}
          </div>
        )} */}
      </section>

      <Footer />
    </>
  );
}
