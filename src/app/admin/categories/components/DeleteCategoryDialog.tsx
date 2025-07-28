import React, { useState } from "react";
import { fetchData } from "@/utils/api";
import { Category } from "@/models/category";

interface DeleteCategoryDialogProps {
  category: Category;
  onClose: () => void;
  onSuccess: () => void;
}

export default function DeleteCategoryDialog({
  category,
  onClose,
  onSuccess,
}: DeleteCategoryDialogProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      await fetchData(
        `api/v1/admin/categories/delete/${category.uuid}`,
        "POST"
      );
      onSuccess();
    } catch (err: any) {
      setError(err.message || "Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Delete Category</h3>
        <p className="mb-4">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{category.name}</span>?
        </p>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
            onClick={onClose}
            disabled={loading}>
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
            onClick={handleDelete}
            disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
