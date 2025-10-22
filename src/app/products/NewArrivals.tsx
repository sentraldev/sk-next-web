import { Product } from "../../models/product";
import ProductCard from "../components/ProductCard";
import { fetchData } from "../../utils/api";

function toProduct(p: ApiProduct): Product {
  const price = parseFloat(p.price ?? "0");
  // Prefer server-provided discounted_price; else compute from discount_value
  const serverDiscounted = p.discounted_price
    ? parseFloat(p.discounted_price)
    : undefined;
  const apiDiscountPct =
    typeof p.discount_value === "number" && isFinite(p.discount_value)
      ? p.discount_value
      : undefined;
  const computedDiscounted =
    apiDiscountPct && price > 0
      ? price * (1 - apiDiscountPct / 100)
      : undefined;

  const discounted = serverDiscounted ?? computedDiscounted ?? 0;

  // Determine discount percentage to show on badge
  const discountPct =
    apiDiscountPct ??
    (serverDiscounted && price > 0
      ? Math.round((1 - (serverDiscounted as number) / price) * 100)
      : undefined);

  const firstImg =
    p.images && p.images.length > 0 ? p.images[0] : "/temp/laptop.jpg";

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
    typeof p.laptop?.ram === "string"
      ? parseInt(p.laptop!.ram, 10)
      : p.laptop?.ram || 0;
  const storageNum =
    typeof p.laptop?.storage === "string"
      ? parseInt(p.laptop!.storage, 10)
      : p.laptop?.storage || 0;

  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    category: "Laptop",
    brand: p.brand,
    price,
    images: p.images && p.images.length > 0 ? p.images : [firstImg],
    badge: discountPct ? `${discountPct}%` : "",
    discount: discountPct,
    priceAfterDiscount:
      typeof discounted === "number" && discounted > 0 ? discounted : undefined,
    description: specs,
    ram: Number.isFinite(ram) ? (ram as number) : 0,
    storage: storageNum ? `${storageNum}GB` : "",
    processor,
    displaySize,
  };
}

async function getNewArrivals(): Promise<Product[]> {
  try {
    const res = await fetchData<ApiProduct[] | { data: ApiProduct[] }>(
      "api/v1/products/new-arrival",
      "GET"
    );

    const payload = Array.isArray(res.data) ? res.data : res.data?.data || [];
    return payload.map(toProduct);
  } catch (e) {
    // On error, return empty list to avoid breaking the page
    if (process.env.NEXT_PUBLIC_APP_ENV != "production") {
      console.error("Error fetching new arrivals:", e);
    }
    return [];
  }
}

export default async function NewArrivals() {
  const products = await getNewArrivals();

  return (
    <section className="mt-6 content-width mx-auto">
      <div className="flex items-end gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold ">Product Terbaru</h2>
        <a
          href="/products"
          className="text-blue-900 text-sm font-bold hover:underline">
          Lihat Semua
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-6">
            Produk baru belum tersedia.
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
