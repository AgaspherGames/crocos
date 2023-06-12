export interface ICompany {
  id: number;
  title: string;
  description: string;
  short_description: string;
  bin: string;
  phone_number: string;
  website_link: null;
  email: string;
  presentation: string;
  address: string;
  rating: number;
  logo: string;
  industry_leaders: string[];
  background_image: string;
  minimal_price: number;
  user: User;
  price_list: string;
  top_five?: number;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  reviews: Review[];
  vacancies: Vacancy[];
  handbook_cities: Handbook[];
  handbook_regions: HandbookRegion[];
  handbook_security_service_types: HandbookSecurityServiceType[];
  security_service_types: SecurityServiceType[];
}

interface Handbook {
  id: number;
  title: string;
}

interface HandbookRegion {
  id: number;
  title: string;
  handbook_city: Handbook;
}

interface HandbookSecurityServiceType {
  id: number;
  title: string;
  hint: string;
}

interface Review {
  id: number;
  rating: number;
  description: string;
}

interface SecurityServiceType {
  id: number;
  price_from: number;
  description: null | string;
  negotiated: null;
  handbook_security_service_type: HandbookSecurityServiceType;
}

interface User {
  id: number;
  name: string;
  last_name: string;
  middle_name: null;
  phone_number: null;
  email: string;
}

interface Vacancy {
  id: number;
  title: string;
  salary_min: number;
  salary_max: number;
  handbook_region: HandbookRegion;
  handbook_experience: Handbook;
  handbook_profession: string;
  handbook_schedule: Handbook;
}
