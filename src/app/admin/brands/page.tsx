"use client";

import { Suspense } from "react";
import AdminBasePage from "../base";
import BrandLoading from "./components/LoadingBrand";
import AdminBrands from "./brands";

export default function AdminBrandsPage() {
  return (
    <AdminBasePage>
      <Suspense fallback={<BrandLoading />}>
        <AdminBrands />
      </Suspense>
    </AdminBasePage>
  );
}
