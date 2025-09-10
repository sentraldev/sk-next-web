"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-6 py-12 space-y-16 font-sans text-gray-800">
      
      {/* Header Image */}
      <div>
        <img
          src="/images/about/header-celebration.jpg"
          alt="Opening Event"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Company History Group Photo */}
      <div className="text-center max-w-4xl mx-auto">
        <img
          src="/images/about/team-photo.jpg"
          alt="Team Photo"
          className="mx-auto rounded-lg shadow-sm"
        />
        <p className="mt-4 text-gray-600">
          Sejak 1991 hingga kini, kami terus maju dan berkembang bersama tim yang solid dan profesional.
        </p>
      </div>

      {/* 1991 Historical Image */}
      <div className="max-w-2xl mx-auto my-12">
        <img
          src="/images/about/1991-history.jpg"
          alt="Company History 1991"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Core Values */}
      <section className="space-y-8">
        <h2 className="text-center text-3xl font-bold mb-8">Inilah Nilai yang Menuntun Langkah Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/icons/growth-mindset.svg" alt="Growth Mindset" className="mx-auto mb-4 h-16" />
            <h3 className="font-semibold text-lg mb-2">Growth Mindset</h3>
            <p className="text-gray-600 text-sm">
              Terus berinovasi dan berkembang untuk memberikan yang terbaik.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/icons/customer-first.svg" alt="Customer First" className="mx-auto mb-4 h-16" />
            <h3 className="font-semibold text-lg mb-2">Customer First</h3>
            <p className="text-gray-600 text-sm">Prioritas utama kami adalah kepuasan pelanggan.</p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/icons/integrity.svg" alt="Integrity" className="mx-auto mb-4 h-16" />
            <h3 className="font-semibold text-lg mb-2">Integrity</h3>
            <p className="text-gray-600 text-sm">Kejujuran adalah fondasi bisnis kami.</p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg shadow-inner text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Visi</h2>
        <p className="text-gray-700">
          Menjadi solusi utama penyedia produk dan jasa teknologi informasi di Indonesia.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-center text-3xl font-bold mb-8">Misi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/images/about/mission1.jpg" alt="Misi 1" className="mx-auto mb-4 rounded" />
            <p className="text-gray-600 text-sm">
              Menjadi solusi satu pintu pemenuhan kebutuhan perangkat keras dan lunak.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/images/about/mission2.jpg" alt="Misi 2" className="mx-auto mb-4 rounded" />
            <p className="text-gray-600 text-sm">
              Memberikan layanan purna jual dan dukungan pelanggan yang optimal.
            </p>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow text-center">
            <img src="/images/about/mission3.jpg" alt="Misi 3" className="mx-auto mb-4 rounded" />
            <p className="text-gray-600 text-sm">
              Menjalin kemitraan strategis untuk memperkuat ekosistem IT di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Business Area */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Tentang Bisnis Kami</h2>
        <h3 className="text-xl font-semibold">Dealership dan Reseller</h3>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">
          Kami menyediakan produk resmi dari banyak merek ternama, dengan layanan purna jual terpercaya.
        </p>
        <div className="flex justify-center gap-12 text-gray-700">
          <div>
            <span className="block text-3xl font-bold text-blue-600">150+</span>
            <span>Dealer Partnership</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-600">100K+</span>
            <span>Unit Terjual</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-blue-600">99%</span>
            <span>Customer Satisfied</span>
          </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Partner Kami</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center">
          {/* Contoh logo partner, ganti dengan yang sesuai */}
          <img src="/partners/asus.png" alt="ASUS" className="max-h-12 mx-auto" />
          <img src="/partners/lenovo.png" alt="Lenovo" className="max-h-12 mx-auto" />
          <img src="/partners/dell.png" alt="Dell" className="max-h-12 mx-auto" />
          <img src="/partners/hp.png" alt="HP" className="max-h-12 mx-auto" />
          <img src="/partners/microsoft.png" alt="Microsoft" className="max-h-12 mx-auto" />
          <img src="/partners/intel.png" alt="Intel" className="max-h-12 mx-auto" />
          <img src="/partners/amd.png" alt="AMD" className="max-h-12 mx-auto" />
          <img src="/partners/acer.png" alt="Acer" className="max-h-12 mx-auto" />
        </div>
      </section>

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
