import { Book } from "./book";
import { ShippingAddress } from "./shipping-address";
import { User } from "./user";

export interface Rating {
    id : string; 
    value : number; 
    book : Book; 
    buyer : User; 
    shippingAdress : ShippingAddress; 
    
}
