export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stars: number;
  coupon?: number;
  solde?: number;
}
