"use client";

import { useEffect, useState } from "react";
import CategoryEmptyState from "./components/EmptyCategory";
import AddCategoryDialog from "./components/AddCategoryDialog";
import CategoryCard from "./components/CategoryCard";
import { fetchData } from "@/utils/api";
import { Category } from "@/models/category";

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetchData<Category[]>("api/v1/admin/categories", "GET");
      setCategories(res.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Failed to fetch categories");
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCategories();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddCategorySuccess = () => {
    setShowAddDialog(false);
    fetchCategories();
  };

  return (
    <div className="min-h-screen bg-white-50 flex">
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold mb-4">
            Category List{" "}
            <span className="ml-4">({!loading && categories.length})</span>
          </h2>
          <button
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowAddDialog(true)}>
            Add Category
          </button>
        </div>

        {/* <div className="bg-white rounded shadow p-6"> */}
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : categories.length === 0 ? (
          <CategoryEmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.uuid}
                category={cat}
                onCategoryUpdated={fetchCategories}
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
