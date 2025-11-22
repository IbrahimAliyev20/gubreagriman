import { ProductDetail } from '@/types/types';

export const productDetails: ProductDetail[] = [
  {
    name: 'Rotem MKP',
    slug: 'rotem-mkp',
    image: '/images/product.png',
    thumb_image: '/images/product.png',
    parent_category: 'FUNQİSİDLƏR',
    description: 'Rotem MKP is an extremely pure monopotassium phosphate source. Its ICL raw materials and production quality ensure maximum efficiency. Fully water-soluble and low-salinity Rotem MKP is suitable for all types of plants: drip irrigation, soilless cultivation, etc. Its chloride- and additive-free formulation and low salt index make it safe and pure. Our highest phosphorus fertilizer. Safe for foliar application or irrigation systems, without the risk of leaf burn or phytotoxicity. Offers adjustable and customizable nitrogen application control.',
    attributes: [
      { attribute_key: 'Product Group', attribute_value: 'FERTILIZER' },
      { attribute_key: 'Active Ingredient', attribute_value: 'Monopotassium Phosphate' },
      { attribute_key: 'Formulation', attribute_value: 'Water-Soluble Powder' }
    ],
    usage: [
      {
        plant_name: 'Vineyard',
        pest_name: 'Grapevine downy mildew (Plasmopara viticola)',
        dosage: '250 g/100 L water',
        pre_harvest_interval: '7 days'
      },
      {
        plant_name: 'Apricot',
        pest_name: 'Leafworm (freckle) (Wilsonomyces carpophylus = Stigmina carpophila)',
        dosage: '500 g/100 L water (Dormant period) and 250 g/100 L water (Normal period)',
        pre_harvest_interval: '7 days'
      },
      {
        plant_name: 'Peach',
        pest_name: 'Peach leaf curl (Taphrina deformans)',
        dosage: '350 g/100 L water',
        pre_harvest_interval: '14 days'
      },
      {
        plant_name: 'Domates (Tomato)',
        pest_name: 'Early blight (Altrernaria solani)',
        dosage: '250 g/da',
        pre_harvest_interval: '14 days'
      },
      {
        plant_name: 'Olives',
        pest_name: 'Olive ring spot (Spilocaea oleginea = Cyclogonium oleaginum)',
        dosage: '350 g/100 L water',
        pre_harvest_interval: '7 days'
      },
      {
        plant_name: 'Citrus Fruits',
        pest_name: 'Brown Spot Disease (Alternaria alternata f.sp citri)',
        dosage: '350 g/100 L water',
        pre_harvest_interval: '7 days'
      },
      {
        plant_name: 'Pomegranate',
        pest_name: 'Brown spot on pomegranate (Alternaria alternata)',
        dosage: '350 g/100 L water',
        pre_harvest_interval: '28 days'
      }
    ]
  },
  {
    name: 'Funguran-OH 50 WP',
    slug: 'funguran-oh-50-wp',
    image: '/images/product.png',
    thumb_image: '/images/product.png',
    parent_category: 'FUNQİSİDLƏR',
    description: 'Funguran-OH 50 WP is a copper-based fungicide containing copper hydroxide equivalent to 50% metallic copper. It is formulated as a wettable powder (WP) for effective control of various fungal diseases in crops. This product provides broad-spectrum protection against fungal pathogens and is suitable for use in various agricultural applications.',
    attributes: [
      { attribute_key: 'Product Group', attribute_value: 'FUNGICIDE' },
      { attribute_key: 'Active Ingredient', attribute_value: 'Copper Hydroxide Equivalent to 50% Metallic Copper' },
      { attribute_key: 'Formulation', attribute_value: 'Wettable Powder (WP)' }
    ],
    usage: []
  }
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return productDetails.find(product => product.slug === slug);
}

