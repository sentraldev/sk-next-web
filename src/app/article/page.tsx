"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { formatDate } from "@/utils/dateFormatter";

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
    <>
      <Header />

      <section className="content-width mx-auto py-6">
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-zinc-900">Artikel</h2>
        </div>

        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 8 }) : articles).map((item, idx) => {
            if (loading) {
              return (
                <div
                  key={idx}
                  className="block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md">
                  <div className="aspect-[16/9] bg-gray-100 animate-pulse" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                    <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" />
                  </div>
                </div>
              );
            }

            const blog = item as ApiBlog;
            return (
              <Link
                key={blog.id}
                href={`/article/${blog.slug}`}
                className="block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm text-zinc-900 line-clamp-2 mb-1">
                    {blog.title}
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <span>{formatDate(blog.created_at)}</span>
                    {blog.category?.name && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {blog.category.name}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
