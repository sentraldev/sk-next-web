import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import HtmlRenderer from "@/app/components/HtmlRenderer";
import { formatDate } from "@/utils/dateFormatter";
import { fetchData } from "@/utils/api";
import Image from "next/image";

export default async function PromoDetail({
  params,
}: {
  params: { uuid: string };
}) {
  const slug = params.uuid;

  let promo: ApiPromo | null = null;
  let error: string | null = null;
  try {
    const res = await fetchData<ApiPromo>(`api/v1/promos/${slug}`, "GET");
    promo = res.data as ApiPromo;
  } catch (e: any) {
    error = e?.message || "Gagal memuat promo";
  }

  if (!promo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="content-width mx-auto py-6">
            <p className="text-center text-red-600">
              {error || "Promo tidak ditemukan."}
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="content-width mx-auto">
          <Breadcrumb
            items={[
              { label: "Promo", href: "/promos" },
              { label: promo.title },
            ]}
          />
          <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={promo.image}
              alt={promo.title}
              height={550}
              width={800}
              className="w-full object-cover"
              style={{ maxHeight: 550 }}
            />
          </div>
          <div className="text-center mb-6">
            <p className="text-md font-semibold mb-2">
              Promo {promo.location === "online" ? "Website" : "Toko"}
            </p>
            <h1 className="text-4xl font-bold mb-2">{promo.title}</h1>
            <p className="text-gray-500 text-md italic">
              Periode {formatDate(promo.starts_at)} -{" "}
              {formatDate(promo.ends_at)}
            </p>
          </div>
          <div className="prose max-w-none">
            <HtmlRenderer html={promo.content || ""} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
