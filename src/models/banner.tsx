export interface Banner {
  id: number;
  title: string;
  image: string; // full URL to the image
}

export interface BannersResponse {
  data: Banner[];
}
