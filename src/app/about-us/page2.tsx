"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Testimonial = {
  name: string;
  subtitle: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};

const missions = [
  {
    image: "../../temp/mission1.jpg", // Gambar contoh
    text: "Menjadi salah satu perusahaan swasta nasional yang akan terus bertumbuh dan berkontribusi bagi bangsa Indonesia",
  },
  {
    image: "../../temp/mission2.jpg", // Gambar contoh
    text: "Membantu dan memberikan dukungan kepada perusahaan kecil atau UMKM Indonesia yang berpotensi dan progresif.",
  },
  {
    image: "../../temp/mission3.jpg", // Gambar contoh
    text: "Mendidik dan menghasilkan tim yang unggul dalam karakter, pengetahuan, keterampilan, dan kemapanan dalam bekerja secara pribadi dan profesional",
  },
];

const awards = [
  { title: "Best Sales Performance Jabodetabek", imgUrl: "/images/awards/best-amd.png" },
  { title: "Best Transformation Retail", imgUrl: "/images/awards/best-lenovo.png" },
  { title: "Best Performance Partner", imgUrl: "/images/awards/best-asus.png" },
  { title: "Best Retail Hero", imgUrl: "/images/awards/best-intel.png" },
  { title: "Highest Growth", imgUrl: "/images/awards/best-acer.png" },
];

const trophies = [
  {
    title: "Acer The Highest Growth 2025",
    imgUrl: "../../temp/trophies/1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "../../temp/trophies/2.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "../../temp/trophies/3.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "../../temp/trophies/4.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "../../temp/trophies/5.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "../../temp/trophies/6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "../../temp/trophies/7.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "../../temp/trophies/8.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "../../temp/trophies/9.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "../../temp/trophies/10.png",
  },
];

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

const checkIconColor = '#1444D5'

const advantages = [
  'Pengalaman Sejak 1991', 'Barang 100% ORI', 'Garansi Resmi',
  'Service Center Certified', 'Tingkat Kepuasan Pelanggan Terbaik', 'Sales & Teknisi Profesional',
]

const brandPartners = [
  { name: "ASUS", logo: "../../images/brands/asus.png" },
  { name: "Apple", logo: "../../images/brands/apple.png" },
  { name: "Lenovo", logo: "../../images/brands/lenovo.png" },
  { name: "HP", logo: "../../images/brands/hp.png" },
  { name: "Samsung", logo: "../../images/brands/samsung.png" },
  { name: "MSI", logo: "../../images/brands/msi.png" },
  { name: "Rexus", logo: "../../images/brands/rexus.png" },
  { name: "Acer", logo: "../../images/brands/acer.png" },
  { name: "Zyrex", logo: "../../images/brands/zyrex.png" },
  { name: "Prolink", logo: "../../images/brands/prolink.png" },
  { name: "Axioo", logo: "../../images/brands/axioo.png" },
  { name: "Fantech", logo: "../../images/brands/fantech.png" },
  { name: "Advan", logo: "../../images/brands/advan.png" },
  { name: "Aukey", logo: "../../images/brands/aukey.png" },
  { name: "Kaspersky", logo: "../../images/brands/kaspersky.png" },
  { name: "Epson", logo: "../../images/brands/epson.png" },
  { name: "Toshiba", logo: "../../images/brands/toshiba.png" },
  { name: "Logitech", logo: "../../images/brands/logitech.png" },
  { name: "Intel", logo: "../../images/brands/intel.png" },
  { name: "AMD", logo: "../../images/brands/amd.png" },
  { name: "Nvidia", logo: "../../images/brands/nvidia.png" },
  { name: "McAfee", logo: "../../images/brands/mcafee.png" },
  { name: "Microsoft", logo: "../../images/brands/microsoft.png" },
];

const portfolioData = [
  {
    title: "Pameran",
    mainImage: "../../temp/portofolio/event/porto-1.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-12.jpg",
      "../../temp/portofolio/event/porto-13.jpg",
      "../../temp/portofolio/event/porto-14.jpg",
    ],
  },
  {
    title: "Edukasi Kampus",
    mainImage: "../../temp/portofolio/event/porto-2.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-21.jpg",
      "../../temp/portofolio/event/porto-22.jpg",
      "../../temp/portofolio/event/porto-23.jpg",
    ],
  },
  {
    title: "Dealer Gathering & Training",
    mainImage: "../../temp/portofolio/event/porto-3.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-31.jpg",
      "../../temp/portofolio/event/porto-32.jpg",
      "../../temp/portofolio/event/porto-33.jpg",
    ],
  },
];

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

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("b2b");
  const [currentSlide, setCurrentSlide] = useState(0);

    // Slider otomatis: berganti setiap 4 detik
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % trophies.length);
      }, 4000);

      return () => clearInterval(interval);
    }, []);
  return (
    <>
      <Header />
      {/* <div className="content-width sm:w-full mx-auto px-6 py-12 sm:py-16 space-y-12 xl:space-y-12 lg:space-y-6 md:space-y-4 sm:space-y-4 font-sans text-gray-800"> */}
      <div className="mx-auto content-width px-6 py-12 space-y-12 font-sans">
        {/* Header Image */}
        <div>
          <img
            src="../../temp/about-us1.png"
            alt="Opening Event"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Company History Group Photo */}
        <div className="text-center mx-auto">
          <p className="font-medium text-xl xl:text-2xl lg:text-lg md:text-base sm:text-sm">
            Sejarah Sentral Komputer
          </p>
          <h1 className="text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mt-2">
            Bermula Pada Tahun 1991
          </h1>
          <p className="mt-2 font-medium text-sm xl:text-lg lg:text-sm md:text-xs sm:text-[10px] leading-[20px]">
            Kami berawal dari sebuah toko komputer dengan nama Sentral Komputer,
            dan seiring berjalannya waktu, <br /> berkembang dan disahkan
            menjadi PT Sentral Tekno Selaras pada tahun 2009.
          </p>
        </div>

        {/* 1991 Historical Image */}
        <div className="mx-auto flex justify-center">
          <img
            src="../../temp/about-us2.png"
            alt="Company History 1991"
            className="rounded-lg aspect-auto object-fit w-full h-auto"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between ">
          {/* Bagian kanan */}
          <div className="relative w-full md:w-2/5">
            {/* Bisa diisi gambar atau ilustrasi jika ada, misal: */}
            <img
              src="../../temp/about-us3.png" // ganti sesuai gambar
              alt="Ilustrasi Pelayanan"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            {/* Overlay teks tengah */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-md">
                1991
              </h2>
            </div>
          </div>

          {/* Bagian kiri */}
          <div className="w-full md:w-3/5 lg:p-8 md:p-6">
            <h2 className="text-[32px] xl:text-4xl lg:text-2xl md:text-base sm:text-xl font-extrabold mb-4 sm:mb-1 leading-[35px]">
              Kami Telah Melayani Ribuan <br />
              Konsumen, Organisasi & Korporasi
            </h2>
            <p className="text-sm font-medium leading-relaxed xl:text-lg lg:text-base md:text-sm sm:text-xs xl:pt-4">
              Untuk mendapatkan kebutuhan IT resmi dan berkualitas melalui
              program distribusi, retail store, online/e-commerce, proyek,
              pengadaan korporasi, dan lain sebagainya.
            </p>
          </div>
        </div>

        {/* ================= CORE VALUES ================= */}
        <section className="mx-auto space-y-10 sm:pt-9 font-sans">
          <div className="text-center">
            <p className="text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-medium">
              Core Values Kami
            </p>
            <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
              Inilah Nilai yang Menuntun Langkah Kami
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Growth Mindset",
                imageUrl: "../../temp/core1.jpg",
              },
              {
                title: "Customer First",
                imageUrl: "../../temp/core2.jpg",
              },
              {
                title: "Integrity",
                imageUrl: "../../temp/core3.jpg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300">
                <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect[5/3]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover group-cover:scale-105 transition-transform duration-500"
                    // className="h-[500px] w-full xl:h-[500px] lg:h-[400px] md:h-[325px] sm:h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlay teks di bawah */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-6 xl:py-6 lg:py-4 md:py-3 sm:py-2 text-white text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-extrabold text-center bg-gradient-to-t from-[#092566]/90 via-[#092566]/40 to-transparent">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <div
          // className="relative w-full h-48 xl:h-[400px] sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
          className="relative w-full rounded-lg overflow-hidden flex items-center justify-center text-center px-4 aspect-[48/9] lg:aspect-[48/9]"
          style={{
            backgroundImage: `url(${"../../temp/vision.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Overlay gelap semi transparan */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Konten teks di atas overlay */}
          <div className="relative z-10 text-white w-full">
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mb-2">
              Visi
            </h2>
            <p className="text-base xl:text-lg lg:text-base md:text-sm sm:text-xs">
              Menjadi perusahaan profesional yang bergerak dibidang distribusi
              dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="mx-auto">
          <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center mb-8">
            Misi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {missions.map((mission, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="relative w-full overflow-hidden aspect-[4/3] md:aspect[5/3]">
                  <img
                    src={mission.image}
                    alt={`Mission ${idx + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 text-gray-800 text-center text-base xl:text-lg lg:text-sm md:text-xs sm:text-[10px] sm:leading-[15px] font-medium flex-grow">
                  {mission.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Penyebaran Lokasi Kami */}
        <section className="mx-auto text-center space-y-6 sm:pt-9">
          <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
            Penyebaran Lokasi Kami
          </h2>
          <div
            className="relative w-full sm:h-80 md:h-96 flex items-center justify-center text-center px-4"
            style={{
              backgroundImage: `url(${"../../temp/peta-indonesia.png"})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}>
            {/* Overlay transparan (optional, bisa dihilangkan jika tidak perlu) */}
            {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

            {/* Teks di atas peta */}
            <div className="relative z-10 text-[#1444D5] font-regular text-xl sm:text-xl md:text-3xl max-w-2xl">
              Terdapat di{" "}
              <span className="text-[#1444D5] text-7xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-xl font-extrabold">
                16+
              </span>{" "}
              Lokasi di Berbagai Kota di Indonesia
            </div>
          </div>
        </section>

        {/* Business Area */}
        <section className="mx-auto px-6 py-10 bg-gray-50">
          <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mb-4 text-center">
            Tentang Bisnis Kami
          </h2>

          {/* Tabs */}
          <nav className="flex justify-center space-x-8 py-3 mb-8 text-gray-400 border-b-2">
            <button
              onClick={() => setActiveTab("b2b")}
              className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
                activeTab === "b2b"
                  ? "text-black font-bold text-sm "
                  : "cursor-not-allowed font-light"
              }`}>
              Business to Business
            </button>
            <button
              onClick={() => setActiveTab("b2c")}
              disabled
              className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
                activeTab === "b2c"
                  ? "text-black font-bold"
                  : "cursor-not-allowed font-light"
              }`}>
              Business to Customer
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              disabled
              className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
                activeTab === "projecs"
                  ? "text-black font-bold"
                  : "cursor-not-allowed font-light"
              }`}>
              Proyek, Pengadaan, dan Kerjasama
            </button>
          </nav>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Handshake"
              className="w-full rounded-lg shadow-lg object-cover"
            />

            <div>
              <h3 className="text-[32px] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold mb-4">
                Dealership dan Reseller
              </h3>
              <p className="text-sm xl:text-lg lg:text-base md:text-sn sm:text-xs font-medium mb-6">
                Kami mendukung UMKM dan individu yang ingin berkembang dengan
                menyediakan pasokan dari brand IT ternama serta edukasi agar
                bisnis mereka tumbuh dan adaptif terhadap perkembangan zaman.
              </p>

              <div className="flex justify-between bg-white shadow-md rounded-lg p-6 text-left">
                <div>
                  <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">
                    150+
                  </div>
                  <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">
                    Dealer Partnership
                  </div>
                </div>
                <div>
                  <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">
                    100K+
                  </div>
                  <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">
                    Total Transaksi
                  </div>
                </div>
                <div>
                  <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">
                    99%
                  </div>
                  <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">
                    Kepuasan Kerjasama
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penghargaan — satu baris, no border, no shadow, max width 90% */}
        <section className="py-12 bg-white">
          <div className="mx-auto w-[90%]">
            <h2 className="text-center font-extrabold text-[40px] xl:text-[40px] lg:text-4xl md:text-3xl">
              Penghargaan
            </h2>

            {/* Map Penghargaan (5 trofi sebagai grid - tampilan banner) */}
            <div className="mt-12 flex justify-center">
              <div className="relative w-full max-w-4xl h-[300px] rounded-lg overflow-hidden">
                {/* Grid 2x2 → 5 kolom di desktop */}
                <div className="absolute inset-0 grid grid-cols-5 gap-2 p-2">
                  {awards.map((t, i) => (
                    <div key={i} className="relative aspect-[3/4]">
                      <img
                        src={t.imgUrl}
                        alt={t.title}
                        loading="lazy"
                        className="absolute inset-0 h-24 w-24 object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trofi: selalu satu baris */}
            <div className="mt-10 relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {trophies.map((t, i) => (
              <div key={i} className="flex-shrink-0 content-width md:w-1/2 lg:w-1/3 px-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    <div className="relative h-20 w-auto mx-auto"> {/* Ukuran 24px di CSS -> h-6 w-6 */}
                      <img
                        src={t.imgUrl}
                        alt={t.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* 👇 Jarak title dari gambar disesuaikan: gap-1 untuk spacing kecil */}
                  <div className="mt-1 text-xs md:text-sm font-semibold leading-tight">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          </div>
        </section>

        {/* Partners Logos */}
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
            <p className="text-base md:text-xl text-center font-medium">
              Portofolio Klien
            </p>
            <h2 className="text-center font-extrabold text-[40px] xl:tex lg:text-4xl md:text-3xl mb-8 text-zinc-900">
              Pelanggan Setia Kami
            </h2>

            {/* Slider */}
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={2500}
              arrows={true}
              centerMode={true}
              centerPadding="200px"
              initialSlide={1}
              responsive={[
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
            ]}
              className="client-slider"
            >
              {categories.map((cat) => (
                <div key={cat.id} className="flex justify-center px-2">
                  {/* Fixed width & height card */}
                  <div className="max-w-screen-xl h-[700px] md:max-w-screen-md md:h-[820px] lg:max-w-screen-lg lg:h-[740px] sm:max-w-screen-sm sm:h-[1000px] bg-white rounded-2xl border border-zinc-100 shadow-md p-6 flex flex-col">
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
        </section>

       <section className="w-full content-width mx-auto py-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    {/* Bagian kiri: gambar dua orang, hidden di mobile, col-span 1 */}
    <div className="hidden md:flex justify-center col-span-1">
      <img
        src="/images/mitrakami.png"
        alt="Dua Orang Mitra Kami"
        className="w-auto h-auto object-contain"
      />
    </div>

    {/* Bagian kanan: col-span 2 */}
    <div className="col-span-2 max-w-screen-xl flex flex-col space-y-12">
      <div className="">
        <h2 className="text-center text-4xl font-extrabold mb-2 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl">Mitra Kami</h2>
        <h3 className="text-center text-xl font-extrabold text-[#1444D5] mb-8">
          Kenapa Jadi Bagian Kami?
        </h3>

        {/* Daftar keuntungan */}
        <ul className="hidden md:grid md:grid-cols-2 items-center md:gap-x-12 md:gap-y-4">
          {advantages.map((item, idx) => (
            <li key={idx} className="flex items-center justify-start space-x-2">
              <FontAwesomeIcon icon={faCheck} style={{ color: checkIconColor }} />
              <span className="font-medium text-[15px] text-left">{item}</span>
            </li>
          ))}
        </ul>

        <ul className="md:hidden flex flex-col items-center space-y-3">
          {advantages.map((item, idx) => (
            <li key={idx} className="flex items-center justify-start space-x-2">
              <FontAwesomeIcon icon={faCheck} style={{ color: checkIconColor }} />
              <span className="font-medium text-[15px] text-left">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Brand partner */}
      <div className="mt-10 w-full bg-zinc-100 rounded-lg p-5">
        <h4
          className="mb-4 text-center font-extrabold text-[#1444D5]"
          style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.375rem)" }}
        >
          Brand Partner
        </h4>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 place-items-center">
          {brandPartners.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              loading="lazy"
              className="h-[clamp(12px,2.0vw,30px)] w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>




        {/* Portfolio */}
        <section className="content-width mx-auto">
          <p className="text-xl text-center font-medium lg:text-lg md:text-base sm:text-sm">
            Portofolio Klien
          </p>
          <h2 className="text-center font-extrabold text-[40px] lg:text-4xl md:text-3xl sm:text-2xl mb-8 text-zinc-900">
            Portofolio Event
          </h2>
          <div className="flex flex-wrap justify-center gap-20 lg:gap-10">
            {portfolioData.map(({ title, mainImage, thumbnails }, i) => (
              <div
                key={i}
                className="w-full sm:w-[420px] md:w-[500px] lg:w-[375px] bg-white rounded-xl shadow p-6 flex flex-col items-center">
                <img
                  src={mainImage}
                  alt={title}
                  className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <div className="grid grid-cols-3 gap-3 w-full mb-3">
                  {thumbnails.map((t, j) => (
                    <img
                      key={j}
                      src={t}
                      alt=""
                      className="w-full aspect-square object-cover rounded-md shadow-sm"
                    />
                  ))}
                </div>
                <h3 className="font-extrabold text-xl lg:text-lg md:text-base sm:text-sm">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative bg-[#FAFAFA] py-6 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-[40px] lg:text-4xl md:text-3xl font-extrabold text-zinc-900">
              Apa Kata Mereka Tentang Kami
            </h2>
          </div>
          <div className="relative mx-auto">
            {/* Fade kiri/kanan */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"
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
              ]}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="h-full px-3 flex items-stretch">
                  <article className="bg-white rounded-2xl border border-zinc-100 shadow-[0_3px_10px_rgba(0,0,0,0.07)] p-6 flexjustify-between w-full h-[210px] lg:h-[225px]">
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

                    <p className="mt-3 text-xs font-medium text-zinc-700 break-words">
                      {t.text}
                    </p>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Testimonials */}
        

        {/* Contact Form */}
        {/* ================== CONTACT FORM ================== */}
        <section className="mx-auto max-w-screen-4xl py-6">
          <div className="bg-white   rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10">
            <h2 className="text-center text-4xl font-extrabold text-zinc-900 mb-10">
              Bergabung dengan Kami
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* === KIRI === */}
              <div className="flex flex-col gap-4 h-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
                />
                <div className="relative">
                  <select
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-10 text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition">
                    <option value="" disabled>
                      — Pilih —
                    </option>
                    <option>Kerjasama</option>
                    <option>Pengadaan</option>
                    <option>Konsultasi</option>
                    <option>Lainnya</option>
                  </select>

                  {/* Icon arrow */}
                  <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .92 1.18l-4.2 3.33a.75.75 0 0 1-.94 0l-4.2-3.33a.75.75 0 0 1-.06-1.1z" />
                  </svg>
                </div>
              </div>

              {/* === KANAN === */}
              <div className="flex flex-col justify-between h-full">
                {/* Textarea sejajar total kiri */}
                <textarea
                  name="message"
                  placeholder="Deskripsi Keperluan (maksimal 500 kata)"
                  className="flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition resize-none h-full min-h-[240px]"
                />

                {/* Tombol tetap di bawah */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-700 px-8 py-2 w-[150px] text-white font-semibold shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
