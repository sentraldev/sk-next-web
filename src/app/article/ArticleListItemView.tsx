import { formatDate } from "@/utils/dateFormatter";
import Link from "next/link";

type ArticleListItemViewProps = {
  blog: ApiBlog;
};

const ArticleListItemView = ({ blog }: ArticleListItemViewProps) => {
  return (
    <div className="block border rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <Link key={blog.id} href={`/article/${blog.slug}`} className="">
        <div className="overflow-hidden">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="object-cover w-full h-40"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h6 className="font-bold mb-1 text-md line-clamp-2">{blog.title}</h6>
          <div className="text-xs text-gray-500 font-light flex items-center">
            {blog.category?.name && (
              <span className="inline-flex items-center font-bold pb-1 rounded text-primary-900">
                {blog.category.name}
              </span>
            )}
          </div>
          <span className="text-xs font-bold text-gray-500">
            {formatDate(blog.created_at)}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleListItemView;

export const ArticleListItemSkeleton = () => {
  return (
    <div className="block border rounded-xl shadow-lg overflow-hidden bg-white">
      <div className="w-full h-40 bg-gray-200 animate-pulse" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-200 animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 animate-pulse w-1/2" />
      </div>
    </div>
  );
};
