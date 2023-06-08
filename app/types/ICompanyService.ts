export interface ICompanyService {
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
  user: ICUser;
  price_list: string;
  top_five: number;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  reviews: ICReview[];
  vacancies: ICVacancy[] || string[];
  handbook_cities: ICHandbook[];
  handbook_regions: ICHandbookRegion[];
  handbook_security_service_types: ICHandbookSecurityServiceType[];
  security_service_types: ICSecurityServiceType[];
}

export interface ICHandbook {
  id: number;
  title: string;
}

export interface ICHandbookRegion {
  id: number;
  title: string;
  handbook_city: ICHandbook;
}

export interface ICHandbookSecurityServiceType {
  id: number;
  title: string;
  hint: string;
}

export interface ICReview {
  id: number;
  rating: number;
  description: string;
}

export interface ICSecurityServiceType {
  id: number;
  price_from: number;
  description: null | string;
  negotiated: null;
  handbook_security_service_type: ICHandbookSecurityServiceType;
}

export interface ICUser {
  id: number;
  name: string;
  last_name: string;
  middle_name: null;
  phone_number: null;
  email: string;
}

export interface ICVacancy {
  id: number;
  title: string;
  salary_min: number;
  salary_max: number;
  handbook_region: ICHandbookRegion;
  handbook_experience: ICHandbook;
  handbook_profession: string;
  handbook_schedule: ICHandbook;
}
