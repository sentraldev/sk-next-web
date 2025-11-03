import PromoDetailClient from "@/app/promos/[uuid]/PromoDetail";

export default async function PromoDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;

  return <PromoDetailClient uuid={uuid} />;
}
