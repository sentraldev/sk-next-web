import React, { useRef, useState } from "react";
import { fetchData } from "@/utils/api";

interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function AddProductDialog({
  open,
  onClose,
  onSuccess,
}: AddProductDialogProps) {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    discount_percent: "",
    sku: "",
    short_detail: "",
    description: "",
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });
      if (photo) {
        formData.append("photo", photo);
      }
      await fetchData<any>("api/v1/admin/products", "POST", {
        multipartBody: formData,
      });
      if (onSuccess) onSuccess();
      onClose();
      setForm({
        name: "",
        brand: "",
        category: "",
        price: "",
        discount_percent: "",
        sku: "",
        short_detail: "",
        description: "",
      });
      setPhoto(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          onClick={onClose}
          disabled={loading}>
          &times;
        </button>
        <h3 className="text-xl font-bold mb-4">Add New Product</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="Name"
              required
            />
            <input
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="Brand"
              required
            />
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="Category"
              required
            />
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="Price"
              type="number"
              min="0"
              required
            />
            <input
              name="discount_percent"
              value={form.discount_percent}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="Discount %"
              type="number"
              min="0"
              max="100"
            />
            <input
              name="sku"
              value={form.sku}
              onChange={handleChange}
              className="border rounded px-3 py-2"
              placeholder="SKU"
              required
            />
          </div>
          <input
            name="short_detail"
            value={form.short_detail}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Short Detail"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
            placeholder="Description"
            rows={3}
            required
          />
          <div>
            <label className="block mb-1 font-medium">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              ref={fileInputRef}
              className="block"
            />
            {photo && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Preview"
                  className="h-20 object-contain border rounded"
                />
              </div>
            )}
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60"
            disabled={loading}>
            {loading ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
