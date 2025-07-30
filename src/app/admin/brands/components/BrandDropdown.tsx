import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";

export interface Brand {
  uuid: string;
  name: string;
}

interface BrandDropdownProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function BrandDropdown({
  value,
  onChange,
  required,
}: BrandDropdownProps) {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrands() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await fetchData<any>("api/v1/admin/brands", "GET");
        setBrands(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBrands();
  }, []);

  // Set default to first brand if not set
  React.useEffect(() => {
    if (!value && brands.length > 0) {
      console.log("Setting default brand to:", brands[0].uuid);

      onChange(brands[0].uuid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands]);

  return (
    <select
      className="border rounded px-3 py-2 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      disabled={loading || !!error}>
      <option value="" disabled>
        {loading
          ? "Loading brands..."
          : error
          ? "Failed to load brands"
          : "Select brand"}
      </option>
      {brands.map((brand) => (
        <option key={brand.uuid} value={brand.uuid}>
          {brand.name}
        </option>
      ))}
    </select>
  );
}
