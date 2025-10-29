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
