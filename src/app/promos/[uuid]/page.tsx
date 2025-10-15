import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";

interface PromoDetailProps {
  id: number;
  title: string;
  period: string;
  imageUrl: string;
  description: string;
}

const promoDetails: Record<number, PromoDetailProps> = {
  1: {
    id: 1,
    title: "RAMADAN BLESSINGS PROMO, Free GoPay up to 300k!",
    period: "1 March 2025 - 31 March 2025",
    imageUrl: "/temp/promo1.png",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices maulis. Maecenas vitae mattis nulla. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus et sodales sodales. Quisque sagittis orci ut leo massa.`,
  },
};

interface DetailPageProps {
  params: Promise<{ uuid: string }>;
}

export default async function PromoDetail({ params }: DetailPageProps) {
  const resolvedParams = await params; // Await the params Promise
  console.log("Resolved Params:", resolvedParams); // Debug: Log the resolved params
  console.log("Route param uuid:", resolvedParams.uuid);

  // Handle case where params.uuid is undefined or invalid
  if (!resolvedParams.uuid || isNaN(Number(resolvedParams.uuid))) {
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

  const id = Number(resolvedParams.uuid);
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
          items={[{ label: "Promo", href: "/promos" }, { label: promo.title }]}
        />
        <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
          <img
            src={promo.imageUrl}
            alt={promo.title}
            className="w-full object-cover"
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

export async function generateStaticParams() {
  return Object.keys(promoDetails).map((id) => ({
    uuid: id,
  }));
}
