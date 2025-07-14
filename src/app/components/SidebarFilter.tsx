"use client";

import { useState, useEffect } from "react";

interface FilterValues {
  ram: number[];
  storage: string[];
  processor: string[];
  displaySize: number[];
  brand: string[];
}

interface SidebarFilterProps {
  ram: number[];
  storage: string[];
  processor: string[];
  displaySize: number[];
  brand: string[];
  selected: FilterValues;
  applied?: FilterValues;
  onChange: (type: string, value: string | number) => void;
  onApply?: () => void;
  onReset?: () => void;
}

export default function SidebarFilter(props: SidebarFilterProps) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const {
    ram,
    storage,
    processor,
    displaySize,
    brand,
    selected,
    applied = {
      ram: [],
      storage: [],
      processor: [],
      displaySize: [],
      brand: [],
    },
    onChange,
    onApply,
    onReset,
  } = props;

  // Local state for filter values
  const [localSelected, setLocalSelected] = useState<FilterValues>(selected);
  const [localApplied, setLocalApplied] = useState<FilterValues>(applied);

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);
  useEffect(() => {
    setLocalApplied(applied);
  }, [applied]);

  // Automatically apply filter when selected changes
  useEffect(() => {
    if (onApply != undefined) onApply();
  }, [localSelected]);

  const handleChange = (type: string, value: string | number) => {
    setLocalSelected((prev: FilterValues) => {
      const values = prev[type as keyof FilterValues] as any[];
      let newValues;
      if (values.includes(value)) {
        newValues = values.filter((v) => v !== value);
      } else {
        newValues = [...values, value];
      }
      return { ...prev, [type]: newValues };
    });
    onChange(type, value);
  };

  const handleReset = () => {
    const empty: FilterValues = {
      ram: [],
      storage: [],
      processor: [],
      displaySize: [],
      brand: [],
    };
    setLocalSelected(empty);
    setLocalApplied(empty);
    if (onReset) onReset();
    if (onApply) onApply(); // Refetch data with no filter
  };

  return (
    <aside className="w-full md:w-1/6 min-w-[120px] bg-white rounded-lg shadow p-4 h-fit mb-4 md:mb-0">
      <h2 className="font-bold text-base mb-2">Filter</h2>
      <div className="mb-4">
        <div className="font-semibold text-xs mb-1">RAM</div>
        <div className="flex flex-wrap gap-2">
          {ram.map((r) => {
            const isSelected = localSelected.ram.includes(r);
            const isApplied = localApplied.ram.includes(r);
            return (
              <button
                key={r}
                className={`px-2 py-1 rounded text-xs border ${
                  isSelected && isApplied
                    ? "bg-primary-900 text-white border-2 border-primary-900"
                    : isSelected
                    ? "bg-primary-900 text-white"
                    : isApplied
                    ? "bg-blue-100 border-blue-600 text-blue-900"
                    : "bg-gray-100"
                }`}
                onClick={() => handleChange("ram", r)}>
                {r}GB
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold text-xs mb-1">Brand</div>
        <div className="flex flex-wrap gap-2">
          {(showAllBrands ? brand : brand.slice(0, 4)).map((b) => {
            const isSelected = localSelected.brand.includes(b);
            const isApplied = localApplied.brand.includes(b);
            return (
              <button
                key={b}
                className={`px-2 py-1 w-min rounded text-xs border text-left ${
                  isSelected && isApplied
                    ? "bg-primary-900 text-white border-2 border-primary-900"
                    : isSelected
                    ? "bg-primary-900 text-white"
                    : isApplied
                    ? "bg-blue-100 border-blue-600 text-blue-900"
                    : "bg-gray-100"
                }`}
                onClick={() => handleChange("brand", b)}>
                {b}
              </button>
            );
          })}
        </div>

        {brand.length > 4 && !showAllBrands && (
          <button
            className="text-xs text-primary-900 underline bg-transparent border-none p-0 m-0 font-semibold cursor-pointer"
            type="button"
            onClick={() => setShowAllBrands(true)}>
            Show All
          </button>
        )}
        {brand.length > 4 && showAllBrands && (
          <button
            className="text-xs text-primary-900 underline bg-transparent border-none p-0 m-0 font-semibold cursor-pointer"
            type="button"
            onClick={() => setShowAllBrands(false)}>
            Show Less
          </button>
        )}
      </div>
      <div className="mb-4">
        <div className="font-semibold text-xs mb-1">Storage</div>
        <div className="flex flex-wrap gap-2">
          {storage.map((s) => {
            const isSelected = localSelected.storage.includes(s);
            const isApplied = localApplied.storage.includes(s);
            return (
              <button
                key={s}
                className={`px-2 py-1 rounded text-xs border ${
                  isSelected && isApplied
                    ? "bg-primary-900 text-white border-2 border-primary-900"
                    : isSelected
                    ? "bg-primary-900 text-white"
                    : isApplied
                    ? "bg-blue-100 border-blue-600 text-blue-900"
                    : "bg-gray-100"
                }`}
                onClick={() => handleChange("storage", s)}>
                {s}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold text-xs mb-1">Processor</div>
        <div className="flex flex-wrap gap-2">
          {processor.map((p) => {
            const isSelected = localSelected.processor.includes(p);
            const isApplied = localApplied.processor.includes(p);
            return (
              <button
                key={p}
                className={`px-2 py-1 rounded text-xs border ${
                  isSelected && isApplied
                    ? "bg-primary-900 text-white border-2 border-primary-900"
                    : isSelected
                    ? "bg-primary-900 text-white"
                    : isApplied
                    ? "bg-blue-100 border-blue-600 text-blue-900"
                    : "bg-gray-100"
                }`}
                onClick={() => handleChange("processor", p)}>
                {p}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold text-xs mb-1">Display Size</div>
        <div className="flex flex-wrap gap-2">
          {displaySize.map((d) => {
            const isSelected = localSelected.displaySize.includes(d);
            const isApplied = localApplied.displaySize.includes(d);
            return (
              <button
                key={d}
                className={`px-2 py-1 rounded text-xs border ${
                  isSelected && isApplied
                    ? "bg-primary-900 text-white border-2 border-primary-900"
                    : isSelected
                    ? "bg-primary-900 text-white"
                    : isApplied
                    ? "bg-blue-100 border-blue-600 text-blue-900"
                    : "bg-gray-100"
                }`}
                onClick={() => handleChange("displaySize", d)}>
                {d}&quot;
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button
          className={`px-4 py-2 rounded bg-gray-200 text-gray-900 font-bold border border-gray-300 transition-all hover:bg-gray-300`}
          type="button"
          onClick={handleReset}>
          Reset Filter
        </button>
      </div>
    </aside>
  );
}
