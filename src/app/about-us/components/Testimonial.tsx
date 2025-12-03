import React, { useState, useEffect } from "react";

import { Carousel } from "antd";

type Testimonial = {
  name: string;
  subtitle: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ain Luthfiannisa",
    subtitle: "Sentral Komputer Karawang",
    rating: 5,
    text: "Tempatnya nyaman, pelayannya sangat baik dan ramah, pelayannya memberikan rekomendasi sesuai dengan yang kita butuhkan, pokokny sangat rekomendasi beli laptop di tempat ini.",
    avatarUrl: "/images/testimonial/ain.png",
  },
  {
    name: "Galih Satriya Praptama",
    subtitle: "Sentral Service",
    rating: 5,
    text: "Dateng kesini dari Tikto. Servis jujur, menyampaikan kondisi laptop apa adanya, engga ada ngada - ngada, ngasih opsi dahulu untuk solusi perbaikan. Sukses selalu. Thanks Kak.",
  },
  {
    name: "Jihan Nurul Afifah",
    subtitle: "Sentral Komputer Purwakarta",
    rating: 5,
    text: "Engga perlu diragukan lagi. Laptopnya keren dan berkualitas semua. Bonusnya super banyak, kalau bingung kemana, kesini aja, engga akan bingung karena langsung disarankan sama kakak salesnya.",
  },
  {
    name: "Adhitya Priady",
    subtitle: "Adhitya Priady",
    rating: 5,
    text: "Pelayanannya TOP. Dari dibongkar sampai dijelasin permasalahannya + solusi, terus dirakit lagi. Thanks Sentral Service for excellent service 👍🏻👍🏻👍🏻",
    avatarUrl: "/images/testimonial/adhitya.png",
  },
  {
    name: "Mochammad Asep Nazmudin",
    subtitle: "Sentral Komputer Bogor",
    rating: 5,
    text: "Bought Lenovo Legion in 2022, after 2.5 years it had an issue. Brought it for official warranty, staff were friendly, process fast, everything explained clearly. Laptop repaired hassle free, top service.",
    avatarUrl: "/images/testimonial/asep.png",
  },
  {
    name: "Joana Nainggolan",
    subtitle: "Sentral Service Serang",
    rating: 5,
    text: "Sangat puas disini proses pengecekan cepat dan teknisinya sangat komunikatif. Waktu pengerjaansesuai yang dijanjikan, bahkan selesai lebih cepat. Sangat direkomendasikan untuk yang butuh service laptop yang terpercaya.",
  },
  {
    name: "Poetri Monalia",
    subtitle: "Sentral Komputer Citos",
    rating: 5,
    text: "We came to find a basic laptop for the kids, staff offered 5-6 options with specs. A technician also helped install Microsoft Office included in the bundle. Very helpful and informative service.",
    avatarUrl: "/images/testimonial/poetri.png",
  },
  {
    name: "Ali Kamil",
    subtitle: "Sentral Service",
    rating: 5,
    text: "First experience overall melebihi ekspektasi. Pilihan produk pun banyak, recommend place untuk beli laptop juga accessories buat device kalian, bintang lima untuk pelayanannya.",
  },
];

function Avatar({ name, url }: { name: string; url?: string }) {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() || "U";
  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-200 ring-2 ring-white">
      {url ? (
        // pakai <img> biar konsisten dengan file lain
        <img src={url} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-700">
          {initial}
        </div>
      )}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} dari 5 bintang`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 lg:h-4 lg:w-4 ${
            i < count ? "fill-amber-400" : "fill-zinc-300"
          }`}
          aria-hidden="true">
          <path d="M10 1.5l2.59 5.25 5.8.84-4.2 4.09.99 5.77L10 14.97l-5.18 2.48.99-5.77-4.2-4.09 5.8-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full md:content-width mx-auto relative bg-[#FAFAFA] py-4 md:py-8 overflow-hidden">
      <div className="text-center mb-6 md:mb-12">
        <h2 className="text-[40px] lg:text-4xl md:text-3xl xs:text-xl font-extrabold text-zinc-900">
          Apa Kata Mereka Tentang Kami
        </h2>
      </div>
      <div className="relative content-width mx-auto w-full">
        {isMobile ? (
          <Carousel
            autoplay={true}
            dots={true}
            infinite={true}
            autoplaySpeed={5000}
            dotPosition="bottom"
            arrows={false}
            className="">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex justify-center my-2">
                <article className="bg-white rounded-2xl border p-6 flex flex-col w-full h-[220px] flex-shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar name={t.name} url={t.avatarUrl} />
                    <div>
                      <h3 className="font-bold text-zinc-900 text-base lg:text-sm md:text-xs">
                        {t.name}
                      </h3>
                      <p className="text-sm text-zinc-500 lg:text-xs">
                        {t.subtitle}
                      </p>
                    </div>
                  </div>

                  <Stars count={t.rating} />

                  <p className="mt-3 text-xs lg:text-[11px] xs:text-xs font-medium break-words">
                    {t.text}
                  </p>
                </article>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex overflow-x-auto flex-nowrap gap-4 pb-4 px-2">
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border shadow-[0_3px_10px_rgba(0,0,0,0.07)] p-6 flex flex-col w-80 h-[220px] flex-shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar name={t.name} url={t.avatarUrl} />
                  <div>
                    <h3 className="font-bold text-zinc-900 text-base lg:text-sm md:text-xs">
                      {t.name}
                    </h3>
                    <p className="text-sm text-zinc-500 lg:text-xs">
                      {t.subtitle}
                    </p>
                  </div>
                </div>

                <Stars count={t.rating} />

                <p className="mt-3 text-xs lg:text-[11px] xs:text-xs font-medium break-words">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
