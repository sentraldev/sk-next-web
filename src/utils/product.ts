import { Product } from "@/models/product";

export function toProduct(p: ApiProduct): Product {
  const price = parseFloat(p.price ?? "0");

  // Prefer server-provided discounted_price (final price) when available
  const serverDiscounted = p.discount?.discounted_price
    ? parseFloat(p.discount.discounted_price as string)
    : undefined;

  // Percentage might come as string or number from API
  const discountPctNum = p.discount?.percentage
    ? parseFloat(String(p.discount.percentage))
    : 0;

  // If server doesn't provide final discounted price, compute from percentage (best-effort)
  const computedDiscounted =
    discountPctNum > 0 && price > 0 && serverDiscounted
      ? price - serverDiscounted
      : price;

  const priceAfterDiscount = computedDiscounted;

  const firstImg =
    p.images && p.images.length > 0 ? p.images[0] : "/images/no-image.jpg";

  const rawProcessor = p.laptop?.processor || "";
  const processor: Product["processor"] = /apple/i.test(rawProcessor)
    ? "Apple"
    : /amd/i.test(rawProcessor)
    ? "AMD"
    : "Intel"; // default bucket

  // Try to infer display size from specs like "11.6-inch"
  const specs = p.laptop?.specs || "";
  const sizeMatch = specs.match(/(\d{1,2}(?:\.\d)?)\s*-?\s*(?:in|inch)/i);
  const displaySize = sizeMatch ? parseFloat(sizeMatch[1]) : 0;

  const ram =
    typeof p.laptop?.ram_size === "string"
      ? parseInt(p.laptop!.ram_size, 10)
      : p.laptop?.ram_size || 0;
  const storageNum =
    typeof p.laptop?.storage_size === "string"
      ? parseInt(p.laptop!.storage_size, 10)
      : p.laptop?.storage_size || 0;

  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: "Laptop",
    brand: p.brand.name,
    price,
    images: p.images && p.images.length > 0 ? p.images : [firstImg],
    badge: discountPctNum > 0 ? `${discountPctNum}%` : "",
    discount: discountPctNum > 0 ? discountPctNum : undefined,
    priceAfterDiscount: priceAfterDiscount,
    // Prefer API description (HTML) for details; fallback to laptop specs
    description: p.description || specs,
    ram: Number.isFinite(ram) ? (ram as number) : 0,
    storage: storageNum ? `${storageNum}GB` : "",
    processor,
    displaySize,
  };
}
