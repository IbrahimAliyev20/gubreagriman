// lib/query-keys.ts
export const queryKeys = {
  about: {
    all: ['about'] as const,
    statics: (locale: string) => [...queryKeys.about.all, 'statics', locale] as const,
    about: (locale: string) => [...queryKeys.about.all, 'about', locale] as const,
  },
  home: {
    all: ['home'] as const,
    servicesCards: (locale: string) => [...queryKeys.home.all, 'services-cards', locale] as const,
    categoriesCards: (locale: string) => [...queryKeys.home.all, 'categories-cards', locale] as const,
    banners: (slug: string, locale: string) => [...queryKeys.home.all, 'banners', slug, locale] as const,
    partners: (locale: string) => [...queryKeys.home.all, 'partners', locale] as const,
    socialLinks: (locale: string) => [...queryKeys.home.all, 'social-links', locale] as const,
    homeAbout: (locale: string) => [...queryKeys.home.all, 'home-about', locale] as const,
  },

  products: {
    all: ['products'] as const,
    categories: (locale?: string) => 
      [...queryKeys.products.all, 'categories', locale ?? ''] as const,
    
    categoryProducts: (categorySlug: string, locale?: string) => 
      [...queryKeys.products.all, 'category-products', categorySlug, locale ?? ''] as const,
    
    categoryProductsInfinite: (categorySlug: string, locale?: string) => 
      [...queryKeys.products.all, 'category-products-infinite', categorySlug, locale ?? ''] as const,
    
    detail: (slug: string, locale?: string) => 
      [...queryKeys.products.all, 'detail', slug, locale ?? ''] as const,
    
    related: (slug: string, locale?: string) => 
      [...queryKeys.products.all, 'related', slug, locale ?? ''] as const,
  },

  services: {
    all: ['services'] as const,
    list: (locale: string) => [...queryKeys.services.all, 'list', locale] as const,
  },

  contacts: {
    all: ['contacts'] as const,
    contacts: (locale: string) => [...queryKeys.contacts.all, 'contact', locale] as const,
  },
} as const;