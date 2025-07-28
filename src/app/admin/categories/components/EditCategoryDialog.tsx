import { useState } from "react";
import { fetchData } from "@/utils/api";
import { Category } from "@/models/category";

interface EditCategoryDialogProps {
  category: Category;
  onClose: () => void;
  onSuccess: (updatedCategory: Category) => void;
}

export default function EditCategoryDialog({
  category,
  onClose,
  onSuccess,
}: EditCategoryDialogProps) {
  const [name, setName] = useState(category.name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetchData<Category>(
        `api/v1/admin/categories/${category.uuid}`,
        "POST",
        {
          jsonBody: { name },
        }
      );
      onSuccess(res.data);
    } catch (err: any) {
      setError(err.message || "Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Edit Category</h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Category Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
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
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
