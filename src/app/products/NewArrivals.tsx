import { Product } from "../../models/product";
import ProductCard from "./components/ProductCard";
import { fetchData } from "../../utils/api";
import { toProduct } from "@/utils/product";

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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
