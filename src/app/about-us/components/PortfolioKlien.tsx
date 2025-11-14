import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Definisikan tipe kategori dengan string literal union
type CategoryId = "pengadaan" | "perusahaan" | "organisasi";

// Data kategori dengan tipe yang jelas agar TypeScript tahu key valid
const categories: { id: CategoryId; label: string }[] = [
  { id: "pengadaan", label: "Pengadaan" },
  { id: "perusahaan", label: "Perusahaan" },
  { id: "organisasi", label: "Organisasi dan Sekolah" },
];

// Data klien sesuai kategori, dengan tipe Record untuk key yang ketat
const clients: Record<
  CategoryId,
  { id: number; name: string; logo: string }[]
> = {
  pengadaan: [
    { id: 1, name: "SIPLAH", logo: "../../images/partners/siplah.png" },
    { id: 2, name: "KPP", logo: "../../images/partners/lkpp.png" },
    { id: 3, name: "Iplah", logo: "../../images/partners/siplah-blanja.png" },
  ],
  perusahaan: [
    { id: 4, name: "MIMS", logo: "../../images/partners/mims.png" },
    { id: 5, name: "suara.com", logo: "../../images/partners/suara-com.png" },
    { id: 6, name: "billboard", logo: "../../images/partners/billboard.png" },
    { id: 7, name: "adev", logo: "../../images/partners/adev.png" },
    {
      id: 8,
      name: "Angkasa Pura",
      logo: "../../images/partners/angkasa-pura.png",
    },
    { id: 9, name: "C21", logo: "../../images/partners/c21.png" },
    { id: 10, name: "HIS", logo: "../../images/partners/his.png" },
    { id: 11, name: "Izi Data", logo: "../../images/partners/izidata.png" },
    {
      id: 12,
      name: "Len Telekomunikasi",
      logo: "../../images/partners/len-telekomunikasi-indonesia.png",
    },
    { id: 13, name: "Matsuoka", logo: "../../images/partners/matsuoka.png" },
    { id: 14, name: "SKI", logo: "../../images/partners/ski.png" },
    { id: 15, name: "Telkom", logo: "../../images/partners/telkom-indonesia.png" },
    {
      id: 16,
      name: "Utama Gas Multiperkasa",
      logo: "../../images/partners/utama-gas-multiperkasa.png",
    },
    { id: 17, name: "Biosm", logo: "../../images/partners/biosm.png" },
    { id: 18, name: "tc", logo: "../../images/partners/tc.png" },
    {
      id: 19,
      name: "rosenberger",
      logo: "../../images/partners/rosenberger.png",
    },
    { id: 20, name: "indec", logo: "../../images/partners/indec.png" },
    { id: 21, name: "bsi", logo: "../../images/partners/bsi.png" },
    { id: 22, name: "bri", logo: "../../images/partners/bri.png" },
    {
      id: 23,
      name: "PT. Jaya Mitra Kemilau",
      logo: "../../images/partners/jaya-mitra-kemilau.png",
    },
    {
      id: 24,
      name: "Lintas Teknologi",
      logo: "../../images/partners/lintas-teknologi.png",
    },
    { id: 25, name: "Everwhite", logo: "../../images/partners/everwhite.png" },
    { id: 26, name: "Bank Bengkulu", logo: "../../images/partners/bank-bengkulu.png" },
    { id: 27, name: "Weststar Aviation Service", logo: "../../images/partners/weststar.png" },
    { id: 28, name: "GS Battery", logo: "../../images/partners/gs-battery.png" },
    { id: 29, name: "Bank Bengkulu", logo: "../../images/partners/tkm.png" },
    { id: 30, name: "Bank Bengkulu", logo: "../../images/partners/abe-kogyo.png" },
    { id: 31, name: "Bank Bengkulu", logo: "../../images/partners/rmp.png" },
    { id: 32, name: "Bank Bengkulu", logo: "../../images/partners/amurwa-international.png" },
    { id: 33, name: "Bank Bengkulu", logo: "../../images/partners/pertamina-ep.png" },
    { id: 34, name: "Bank Bengkulu", logo: "../../images/partners/so-indonesia.png" },
    { id: 35, name: "Bank Bengkulu", logo: "../../images/partners/pupuk-kujang.png" },
    { id: 36, name: "Bank Bengkulu", logo: "../../images/partners/ak.png" },
    { id: 37, name: "Bank Bengkulu", logo: "../../images/partners/genflix.png" },
    { id: 38, name: "Bank Bengkulu", logo: "../../images/partners/pizza-hut.png" },
    { id: 39, name: "Bank Bengkulu", logo: "../../images/partners/surya-mas-perkasa.png" },
    { id: 40, name: "Bank Bengkulu", logo: "../../images/partners/sg.png" },
    { id: 41, name: "Bank Bengkulu", logo: "../../images/partners/gong-cha.png" },
    { id: 42, name: "Bank Bengkulu", logo: "../../images/partners/indonesia-technical-machinery.png" },
    { id: 43, name: "Bank Bengkulu", logo: "../../images/partners/bge.png" },
    { id: 44, name: "Bank Bengkulu", logo: "../../images/partners/ekp.png" },
    { id: 45, name: "Bank Bengkulu", logo: "../../images/partners/bio.png" },
    { id: 46, name: "Bank Bengkulu", logo: "../../images/partners/century.png" },
    { id: 47, name: "Bank Bengkulu", logo: "../../images/partners/pku.png" },
    { id: 48, name: "Bank Bengkulu", logo: "../../images/partners/at-indonesia.png" },
    { id: 49, name: "Bank Bengkulu", logo: "../../images/partners/harvest-ariake-indonesia.png" },
    { id: 50, name: "Bank Bengkulu", logo: "../../images/partners/asuransi-ramayana.png" },
    { id: 51, name: "Bank Bengkulu", logo: "../../images/partners/kimia-farma.png" },
    { id: 52, name: "Bank Bengkulu", logo: "../../images/partners/hkmu.png" },
    { id: 53, name: "Bank Bengkulu", logo: "../../images/partners/oozx.png" },
    { id: 54, name: "Bank Bengkulu", logo: "../../images/partners/tecso.png" },
    { id: 55, name: "Bank Bengkulu", logo: "../../images/partners/dipa.png" },
    { id: 56, name: "Bank Bengkulu", logo: "../../images/partners/fuji.png" },
    { id: 57, name: "Bank Bengkulu", logo: "../../images/partners/bukwang-textile.png" },
    { id: 58, name: "Bank Bengkulu", logo: "../../images/partners/ihara.png" },
    { id: 59, name: "Bank Bengkulu", logo: "../../images/partners/runh-power.png" },
    { id: 60, name: "Bank Bengkulu", logo: "../../images/partners/bpb.png" },
    { id: 61, name: "Bank Bengkulu", logo: "../../images/partners/skp.png" },
    { id: 62, name: "Bank Bengkulu", logo: "../../images/partners/baking-world-id.png" },
    { id: 63, name: "Bank Bengkulu", logo: "../../images/partners/astra-infra.png" },
    { id: 64, name: "Bank Bengkulu", logo: "../../images/partners/pum.png" },
    { id: 65, name: "Bank Bengkulu", logo: "../../images/partners/pratama.png" },
    { id: 66, name: "Bank Bengkulu", logo: "../../images/partners/truefriend.png" },
    { id: 67, name: "Bank Bengkulu", logo: "../../images/partners/schema.png" },
    { id: 68, name: "Bank Bengkulu", logo: "../../images/partners/seal-mart.png" },
    { id: 69, name: "Bank Bengkulu", logo: "../../images/partners/gadar-medik-indonesia.png" },
    { id: 70, name: "Bank Bengkulu", logo: "../../images/partners/danamas.png" },
    { id: 71, name: "Bank Bengkulu", logo: "../../images/partners/lnet.png" },
    { id: 72, name: "Bank Bengkulu", logo: "../../images/partners/delta-ultracon.png" },
    { id: 73, name: "Bank Bengkulu", logo: "../../images/partners/buana-inovasi-persada.png" },
    { id: 74, name: "Bank Bengkulu", logo: "../../images/partners/bank-sultra.png" },
    { id: 75, name: "Bank Bengkulu", logo: "../../images/partners/cnm.png" },
    { id: 76, name: "Bank Bengkulu", logo: "../../images/partners/askrindo-insurance.png" },
    { id: 77, name: "Bank Bengkulu", logo: "../../images/partners/nuri.png" },
    { id: 78, name: "Bank Bengkulu", logo: "../../images/partners/nissin.png" },
    { id: 79, name: "Bank Bengkulu", logo: "../../images/partners/megacon.png" },
    { id: 80, name: "Bank Bengkulu", logo: "../../images/partners/astra-international.png" },
    { id: 81, name: "Bank Bengkulu", logo: "../../images/partners/indodrill.png" },
    { id: 82, name: "Bank Bengkulu", logo: "../../images/partners/bank-bjb.png" },
    { id: 83, name: "Bank Bengkulu", logo: "../../images/partners/gpd-indonesia-pro.png" },
    { id: 84, name: "Bank Bengkulu", logo: "../../images/partners/roki-coltd.png" },
    { id: 85, name: "Bank Bengkulu", logo: "../../images/partners/tiga-tunas-selaras.png" },
    { id: 86, name: "Bank Bengkulu", logo: "../../images/partners/bni.png" },
    { id: 87, name: "Bank Bengkulu", logo: "../../images/partners/aaf-international.png" },
    { id: 88, name: "Bank Bengkulu", logo: "../../images/partners/uni-president.png" },
    { id: 89, name: "Bank Bengkulu", logo: "../../images/partners/ysi.png" },
    { id: 90, name: "Bank Bengkulu", logo: "../../images/partners/tpm.png" },
    { id: 91, name: "Bank Bengkulu", logo: "../../images/partners/century-21.png" },
    { id: 92, name: "Bank Bengkulu", logo: "../../images/partners/rk.png" },
    { id: 93, name: "Bank Bengkulu", logo: "../../images/partners/dowa.png" },
    { id: 94, name: "Bank Bengkulu", logo: "../../images/partners/cnaindo.png" },
    { id: 95, name: "Bank Bengkulu", logo: "../../images/partners/sgs.png" },
    { id: 96, name: "Bank Bengkulu", logo: "../../images/partners/marka-inspektindo-technical.png" },
    { id: 97, name: "Bank Bengkulu", logo: "../../images/partners/jilian.png" },
    { id: 98, name: "Bank Bengkulu", logo: "../../images/partners/hanatekindo.png" },
    { id: 99, name: "Bank Bengkulu", logo: "../../images/partners/denki.png" },
    { id: 100, name: "Bank Bengkulu", logo: "../../images/partners/patra-jasa.png" },
    { id: 101, name: "Bank Bengkulu", logo: "../../images/partners/monokem-surya.png" },
    { id: 102, name: "Bank Bengkulu", logo: "../../images/partners/pal-metalindo-perkasa.png" },
    { id: 103, name: "Bank Bengkulu", logo: "../../images/partners/graha-adhi-jaya-abadi.png" },
    { id: 104, name: "Bank Bengkulu", logo: "../../images/partners/chongro.png" },
  ],
  organisasi: [
    {
      id: 105,
      name: "Dinas Kesehatan",
      logo: "../../images/partners/dinkes.png",
    },
    {
      id: 106,
      name: "Kementerian Agama",
      logo: "../../images/partners/kementrian-agama.png",
    },
    {
      id: 107,
      name: "Kementerian Perindustrian",
      logo: "../../images/partners/kemenperin.png",
    },
    {
      id: 108,
      name: "Kementerian Ketenagakerjaan",
      logo: "../../images/partners/kementrian-ketenagakerjaan.png",
    },
    {
      id: 109,
      name: "LAPSPI",
      logo: "../../images/partners/lapspi.png",
    },
    {
      id: 110,
      name: "Institut Pertanian Bogor",
      logo: "../../images/partners/institut-pertanian-bogor.png",
    },
  ],
};


  // Slider settings for desktop/tablet
  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    centerPadding: "300px",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: { centerPadding: "200px" },
      },
      {
        breakpoint: 1280,
        settings: { centerPadding: "120px" },
      },
      {
        breakpoint: 1024,
        settings: { centerPadding: "60px" },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider settings for mobile (carousel style)
  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Tampilkan 2 logo per slide di mobile
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000, // Lebih lambat dari desktop
    arrows: false, // Hilangkan panah di mobile
    centerMode: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3, // Jika sangat kecil, tampilkan 1 logo
          slidesToScroll: 3,
        },
      },
    ],
  };

export default function PortfolioKlien() {
    return (
        <section className="w-full bg-white">
                      <div className="relative mx-auto max-w-[90%] px-4 md:px-6 py-10 overflow-hidden">
                        {/* Gradient edges (desktop only) */}
                        <div
                          aria-hidden
                          className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
                        />
                        <div
                          aria-hidden
                          className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
                        />
                    
                        {/* Header */}
                        <p className="text-base md:text-xl sm:text-sm xs:text-xs xs:font-bold text-center font-medium">
                          Portofolio Klien
                        </p>
                        <h2 className="text-center font-extrabold text-[40px] lg:text-4xl sm:text-3xl xs:text-xl mb-8 text-zinc-900">
                          Pelanggan Setia Kami
                        </h2>
                        {/* Desktop/Tablet Slider */}
                        <div className="hidden md:block">
                          <Slider {...desktopSliderSettings} className="client-slider">
                            {categories.map((cat) => (
                              <div key={cat.id} className="flex justify-center px-2">
                                {/* Fixed width & height card */}
                                <div className="max-w-screen-xl h-[700px] md:max-w-screen-md md:h-[920px] lg:max-w-screen-lg lg:h-[740px] sm:max-w-screen-sm sm:h-[1000px] bg-white rounded-2xl border border-zinc-100 shadow-md p-6 flex flex-col">
                                  <h3 className="text-center font-bold text-zinc-900 mb-4 text-lg md:text-xl">
                                    {cat.label}
                                  </h3>
        
                                  {/* Logo grid with fixed height */}
                                  <div
                                    className="grid justify-items-center flex-1"
                                    style={{
                                      gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))",
                                      gap: 8,
                                    }}
                                  >
                                    {clients[cat.id].map((client) => (
                                      <div
                                        key={client.id}
                                        className="flex justify-center h-[60px]"
                                      >
                                        <img
                                          src={client.logo}
                                          alt={client.name}
                                          loading="lazy"
                                          className="object-contain max-h-10 md:max-h-6"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
        
                        {/* Mobile Carousel */}
                        <div className="md:hidden">
                        {categories.map((cat) => (
                            <div key={cat.id} className="mb-8">
                            <h3 className="text-xl font-bold mb-4 text-center">{cat.label}</h3>
                            <Slider {...mobileSliderSettings} className="mobile-carousel">
                                {clients[cat.id].map((client) => (
                                <div key={client.id} className="px-2">
                                    <div className="flex items-center justify-center p-4">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-12 object-contain"
                                    />
                                    </div>
                                </div>
                                ))}
                            </Slider>
                            </div>
                        ))}
                        </div>
                      </div>
        
                    </section>
    );
}