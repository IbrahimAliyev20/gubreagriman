
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  lang?: string;
  timestamp?: string;
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
  };
}

export interface CategoryProducts {
  name: string;
  slug: string;
  image: string;
  thumb_image: string;
  category: string;
}

export interface ProductAttribute {
  attribute_key: string;
  attribute_value: string;
}

export interface ProductUsage {
  plant_name: string;
  pest_name: string;
  dosage: string;
  pre_harvest_interval: string;
}

export interface ProductDetail {
  name: string;
  slug: string;
  image: string;
  thumb_image: string;
  parent_category?: string;
  description: string;
  attributes: ProductAttribute[];
  usage: ProductUsage[];
}

export interface ProductCategoryResponse {
  name: string;
  slug: string;
  sub_categories?: { 
    name: string; 
    slug: string 
  }[];
}

export interface ServiceResponse {
  title: string;
  slug: string;
  image?: string;
  description?: string;
  div_1?: string;
  div_2?: string;
  div_3?: string;
  div_4?: string;
  image_1?: string;
  thumb_image_1?: string;
  image_2?: string;
  thumb_image_2?: string;
}

export type Services = ServiceResponse;

export interface CategoryResponse {
  name: string;
  slug: string;
  image?: string;
  description?: string;
}

export interface BannerResponse {
  title?: string;
  sub_title?: string;
  image: string;
  description?: string;
  link?: string;
}

export interface PartnerResponse {
  name: string;
  logo?: string;
  image?: string;
  link?: string;
}

export interface StaticResponse {
  name: string;
  number: string;
}

export interface AboutResponse {
  title: string;
  description: string;
}

export interface SocialLinkResponse {
  name: string;
  link: string;
}

export interface HomeAboutResponse {
  title: string;
  description_1: string;
  description_2: string;
  image: string;
  thumb_image: string;
  service_image: string;
}

export interface ContactsResponse {
  email: string;
  short_code: string;
  work_hours: string;
  location: string;
  footer_title: string;
  footer_description_1: string;
  footer_description_2: string;
}
