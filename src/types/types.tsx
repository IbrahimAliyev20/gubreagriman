// types.ts
export interface ApiResponse<T> {
  status: boolean;
  message: string;
  lang?: string;
  timestamp?: string;
  data: T;
}

// Pagination strukturu (category-products üçün)
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

// Category-dəki məhsullar (list üçün)
export interface CategoryProducts {
  name: string;
  slug: string;
  image: string;
  thumb_image: string;
  category: string;
}

// Məhsulun detalları
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
  description: string; // API-də string gəlir (<br> ilə)
  attributes: ProductAttribute[];
  usage: ProductUsage[];
}

// Kateqoriyalar (əgər /categories endpoint-i varsa)
export interface ProductCategoryResponse {
  name: string;
  slug: string;
  sub_categories?: { name: string; slug: string }[];
}