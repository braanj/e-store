export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stars: number;
  coupon?: number;
  solde?: number;

  colors?: string[];
  sizes?: (string | number)[];
  sexe?: string;
  sexes?: string[];
  category?: string;
  sku?: string;
  images?: Image[]
  options?: Option[]
}

export interface Option {
  title: string,
  items: Type[]
}

export interface Type {
  title: string,
  subtitle: string
}

export interface Image {
  src: string,
  alt: string
}