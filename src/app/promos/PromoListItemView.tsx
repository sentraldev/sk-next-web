import { formatDate } from "@/utils/dateFormatter";
import Link from "next/link";

type PromoListItemViewProps = {
  promo: ApiPromo;
};

const PromoListItemView = ({ promo }: PromoListItemViewProps) => {
  return (
    <div className="block border rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
      <Link key={promo.id} href={`/promos/${promo.slug}`} className="">
        <div className="overflow-hidden">
          <img
            src={promo.image}
            alt={promo.title}
            className="object-cover w-full h-40"
          />
        </div>
        <div className="p-4">
          <h6 className="font-bold mb-2 text-md line-clamp-2">{promo.title}</h6>
          <p className="text-sm text-gray-500 font-light">Periode:</p>
          <p className="text-sm font-semibold">
            {formatDate(promo.starts_at)} - {formatDate(promo.ends_at)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PromoListItemView;

export const PromoListItemSkeleton = () => {
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
