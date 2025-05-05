import { Book } from "./book";
import { Order } from "./order";
import { Rating } from "./rating";
import { Role } from "./role.enum";

export interface User {
    id: string; 
    keycloakId : string; 
    fullName : string; 
    email: string; 
    password: string; 
    phone? : string; 
    role : Role; 
    books?: Book[];
    orders?: Order[];
    ratings?: Rating[];
    favoriteBooks?: Book[];
}
