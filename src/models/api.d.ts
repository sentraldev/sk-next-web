type ApiLaptop = {
  processor?: string;
  gpu?: string;
  ram_size?: number | string;
  storage_size?: number | string;
  specs?: string;
};

type ApiProduct = {
  id: number;
  name: string;
  slug: string;
  brand: Brand;
  price: string;
  description: string;
  discount?: {
    discount_value: number;
    percentage: number;
    discounted_price?: string; // server-provided discounted price when available
  };
  images?: string[];
  laptop?: ApiLaptop | null;
};

// Promo API types
type ApiPromo = {
  id: number;
  title: string;
  slug: string;
  content: string; // HTML string
  location: string;
  image: string; // absolute URL
  starts_at: string; // ISO date string
  ends_at: string; // ISO date string
  active: boolean;
  code: string | null;
  type: string | null;
  value: number | null;
  has_voucher: boolean;
  voucher_count: number;
  created_at: string;
  updated_at: string;
};
