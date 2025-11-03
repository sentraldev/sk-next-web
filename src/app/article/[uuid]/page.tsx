import ArticleDetail from "@/app/article/[uuid]/ArticleDetail";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;

  return <ArticleDetail uuid={uuid} />;
}
