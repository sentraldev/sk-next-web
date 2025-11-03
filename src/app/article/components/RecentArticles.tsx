"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchData } from "@/utils/api";

export default function RecentArticles({
  excludeSlug,
}: {
  excludeSlug?: string;
}) {
  const [items, setItems] = useState<ApiBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchData<ApiBlog[]>("/api/v1/blogs/recent", "GET")
      .then(({ data }) => {
        if (cancelled) return;
        const filtered = excludeSlug
          ? data.filter((b) => b.slug !== excludeSlug)
          : data;
        setItems(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch recent blogs", err);
        if (!cancelled) setError("Gagal memuat artikel terkait.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [excludeSlug]);

  return (
    <aside className="md:col-span-1">
      <div className="border-b border-gray-700 mb-6">
        <h2 className="text-xl font-bold mb-5">Baca Artikel Lainnya</h2>
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
        {loading &&
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="block rounded-xl overflow-hidden bg-white">
              <div className="aspect-video w-full bg-gray-100 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse" />
                <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          ))}

        {!loading &&
          items.map((r) => (
            <Link
              key={r.id}
              href={`/article/${r.slug}`}
              className="block rounded-xl overflow-hidden bg-white transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={r.image_url}
                  alt={r.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="py-2">
                <div className="text-xs font-bold text-gray-500 mb-1 flex items-center gap-2">
                  {/* <span>{formatDate(r.created_at)}</span> */}
                  {r.category?.name && (
                    <span className="items-center text-primary-900">
                      {r.category.name}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold leading-snug line-clamp-2 hover:text-zinc-700 transition">
                  {r.title}
                </h3>
              </div>
            </Link>
          ))}

        {!loading && items.length === 0 && (
          <div className="text-sm text-gray-500">
            Tidak ada artikel terkait.
          </div>
        )}
      </div>
    </aside>
  );
}
