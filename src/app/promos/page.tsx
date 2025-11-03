"use client";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useMemo, useState } from "react";
import { fetchData } from "../../utils/api";
import PromoListItemView, { PromoListItemSkeleton } from "./PromoListItemView";

export default function PromoPage() {
  const [activeTab, setActiveTab] = useState<"website" | "store">("website");
  const [promos, setPromos] = useState<ApiPromo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        // Simulate delay for testing in non-production environments
        if (process.env.NEXT_PUBLIC_APP_ENV !== "production") {
          await new Promise((r) => setTimeout(r, 1000));
        }
        const res = await fetchData<ApiPromo[]>("api/v1/promos", "GET", {
          params: {
            // website tab => online, store tab => offline
            location: activeTab === "website" ? "online" : "offline",
          },
        });
        if (!mounted) return;
        setPromos(Array.isArray(res.data) ? res.data : []);
        setError(null);
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message || "Gagal memuat promo");
        setPromos([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [activeTab]);

  const currentPromos = useMemo(() => promos, [promos]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="content-width mx-auto py-6">
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`px-6 py-3 font-semibold ${
                activeTab === "website"
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("website")}>
              Promo Website
            </button>
            <button
              className={`px-6 py-3 font-semibold ${
                activeTab === "store"
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab("store")}>
              Promo Toko
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PromoListItemSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-12">{error}</div>
          ) : currentPromos.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              Belum ada promo saat ini.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-4">
              {currentPromos.map((promo) => (
                <PromoListItemView key={promo.id} promo={promo} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
