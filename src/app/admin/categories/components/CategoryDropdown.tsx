import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";

export interface Category {
  uuid: string;
  name: string;
}

interface CategoryDropdownProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function CategoryDropdown({
  value,
  onChange,
  required,
}: CategoryDropdownProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await fetchData<any>("api/v1/admin/categories", "GET");
        setCategories(data || []);
        onChange(data[0]?.uuid || ""); // Set default to first category if available
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  // Set default to first category if not set
  useEffect(() => {
    if (!value && categories.length > 0) {
      onChange(categories[0].uuid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <select
      className="border rounded px-3 py-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      disabled={loading || !!error}>
      <option value="" disabled>
        {loading
          ? "Loading categories..."
          : error
          ? "Failed to load categories"
          : "Select category"}
      </option>
      {categories.map((cat) => (
        <option key={cat.uuid} value={cat.uuid}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
