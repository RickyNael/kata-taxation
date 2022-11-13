import { Order } from "./order.model";

export interface Receipt {
  order: Order;
  priceTTC: number;
  totalTax: number;
}
