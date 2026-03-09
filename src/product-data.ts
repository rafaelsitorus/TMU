/** Shared product category + brand data */
export interface ProductBrand {
  slug: string
  name: string
}

export interface ProductCategory {
  slug: string
  name: string
  brands: ProductBrand[]
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'genset',
    name: 'Genset',
    brands: [
      { slug: 'caterpillar', name: 'Caterpillar' },
      { slug: 'cummins',     name: 'Cummins' },
      { slug: 'perkins',     name: 'Perkins' },
      { slug: 'mtu',         name: 'MTU' },
      { slug: 'man',         name: 'MAN' },
      { slug: 'deutz',       name: 'Deutz' },
    ],
  },
  {
    slug: 'panel',
    name: 'Panel',
    brands: [
      { slug: 'schneider', name: 'Schneider' },
      { slug: 'abb',       name: 'ABB' },
      { slug: 'simetri',   name: 'Simetri' },
      { slug: 'sier',      name: 'Sier' },
    ],
  },
  {
    slug: 'ups',
    name: 'UPS',
    brands: [
      { slug: 'borri', name: 'Borri' },
      { slug: 'dale',  name: 'Dale' },
    ],
  },
  {
    slug: 'cable',
    name: 'Cable',
    brands: [
      { slug: 'supreme',    name: 'Supreme' },
      { slug: 'metal',      name: 'Metal' },
      { slug: 'kabelindo',  name: 'Kabelindo' },
      { slug: 'jembo',      name: 'Jembo' },
    ],
  },
]

/** Build <a> href for a specific brand page */
export function brandHref(catSlug: string, brandSlug: string): string {
  return `/product.html?cat=${catSlug}&brand=${brandSlug}`
}
