import React from "react";
import { Product } from "@/models/product";

interface ProductListItemProps {
  product: Product;
  index: number;
}

export default function ProductListItem({
  product,
  index,
}: ProductListItemProps) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-2 px-4 border-b w-8 text-gray-500 text-center">
        {index + 1}
      </td>
      <td className="py-2 px-4 border-b">{product.name}</td>
      <td className="py-2 px-4 border-b">{product.brand?.name || "N/A"}</td>
      <td className="py-2 px-4 border-b">{product.category?.name || "N/A"}</td>

      <td className="py-2 px-4 border-b">
        Rp {product.price.toLocaleString("id-ID")}
      </td>
      {/* <td className="py-2 px-4 border-b">{product.stock}</td> */}
    </tr>
  );
}
