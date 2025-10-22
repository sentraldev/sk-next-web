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
  discounted_price?: string | null;
  discount_value?: number | null; // percentage from API
  images?: string[];
  laptop?: ApiLaptop | null;
};
