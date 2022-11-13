import { Product } from "./product.model";

export class Order {
  product: Product;
  quantity: number;
  tax: number = 0;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}
