export interface ICompany {
  id: number;
  title: string;
  description: string;
  short_description: string;
  bin: string;
  phone_number: string;
  website_link: string | null;
  email: string;
  address: string;
  rating: number;
  logo: string;
  background_image: string;
  minimal_price: number;
  user: {
    id: number;
    name: string;
    last_name: string;
    middle_name?: string;
    email: string;
    phone_number?: string;
  };
  price_list: string;
  presentation: string;
  top_five?: number;
  seo_title: string;
  reviews: {
    id: number;
    rating: number;
    description: string;
  }[];
}

export interface IFilter {
  id: number;
  title: string;
  handbook_security_service_types: {
    id: number;
    title: string;
    hint: string;
  }[];
}

export interface ICity{
  handbook_regions: {
    id: number;
    title: string
  }[]
  id: number
  title: string
}
