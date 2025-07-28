"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "./components/Sidebar";

export default function AdminBasePage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checkingAdminAccess, setCheckingAdminAccess] = useState(true);

  useEffect(() => {
    // Check if admin access key is set in sessionStorage
    setCheckingAdminAccess(true);

    const adminAccess = sessionStorage.getItem(
      process.env.NEXT_PUBLIC_ADMIN_ACCESS_KEY || ""
    );
    console.log("Admin Access Key:", adminAccess);
    if (adminAccess === null) {
      window.location.href = "/"; // Redirect to home if access key is not set
      return;
    }
    const token = sessionStorage.getItem("token");
    if (process.env.NEXT_PUBLIC_APP_ENV === "dev") {
      console.log("User Token:", token);
    }

    setCheckingAdminAccess(false);
  }, []);

  if (checkingAdminAccess) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white-50 flex">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">{children}</main>
    </div>
  );
}
