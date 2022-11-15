import {Order} from "../models/order.model";
import {ROUND_SUP_NUMBER} from "../constants/order.const";

export class OrderUtils {

  public static calculTaxAverage(order: Order): Order {
    const totalTax = this.totalTax(order.product.category.tax, order.product.isImport);
    order.tax = this.roundElement(order.product.price * totalTax / 100);
    return order;
  }

  public static totalTax(tax: number, isImport: boolean): number {
    return tax + (isImport ? ROUND_SUP_NUMBER : 0);
  }

  public static roundElement(element: number): number {
    let numberBeforeDecimal = Math.trunc(element);
    let numberAfterDecimal = Math.round((element % 1) * 100);
    if (numberAfterDecimal > 0) {
      if (numberAfterDecimal < 10) {
        numberAfterDecimal = Math.floor(numberAfterDecimal / ROUND_SUP_NUMBER) > 1 ? 10 : ROUND_SUP_NUMBER;
      } else {
        const remainder = numberAfterDecimal % ROUND_SUP_NUMBER;
        numberAfterDecimal = remainder != 0 ? (numberAfterDecimal - remainder) + ROUND_SUP_NUMBER : numberAfterDecimal;
      }
    }
    return numberBeforeDecimal + (numberAfterDecimal / 100);
  }
}
