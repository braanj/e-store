import { Product } from "@/models/Product";

export interface IOrder {
  orders: Product[];
}

export interface IOrderState {
  cart: IOrder;
}
