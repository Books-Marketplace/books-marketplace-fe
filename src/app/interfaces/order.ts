import { Payment } from "./payment";
import { ShippingAddress } from "./shipping-address";
import { Status } from "./status.enum";
import { User } from "./user";

export interface Order {
    id : string; 
    date : Date; 
    totalPrice : number; 
    buyer : User; 
    orderNumber : string; 
    orderStatus : Status;
    payment : Payment; 
    shippingAdress : ShippingAddress; 
    
}

