import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { Product } from "@/models/product";
import ProductListItem from "./components/ProductListItem";

export default function AdminProducts({
  addButtonPressed,
}: {
  addButtonPressed: () => void;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await fetchData<Product[]>(
          "api/v1/admin/products",
          "GET"
        );
        setProducts(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white-50 flex">
      <main className="flex-1 p-8">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold mb-4">Admin Products</h2>
          <button
            onClick={addButtonPressed}
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add Product
          </button>
        </div>
        <div className="bg-white rounded pt-4">
          {loading ? (
            <p className="text-gray-600">Loading products...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <table className="min-w-full border mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b text-left">No.</th>
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Brand</th>
                  <th className="py-2 px-4 border-b text-left">Category</th>
                  <th className="py-2 px-4 border-b text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-4 text-center text-gray-500">
                      No products found.
                    </td>
                  </tr>
                ) : (
                  products.map((product: Product, idx: number) => (
                    <ProductListItem
                      key={product.uuid}
                      product={product}
                      index={idx}
                    />
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
