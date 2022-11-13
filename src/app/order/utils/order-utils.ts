import { Order } from "../models/order.model";

export class OrderUtils {

  public static calculTaxAverage(order: Order): Order {
    const totalTax = this.totalTax(order.product.category.tax, order.product.isImport);
    order.tax = this.roundElement(order.product.price * totalTax / 100);
    return order;
  }

  public static totalTax(tax: number, isImport: boolean): number {
    return tax + (isImport ? 5 : 0);
  }

  public static roundElement(element: number): number {
    let numberBeforeDecimal = Math.trunc(element);
    let numberAfterDecimal = Math.round((element % 1) * 100);
    if (numberAfterDecimal > 0) {
      if (numberAfterDecimal < 10) {
        numberAfterDecimal = Math.floor(numberAfterDecimal/5) > 1 ? 10 : 5;
      } else {
        const remainder = numberAfterDecimal%5;
        if (remainder != 0) {
          numberAfterDecimal = (numberAfterDecimal - remainder) + 5;
        }
      }
    }
    return numberBeforeDecimal + (numberAfterDecimal / 100);
  }
}
