interface ProductCardProps {
  id: number
  name: string
  category: string
  image: string
  slug?: string
}

export const productcard: ProductCardProps[] = [
  {
    id: 1,
    name: 'Rotem MKP',
    category: 'FUNQİSİDLƏR',
    image: '/images/product.png',
    slug: 'rotem-mkp'
  },
  {
    id: 2,
    name: 'Funguran-OH 50 WP',
    category: 'FUNQİSİDLƏR',
    image: '/images/product.png',
    slug: 'funguran-oh-50-wp'
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 3',
    image: '/images/product.png'
  },
  {
    id: 4,
    name: 'Product 4',
    category: 'Category 4',
    image: '/images/product.png'
  },
  {
    id: 5,
    name: 'Product 5',
    category: 'Category 5',
    image: '/images/product.png'
  },
  {
    id: 6,
    name: 'Product 6',
    category: 'Category 6',
    image: '/images/product.png'
  },
  {
    id: 7,
    name: 'Product 7',
    category: 'Category 7',
    image: '/images/product.png'
  },
  {
    id: 8,
    name: 'Product 8',
    category: 'Category 8',
    image: '/images/product.png'
  }
]