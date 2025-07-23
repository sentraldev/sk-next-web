"use client";

import Image from "next/image";
import { Product } from "../../models/product";

export default function ProductCard({ product }: { product: Product }) {
  const handleClick = () => {
    window.location.href = `/products/${product.id}`; // Navigate to product details page
  };

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col items-start p-3"
      onClick={handleClick}>
      {/* Badge */}
      <Image
        key={product.id}
        src={product.img}
        alt={product.name}
        width={160}
        height={120}
        className="object-contain mb-2 self-center rounded-lg"
      />
      <p className="text-xs italic font-extralight mb-1">{product.category}</p>
      <p className="text-sm font-semibold text-gray-800 line-clamp-2">
        {product.name}
      </p>
      <p className="text-red-600 font-bold text-sm mt-4">
        Rp{" "}
        {product.discount
          ? product.priceAfterDiscount!.toLocaleString("id-ID")
          : product.price.toLocaleString("id-ID")}
      </p>
      {product.discount && (
        <div className="flex flex-row items-center mt-1">
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold p-1 rounded">
              Rp {product.discount.toLocaleString("id-ID")}%
            </span>
          )}
          {product.priceAfterDiscount && (
            <span className="text-gray-500 line-through text-xs ml-2">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          )}
        </div>
      )}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500 text-[0.7rem]">★ 5.0</span>
        <span className="text-[0.7rem] text-gray-400">
          (3 rating) | 20 terjual
        </span>
      </div>
      {/* Discount */}
    </div>
  );
}
