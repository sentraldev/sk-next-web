"use client";

import { useState } from "react";
import AdminBasePage from "../base";
import AdminProducts from "./products";
import AddProductPage from "./add-product-page";

export default function AdminProductsPage() {
  const [addingProduct, setAddingProduct] = useState(false);

  return (
    <AdminBasePage>
      {!addingProduct && (
        <AdminProducts addButtonPressed={() => setAddingProduct(true)} />
      )}
      {addingProduct && (
        <AddProductPage onCancel={() => setAddingProduct(false)} />
      )}
    </AdminBasePage>
  );
}
