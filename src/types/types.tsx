export interface ApiResponse<T> {
  status: boolean;
  message: string;
  lang?: string;
  data: T; 
}


export interface ServiceResponse {
  title: string;
  cover_image: string;
  thumb_cover_image: string;
  slug: string;
}

export interface CategoryResponse {
  name: string;
  description: string;
  slug: string;
  image: string;
  thumb_image: string;
}
export interface BannerResponse {
  title: string;
  sub_title: string;
  description: string;
  page: string;
  image: string;
  thumb_image: string;
}
export interface PartnerResponse {
  link: string;
  image: string;
  thumb_image: string;
}
export interface Services {
  title: string;
  slug: string;
  cover_image: string;
  thumb_cover_image: string;
  div_1: string;
  div_2: string;
  div_3: string;
  div_4: string;
  image_1: string;
  image_2: string;
  thumb_image_1: string;
  thumb_image_2: string;
}

export interface ProductSubCategory {
  name: string;
  slug: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  sub_categories: ProductSubCategory[];
}

export interface ApplicationTableRow {
  cropName: string;
  pestOrganismName: string;
  applicationDosage: string;
  harvestInterval: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  description: string[];
  keyCharacteristics: {
    productGroup: string;
    activeIngredient: string;
    formulation: string;
  };
  applicationTable?: ApplicationTableRow[];
}
export interface ProductCategoryResponse {
  name: string;
  slug: string;
  sub_categories: ProductSubCategory[];
}
