"use client";

import {
  HeartOutlined,
  MailOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LoginPopup from "../login/page";
import RegisterPopup from "../register/page";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary-900 text-xs text-white flex justify-between items-center py-1">
        <div className="w-full content-width flex flex-row mx-auto justify-between items-center">
          <div className="flex flex-row gap-4">
            <Image
              src={"/icons/sk-white.png"}
              alt="white-logo"
              width={80}
              height={80}
              className="object-cover w-full h-[24]"
            />
            <Image
              src={"/icons/ss-white.png"}
              alt="white-service-logo"
              width={80}
              height={80}
              className="object-cover w-full h-[24]"
            />
          </div>
          <span>Pusat IT, Laptop, dan Service Terbaik di Indonesia</span>
          <div className="flex items-center gap-2">
            <MailOutlined />
            <Link href="#" className="font-semibold">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="bg-gray-50 content-width mx-auto flex flex-col md:flex-row md:items-center pt-1 pb-2 gap-2">
        <div className="flex items-center gap-2 mr-8 mt-4 hover:cursor-pointer">
          <Image
            src="/logo.png"
            alt="Sentral Komputer Logo"
            width={120}
            height={36}
            onClick={() => (window.location.href = "/")}
          />
        </div>
        {/* TODO: Category Dropdown */}
        <div className="flex flex-1 items-center gap-2 mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari di Sentral Komputer!"
              className="flex w-full border border-gray-300 rounded px-3 py-2 pl-10 focus:outline-none text-sm"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchOutlined />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-300 pr-6 mr-6 gap-2 flex">
            <button
              className="ml-8 p-2 rounded-full hover:bg-gray-100 text-xl"
              onClick={() => (window.location.href = "/wishlist")}>
              <HeartOutlined />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 text-xl"
              onClick={() => (window.location.href = "/shopping-cart")}>
              <ShoppingCartOutlined />
            </button>
          </div>
          <button
            className="text-sm bg-white border-2 border-primary-900 text-primary-900 px-4 py-1 rounded hover:bg-primary-900 hover:text-white transition"
            onClick={() => setShowLogin(true)}>
            Masuk
          </button>
          <button
            className="text-sm bg-primary-900 text-white px-4 py-1 rounded border-2 border-primary-900 hover:bg-primary-800 transition"
            onClick={() => setShowRegister(true)}>
            Daftar
          </button>
        </div>
      </div>
      {/* Navigation */}
      <div className="w-full bg-gray-200 py-1">
        <div className="content-width mx-auto flex flex-row items-center justify-between ">
          <nav className="border-b border-gray-200 py-1 flex flex-wrap items-center text-sm font-medium gap-4 md:gap-8 lg:gap-12 xl:gap-16">
            <Link
              href="/products"
              className="hover:text-blue-700 hover:cursor-pointer">
              Produk
            </Link>
            <Link href="/promos" className="hover:text-blue-700">
              Promo
            </Link>
            <Link href="/article" className="hover:text-blue-700">
              Artikel
            </Link>
            <Link href="/our-location" className="hover:text-blue-700">
              Lokasi Kami
            </Link>
            <Link href="/service-center" className="hover:text-blue-700">
              Sentral Service
            </Link>
            <Link href="/about-us" className="hover:text-blue-700">
              Tentang Kami
            </Link>
          </nav>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-4 text-sm">
              Aktifkan lokasi untuk melihat toko terdekat
            </span>
          </div>
        </div>
      </div>
    </header>

    {/* Popup Login */}
      {showLogin && (
        <LoginPopup
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}
    {/* Popup Register dengan handler tombol "Masuk disini" */}
      {showRegister && (
        <RegisterPopup
          onClose={() => {setShowRegister(false)}}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
