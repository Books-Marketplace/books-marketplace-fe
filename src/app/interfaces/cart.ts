import { Book } from "./book";

export interface Cart {
id : string;
title : string;
unitPrice : number; 
quantity : number;
totalPrice : number; 
books : Book;
}

