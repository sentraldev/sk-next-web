"use client";
import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type Part = { key: string; label: string; icon: string };

const PARTS: Part[] = [
  { key: "keyboard", label: "Keyboard", icon: "/images/parts/keyboard.png" },
  { key: "led", label: "LED", icon: "/images/parts/led.png" },
  { key: "battery", label: "Battery", icon: "/images/parts/battery.png" },
  { key: "ram", label: "Memory RAM", icon: "/images/parts/ram.png" },
  { key: "speaker", label: "Speaker", icon: "/images/parts/speaker.png" },
  {
    key: "motherboard",
    label: "Motherboard",
    icon: "/images/parts/motherboard.png",
  },
  { key: "touchpad", label: "Touchpad", icon: "/images/parts/touchpad.png" },
  { key: "port", label: "Port USB", icon: "/images/parts/usb-port.png" },
  { key: "ssd", label: "SSD", icon: "/images/parts/ssd.png" },
  { key: "fan", label: "Fan", icon: "/images/parts/fan.png" },
  { key: "adapter", label: "Adaptor", icon: "/images/parts/adaptor.png" },
];

const services = [
  {
    image: "/images/keunggulan/keunggulan1.jpg", // gambar besar atas
    icon: "/images/keunggulan/icons/icon1.png", // icon sebagai image
    title: "Teknisi Bersertifikat & Training Rutin Bulanan",
  },
  {
    image: "/images/keunggulan/keunggulan2.jpg",
    icon: "/images/keunggulan/icons/icon2.png",
    title: "Service Bisa Ditunggu (Quick Service)",
  },
  {
    image: "/images/keunggulan/keunggulan3.jpg",
    icon: "/images/keunggulan/icons/icon3.png",
    title: "Menerima Semua Merek Laptop",
  },
  {
    image: "/images/keunggulan/keunggulan4.jpg",
    icon: "/images/keunggulan/icons/icon4.png",
    title: "Sparepart Resmi & Bergaransi",
  },
  {
    image: "/images/keunggulan/keunggulan5.jpg",
    icon: "/images/keunggulan/icons/icon5.png",
    title: "Tersedia Layanan Onsite Service",
  },
];

export default function ServiceCenterPage() {
  return (
    <>
      <Header />
      <div className="mx-auto py-8 space-y-12">
        <div className="content-width mx-auto">
          <img
            src="../../images/sentral-service/video.jpg"
            alt="Service Center"
            className="w-full aspect-[31/9] object-cover rounded-lg"
          />
        </div>
        <div className="content-width text-center mx-auto space-y-6">
          <h2 className="font-extrabold xl:text-[32px] lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
            Sentral Service
          </h2>
          {/* Sentral Service */}
          <div
            // className="relative w-full h-48 xl:h-[400px] sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
            className="relative w-full rounded-xl overflow-hidden flex items-center justify-center text-center px-4 aspect-[48/9] lg:aspect-[48/9]"
            style={{
              backgroundImage: `url(${"../../images/sentral-service/sentral-service.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            {/* Overlay gelap semi transparan */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Konten teks di atas overlay */}
            <div className="relative z-10 text-white w-[52%]">
              <p className="text-base xl:text-2xl/[50px] lg:text-xl/10 md:text-lg/8 sm:text-base/6">
                <b>Sentral Service</b> adalah layanan service center resmi yang
                dikembangkan oleh <b>Sentral Komputer</b>, hadir untuk
                memberikan solusi terbaik bagi kerusakan laptop Anda—baik
                software maupun hardware.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-100 py-16">
          <h2 className="text-center font-extrabold text-[24px] md:text-[30px] lg:text-[32px] mb-6 leading-tight">
            Teknisi Tersertifikasi & Selalu Update Skill
          </h2>
          <div className="content-width mx-auto">
            {/* GRID UTAMA */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch ">
              {/* CONTAINER GRID: semua baris sama tinggi (auto-rows:1fr) */}
              <div
                className="grid grid-cols-3 gap-4"
                style={{ gridAutoRows: "0.5fr" }} // alternatif: "auto-rows-[1fr]" jika Tailwind mendukung
              >
                {/* Gambar besar: menempati 2 kolom x 2 baris pada md+ */}
                <div className="aspect-square col-span-3 md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-utama.jpg"
                    alt="Teknisi utama"
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Kotak-kotak kecil: setiap kotak sama ukuran karena row height = 1fr */}
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-2.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-3.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* baris bawah: 3 kotak kecil */}
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-4.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-5.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/sentral-service/teknisi-6.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* === KANAN: TEKS === */}
              <div className="flex flex-col col-span-3 justify-between">
                <p className="font-medium text-xl md:text-xl mb-4 leading-relaxed">
                  Kami bangga memiliki tim teknisi{" "}
                  <span className="font-extrabold text-blue-600">
                    bersertifikat resmi
                  </span>{" "}
                  dengan pengalaman luas di bidang perbaikan laptop.
                </p>

                <p className="font-medium text-xl md:text-xl mb-4 leading-relaxed">
                  Secara rutin, teknisi kami mengikuti{" "}
                  <span className="font-extrabold text-blue-600">
                    pelatihan update teknologi terbaru
                  </span>
                  . Dengan pembaruan ini, mereka siap menghadapi berbagai jenis
                  kerusakan, mulai dari masalah ringan hingga perbaikan tingkat
                  lanjut, menggunakan{" "}
                  <span className="font-extrabold text-blue-600">
                    metode terbaik yang sesuai standar industri
                  </span>
                  .
                </p>

                <p className="font-medium text-xl md:text-xl leading-relaxed">
                  Selain keterampilan teknis, kami juga membekali tim dengan{" "}
                  <span className="font-extrabold text-blue-600">
                    pengetahuan keselamatan kerja
                  </span>{" "}
                  serta{" "}
                  <span className="font-extrabold text-blue-600">
                    etika pelayanan pelanggan
                  </span>
                  , sehingga setiap proses servis dilakukan secara{" "}
                  <span className="font-extrabold text-blue-600">
                    profesional, aman, dan transparan
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="content-width mx-auto">
            {/* TITLE */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center mb-12">
              Layanan Unggulan Kami
            </h2>

            {/* GRID LIST */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-5 justify-items-center">
              {/* ITEM */}
              {[
                {
                  img: "/images/service/layanan.jpg",
                  title: "Replace VGA & Processor",
                },
                {
                  img: "/images/service/layanan2.jpg",
                  title: "Software & Hardware",
                },
                {
                  img: "/images/service/layanan3.jpg",
                  title: "Recovery Windows/Install Ulang",
                },
                {
                  img: "/images/service/layanan4.jpg",
                  title: "Mati Total & No Display",
                },
                {
                  img: "/images/service/layanan5.jpg",
                  title: "Cleaning & Re-pasta",
                },
                {
                  img: "/images/service/layanan6.jpg",
                  title: "Flash IC BIOS/IC KBC",
                },
                {
                  img: "/images/service/layanan7.jpg",
                  title: "Re-ball IC Chipset VGA & Processor",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
            flex flex-col items-center bg-white rounded-2xl shadow-md 
            hover:shadow-lg transition-shadow duration-300
            overflow-hidden w-full h-full
          ">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="py-4 px-3 text-center">
                    <p className="font-medium text-sm md:text-base text-gray-900 leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full bg-transparent py-6">
          {/* wrapper --- limit width to 90% of screen */}
          <div className="mx-auto content-width ">
            {/* HERO IMAGE with title overlay */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/images/penggantian-parts.jpg" // <- ganti dengan hero image pathmu
                alt="Penggantian Part hero"
                className="w-full h-[120px] sm:h-[160px] md:h-[220px] lg:h-[240px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <h3 className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-[0_6px_18px_rgba(0,0,0,0.5)]">
                  Penggantian Part
                </span>
              </h3>
            </div>

            {/* CARD: background white area with icons */}
            <div
              className="relative -mt-6 bg-white shadow-md sm:-mt-10 rounded-xl rounded-t-none border border-transparent
                     px-6 sm:px-10 py-8 md:py-10"
              // jika mau overlap lebih dramatis sesuaikan margin-top negatif di atas (-mt-..)
            >
              {/* grid of icons */}
              <div
                className="
              grid gap-y-6 gap-x-6
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              items-start
            ">
                {PARTS.map((p) => (
                  <div
                    key={p.key}
                    className="flex items-center gap-4 min-h-[56px] md:min-h-[64px]">
                    {/* icon container */}
                    <div className="flex-none h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg flex items-center justify-center">
                      {/* use <img> so you can swap icons easily */}
                      <img
                        src={p.icon}
                        alt={p.label}
                        className="h-16 w-16 md:h-16 md:w-16 object-contain"
                      />
                    </div>

                    {/* label */}
                    <div className="text-base md:text-lg text-zinc-900 font-medium">
                      {p.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="content-width mx-auto">
            <h2 className="text-center font-extrabold text-2xl md:text-3xl lg:text-[32px] mb-10 text-zinc-900">
              Keunggulan Sentral Service
            </h2>

            {/* grid responsive: sm=2, md=3, lg=5 */}
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
              {services.map((s, i) => (
                <article
                  key={i}
                  className="w-full  aspect-square bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
                  {/* gambar atas */}
                  <div className="w-full rounded-xl overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full aspect-square object-cover block"
                      loading="lazy"
                    />
                  </div>

                  {/* icon + title */}
                  <div className="mt-3 flex items-start gap-3">
                    <img
                      src={s.icon}
                      alt={`${s.title} icon`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                    <p className="text-sm md:text-sm lg:text-sm text-left font-bold leading-snug max-w-[160px]">
                      {s.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center mx-auto content-width">
          <div className="flex w-full mx-auto h-[400px] rounded-xl overflow-hidden shadow-lg border">
            <div className="w-2/3 bg-gradient-to-br pt-6 from-[#3A8BCF] to-[#1444D5] text-white flex flex-col justify-center">
              <div className="bg-white text-blue-700 text-3xl font-extrabold px-10 py-4">
                Promo Spesial untuk Anda
              </div>

              <div className="flex flex-col gap-5 px-10 pb-10 mt-10 text-lg">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                  <p className="text-2xl font-medium">
                    <span className="font-extrabold text-2xl">20% Diskon</span>{" "}
                    Jasa Servis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                  <p className="text-2xl font-medium">
                    Free Cleaning & Re-pasta Senilai{" "}
                    <span className="font-extrabold text-2xl">350k</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                  <p className="text-2xl font-medium">
                    <span className="font-extrabold text-2xl">10% Diskon</span>{" "}
                    Sparepart
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between py-5 bg-white">
              <div className="flex flex-col items-center justify-between h-full">
                <div className="w-[5px] flex-1 border-l-2 border-solid"></div>
              </div>
            </div>

            <div className="relative w-1/3">
              <img
                src="/images/promo.jpg"
                alt="Promo Image"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-blue-700 bg-opacity-40"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-[32px] font-extrabold mb-4">
                  Claim sekarang
                </h2>
                <button className="bg-white text-blue-700 font-extrabold text-xl px-6 py-2 rounded-md shadow hover:bg-blue-100 transition">
                  Claim Promo
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center bg-[#F8F8F8] py-10 px-4">
          <div className="flex items-center content-width mx-auto  gap-10">
            <div className="flex-shrink-0 w-1/3">
              <img
                src="/images/konsultasi.png"
                alt="Teknisi Sentral Service"
                className="object-contain w-full"
              />
            </div>

            <div className="flex flex-col text-2xl w-2/3 leading-relaxed text-zinc-900">
              <p className="mb-2 font-medium">Konsultasi Gratis sekarang!</p>
              <p className="mb-2">Jangan biarkan laptop rusak terlalu lama.</p>
              <p className="mb-2">
                <span className="text-[#1444D5] font-semibold">
                  Hubungi kami
                </span>{" "}
                hari ini untuk diagnosa awal
                <span className="text-[#1444D5] font-extrabold">
                  {" "}
                  GRATIS{" "}
                </span>{" "}
                bersama teknisi profesional kami.
              </p>

              <p className="mt-5 text-[#1444D5] font-bold">
                Sentral Service – Layanan service laptop resmi, profesional, dan
                terpercaya.
              </p>

              <p className="mt-2">
                <span className="text-[22px]">📍</span> Tersedia di seluruh
                cabang Sentral Komputer.
              </p>
            </div>
          </div>
        </section>
        <div className="content-width mx-auto my-12">
          <p className="text-[10px] text-justify text-gray-400">
            Sentral Komputer – Pusat Laptop, Komputer, dan Service Resmi
            Terpercaya di Indonesia Sentral Komputer adalah toko laptop dan
            komputer terlengkap di Indonesia dengan 18 cabang resmi di Jakarta,
            Bekasi, Bogor, Karawang, Cikarang, Serang, Purwakarta, Sukabumi, dan
            Cilegon. Dengan cakupan wilayah yang luas meliputi DKI Jakarta, Jawa
            Barat, dan Banten, Sentral Komputer menjadi pusat laptop, komputer,
            aksesoris, serta layanan service terpercaya dengan akses yang mudah
            dan nyaman di setiap kota. Kami menghadirkan laptop terbaru dari
            merek ternama seperti Acer, ASUS, Lenovo, HP, MSI, Axioo, dan Zyrex,
            serta berbagai aksesoris dan peripheral gaming dari Fantech, Rexus,
            Logitech, dan merek populer lainnya. Semua produk dijamin 100%
            original dengan garansi resmi, ditambah dengan garansi ADP
            (Accidental Damage Protection) untuk perlindungan ekstra terhadap
            kerusakan akibat kecelakaan seperti jatuh, terkena cairan, atau
            benturan. Bahkan, beberapa produk pilihan sudah dilengkapi ADP
            gratis, sehingga pelanggan mendapatkan keuntungan lebih tanpa biaya
            tambahan. Selain jaringan toko offline, Sentral Komputer juga
            menyediakan platform belanja online yang aman, cepat, dan praktis.
            Dengan dukungan sistem pembayaran terpercaya, opsi pengiriman
            fleksibel, dan customer support yang responsif, pengalaman belanja
            laptop, komputer, dan aksesoris menjadi lebih nyaman kapan saja dan
            di mana saja. Untuk layanan purna jual, Sentral Service hadir
            sebagai pusat service center resmi terpercaya dengan teknisi
            bersertifikat. Kami memberikan layanan perawatan, perbaikan, dan
            upgrade perangkat dengan sparepart resmi bergaransi, harga
            terjangkau, serta pilihan service onsite maupun bisa ditunggu
            langsung di tempat. Semua merek laptop dapat ditangani, termasuk
            layanan cleaning dan repasta murah untuk menjaga performa laptop
            tetap optimal. Tidak hanya untuk konsumen individu, Sentral Komputer
            juga melayani B2B, korporasi, koperasi, sekolah, universitas, hingga
            proyek pemerintah dengan solusi pengadaan perangkat teknologi yang
            lengkap dan terpercaya. Sebagai toko laptop dan komputer terbaik,
            ternyaman, terbagus, dan terlengkap, Sentral Komputer memberikan
            pilihan produk yang sangat banyak, promo menarik, free gift
            melimpah, serta pelayanan sales yang ramah dan profesional. Dengan
            reputasi terpercaya, pengalaman panjang, dan harga yang bersahabat,
            Sentral Komputer adalah destinasi utama untuk semua kebutuhan
            laptop, komputer, dan IT di Indonesia.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
