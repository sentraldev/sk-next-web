"use client";

import React, { useState } from "react";

const SEOSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-6 content-width mx-auto">
      <div
        className={`relative transition-all ${
          expanded
            ? "max-h-none"
            : "max-h-48 overflow-hidden md:max-h-none md:overflow-visible"
        }`}>
        <p className="text-[#BEBEBE] text-xs">
          Sentral Komputer – Pusat Laptop, Komputer, dan Service Resmi
          Terpercaya di Indonesia Sentral Komputer adalah toko laptop dan
          komputer terlengkap di Indonesia dengan 18 cabang resmi di Jakarta,
          Bekasi, Bogor, Karawang, Cikarang, Serang, Purwakarta, Sukabumi, dan
          Cilegon. Dengan cakupan wilayah yang luas meliputi DKI Jakarta, Jawa
          Barat, dan Banten, Sentral Komputer menjadi pusat laptop, komputer,
          aksesoris, serta layanan service terpercaya dengan akses yang mudah
          dan nyaman di setiap kota. Kami menghadirkan laptop terbaru dari merek
          ternama seperti Acer, ASUS, Lenovo, HP, MSI, Axioo, dan Zyrex, serta
          berbagai aksesoris dan peripheral gaming dari Fantech, Rexus,
          Logitech, dan merek populer lainnya. Semua produk dijamin 100%
          original dengan garansi resmi, ditambah dengan garansi ADP (Accidental
          Damage Protection) untuk perlindungan ekstra terhadap kerusakan akibat
          kecelakaan seperti jatuh, terkena cairan, atau benturan. Bahkan,
          beberapa produk pilihan sudah dilengkapi ADP gratis, sehingga
          pelanggan mendapatkan keuntungan lebih tanpa biaya tambahan. Selain
          jaringan toko offline, Sentral Komputer juga menyediakan platform
          belanja online yang aman, cepat, dan praktis. Dengan dukungan sistem
          pembayaran terpercaya, opsi pengiriman fleksibel, dan customer support
          yang responsif, pengalaman belanja laptop, komputer, dan aksesoris
          menjadi lebih nyaman kapan saja dan di mana saja. Untuk layanan purna
          jual, Sentral Service hadir sebagai pusat service center resmi
          terpercaya dengan teknisi bersertifikat. Kami memberikan layanan
          perawatan, perbaikan, dan upgrade perangkat dengan sparepart resmi
          bergaransi, harga terjangkau, serta pilihan service onsite maupun bisa
          ditunggu langsung di tempat. Semua merek laptop dapat ditangani,
          termasuk layanan cleaning dan repasta murah untuk menjaga performa
          laptop tetap optimal. Tidak hanya untuk konsumen individu, Sentral
          Komputer juga melayani B2B, korporasi, koperasi, sekolah, universitas,
          hingga proyek pemerintah dengan solusi pengadaan perangkat teknologi
          yang lengkap dan terpercaya. Sebagai toko laptop dan komputer terbaik,
          ternyaman, terbagus, dan terlengkap, Sentral Komputer memberikan
          pilihan produk yang sangat banyak, promo menarik, free gift melimpah,
          serta pelayanan sales yang ramah dan profesional. Dengan reputasi
          terpercaya, pengalaman panjang, dan harga yang bersahabat, Sentral
          Komputer adalah destinasi utama untuk semua kebutuhan laptop,
          komputer, dan IT di Indonesia.
        </p>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent md:hidden" />
        )}
      </div>

      {!expanded && (
        <div className="mt-2 md:hidden flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-xs font-bold text-primary-600 hover:underline">
            Lihat Selengkapnya
          </button>
        </div>
      )}
    </section>
  );
};

export default SEOSection;
