"use client";

import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // import modul fitur

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  { id: 'organisasi', label: 'Organisasi & S...' },
];

// Data klien sesuai kategori, dengan tipe Record untuk key yang ketat
const clients: Record<CategoryId, { id: number; name: string; logo: string }[]> = {
  pengadaan: [
    { id: 1, name: 'SIPLAH', logo: 'https://via.placeholder.com/100x60?text=SIPLAH' },
    { id: 2, name: 'KPP', logo: 'https://via.placeholder.com/100x60?text=KPP' },
    { id: 3, name: 'Iplah', logo: 'https://via.placeholder.com/100x60?text=Iplah' },
  ],
  perusahaan: [
    { id: 4, name: 'MIMS', logo: 'https://via.placeholder.com/100x60?text=MIMS' },
    { id: 5, name: 'suara.com', logo: 'https://via.placeholder.com/100x60?text=suara.com' },
    { id: 6, name: 'billboard', logo: 'https://via.placeholder.com/100x60?text=billboard' },
  ],
  organisasi: [
    { id: 7, name: 'Dinas Kesehatan', logo: 'https://via.placeholder.com/100x60?text=Dinkes' },
    { id: 8, name: 'Kementerian Agama', logo: 'https://via.placeholder.com/100x60?text=Kemenag' },
  ],
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("b2b");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  // Fungsi saat klik tab: pindahkan swiper ke slide kategori yang sesuai
  const onTabClick = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  // Saat slide berubah, update tab aktif
  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-6 py-12 space-y-16 font-sans text-gray-800">
      
      {/* Header Image */}
      <div>
        <img
          src="../../temp/about-us1.png"
          alt="Opening Event"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Company History Group Photo */}
      <div className="text-center max-w-4xl mx-auto">
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
      <div className="max-w-screen-xl mx-auto my-12">
        <img
          src="../../temp/about-us2.png"
          alt="Company History 1991"
          className="rounded-lg shadow-md"
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

      {/* Core Values */}
      <section className="">
        <p className="text-center text-md">Core Values Kami</p>
        <h2 className="text-center text-3xl font-bold">Inilah Nilai yang Menuntun Langkah Kami</h2>
        
        <div className="max-w-screen-xl mx-auto py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <div
          key={value.title}
          className="relative rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={value.imageUrl}
            alt={value.title}
            className="w-full h-64 object-cover"
          />
          {/* Gradient overlay di bawah teks */}
          <div
            className="absolute bottom-0 left-0 right-0 px-3 py-6 text-white text-lg font-semibold text-center"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(9, 37, 102, 0.85))",
              backgroundSize: "150% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {value.title}
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
      <section className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Misi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {missions.map((mission, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-48 md:h-56 lg:h-64 overflow-hidden">
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
    <section className="max-w-screen-xl mx-auto text-center space-y-6">
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
      <section className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
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
      <div style={{ maxWidth: 900, margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
        {categories.map((cat, index) => (
          <button
            key={cat.id}
            onClick={() => onTabClick(index)}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              cursor: 'pointer',
              borderBottom: activeIndex === index ? '3px solid #f44336' : '3px solid transparent',
              background: 'none',
              fontWeight: activeIndex === index ? 'bold' : 'normal',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={onSlideChange}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: true }}
        loop={false}
        modules={[Navigation, Pagination, Autoplay]}
        style={{ paddingBottom: 40 }}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: 20,
                justifyItems: 'center',
                alignItems: 'center',
              }}
            >
              {clients[cat.id].map((client) => (
                <div
                  key={client.id}
                  style={{
                    width: 100,
                    height: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #ddd',
                    borderRadius: 5,
                    padding: 10,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-bold">Apa Kata Mereka Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white border rounded-lg p-6 shadow">
              <p className="mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."</p>
              <p className="font-semibold">Customer Name {i}</p>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          ))}
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
