"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/utils/api";

const PreferredBrandList = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetchData<Brand[]>("api/v1/brands", "GET");
        if (!mounted) return;
        setBrands(Array.isArray(res.data) ? res.data : []);
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message || "Gagal memuat brand");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Update arrow visibility based on scroll position
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanLeft(scrollLeft > 0);
      setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", update as any);
      window.removeEventListener("resize", onResize);
    };
  }, [brands.length]);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(200, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="content-width mx-auto py-4">
        <div className="flex gap-3 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-28 flex-shrink-0 rounded-md border border-gray-200 p-3 bg-white animate-pulse">
              <div className="w-16 h-10 bg-gray-200 rounded mx-auto" />
              <div className="h-3 bg-gray-200 rounded mt-3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-width mx-auto py-4 text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!brands.length) return null;

  return (
    <section className="content-width mx-auto py-8 w-full flex flex-col gap-4">
      <div className="">
        <h3 className="text-xl md:text-2xl font-bold">Brand Pilihan</h3>
      </div>
      <div className="relative bg-[#EDEDED] rounded-md shadow">
        {/* Left/Right scroll buttons (desktop+) */}
        {canLeft && (
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount("left")}
            className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full shadow bg-white border border-gray-200 hover:bg-gray-50 transition">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {canRight && (
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount("right")}
            className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full shadow bg-white border border-gray-200 hover:bg-gray-50 transition">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x scroll-smooth p-4">
          {brands.map((b) => {
            const logo = b.logo || "/images/brands/placeholder.png";
            return (
              <Link
                key={b.id}
                href={`/brands/${b.slug}`}
                className="group flex-shrink-0 w-28 snap-start"
                title={b.name}>
                <div className="rounded-md border border-gray-200 bg-white p-3 h-full flex flex-col items-center">
                  <div className="w-full h-[48px] flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={b.name}
                      width={120}
                      height={40}
                      className="object-contain max-h-10"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreferredBrandList;
