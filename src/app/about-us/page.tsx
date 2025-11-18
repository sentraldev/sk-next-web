"use client";

import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import React from "react";

import TentangBisnis from "./components/TentangBisnis";
import CoreValue from "./components/CoreValue";
import LokasiKami from "./components/LokasiKami";
import Penghargaan from "./components/Penghargaan";
import PortfolioKlien from "./components/PortfolioKlien";
import MitraKami from "./components/MitraKami";
import PortfolioEvent from "./components/PortfolioEvent";
import Testimonial from "./components/Testimonial";
import ContactForm from "./components/ContactForm";

export default function AboutUs(){

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
          <CoreValue />
          <LokasiKami />
          <TentangBisnis />
          <Penghargaan />
          <PortfolioKlien />
          <MitraKami />
          <PortfolioEvent />
          <Testimonial />
          <ContactForm />
          <Footer />
        </>
    );
}