import { Cart } from "./cart";
import { Category } from "./category.enum";
import { Rating } from "./rating";
import { User } from "./user";

export interface Book {
id : string;
title : string;
author : string; 
price : number; 
description : string;
image: string; 
category : Category; 
cart : Cart; 
ratings : Rating[];
admin?: User; 
}

