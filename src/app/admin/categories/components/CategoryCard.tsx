import React, { useState } from "react";
import { Category } from "@/models/category";
import EditCategoryDialog from "./EditCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

interface CategoryCardProps {
  category: Category;
  onCategoryUpdated?: (updated: Category) => void;
}

export default function CategoryCard({
  category,
  onCategoryUpdated,
}: CategoryCardProps) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <div className="bg-blue-50 border border-blue-200 rounded p-4">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-lg text-blue-700 mb-2">
            {category.name}
          </h3>
          <div className="flex flex-row gap-4 text-sm">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setShowEdit(true)}>
              Edit
            </button>
            <button
              className="text-red-600 hover:underline"
              onClick={() => setShowDelete(true)}>
              Delete
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500">UUID: {category.uuid}</p>
      </div>
      {showEdit && (
        <EditCategoryDialog
          category={category}
          onClose={() => setShowEdit(false)}
          onSuccess={(updated) => {
            setShowEdit(false);
            if (onCategoryUpdated) onCategoryUpdated(updated);
          }}
        />
      )}
      {showDelete && (
        <DeleteCategoryDialog
          category={category}
          onClose={() => setShowDelete(false)}
          onSuccess={() => {
            setShowDelete(false);
            if (onCategoryUpdated) onCategoryUpdated(category);
          }}
        />
      )}
    </>
  );
}
