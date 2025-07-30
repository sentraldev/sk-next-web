"use client";

import { useEffect, useState } from "react";
import CategoryEmptyState from "./components/EmptyBrand";
import AddCategoryDialog from "./components/AddBrandDialog";
import { fetchData } from "@/utils/api";
import { Brand } from "@/models/brand";
import BrandCard from "./components/BrandCard";

export default function AdminBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const fetchBrands = async () => {
    try {
      setLoading(true);
      const res = await fetchData<Brand[]>("api/v1/admin/brands", "GET");
      setBrands(res.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Failed to fetch brands");
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBrands();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddCategorySuccess = () => {
    setShowAddDialog(false);
    fetchBrands();
  };

  return (
    <div className="min-h-screen bg-white-50 flex">
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold mb-4">
            Brand List
            <span className="ml-4">({!loading && brands.length})</span>
          </h2>
          <button
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowAddDialog(true)}>
            Add Brand
          </button>
        </div>

        {/* <div className="bg-white rounded shadow p-6"> */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : brands.length === 0 ? (
          <CategoryEmptyState />
        ) : (
          <div className="flex flex-col shadow-lg px-4 rounded-lg md:grid-cols-3 mt-6">
            {brands.map((brand, index) => (
              <BrandCard
                key={brand.uuid}
                brand={brand}
                index={index}
                onBrandUpdated={fetchBrands}
              />
            ))}
          </div>
        )}
        {/* </div> */}
      </main>

      {/* This is where the dialog will be rendered if showAddDialog is true */}
      {showAddDialog && (
        <AddCategoryDialog
          onClose={() => setShowAddDialog(false)}
          onSuccess={handleAddCategorySuccess}
        />
      )}
    </div>
  );
}
