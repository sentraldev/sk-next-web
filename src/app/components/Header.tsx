import {
  HeartOutlined,
  MailOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons/faHeart";
import {
  faCartArrowDown,
  faCartFlatbed,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
      <div className="bg-gray-50 content-width mx-auto flex flex-col md:flex-row md:items-center py-2 gap-2">
        <div className="flex items-center gap-2 mr-8">
          <Image
            src="/logo.png"
            alt="Sentral Komputer Logo"
            width={40}
            height={40}
          />
          <span className="text-lg font-bold text-primary-900">
            Sentral Komputer
          </span>
        </div>
        {/* TODO: Category Dropdown */}
        <div className="flex flex-1 items-center gap-2 mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari di Sentral Komputer!"
              className="flex w-full border border-gray-300 rounded px-3 py-2 pl-10 focus:outline-none"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchOutlined />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="border-r border-gray-300 pr-8 mr-8 gap-8 flex">
            <button className="ml-2 p-2 rounded-full hover:bg-gray-100 text-2xl">
              <ShoppingCartOutlined />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-2xl">
              <HeartOutlined />
            </button>
          </div>
          <button className="bg-white border-2 border-primary-900 text-primary-900 px-4 py-1 rounded hover:bg-primary-900 hover:text-white transition">
            Masuk
          </button>
          <button className="bg-primary-900 text-white px-4 py-1 rounded hover:bg-primary-800 transition">
            Daftar
          </button>
        </div>
      </div>
      {/* Navigation */}
      <div className="w-full bg-gray-200 py-1">
        <div className="content-width mx-auto flex flex-row items-center justify-between ">
          <nav className=" border-b border-gray-200 py-1 flex flex-wrap items-center text-sm font-medium gap-20">
            <Link href="#" className="hover:text-blue-700">
              Produk
            </Link>
            <Link href="#" className="hover:text-blue-700">
              Promo
            </Link>
            <Link href="#" className="hover:text-blue-700">
              Artikel
            </Link>
            <Link href="#" className="hover:text-blue-700">
              Lokasi Kami
            </Link>
            <Link href="#" className="hover:text-blue-700">
              Sentral Service
            </Link>
            <Link href="#" className="hover:text-blue-700">
              Tentang Kami
            </Link>
          </nav>

          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-4 text-sm">
              Aktifkan lokasi untuk melihat toko terdekat
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
