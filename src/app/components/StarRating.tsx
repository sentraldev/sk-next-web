type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      <span className="text-gray-400 text-sm font-semibold">
        {rating.toFixed(1)} <span className="text-yellow-500">★</span>
      </span>
    </div>
  );
}
