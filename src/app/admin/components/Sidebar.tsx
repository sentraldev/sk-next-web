"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MAIN_SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard", href: "/admin/dashboard" },
  { key: "carousel", label: "Carousel Banner", href: "/admin/carousel" },
  { key: "categories", label: "Product Categories", href: "/admin/categories" },
  { key: "brands", label: "Brands", href: "/admin/brands" },
  // { key: "users", label: "Users", href: "/admin/users" },
  { key: "products", label: "Products", href: "/admin/products" },
  { key: "promos", label: "Promos", href: "/admin/promos" },
  { key: "articles", label: "Artikel", href: "/admin/articles" },
];

// const SUB_SIDEBAR_ITEMS = [
//   { key: "locations", label: "Lokasi Kami", href: "/admin/locations" },
//   // { key: "transactions", label: "Transactions", href: "/admin/transactions" },
// ];

export default function AdminSidebar() {
  const pathname = usePathname();

  function onLogout() {
    // Handle logout logic here
    sessionStorage.removeItem("token"); // Example logout logic
    window.location.href = "/"; // Example redirect
  }

  return (
    <aside className="w-64 h-screen bg-gray-200 shadow-lg flex flex-col py-6 px-4 justify-between fixed overflow-hidden">
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.png"
            alt="Sentral Komputer Logo"
            className="h-16 w-auto"
          />
        </div>
        <p className="text-gray-400 font-semibold text-xs px-3 py-2">Main</p>
        <nav className="flex flex-col gap-4">
          {MAIN_SIDEBAR_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`px-3 py-2 rounded text-left transition font-semibold ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-white hover:bg-blue-500"
                }`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mb-2 flex flex-col items-center">
        <span className="text-gray-700 text-sm mb-2">admin@sentral.com</span>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm w-full"
          onClick={onLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}
