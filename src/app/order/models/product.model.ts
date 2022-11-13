import { Category } from "./category.model";

export class Product {
  category: Category;
  isImport: boolean;
  name: string;
  price: number;

  constructor(category: Category, isImport: boolean, name: string, price: number) {
    this.category = category;
    this.isImport = isImport;
    this.name = name;
    this.price = price;
  }
}
