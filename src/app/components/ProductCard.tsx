import Image from "next/image";
import { Product } from "../models/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col items-start p-3">
      {/* Badge */}
      <Image
        src={product.img}
        alt={product.name}
        width={160}
        height={120}
        className="object-contain mb-2 self-center rounded-lg"
      />
      <p className="text-xs italic font-extralight mb-1">{product.category}</p>
      <p className="text-sm font-semibold text-center text-gray-800 line-clamp-2">
        {product.name}
      </p>
      <p className="text-red-600 font-bold text-sm mt-4">
        {product.discount ? product.priceAfterDiscount : product.price}
      </p>
      {product.discount && (
        <div className="flex flex-row items-center mt-1">
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold p-1 rounded">
              {product.badge}
            </span>
          )}
          {product.priceAfterDiscount && (
            <span className="text-gray-500 line-through text-xs ml-2">
              {product.price}
            </span>
          )}
        </div>
      )}
      {/* Discount */}
    </div>
  );
}
