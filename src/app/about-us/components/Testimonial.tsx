import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  name: string;
  subtitle: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mochammad Asep Nazmudin",
    subtitle: "Sentral Komputer Bogor",
    rating: 5,
    text: "Bought Lenovo Legion in 2022, after 2.5 years it had an issue. Brought it for official warranty, staff were friendly, process fast, everything explained clearly. Laptop repaired hassle free, top service.",
    avatarUrl: "../../temp/asep.png",
  },
  {
    name: "Poetri Monalia",
    subtitle: "Sentral Komputer Citos",
    rating: 5,
    text: "We came to find a basic laptop for the kids, staff offered 5–6 options with specs. Technician also helped install Microsoft Office included in the bundle. Helpful and informative service.",
    avatarUrl: "../../temp/poetri.png",
  },
  {
    name: "Galih Satriya Praptama",
    subtitle: "Sentral Service",
    rating: 5,
    text: "Servis jujur, menyampaikan kondisi apa adanya, ngasih opsi dulu untuk solusi perbaikan. Sukses selalu, terima kasih!",
    // tanpa avatar -> otomatis pakai inisial
  },
  {
    name: "Adhitya Priady",
    subtitle: "Adhitya Priady",
    rating: 5,
    text: "Pelayanannya TOP. Dari dibongkar, dijelaskan masalah + solusi, lalu dirakit rapi lagi. Excellent service.",
    avatarUrl: "../../temp/adhitya.png",
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
    return (
        <section className="relative bg-[#FAFAFA] py-8 overflow-hidden">
              <div className="text-center mb-12">
                <h2 className="text-[40px] lg:text-4xl md:text-3xl xs:text-xl font-extrabold text-zinc-900">
                  Apa Kata Mereka Tentang Kami
                </h2>
              </div>
              <div className="relative content-width mx-auto">
                {/* Fade kiri/kanan */}
                <div
                  aria-hidden
                  className="pointer-events-none hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"
                />
                <div
                  aria-hidden
                  className="pointer-events-none hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"
                />
                {/* fade kiri/kanan biar mirip desain */}
                <Slider
                  className="client-slider"
                  dots={false}
                  infinite={true}
                  speed={500}
                  autoplay
                  autoplaySpeed={3500}
                  slidesToShow={4}
                  slidesToScroll={1}
                  arrows={false}
                  responsive={[
                    { breakpoint: 1280, settings: { slidesToShow: 3 } },
                    { breakpoint: 1024, settings: { slidesToShow: 2 } },
                    { breakpoint: 640, settings: { slidesToShow: 1 } },
                    { breakpoint: 320, settings: { slidesToShow: 1 } },
                  ]}>
                  {testimonials.map((t, idx) => (
                    <div key={idx} className="h-full px-3 flex items-stretch">
                      <article className="bg-white rounded-2xl border  shadow-[0_3px_10px_rgba(0,0,0,0.07)] p-6 flexjustify-between content-width mx-auto h-[210px] lg:h-[230px] xs:h-[250px]">
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
                </Slider>
              </div>
            </section>
    );
}