import crypto from "crypto";

export class Product {
    constructor({ name, price, discountPercentage, category, image }){
        this.name = name;
        this.price = price;
        this.discudiscountPercentage =discountPercentage;
        this.category = category;
        this.image = image;
        this.id = crypto.randomUUID();
    }
}