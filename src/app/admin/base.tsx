"use client";

import { useEffect } from "react";
import AdminSidebar from "./components/Sidebar";

export default function AdminBasePage({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("Access Token:", sessionStorage.getItem("token"));
  }, []);

  return (
    <div className="min-h-screen bg-white-50 flex">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}
