"use client";

import AdminSidebar from "./components/Sidebar";

export default function AdminBasePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white-50 flex">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}
