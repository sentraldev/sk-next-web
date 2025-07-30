import React, { useState } from "react";
import EditBrandDialog from "./EditBrandDialog";
import DeleteBrandDialog from "./DeleteBrandDialog";
import { Brand } from "@/models/brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

interface BrandCardProps {
  brand: Brand;
  index?: number;
  onBrandUpdated?: (updated: Brand) => void;
}

export default function BrandCard({
  brand,
  index,
  onBrandUpdated,
}: BrandCardProps) {
  // State to manage dialog visibility

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="flex items-center py-2 my-2 border-b last:border-b-0 bg-white hover:bg-gray-50 transition">
        {/* Index */}
        {index !== undefined && (
          <div className="w-8 text-gray text-center text-base font-bold mr-8">
            {typeof index === "number" ? index + 1 : ""}
          </div>
        )}
        {/* Image placeholder */}
        <div className="w-16 h-8 bg-gray-200 rounded mr-4 flex items-center justify-center">
          {/* Optionally show brand logo here */}
        </div>
        {/* Brand Name */}
        <div className="flex-1 text-base font-medium">{brand.name}</div>
        {/* Edit/Delete icons */}
        <button
          className="mx-2 p-2 hover:bg-gray-100 rounded"
          title="Edit"
          onClick={() => setShowEdit(true)}>
          <FontAwesomeIcon
            icon={faPencil}
            className="w-5 h-5 text-gray-600 hover:text-gray-800"
          />
        </button>
        <button
          className="mx-2 p-2 hover:bg-gray-100 rounded"
          title="Delete"
          onClick={() => setShowDelete(true)}>
          <FontAwesomeIcon
            icon={faTrash}
            className="w-5 h-5 text-gray-600 hover:text-gray-800"
          />
        </button>
      </div>
      {showEdit && (
        <EditBrandDialog
          brand={brand}
          onClose={() => setShowEdit(false)}
          onSuccess={(updated) => {
            setShowEdit(false);
            if (onBrandUpdated) onBrandUpdated(updated);
          }}
        />
      )}
      {showDelete && (
        <DeleteBrandDialog
          brand={brand}
          onClose={() => setShowDelete(false)}
          onSuccess={() => {
            setShowDelete(false);
            if (onBrandUpdated) onBrandUpdated(brand);
          }}
        />
      )}
    </>
  );
}
