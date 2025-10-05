import React from "react";
import Link from "next/link";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="my-4 text-sm text-gray-600">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href}>
                <h5 className="hover:underline me-1">{item.label}</h5>
              </Link>
            ) : (
              <span className="font-semibold">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="select-none">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
