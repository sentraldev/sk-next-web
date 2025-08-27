type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      <span className="text-gray-400 text-sm font-semibold">{rating.toFixed(1)} <span className="text-yellow-500">★</span></span>
    </div>
  );
}