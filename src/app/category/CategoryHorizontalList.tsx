"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchData } from "@/utils/api";

type Category = {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  created_at?: string;
  updated_at?: string;
};

const CategoryHorizontalList: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await fetchData<Category[]>(
          "/api/v1/categories",
          "GET"
        );
        if (!mounted) return;
        setCategories(Array.isArray(data) ? data : []);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message || "Gagal memuat kategori");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="content-width mx-auto px-4 py-4">
        <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-3" />
        <div className="flex gap-3 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-28">
              <div className="w-28 h-28 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded mt-2 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-width mx-auto px-4 py-4 text-red-600">
        {error}
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="content-width mx-auto  py-6 w-full">
      <h2 className="text-xl md:text-2xl font-bold">Kategori</h2>
      <div className="relative flex justify-between overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent py-1 px-4">
        {categories.map((cat, index) => (
          <React.Fragment key={cat.id}>
            {/* Category item */}
            <div className="flex flex-col items-center flex-shrink-0 w-28 md:w-32">
              <Link
                href={`/category/${encodeURIComponent(cat.slug)}`}
                className="flex flex-col items-center group">
                <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center overflow-hidden">
                  {cat.image ? (
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={128}
                      height={128}
                      className="object-contain w-full h-full transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-gray-400 text-sm">No Image</div>
                  )}
                </div>
                <div className="mt-2 text-center text-sm text-gray-700 line-clamp-1 w-full">
                  {cat.name}
                </div>
              </Link>
            </div>

            {/* Divider — except after last item */}
            {index < categories.length - 1 && (
              <div className=" top-6 bottom-6 w-px bg-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CategoryHorizontalList;
