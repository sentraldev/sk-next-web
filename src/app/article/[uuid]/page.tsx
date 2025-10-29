import ArticleDetail from "@/app/components/ArticleDetail";

export default async function ArticlePage({ params }: { params: { uuid: string } }) {
  const { uuid } = await params;

  return <ArticleDetail uuid={uuid} />;
}
