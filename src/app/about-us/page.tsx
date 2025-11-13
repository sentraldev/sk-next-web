"use client";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import React, { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const missions = [
  {
    image: "images/missions/mission1.jpg", // Gambar contoh
    text: "Menjadi salah satu perusahaan swasta nasional yang akan terus bertumbuh dan berkontribusi bagi bangsa Indonesia",
  },
  {
    image: "images/missions/mission2.jpg", // Gambar contoh
    text: "Membantu dan memberikan dukungan kepada perusahaan kecil atau UMKM Indonesia yang berpotensi dan progresif.",
  },
  {
    image: "images/missions/mission3.jpg", // Gambar contoh
    text: "Mendidik dan menghasilkan tim yang unggul dalam karakter, pengetahuan, keterampilan, dan kemapanan dalam bekerja secara pribadi dan profesional",
  },
];

type Stat = {
  value: string;
  label: string;
  isLogo?: boolean; // Flag to indicate if this stat is a logo
  logoSrc?: string; // Path to logo image
};

const IMAGE_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

type Subsection = {
  heading: string;
  description: string;
  stats: { value: string; label: string; isLogo: boolean; logoSrc: string }[];
  image: string;
  imagePosition: string;
};

interface TabData {
  id: string;
  title: string;
  content: Subsection[];
}

const tabsData = [
    {
      id: 'b2b',
      title: 'Business to Business',
      content: {
        heading: 'Dealership dan Reseller',
        description:
          'Kami mendukung UMKM dan individu yang ingin berkembang dengan menyediakan pasokan dari brand IT ternama serta edukasi agar bisnis mereka tumbuh dan adaptif terhadap perkembangan zaman.',
        stats: [
          { value: '150+', label: 'Dealer Partnership' },
          { value: '100K+', label: 'Total Transaksi' },
          { value: '99%', label: 'Kepuasan Kerjasama' },
        ],
        image: 'images/tentang-bisnis/b2b.png', // Ganti dengan path gambar yang sesuai
        imagePosition: IMAGE_POSITIONS.LEFT, // 'left' atau 'right'
      },
    },
    {
      id: 'b2c',
      title: 'Business to Customer',
      content: [
        {
          heading: 'Retail Offline',
          description:
            'Sentral Komputer hadir untuk memenuhi kebutuhan laptop, komputer, aksesoris untuk masyarakat umum. Dengan lebih dari 17+ retail store yang tersebar di Indonesia, tim kami siap melayani dan membantu setiap pelanggan dengan sepenuh hati.',
          stats: [
            { value: '17+', label: 'Cabang' },
            { value: '10.000+', label: 'Konsumen Terlayani' },
            { value: '99%', label: 'Kepuasan Pelanggan' },
          ],
          image: 'images/tentang-bisnis/retail-offline.png',
          imagePosition: IMAGE_POSITIONS.RIGHT,
        },
        {
          heading: 'Service Center',
          description: 'Sebagai mitra resmi dari berbagai brand, Sentral Service by Sentral Komputer menyediakan layanan purna jual yang berkualitas tinggi. Seluruh proses service ditangani oleh teknisi bersertifikat yang mengutamakan ketepatan, keamanan, dan kepuasan pelanggan.',
          stats: [
            { value: 'HP', label: 'Certified', isLogo: true, logoSrc: '/images/brands/hp.png' },
            { value: 'Lenovo', label: 'Certified', isLogo: true, logoSrc: '/images/brands/lenovo.png' },
            { value: 'ASUS', label: 'Certified', isLogo: true, logoSrc: '/images/brands/asus.png' },
            { value: 'MSI', label: 'Certified', isLogo: true, logoSrc: '/images/brands/msi.png' },
            { value: 'Acer', label: 'Certified', isLogo: true, logoSrc: '/images/brands/acer.png' },
            { value: 'Zyrex', label: 'Certified', isLogo: true, logoSrc: '/images/brands/zyrex.png' },
            { value: 'Axioo', label: 'Certified', isLogo: true, logoSrc: '/images/brands/axioo.png' },
          ],
          image: '/images/tentang-bisnis/service-center.png',
          imagePosition: 'left',
        },
        {
          heading: 'Retail Online',
          description: 'Dengan jaringan resmi di Tokopedia, Shopee, TikTok Shop, BliBli, serta website utama yang terus diperbarui, Sentral Komputer memastikan konsumen dapat berbelanja produk teknologi dengan yang mudah, aman, dan nyaman di era digital.',
          stats: [
            { value: '17+', label: 'Cabang' },
            { value: '99%', label: 'Kepuasan Pelanggan' },
            { value: 'Tokopedia', label: '', isLogo: true, logoSrc: '/images/brands/tokopedia.png' },
            { value: 'Shopee', label: '', isLogo: true, logoSrc: '/images/brands/shopee.png' },
            { value: 'TikTok Shop', label: '', isLogo: true, logoSrc: '/images/brands/tiktokshop.png' },
            { value: 'Blibli', label: '', isLogo: true, logoSrc: '/images/brands/blibli.png' },
          ],
          image: '/images/tentang-bisnis/retail-online.png',
          imagePosition: 'right',
        },
      ],
    },
    {
      id: 'project',
      title: 'Proyek, Pengadaan, dan Kerjasama',
      content: {
        heading: 'Proyek & Pengadaan',
        description:
          'Kami menyediakan solusi pengadaan IT untuk instansi pemerintah, pendidikan, dan korporasi. Dengan tim ahli dan jaringan distribusi yang luas, kami siap menjadi mitra terpercaya dalam setiap proyek besar Anda.',
        stats: [
          { value: '50+', label: 'Proyek Selesai' },
          { value: '200+', label: 'Klien Korporasi' },
          { value: '98%', label: 'Kepuasan Klien' },
        ],
        image: 'images/tentang-bisnis/proyek.png',
        imagePosition: IMAGE_POSITIONS.LEFT,
      },
    },
  ];

  const renderStats = (stats: Stat[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center bg-white p-1 rounded-md shadow-md">
      {stats.map((stat, index) => (
        <div key={index} className="p-4">
          <p className="text-4xl font-extrabold">{stat.value}</p>
          <p className="mt-1 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );

  const renderSubsection = (subsection: Subsection, index: number) => {
    return (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center gap-8 ${
          subsection.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <h3 className="text-[32px] lg:text-[32px] md:text-xl font-bold mb-4">{subsection.heading}</h3>
          <p className="text-gray-700 mb-6">{subsection.description}</p>

          {/* Stats */}
          <div className="bg-white p-4 rounded-md shadow-md justify-center">
            {subsection.heading === 'Service Center' ? (<p className="font-extrabold py-2">Certified Service Center for: </p>) : null}
            <div className={`grid grid-cols-2 ${subsection.heading != 'Retail Offline' ? (subsection.heading === 'Retail Online' ? "md:grid-cols-6 gap-0" : "md:grid-cols-7") : "md:grid-cols-3 sm:grid-cols-3 gap-6"} mb-6 items-center`}>
              {subsection.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center"
                >
                  {stat.isLogo ? (
                    <img
                      src={stat.logoSrc}
                      alt={stat.value}
                      className={`w-auto ${subsection.heading === 'Retail Online' ? 'h-8' : 'h-4'} mx-auto`}
                    />
                  ) : (
                    <>
                      <div className="text-4xl xs:text-sm font-bold">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium mt-1">
                        {stat.label}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
        </div>

        <div className="md:w-1/2">
          <img
            src={subsection.image}
            alt={subsection.heading}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    );
  };

  const badges = [
  { title: "Best Sales Performance Jabodetabek", imgUrl: "/images/awards/best-amd.png" },
  { title: "Best Transformation Retail", imgUrl: "/images/awards/best-lenovo.png" },
  { title: "Best Performance Partner", imgUrl: "/images/awards/best-asus.png" },
  { title: "Best Retail Hero", imgUrl: "/images/awards/best-intel.png" },
  { title: "Highest Growth", imgUrl: "/images/awards/best-acer.png" },
];

const trophySets = [
  [{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-2.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-3.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-4.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-5.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-7.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-8.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-9.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-10.png",
  },],
[{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-11.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-12.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-13.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-14.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-15.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-16.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-17.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-18.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-19.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-20.png",
  },],
];

const trophySetsMobile = [
  [{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-2.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-3.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-4.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-5.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-7.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-8.png",
  },],
[
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-9.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-10.png",
  },
  {
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-11.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-12.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-13.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-14.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-15.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-16.png",
  },],
  [
    {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-17.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-18.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-19.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-20.png",
  },
  ],
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

const advantages = [
  'Pengalaman Sejak 1991', 'Barang 100% ORI', 'Garansi Resmi',
  'Service Center Certified', 'Tingkat Kepuasan Pelanggan Terbaik', 'Sales & Teknisi Profesional',
];

const checkIconColor = '#1444D5';

const brandPartners = [
  { name: "ASUS", logo: "images/brands/asus.png" },
  { name: "Apple", logo: "images/brands/apple.png" },
  { name: "Lenovo", logo: "images/brands/lenovo.png" },
  { name: "HP", logo: "images/brands/hp.png" },
  { name: "Samsung", logo: "images/brands/samsung.png" },
  { name: "MSI", logo: "images/brands/msi.png" },
  { name: "Rexus", logo: "images/brands/rexus.png" },
  { name: "Acer", logo: "images/brands/acer.png" },
  { name: "Zyrex", logo: "images/brands/zyrex.png" },
  { name: "Prolink", logo: "images/brands/prolink.png" },
  { name: "Axioo", logo: "images/brands/axioo.png" },
  { name: "Fantech", logo: "images/brands/fantech.png" },
  { name: "Advan", logo: "images/brands/advan.png" },
  { name: "Aukey", logo: "images/brands/aukey.png" },
  { name: "Kaspersky", logo: "images/brands/kaspersky.png" },
  { name: "Epson", logo: "images/brands/epson.png" },
  { name: "Toshiba", logo: "images/brands/toshiba.png" },
  { name: "Logitech", logo: "images/brands/logitech.png" },
  { name: "Intel", logo: "images/brands/intel.png" },
  { name: "AMD", logo: "images/brands/amd.png" },
  { name: "Nvidia", logo: "images/brands/nvidia.png" },
  { name: "McAfee", logo: "images/brands/mcafee.png" },
  { name: "Microsoft", logo: "images/brands/microsoft.png" },
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


export default function AboutUs(){
    const [activeTab, setActiveTab] = useState(tabsData[0].id);

    const currentTab = tabsData.find(tab => tab.id === activeTab);
    if (!currentTab) {
      return <div className="text-center py-12">Tab tidak ditemukan.</div>;
    }
    const [currentTrophySet, setCurrentTrophySet] = useState(0);
    const [currentTrophySetMobile, setCurrentTrophySetMobile] = useState(0);

    // Efek untuk rotasi otomatis trofi setiap 5 detik
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTrophySet((prev) => (prev + 1) % trophySets.length);
      }, 5000);

      const intervalMobile = setInterval(() => {
        setCurrentTrophySetMobile((prev) => (prev + 1) % trophySetsMobile.length);
      }, 5000);

      // Cleanup interval saat komponen unmount
      return () => {
        clearInterval(interval);
        clearInterval(intervalMobile);
      }
    }, []);

    const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    return (
        <>
            <Header />
             <div className="mx-auto py-8 space-y-12 xs:space-y-6">
                <div className="content-width mx-auto">
                    <img
                        src="images/about-us1.png"
                        alt="Opening Event"
                        className="w-full rounded-lg shadow-sm"
                    />
                </div>
             </div>
             <section className="content-width mx-auto py-8 sm:py-8 xs:py-0 space-y-12 xs:space-y-6">
                <div className="text-center space-y-4 xs:space-y-1">
                    <p className="font-medium text-base xl:text-xl lg:text-lg">Sejarah Sentral Komputer</p>
                    <h2 className="font-extrabold text-2xl xl:text-5xl lg:text-4xl md:text-3xl">Bermula Pada Tahun 1991</h2>
                    <p className="font-medium text-xs lg:text-sm md:text-xs lg:max-w-screen-md md:max-w-screen-sm mx-auto">
                        Kami berawal dari sebuah toko komputer dengan nama Sentral Komputer,
                        dan seiring berjalannya waktu, berkembang dan disahkan
                        menjadi PT Sentral Tekno Selaras pada tahun 2009.
                    </p>
                </div>
                <div>
                    <img
                        src="images/about-us2.png"
                        alt="Company History 1991"
                        className="rounded-lg w-full shadow-sm"
                    />
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-5 xs:grid-cols-2 gap-10 lg:gap-10 md:gap-5 xs:gap-3">
                    <div className="relative group col-span-2 sm:col-span-2 xs:col-span-1">
                        <img
                        src="images/about-us3.png" // ganti sesuai gambar
                        alt="Ilustrasi Pelayanan"
                        className="rounded-lg shadow-lg w-full h-auto object-cover sm:aspect-[16/9] xs:aspect-square"
                        />
                        {/* Overlay teks tengah */}
                        <div className="absolute inset-0 flex bg-red items-center justify-center">
                            <h2 className="text-white text-4xl lg:text-4xl md:text-3xl font-bold drop-shadow-md">
                                1991
                            </h2>
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-3 xs:col-span-1 content-center space-y-4 xs:space-y-2">
                        <h2 className="font-extrabold text-lg lg:text-[32px] md:text-2xl xs:text-base md:max-w-screen-md">Kami Telah Melayani Ribuan Konsumen, Organisasi & Korporsasi</h2>
                        <p className="font-medium text-[11px] lg:text-sm md:text-[11px] md:max-w-screen-sm">Untuk mendapatkan kebutuhan IT  resmi dan berkualitas melalui program distribusi, retail store, online/e-commerce, proyek, pengadaan korporasi, dan lain sebagainya.</p>
                    </div>
                </div>
             </section>
             <section className="mt-6 bg-gray-100 mx-auto py-8 sm:py-8 xs:py-3 space-y-12 xs:space-y-6">
                <div className="text-center">
                    <p className="font-medium text-sm md:text-xl sm:text-lg">Core Value Kami</p>
                    <h2 className="font-extrabold text-xl lg:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl">Inilah Nilai yang Menuntun Langkah Kami</h2>
                </div>
                <div className="content-width mx-auto grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-6 xs:gap-2">
                    {[
                    {
                        title: "Growth Mindset",
                        imageUrl: "images/core-value/core1.jpg",
                    },
                    {
                        title: "Customer First",
                        imageUrl: "images/core-value/core2.jpg",
                    },
                    {
                        title: "Integrity",
                        imageUrl: "images/core-value/core3.jpg",
                    },
                    ].map((item) => (
                    <div
                        key={item.title}
                        className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300">
                        <div className="relative w-full overflow-hidden aspect-[4/3] ">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover group-cover:scale-105 transition-transform duration-500"
                            // className="h-[500px] w-full xl:h-[500px] lg:h-[400px] md:h-[325px] sm:h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                        {/* Overlay teks di bawah */}
                        <div className="absolute bottom-0 left-0 right-0 px-4 xs:px-0 py-6 xl:py-6 lg:py-4 md:py-3 xs:py-2 text-white text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-xs font-extrabold text-center bg-gradient-to-t from-[#092566]/90 via-[#092566]/40 to-transparent">
                        {item.title}
                        </div>
                    </div>
                    ))}
                </div>
                <div
                    // className="relative w-full h-48 xl:h-[400px] sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
                    className="relative content-width mx-auto rounded-lg overflow-hidden flex items-center justify-center text-center px-4 aspect-[48/9] lg:aspect-[48/9] sm:aspect-[31/9] xs:aspect-[21/9]"
                    style={{
                        backgroundImage: `url(${"images/vision.jpg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    {/* Overlay gelap semi transparan */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Konten teks di atas overlay */}
                    <div className="relative z-10 text-white w-full">
                        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold mb-2">
                        Visi
                        </h2>
                        <p className="font-medium text-base xl:text-lg lg:text-base md:text-sm xs:text-sm">
                        Menjadi perusahaan profesional yang bergerak dibidang distribusi
                        dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
                        </p>
                    </div>
                </div>
                <div className="content-width mx-auto">
                    <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center mb-8">
                        Misi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {missions.map((mission, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1"
                        >
                            {/* Gambar */}
                            <div className="relative w-full overflow-hidden aspect-[4/3]">
                            <img
                                src={mission.image}
                                alt={`Mission ${idx + 1}`}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            </div>

                            {/* Teks */}
                            <div className="p-4 text-gray-800 text-center md:text-center xs:text-left text-base xl:text-lg lg:text-base sm:text-sm xs:text-[11px] xs:leading-[15px] font-medium flex items-center justify-center">
                            {mission.text}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
             </section>
             <section className="content-width mx-auto text-center space-y-6 sm:pt-9">
              <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
                  Penyebaran Lokasi Kami
              </h2>
              <div
                  className="relative w-full sm:h-96 md:h-[500px] xl:h-[800px] flex items-center justify-center text-center px-4"
                  style={{
                  backgroundImage: `url(${"../../temp/peta-indonesia.png"})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  }}>
                  {/* Overlay transparan (optional, bisa dihilangkan jika tidak perlu) */}
                  {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

                  {/* Teks di atas peta */}
                  <div className="relative z-10 text-[#1444D5] font-regular text-xl sm:text-2xl md:text-3xl lg:text-5xl max-w-xl xl:max-w-2xl mx-auto">
                  Terdapat di{" "}
                  <span className="text-[#1444D5] text-7xl lg:text-[64px] md:text-4xl sm:text-2xl xs:text-xl font-extrabold">
                      16+
                  </span>{" "}
                  Lokasi di Berbagai Kota di Indonesia
                  </div>
              </div>
            </section>
            <section className="mx-auto px-6 py-12 bg-gray-100">
              <div className="content-width mx-auto space-y-4">
                <h2 className="text-3xl font-bold mb-6 text-center">Tentang Bisnis Kami</h2>

                {/* Tab Navigation */}
                <nav className="mb-8 flex space-x-6 text-sm font-medium justify-center text-gray-500 border-b border-gray-200">
                  {tabsData.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 transition-colors ${
                        activeTab === tab.id
                          ? 'text-gray-900 border-b-2 border-indigo-600'
                          : 'hover:text-gray-900'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </nav>

                {/* Tab Content */}
                {Array.isArray(currentTab.content) ? (
                  currentTab.content.map((subsection, index) => renderSubsection(subsection, index))
                ) : (
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
                    <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/2">
                      <img
                        src={currentTab.content.image}
                        alt={currentTab.content.heading}
                        width={600}
                        height={400}
                        className="rounded-md object-cover"
                      />
                    </div>

                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">{currentTab.content.heading}</h3>
                      <p className="mb-8">{currentTab.content.description}</p>
                      {renderStats(currentTab.content.stats)}
                    </div>
                  </div>
                )}
              </div>
            </section>
            <div className="content-width mx-auto px-4 py-8">
              {/* Judul */}
              <h1 className="text-3xl md:text-[40px] xs:text-sm font-bold text-center mb-8">Penghargaan</h1>
              
              {/* Baris atas: Badge penghargaan (dengan gambar) */}
              <div className="flex flex-wrap justify-center mb-12">
                {badges.map((badge, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3"
                  >
                    <img 
                      src={badge.imgUrl} 
                      alt={`${badge.title}`} 
                      className="w-1/2 h-auto lg:w-1/2 md:w-14 sm:w-20 xs:w-8 mb-2 object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Baris bawah: Trofi */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {/* Desktop & Tablet: 1 baris 10 kolom */}
                <div className="hidden lg:flex flex-row gap-6 w-full justify-center">
                  {trophySets[currentTrophySet].map((trophy, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-4 duration-300"
                    >
                      <img 
                        src={trophy.imgUrl} 
                        alt={trophy.title} 
                        className="w-20 h-20 xs:w-14 xs:h-14 mb-2 object-contain"
                      />
                      <div className="text-xs md:text-sm xs:text-[7px] text-center font-semibold text-gray-700">
                        {trophy.title}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile: 4 kolom × 2 baris */}
                <div className="lg:hidden grid grid-cols-4 gap-6 w-full">
                  {trophySetsMobile[currentTrophySetMobile].map((trophy, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-4 duration-300"
                    >
                      <img 
                        src={trophy.imgUrl} 
                        alt={trophy.title} 
                        className="w-20 h-20 mb-2 object-contain"
                      />
                      <div className="text-xs text-center font-medium text-gray-700">
                        {trophy.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                <p className="text-base md:text-xl sm:text-sm xs:text-xs xs:font-bold text-center font-medium">
                  Portofolio Klien
                </p>
                <h2 className="text-center font-extrabold text-[40px] lg:text-4xl sm:text-3xl xs:text-sm mb-8 text-zinc-900">
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
                    className="w-full sm:w-[420px] md:w-[500px] lg:w-[375px] xl:w-[540px] bg-white rounded-xl shadow p-6 flex flex-col items-center">
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
            <Footer />
        </>
    );
}