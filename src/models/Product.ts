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
}
