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

// Blog API types
type ApiBlog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string; // absolute URL
  author: string | null;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  created_at: string; // ISO date string
};

// Generic pagination shape (optional helper if needed elsewhere)
type ApiPaginationLinks = {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
};

type ApiPaginationMetaLink = {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
};

type ApiPaginationMeta = {
  current_page: number;
  from: number | null;
  last_page: number;
  links: ApiPaginationMetaLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
};

type ApiPaginatedResponse<T> = {
  data: T[];
  links: ApiPaginationLinks;
  meta: ApiPaginationMeta;
};

// Blog detail type
type ApiBlogDetail = {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  content_html: string; // HTML string
  is_published: boolean;
  author: string | null;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
  created_at: string;
  updated_at: string;
};
