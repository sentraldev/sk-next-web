"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import ArticleListItemView, {
  ArticleListItemSkeleton,
} from "./ArticleListItemView";

// Uses ApiBlog from src/models/api.d.ts

export default function ArticlePage() {
  const [articles, setArticles] = useState<ApiBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    (async () => {
      if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
        await new Promise((r) => setTimeout(r, 1000));
      }
      fetchData<ApiBlog[]>("/api/v1/blogs", "GET")
        .then(({ data }) => {
          if (!cancelled) setArticles(data);
        })
        .catch((err) => {
          console.error("Failed to fetch blogs", err);
          if (!cancelled) setError("Gagal memuat artikel.");
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="content-width mx-auto py-6">
          {/* Title */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-zinc-900">Artikel</h2>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Grid List - mimic promos list layout */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <ArticleListItemSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-12">{error}</div>
          ) : articles.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              Belum ada artikel saat ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-4">
              {articles.map((blog) => (
                <ArticleListItemView key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
