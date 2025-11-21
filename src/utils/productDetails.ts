import { ProductDetail } from '@/types/types';

export const productDetails: ProductDetail[] = [
  {
    id: 1,
    name: 'Rotem MKP',
    slug: 'rotem-mkp',
    category: 'FUNQİSİDLƏR',
    image: '/images/product.png',
    description: [
      'Rotem MKP is an extremely pure monopotassium phosphate source. Its ICL raw materials and production quality ensure maximum efficiency. Fully water-soluble and low-salinity Rotem MKP is suitable for all types of plants: drip irrigation, soilless cultivation, etc.',
      'Its chloride- and additive-free formulation and low salt index make it safe and pure. Our highest phosphorus fertilizer. Safe for foliar application or irrigation systems, without the risk of leaf burn or phytotoxicity. Offers adjustable and customizable nitrogen application control.'
    ],
    keyCharacteristics: {
      productGroup: 'FERTILIZER',
      activeIngredient: 'Monopotassium Phosphate',
      formulation: 'Water-Soluble Powder'
    },
    applicationTable: [
      {
        cropName: 'Vineyard',
        pestOrganismName: 'Grapevine downy mildew (Plasmopara viticola)',
        applicationDosage: '250 g/100 L water',
        harvestInterval: '7 days'
      },
      {
        cropName: 'Apricot',
        pestOrganismName: 'Leafworm (freckle) (Wilsonomyces carpophylus = Stigmina carpophila)',
        applicationDosage: '500 g/100 L water (Dormant period) and 250 g/100 L water (Normal period)',
        harvestInterval: '7 days'
      },
      {
        cropName: 'Peach',
        pestOrganismName: 'Peach leaf curl (Taphrina deformans)',
        applicationDosage: '350 g/100 L water',
        harvestInterval: '14 days'
      },
      {
        cropName: 'Domates (Tomato)',
        pestOrganismName: 'Early blight (Altrernaria solani)',
        applicationDosage: '250 g/da',
        harvestInterval: '14 days'
      },
      {
        cropName: 'Olives',
        pestOrganismName: 'Olive ring spot (Spilocaea oleginea = Cyclogonium oleaginum)',
        applicationDosage: '350 g/100 L water',
        harvestInterval: '7 days'
      },
      {
        cropName: 'Citrus Fruits',
        pestOrganismName: 'Brown Spot Disease (Alternaria alternata f.sp citri)',
        applicationDosage: '350 g/100 L water',
        harvestInterval: '7 days'
      },
      {
        cropName: 'Pomegranate',
        pestOrganismName: 'Brown spot on pomegranate (Alternaria alternata)',
        applicationDosage: '350 g/100 L water',
        harvestInterval: '28 days'
      }
    ]
  },
  {
    id: 2,
    name: 'Funguran-OH 50 WP',
    slug: 'funguran-oh-50-wp',
    category: 'FUNQİSİDLƏR',
    image: '/images/product.png',
    description: [
      'Funguran-OH 50 WP is a copper-based fungicide containing copper hydroxide equivalent to 50% metallic copper. It is formulated as a wettable powder (WP) for effective control of various fungal diseases in crops.',
      'This product provides broad-spectrum protection against fungal pathogens and is suitable for use in various agricultural applications.'
    ],
    keyCharacteristics: {
      productGroup: 'FUNGICIDE',
      activeIngredient: 'Copper Hydroxide Equivalent to 50% Metallic Copper',
      formulation: 'Wettable Powder (WP)'
    }
  }
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return productDetails.find(product => product.slug === slug);
}

