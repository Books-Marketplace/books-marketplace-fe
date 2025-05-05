import { Order } from "./order";

export interface ShippingAddress {
  id: number;
  postalCode: string;
  city: string;
  country: string;
  street: string;
  orders?: Order[];
}
