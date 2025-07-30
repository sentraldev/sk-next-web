import React, { useRef, useState } from "react";
import { fetchData } from "@/utils/api";
import BrandDropdown from "@/app/admin/brands/components/BrandDropdown";
import CategoryDropdown from "@/app/admin/categories/components/CategoryDropdown";

export default function AddProductPage({ onCancel }: { onCancel: () => void }) {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    brand_uuid: "",
    category: "",
    category_uuid: "",
    price: "",
    // sku: "",
    highlight: "",
    description: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      // Filter out files > 1MB
      const validFiles = files.filter((f) => f.size <= 1024 * 1024);
      if (validFiles.length < files.length) {
        setError("Each photo must be 1MB or less.");
      } else {
        setError(null);
      }
      // Only allow up to 5 photos
      setPhotos((prev) => [...prev, ...validFiles].slice(0, 5));
      // Reset input value so same file can be reselected
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    if (photos.length === 0) {
      setError("Please upload at least 1 photo.");
      setLoading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("brand_uuid", form.brand);
      formData.append("category_uuid", form.category);
      formData.append("price", form.price);
      formData.append("highlight", form.highlight);
      formData.append("description", form.description);

      // const formData = new FormData();
      // Object.entries(form).forEach(([key, value]) => {
      //   formData.append(key, value);
      // });
      photos.forEach((file) => {
        formData.append(`photos[]`, file);
      });

      console.log("Submitting form data:", formData.entries());
      for (const [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      await fetchData("api/v1/admin/products", "POST", {
        multipartBody: formData,
      });
      setSuccess(true);
      setForm({
        name: "",
        brand: "",
        category: "",
        brand_uuid: "",
        category_uuid: "",
        price: "",
        // sku: "",
        highlight: "",
        description: "",
      });
      setPhotos([]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="bg-white rounded-lg w-full p-8">
        <button className="mb-8" onClick={onCancel}>
          Cancel
        </button>
        <h2 className="text-2xl font-bold mb-6">Tambah Produk</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-row gap-4 items-center">
            <label className="block mb-1 w-32 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <label className="block mb-1 w-32 font-medium">
              Brand <span className="text-red-500">*</span>
            </label>
            <BrandDropdown
              value={form.brand}
              onChange={(val) => setForm((f) => ({ ...f, brand: val }))}
              required
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <label className="block mb-1 w-32 font-medium">
              Category <span className="text-red-500">*</span>
            </label>
            <CategoryDropdown
              value={form.category}
              onChange={(val) => setForm((f) => ({ ...f, category: val }))}
              required
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <label className="block mb-1 w-32 font-medium">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="Price"
              type="number"
              min="0"
              required
            />
          </div>
          {/* <div className="flex flex-row gap-4 items-center">
            <label className="block mb-1 w-32 font-medium">
              SKU <span className="text-red-500">*</span>
            </label>
            <input
              name="sku"
              value={form.sku}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="SKU"
              required
            />
          </div> */}
          <div className="flex flex-row gap-4 items-start">
            <label className="block mb-1 w-32 font-medium">
              Short Detail <span className="text-red-500">*</span>
            </label>
            <textarea
              name="highlight"
              value={form.highlight}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="Short Detail"
              required
              maxLength={100}
              rows={3}
            />
          </div>
          <div className="flex flex-row gap-4 items-start">
            <label className="block mb-1 w-32 font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full"
              placeholder="Description"
              rows={5}
              required
            />
          </div>
          <div
            className={
              "flex flex-row " +
              (photos.length > 0 ? "items-start" : "items-center")
            }>
            <label className="block mb-1 w-32 font-medium">
              Photos <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="flex gap-2 mb-2">
                {photos.map((file, idx) => (
                  <div key={idx} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${idx + 1}`}
                      className="h-20 w-20 object-contain border rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-white bg-opacity-80 rounded-full p-1 text-xs text-red-600 group-hover:visible invisible"
                      onClick={() =>
                        setPhotos(photos.filter((_, i) => i !== idx))
                      }
                      title="Remove">
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                ref={fileInputRef}
                className="block"
                disabled={photos.length >= 5}
              />
              <span className="text-xs text-gray-500 mt-2">
                Max 5 photos, 1MB each
              </span>
            </div>
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          {success && (
            <div className="text-green-600 text-sm">
              Product added successfully!
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-60 w-full"
            disabled={loading}>
            {loading ? "Saving..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
