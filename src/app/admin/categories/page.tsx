"use client";

import { Suspense } from "react";
import AdminBasePage from "../base";
import AdminCategories from "./categories";
import CategoryLoading from "./components/LoadingCategory";

export default function AdminCategoriesPage() {
  return (
    <AdminBasePage>
      <Suspense fallback={<CategoryLoading />}>
        <AdminCategories />
      </Suspense>
    </AdminBasePage>
  );
}
