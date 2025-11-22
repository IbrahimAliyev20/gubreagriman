
export const queryKeys = {
  // Home related queries
  home: {
    all: ['home'] as const,
    servicesCards: (locale: string) => [...queryKeys.home.all, 'services-cards', locale] as const,
    categoriesCards: (locale: string) => [...queryKeys.home.all, 'categories-cards', locale] as const,
    banners: (slug: string, locale: string) => [...queryKeys.home.all, 'banners', slug, locale] as const,
    partners: (locale: string) => [...queryKeys.home.all, 'partners', locale] as const,
  },

  // Product related queries
  products: {
    all: ['products'] as const,
    categories: (locale: string) => [...queryKeys.products.all, 'categories', locale] as const,
    categoryProducts: (categorySlug: string, locale: string) => 
      [...queryKeys.products.all, 'category-products', categorySlug, locale] as const,
    detail: (slug: string, locale: string) => 
      [...queryKeys.products.all, 'detail', slug, locale] as const,
    related: (slug: string, locale: string) => 
      [...queryKeys.products.all, 'related', slug, locale] as const,
  },

  // Service related queries
  services: {
    all: ['services'] as const,
    list: (locale: string) => [...queryKeys.services.all, 'list', locale] as const,
  },
} as const;

