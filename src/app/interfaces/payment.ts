import { Order } from "./order";

export interface Payment {
  id: number; 
  order: Order;
  cardNumber: string;
  amount: number;
  cvc: string;
  expirationDate: Date;
}
