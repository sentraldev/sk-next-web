"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
    avatarUrl: "../../temp/asep.png",
  },
  {
    name: "Poetri Monalia",
    subtitle: "Sentral Komputer Citos",
    rating: 5,
    text:
      "We came to find a basic laptop for the kids, staff offered 5–6 options with specs. Technician also helped install Microsoft Office included in the bundle. Helpful and informative service.",
    avatarUrl: "../../temp/poetri.png",
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
    avatarUrl: "../../temp/adhitya.png",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} dari 5 bintang`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 lg:h-4 lg:w-4 ${i < count ? "fill-amber-400" : "fill-zinc-300"}`}
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

  return (
    <>
      <Header />
      {/* <div className="content-width sm:w-full mx-auto px-6 py-12 sm:py-16 space-y-12 xl:space-y-12 lg:space-y-6 md:space-y-4 sm:space-y-4 font-sans text-gray-800"> */}
      <div className="mx-auto content-width px-6 py-12 space-y-12 font-sans text-gray-800">
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
            Kami berawal dari sebuah toko komputer dengan nama Sentral Komputer, dan seiring berjalannya waktu, <br /> berkembang dan disahkan menjadi PT Sentral Tekno Selaras pada tahun 2009.
          </p>
        </div>

        {/* 1991 Historical Image */}
        <div className="mx-auto flex justify-center">
          <img
            src="../../temp/about-us2.png"
            alt="Company History 1991"
            className="rounded-lg shadow-md h-[500px] object-fit xl:h-[700px] lg:h-[400px] md:h-[325px] sm:h-[250px]"
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
            <h2 className="text-[32px] xl:text-4xl lg:text-2xl md:text-base sm:text-xl font-extrabold mb-4 sm:mb-1 leading-[35px]">Kami Telah Melayani Ribuan <br />Konsumen, Organisasi & Korporasi</h2>
            <p className="text-sm font-medium leading-relaxed xl:text-lg lg:text-base md:text-sm sm:text-xs xl:pt-4">
              Untuk mendapatkan kebutuhan IT  resmi dan berkualitas   melalui program distribusi, retail store, online/e-commerce, proyek, pengadaan korporasi, dan lain sebagainya.
            </p>
          </div>
      </div>

      {/* ================= CORE VALUES ================= */}
      <section className="mx-auto space-y-10 sm:pt-9 text-gray-800 font-sans">
        <div className="text-center">
          <p className="text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-medium">Core Values Kami</p>
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
              className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300"
            >
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
        }}
      >
        {/* Overlay gelap semi transparan */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten teks di atas overlay */}
        <div className="relative z-10 text-white w-full">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mb-2">Visi</h2>
          <p className="text-base xl:text-lg lg:text-base md:text-sm sm:text-xs">
            Menjadi perusahaan profesional yang bergerak dibidang distribusi dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="mx-auto">
        <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center mb-8">Misi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {missions.map((mission, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
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
      <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">Penyebaran Lokasi Kami</h2>
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
        <div className="relative z-10 text-[#1444D5] font-regular text-xl sm:text-xl md:text-3xl max-w-2xl">
          Terdapat di <span className="text-[#1444D5] text-7xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-xl font-extrabold">16+</span> Lokasi di Berbagai Kota di Indonesia
        </div>
      </div>
    </section>
    

      {/* Business Area */}
    <section className="mx-auto px-6 py-10 bg-gray-50">
      <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold mb-4 text-center">Tentang Bisnis Kami</h2>

      {/* Tabs */}
      <nav className="flex justify-center space-x-8 py-3 mb-8 text-gray-400 border-b-2">
        <button
          onClick={() => setActiveTab("b2b")}
          className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
            activeTab === "b2b" ? "text-black font-bold text-sm " : "cursor-not-allowed font-light"
          }`}
        >
          Business to Business
        </button>
        <button
          onClick={() => setActiveTab("b2c")}
          disabled
          className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
            activeTab === "b2c" ? "text-black font-bold" : "cursor-not-allowed font-light"
          }`}
        >
          Business to Customer
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          disabled
          className={` text-sm xl:text-lg lg:text-base md:text-sm sm:text-[10px] ${
            activeTab === "projecs" ? "text-black font-bold" : "cursor-not-allowed font-light"
          }`}
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
          <h3 className="text-[32px] xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold mb-4">Dealership dan Reseller</h3>
          <p className="text-sm xl:text-lg lg:text-base md:text-sn sm:text-xs font-medium mb-6">
            Kami mendukung UMKM dan individu yang ingin berkembang dengan menyediakan pasokan dari brand IT ternama serta edukasi agar bisnis mereka tumbuh dan adaptif terhadap perkembangan zaman.
          </p>

          <div className="flex justify-between bg-white shadow-md rounded-lg p-6 text-left">
            <div>
              <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">150+</div>
              <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">Dealer Partnership</div>
            </div>
            <div>
              <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">100K+</div>
              <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">Total Transaksi</div>
            </div>
            <div>
              <div className="text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold">99%</div>
              <div className="text-sm xl:text-base lg:text-xs font-medium mt-1">Kepuasan Kerjasama</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Penghargaan */}
    <section className="py-12 bg-white">
      <div className="mx-auto w-[90%]">
        {/* Badge Row */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-center">Penghargaan</h2>
          <img
            src="../../temp/penghargaan.png"
            alt="Penghargaan"
            className="w-full max-w-4xl lg:w-2/3 rounded-lg object-contain"
          />
        </div>

        {/* Trophy Row */}
        <div className="mt-10 flex justify-start items-start gap-8 xl:gap-1 overflow-x-auto overflow-y-visible flex-nowrap pb-4">
          {trophies.map((trophy, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center text-center w-[120px] xl:w-[195px] lg:w-[80px]"
            >
              <img
                src={trophy.imgUrl}
                alt={trophy.title}
                className="h-[120px] w-auto object-contain xl:w-[100px] xl:h-auto lg:w-[60px]"
              />
              <div className="mt-2 text-xs xl:text-base lg:text-[10px] font-medium leading-snug max-w-[8rem]">
                {trophy.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* Partners Logos */}
  <section className="w-full">
    <div className="relative mx-auto max-w-[90%] px-5 py-10 lg:py-2
                    overflow-x-hidden overflow-y-visible"> 
        <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
      />
      <p className="text-xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-center font-medium">Portofolio Klien</p>
      <h2 className="text-center font-extrabold text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl mb-8 text-zinc-900">
        Pelanggan Setia Kami
      </h2>

      {/* Carousel by Category */}
      {/* pastikan sudah import Slider & CSS slick di file ini */}
      <Slider
        className="client-slider"
        dots={false}
        infinite
        speed={450}
        slidesToShow={1}         
        slidesToScroll={1}
        autoplay
        autoplaySpeed={2600}
        arrows
        responsive={[
          { breakpoint: 1280, settings: { slidesToShow: 1 } },
          { breakpoint: 768,  settings: { slidesToShow: 1 } },
        ]}
        centerMode={true}
        centerPadding="200px"
      >
        {categories.map((cat) => (
          <div key={cat.id} className="px-2">
            <div className="bg-white rounded-xl shadow-lg border border-zinc-100 p-5 flex flex-col h-[600px]">
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
                    className="flex items-center justify-center h-[60px] xl:h-[80px] lg:h-[50px] md:h-[40px] sm:h-[30px] px-2"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      className="max-w-full object-contain xl:h-[50px] lg:h-[30px] md:h-[25px] sm:h-[20px]"
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


  <section className="relative bg-white overflow-visible pb-10">
    {/* Bagian atas: foto + teks */}
    <div className="mx-auto max-w-[90%] pt-16 relative z-10">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        
        {/* Foto kiri */}
        <div className="lg:col-span-5 md:col-span-3 relative z-10">
          <img
            src="../../temp/mitrakami.png"
            alt="Mitra Kami"
            className="mx-auto h-auto max-w-[780px] w-full object-contain"
          />
        </div>

        {/* Teks kanan */}
        <div className="lg:col-span-7 relative z-10 -top-32">
          <h2 className="text-center text-[40px] md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-zinc-900">
            Mitra Kami
          </h2>
          <h3 className="mt-2 text-center text-2xl md:text-xl lg:text-2xl font-extrabold text-[#1444D5]">
            Kenapa Jadi Bagian Kami?
          </h3>

          {/* Bullet 2 kolom */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 sm:gap-x-10 gap-y-4 text-zinc-800">
            <ul className="space-y-4">
              {["Pengalaman Sejak 1991", "Barang 100% ORI", "Garansi Resmi"].map((t) => (
                <li key={t} className="flex items-center gap-3 sm:gap-2 font-medium">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1444D5]" />
                  <span className="text-lg xl:text-base lg:text-sm md:text=sm sm:text-xs ">{t}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "Service Center Certified",
                "Tingkat Kepuasan Pelanggan Terbaik",
                "Sales & Teknisi Profesional",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 sm:gap-2 font-medium">
                  <FontAwesomeIcon icon={faCheck} className="text-[#1444D5]" />
                  <span className="text-lg xl:text-base lg:text-sm md:text-sm sm:text-xs">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Panel Brand Partner - Overlay */}
    <div className="absolute right-0 md:right-0 md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2 md:w-[70%] w-[90%] top-[60%] lg:top-[56%] xl:top-[70%] md:absolute md:-bottom-12">
      <div className=" w-[100%] bg-zinc-100  py-10 px-6 ml-auto md:py-10 md:ml-auto">
        <h4 className="mb-6 text-center text-2xl lg:text-2xl md:text-xl font-extrabold text-[#1444D5] ps-36 xl:ps-52 lg:ps-32">
          Brand Partner
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-x-5 ps-52 lg:ps-32">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              className="h-[50px] w-[80px] xl:h-[50px] lg:h-[30px] lg:w-[35px] object-contain opacity-90 sm:h-3 md:h-5"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
    
    {/* Portfolio */}
    <section className="max-w-screen-4xl mx-auto">
      <p className="text-xl text-center font-medium lg:text-lg md:text-base sm:text-sm">Portofolio Klien</p>
      <h2 className="text-center font-extrabold text-[40px] lg:text-4xl md:text-3xl sm:text-2xl mb-8 text-zinc-900">
        Portofolio Event
      </h2>
      <div className="flex flex-wrap justify-center gap-20 lg:gap-10">
        {portfolioData.map(({ title, mainImage, thumbnails }, i) => (
          <div
            key={i}
            className="w-full sm:w-[420px] md:w-[500px] lg:w-[375px] bg-white rounded-xl shadow p-6 flex flex-col items-center"
          >
            <img src={mainImage} alt={title} className="w-full aspect-square object-cover rounded-lg mb-3" />
            <div className="grid grid-cols-3 gap-3 w-full mb-3">
              {thumbnails.map((t, j) => (
                <img key={j} src={t} alt="" className="w-full aspect-square object-cover rounded-md shadow-sm" />
              ))}
            </div>
            <h3 className="font-extrabold text-xl lg:text-lg md:text-base sm:text-sm">{title}</h3>
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
          ]}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="h-full px-3 flex items-stretch">
                <article
                  className="bg-white rounded-2xl border border-zinc-100 shadow-[0_3px_10px_rgba(0,0,0,0.07)] p-6 flexjustify-between w-full h-[210px] lg:h-[225px]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar name={t.name} url={t.avatarUrl} />
                    <div>
                      <h3 className="font-bold text-zinc-900 text-base lg:text-sm md:text-xs">
                        {t.name}
                      </h3>
                      <p className="text-sm text-zinc-500 lg:text-xs">{t.subtitle}</p>
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


      {/* Contact Form */}
      {/* ================== CONTACT FORM ================== */}
      <section className="mx-auto max-w-screen-4xl py-12 lg:py-2">
        <div className="bg-white   rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10">
          <h2 className="text-center text-4xl font-extrabold text-zinc-900 mb-10">
            Bergabung dengan Kami
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
          >
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
                  className="h-12 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-10 text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
                >
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
                  fill="currentColor"
                >
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
                  className="rounded-lg bg-blue-700 px-8 py-2 w-[150px] text-white font-semibold shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
                >
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
