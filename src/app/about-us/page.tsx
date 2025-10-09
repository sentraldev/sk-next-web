"use client";

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // import modul fitur
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Client {
  id: string;
  name: string;
  logo: string;
}

interface Category {
  id: string;
  label: string;
}

interface Props {
  categories: Category[];
  clients: Record<string, Client[]>;
}

type Testimonial = {
  name: string;
  subtitle: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};


const coreValues = [
  {
    title: "Growth Mindset",
    imageUrl:
      "../../temp/core1.jpg",
  },
  {
    title: "Customer First",
    imageUrl:
      "../../temp/core2.jpg",
  },
  {
    title: "Integrity",
    imageUrl:
      "../../temp/core3.jpg",
  },
];

const missions = [
  {
    image:
      "../../temp/mission1.jpg", // Gambar contoh
    text: "Menjadi salah satu perusahaan swasta nasional yang akan terus bertumbuh dan berkontribusi bagi bangsa Indonesia",
  },
  {
    image:
      "../../temp/mission2.jpg", // Gambar contoh
    text: "Membantu dan memberikan dukungan kepada perusahaan kecil atau UMKM Indonesia yang berpotensi dan progresif.",
  },
  {
    image:
      "../../temp/mission3.jpg", // Gambar contoh
    text: "Mendidik dan menghasilkan tim yang unggul dalam karakter, pengetahuan, keterampilan, dan kemapanan dalam bekerja secara pribadi dan profesional",
  },
];

const awardsBadges = [
  {
    title: "Best Usability",
    season: "Winter",
    year: 2025,
    color: "bg-yellow-400",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/g2crowd-12-461026.png",
  },
  {
    title: "High Performer",
    season: "Winter",
    year: 2025,
    color: "bg-red-500",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/g2crowd-12-461026.png",
  },
  {
    title: "Best Results",
    season: "Winter",
    year: 2025,
    color: "bg-purple-600",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/g2crowd-12-461026.png",
  },
  {
    title: "Best Support",
    season: "Winter",
    year: 2025,
    color: "bg-teal-400",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/g2crowd-12-461026.png",
  },
  {
    title: "Leader",
    season: "Winter",
    year: 2025,
    color: "bg-red-500",
    imgUrl: "https://cdn.iconscout.com/icon/free/png-256/g2crowd-12-461026.png",
  },
];

const trophies = [
  {
    title: "Acer The Highest Growth 2025",
    imgUrl:"../../temp/trophies/1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl:"../../temp/trophies/2.png",
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
    imgUrl:"../../temp/trophies/6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl:"../../temp/trophies/7.png",
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
  }
];

// Definisikan tipe kategori dengan string literal union
type CategoryId = 'pengadaan' | 'perusahaan' | 'organisasi';

// Data kategori dengan tipe yang jelas agar TypeScript tahu key valid
const categories: { id: CategoryId; label: string }[] = [
  { id: 'pengadaan', label: 'Pengadaan' },
  { id: 'perusahaan', label: 'Perusahaan' },
  { id: 'organisasi', label: 'Organisasi' },
];

// Data klien sesuai kategori, dengan tipe Record untuk key yang ketat
const clients: Record<CategoryId, { id: number; name: string; logo: string }[]> = {
  pengadaan: [
    { id: 1, name: 'SIPLAH', logo: '../../temp/partners/siplah.png' },
    { id: 2, name: 'KPP', logo: '../../temp/partners/lkpp.png' },
    { id: 3, name: 'Iplah', logo: '../../temp/partners/siplah-blanja.png' },
  ],
  perusahaan: [
    { id: 4, name: 'MIMS', logo: '../../temp/partners/mims.png' },
    { id: 5, name: 'suara.com', logo: '../../temp/partners/suaracom.png' },
    { id: 6, name: 'billboard', logo: '../../temp/partners/billboardid.png' },
    { id: 7, name: 'adev', logo: '../../temp/partners/adev.png' },
    { id: 8, name: 'Angkasa Pura', logo: '../../temp/partners/angkasapura.png' },
    { id: 9, name: 'C21', logo: '../../temp/partners/c21.png' },
    { id: 10, name: 'HIS', logo: '../../temp/partners/his.png' },
    { id: 11, name: 'Izi Data', logo: '../../temp/partners/izidata.png' },
    { id: 12, name: 'Len Telekomunikasi', logo: '../../temp/partners/lentelekomunikasi.png' },
    { id: 13, name: 'Matsuoka', logo: '../../temp/partners/matsuoka.png' },
    { id: 14, name: 'SKI', logo: '../../temp/partners/ski.png' },
    { id: 15, name: 'Telkom', logo: '../../temp/partners/telkom.png' },
    { id: 16, name: 'Utama Gas Multiperkasa', logo: '../../temp/partners/utamagasmultiperkasa.png' },
    { id: 17, name: 'Biosm', logo: '../../temp/partners/biosm.png' },
    { id: 16, name: 'tc', logo: '../../temp/partners/tc.png' },
    { id: 18, name: 'rosenberger', logo: '../../temp/partners/rosenberger.png' },
    { id: 19, name: 'indec', logo: '../../temp/partners/indec.png' },
    { id: 20, name: 'bsi', logo: '../../temp/partners/bsi.png' },
    { id: 21, name: 'bri', logo: '../../temp/partners/bri.png' },
    { id: 22, name: 'PT. Jaya Mitra Kemilau', logo: '../../temp/partners/jayamitrakemilau.png' },
    { id: 22, name: 'Lintas Teknologi', logo: '../../temp/partners/lintasteknologi.png' },
    { id: 22, name: 'Everwhite', logo: '../../temp/partners/everwhite.png' },
  ],
  organisasi: [
    { id: 23, name: 'Dinas Kesehatan', logo: '../../temp/partners/dinkeskarawang.png' },
    { id: 24, name: 'Kementerian Agama', logo: '../../temp/partners/kemenag.png' },
    { id: 25, name: 'Kementerian Agama', logo: '../../temp/partners/kemenper.png' },
    { id: 26, name: 'Kementerian Agama', logo: '../../temp/partners/kemenket.png' },
    { id: 27, name: 'Kementerian Agama', logo: '../../temp/partners/lembagaalternatif.png' },
  ],
};

const partners = [
  { name: "ASUS", logo: "../../temp/brands/asus.png" },
  { name: "Apple", logo: "../../temp/brands/apple.png" },
  { name: "Lenovo", logo: "../../temp/brands/lenovo.png" },
  { name: "HP", logo: "../../temp/brands/hp.png" },
  { name: "Samsung", logo: "../../temp/brands/samsung.png" },
  { name: "MSI", logo: "../../temp/brands/msi.png" },
  { name: "Rexus", logo: "../../temp/brands/rexus.png" },
  { name: "Acer", logo: "../../temp/brands/acer.png" },
  { name: "Zyrex", logo: "../../temp/brands/zyrex.png" },
  { name: "Prolink", logo: "../../temp/brands/prolink.png" },
  { name: "Axioo", logo: "../../temp/brands/axioo.png" },
  { name: "Fantech", logo: "../../temp/brands/fantech.png" },
  { name: "Advan", logo: "../../temp/brands/advan.png" },
  { name: "Aukey", logo: "../../temp/brands/aukey.png" },
  { name: "Kaspersky", logo: "../../temp/brands/kaspersky.png" },
  { name: "Epson", logo: "../../temp/brands/epson.png" },
  { name: "Toshiba", logo: "../../temp/brands/toshiba.png" },
  { name: "Logitech", logo: "../../temp/brands/logitech.png" },
  { name: "Intel", logo: "../../temp/brands/intel.png" },
  { name: "AMD", logo: "../../temp/brands/amd.png" },
  { name: "Nvidia", logo: "../../temp/brands/nvidia.png" },
  { name: "McAfee", logo: "../../temp/brands/mcafee.png" },
  { name: "Microsoft", logo: "../../temp/brands/microsoft.png" },
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
    text:
      "Bought Lenovo Legion in 2022, after 2.5 years it had an issue. Brought it for official warranty, staff were friendly, process fast, everything explained clearly. Laptop repaired hassle free, top service.",
    avatarUrl: "../../temp/testi/asep.jpg",
  },
  {
    name: "Poetri Monalia",
    subtitle: "Sentral Komputer Citos",
    rating: 5,
    text:
      "We came to find a basic laptop for the kids, staff offered 5–6 options with specs. Technician also helped install Microsoft Office included in the bundle. Helpful and informative service.",
    avatarUrl: "../../temp/testi/poetri.jpg",
  },
  {
    name: "Galih Satriya Praptama",
    subtitle: "Sentral Service",
    rating: 5,
    text:
      "Servis jujur, menyampaikan kondisi apa adanya, ngasih opsi dulu untuk solusi perbaikan. Sukses selalu, terima kasih!",
    // tanpa avatar -> otomatis pakai inisial
  },
  {
    name: "Adhitya Priady",
    subtitle: "Adhitya Priady",
    rating: 5,
    text:
      "Pelayanannya TOP. Dari dibongkar, dijelaskan masalah + solusi, lalu dirakit rapi lagi. Excellent service.",
    avatarUrl: "../../temp/testi/adhitya.jpg",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} dari 5 bintang`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${i < count ? "fill-amber-400" : "fill-zinc-300"}`}
          aria-hidden="true"
        >
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
  const [activeIndex, setActiveIndex] = useState(0);

  const onTabClick = (index: number) => {
    setActiveIndex(index);
  };  

  // Saat slide berubah, update tab aktif
  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <Header />
      <div className="content-width mx-auto px-6 py-12 space-y-16 font-sans text-gray-800">
        
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
          <p className="text-gray-800 font-semibold">
            Sejarah Sentral Komputer
          </p>
          <h1 className="text-4xl font-bold mt-2">
            Bermula Pada Tahun 1991
          </h1>
          <p className="mt-2 text-gray-600">
            Kami berawal dari sebuah toko komputer dengan nama Sentral Komputer, dan seiring berjalannya waktu, <br /> berkembang dan disahkan menjadi PT Sentral Tekno Selaras pada tahun 2009.
          </p>
        </div>

        {/* 1991 Historical Image */}
        <div className="mx-auto flex justify-center">
          <img
            src="../../temp/about-us2.png"
            alt="Company History 1991"
            className="rounded-lg shadow-md h-[500px]"
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
          <div className="w-full md:w-3/5 p-8">
            <h2 className="text-3xl font-bold mb-4">Kami Telah Melayani Ribuan <br />Konsumen, Organisasi & Korporasi</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Untuk mendapatkan kebutuhan IT  resmi dan berkualitas   melalui program distribusi, retail store, online/e-commerce, proyek, pengadaan korporasi, dan lain sebagainya.
            </p>
          </div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <section className="mx-auto space-y-10 text-gray-800 font-sans">
        <div className="text-center">
          <p className="text-xl">Core Values Kami</p>
          <h2 className="text-3xl font-bold mt-1">
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
              className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-[500px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay teks di bawah */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-6 text-white text-lg font-semibold text-center bg-gradient-to-t from-[#092566]/90 via-[#092566]/40 to-transparent">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <div
        className="relative w-full h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${"../../temp/vision.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gelap semi transparan */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Konten teks di atas overlay */}
        <div className="relative z-10 text-white max-w-3xl">
          <h2 className="text-3xl font-bold mb-2">Visi</h2>
          <p className="text-md sm:text-lg">
            Menjadi perusahaan profesional yang bergerak dibidang distribusi dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Misi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {missions.map((mission, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-full md:h-56 lg:h-[350px] overflow-hidden">
              <img
                src={mission.image}
                alt={`Mission ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-gray-800 text-center text-sm flex-grow">
              {mission.text}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Penyebaran Lokasi Kami */}
    <section className="mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold">Penyebaran Lokasi Kami</h2>
      <div
      className="relative w-full sm:h-80 md:h-96 flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${"../../temp/peta-indonesia.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay transparan (optional, bisa dihilangkan jika tidak perlu) */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

        {/* Teks di atas peta */}
        <div className="relative z-10 text-blue-900 font-semibold text-xl sm:text-2xl max-w-md">
          Terdapat di <span className="text-blue-600 font-bold">16+ Lokasi</span> di Berbagai Kota di Indonesia
        </div>
      </div>
    </section>
    

      {/* Business Area */}
      <section className="mx-auto px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-center">Tentang Bisnis Kami</h2>

      {/* Tabs */}
      <nav className="flex justify-center space-x-8 mb-8 text-gray-400">
        <button
          onClick={() => setActiveTab("b2b")}
          className={`font-semibold ${
            activeTab === "b2b" ? "text-black border-b-2 border-blue-600" : ""
          }`}
        >
          Business to Business
        </button>
        <button
          onClick={() => setActiveTab("b2c")}
          disabled
          className="cursor-not-allowed"
        >
          Business to Customer
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          disabled
          className="cursor-not-allowed"
        >
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
          <h3 className="text-2xl font-bold mb-4">Dealership dan Reseller</h3>
          <p className="text-gray-700 mb-6">
            Kami mendukung UMKM dan individu yang ingin berkembang dengan menyediakan pasokan dari brand IT ternama serta edukasi agar bisnis mereka tumbuh dan adaptif terhadap perkembangan zaman.
          </p>

          <div className="flex justify-between bg-white shadow-md rounded-lg p-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-500 mt-1">Dealer Partnership</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100K+</div>
              <div className="text-sm text-gray-500 mt-1">Total Transaksi</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">99%</div>
              <div className="text-sm text-gray-500 mt-1">Kepuasan Kerjasama</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-screen-xl mx-auto px-6 py-10 bg-white">
      {/* Badge Row */}
      <div className="flex justify-center gap-6 flex-wrap">
        <h2 className="text-3xl font-bold w-full text-center">Penghargaan Kami</h2>
        <img
          src="../../temp/penghargaan.png"
          alt="Handshake"
          className="w-2/3 rounded-lg object-cover"
        />
      </div>

      {/* Trophy Row */}
      <div className="flex justify-center gap-6 flex-wrap">
        {trophies.map((trophy, i) => (
          <div
            key={i}
            className="flex flex-col items-center max-w-[95px] text-center"
          >
            <img
              src={trophy.imgUrl}
              alt={trophy.title}
              className="h-50 object-contain rounded-md"
            />
            <div className="mt-2 text-xs font-medium">{trophy.title}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Partners Logos */}
    <div className="mx-auto px-5 py-10 relative overflow-visible">
      <p className="text-md text-center">Portofolio Klien</p>
      <h2 className="text-center font-extrabold text-2xl md:text-3xl mb-8 text-zinc-900">
        Pelanggan Setia Kami
      </h2>

      {/* Carousel by Category */}
      {/* pastikan sudah import Slider & CSS slick di file ini */}
      <Slider
        dots={false}
        infinite
        speed={450}
        slidesToShow={1}         
        slidesToScroll={1}
        autoplay
        autoplaySpeed={2600}
        arrows
        responsive={[
          { breakpoint: 1280, settings: { slidesToShow: 2 } },
          { breakpoint: 768,  settings: { slidesToShow: 1 } },
        ]}
        centerMode={true}
        centerPadding="120px"
      >
        {categories.map((cat) => (
          <div key={cat.id} className="px-2">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-5 flex flex-col h-[600px]">
              <h3 className="text-center font-bold text-zinc-900 mb-4">
                {cat.label}
              </h3>

              {/* Grid logo di dalam kartu (bukan carousel) */}
              <div
                className="grid justify-items-center items-center"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                  gap: 2,
                }}
              >
                {clients[cat.id].map((client: any) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-center h-[60px] px-2"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      style={{
                        maxHeight: 40,
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>



    <section className="content-width mx-auto" style={{ padding: "20px", backgroundColor: "#fff", textAlign: "center" }}>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {/* Foto dua orang */}
        <div style={{ flex: "0 0 auto", maxWidth: 420, height: 'auto' }}>
          <img
            src="../../temp/mitrakami.png" 
            alt="Mitra Kami"
            style={{ width: "100%", height: "100%", borderRadius: 8, objectFit: "contain" }}
          />
        </div>

        {/* Teks alasan jadi mitra dalam dua kolom */}
        <div style={{ flex: "1 1 300px", maxWidth: 700, textAlign: "left" }}>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Mitra Kami</h2>
            <h2 className="font-bold" style={{ marginBottom: 24, color: "#1444D5" /* biru teks */ }}>
              Kenapa Jadi Bagian Kami?
            </h2>
          </div>
          <div className="flex content-between gap-48">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#444", fontSize: 16 }}>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Pengalaman Sejak 1991</li>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Barang 100% ORI</li>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Garansi Resmi</li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#444", fontSize: 16 }}>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Service Center Certified</li>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Tingkat Kepuasan Pelanggan Terbaik</li>
              <li><FontAwesomeIcon icon={faCheck} color="#1444D5" /> Sales & Teknisi Profesional</li>
            </ul>
          </div>
          {/* Brand Partner Logo */}
          <div className="mt-10">
            <h3 className="mb-5 font-bold text-center" style={{ color: "#1444D5"}}>Brand Partner</h3>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 24 }}>
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.logo}
                  alt={partner.name}
                  style={{ height: 20, width: "auto", objectFit: "contain" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Portfolio */}
    <section className="content-width mx-auto">
      <p className="text-md text-center">Portofolio Klien</p>
      <h2 className="text-center font-extrabold text-2xl md:text-3xl mb-8 text-zinc-900">
        Portofolio Event
      </h2>
      <div
        className="portfolio-cards"
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {portfolioData.map(({ title, mainImage, thumbnails }, index) => (
          <div
            key={index}
            className="portfolio-card"
            style={{
              width: 340,
              background: "white",
              borderRadius: 12,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={mainImage}
              alt={title}
              style={{
                width: "100%",
                borderRadius: 12,
                marginBottom: 12,
                objectFit: "cover",
                aspectRatio: "1 / 1",
              }}
            />
            <div
            className="grid w-full"
              style={{
                gridTemplateColumns: `repeat(${thumbnails.length}, 1fr)`, // otomatis menyesuaikan jumlah thumbnail
                gap: 10,
                marginBottom: 12,
                width: "100%", // ✅ agar full container (340px)
              }}
            >
              {thumbnails.map((thumb, i) => (
                <img
                  key={i}
                  src={thumb}
                  alt={`${title} thumbnail ${i + 1}`}
                  style={{
                    width: 95,
                    height: 95,
                    borderRadius: 8,
                    objectFit: "cover",
                    cursor: "pointer",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                />
              ))}
            </div>
            <h3 className="font-bold">{title}</h3>
          </div>
        ))}
      </div>
    </section>

      {/* Testimonials */}
      <section className="relative mx-auto px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            Apa Kata Mereka Tentang Kami
          </h2>
        </div>

        {/* fade kiri/kanan biar mirip desain */}
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, idx) => (
              <article
                className="rounded-2xl border border-zinc-100 h-[233px] bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md flex flex-col"
              >
                <div className="mb-3 flex items-center gap-3">
                  <Avatar name={t.name} url={t.avatarUrl} />
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">{t.name}</h3>
                    <p className="text-xs text-zinc-500">{t.subtitle}</p>
                  </div>
                </div>

                <Stars count={t.rating} />

                <p className="mt-3 text-sm leading-6 text-zinc-600 line-clamp-4 break-words">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form */}
      <section className="max-w-4xl mx-auto p-6 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Bergabung dengan Kami</h2>
        <form className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Nomor Telepon"
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Deskripsi / Keinginan kamu kepada kami"
            rows={4}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Kirim
          </button>
        </form>
      </section>
    </div>
      <Footer />
    
    </>
    
  );
}
