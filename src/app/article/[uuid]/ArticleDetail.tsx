"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { fetchData } from "@/utils/api";
import { formatDate } from "@/utils/dateFormatter";
import RecentArticles from "../components/RecentArticles";

export default function ArticleDetail({ uuid }: { uuid?: string }) {
  const [article, setArticle] = useState<ApiBlogDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(Boolean(uuid));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!uuid) {
      setError("Artikel tidak ditemukan.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    // fetch detail only; recent list handled by RecentArticles component
    fetchData<ApiBlogDetail>(`/api/v1/blogs/${encodeURIComponent(uuid)}`, "GET")
      .then(({ data }) => {
        if (!cancelled) setArticle(data);
      })
      .catch((err) => {
        console.error("Failed to load blog detail", err);
        if (!cancelled) setError("Gagal memuat artikel.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
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

  const a = article;

  return (
    <>
      <Header />

      <section className="content-width mx-auto px-6 py-6">
        <Breadcrumb
          items={[
            { label: "Artikel", href: "/article" },
            { label: a?.title ?? "Detail" },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ===== KIRI: KONTEN ARTIKEL ===== */}
          <article className="md:col-span-3">
            <header className="mb-5">
              <h1 className="text-xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-zinc-900 leading-tight">
                {a?.title ?? "-"}
              </h1>
            </header>
            <div className="text-sm font-bold text-gray-500 mb-3 leading-6 border-b pb-4 mb-6">
              {a?.category?.name ?? "Artikel"} <br />{" "}
              <time className="font-normal italic">
                {a ? formatDate(a.created_at) : "-"}
              </time>
            </div>

            {a?.image_url && (
              <figure className="w-full rounded-xl overflow-hidden mb-6">
                <img
                  src={a.image_url}
                  alt={a.title}
                  className="w-full h-auto object-cover rounded-xl"
                  loading="eager"
                />
              </figure>
            )}

            <div
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{
                __html: a?.content_html ?? "<p>-</p>",
              }}
            />
          </article>

          {/* RIGHT: RELATED ARTICLES */}
          <RecentArticles excludeSlug={""} />
        </div>

        {error && (
          <div className="mt-6 text-sm text-yellow-700 bg-yellow-50 p-3 rounded">
            {error}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
