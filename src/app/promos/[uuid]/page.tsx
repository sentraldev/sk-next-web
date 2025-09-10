"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";

interface PromoDetailProps {
  id: number;
  title: string;
  period: string;
  imageUrl: string;
  description: string;
}

// Contoh data dummy untuk promo detail
const promoDetails: Record<number, PromoDetailProps> = {
  1: {
    id: 1,
    title: "RAMADAN BLESSINGS PROMO, Free GoPay up to 300k!",
    period: "31 Februari 2025 - 42 Maret 2025",
    imageUrl: "/temp/promo1.png", // Gunakan path relatif dari public folder
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices maulis. Maecenas vitae mattis nulla. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus et sodales sodales. Quisque sagittis orci ut leo massa.`,
  },
  // Tambahkan promo lain sesuai kebutuhan
};

interface DetailPageProps {
  params: {
    uuid: string;
  };
}

export default function PromoDetail({ params }: DetailPageProps) {
  console.log("Route param id:", params.uuid);

  // Pastikan parsing id berhasil
  const id = Number(params.uuid);
  if (isNaN(id)) {
    return (
      <>
        <Header />
        <div className="max-w-screen-xl mx-auto p-6">
          <p className="text-center text-red-600">ID promo tidak valid.</p>
        </div>
        <Footer />
      </>
    );
  }

  const promo = promoDetails[id];

  if (!promo) {
    return (
      <>
        <Header />
        <div className="max-w-screen-xl mx-auto p-6">
          <p className="text-center text-red-600">Promo tidak ditemukan.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
        <Header />
        
        <div className="max-w-screen-xl mx-auto">
            <Breadcrumb
                items={[
                { label: "Promo", href: "/promos" },
                { label: promo.title },
                ]}
            />
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
            <img
                src={promo.imageUrl}
                alt={promo.title}
                className="w-full object-fit"
                style={{ maxHeight: 550 }}
            />
            </div>

            <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-2">Promo Website</p>
            <h2 className="text-2xl font-bold mb-2">{promo.title}</h2>
            <p className="text-gray-500 text-sm">Periode {promo.period}</p>
            </div>

            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
            {promo.description}
            </div>
        </div>

        <Footer />
    </>
  );
}
