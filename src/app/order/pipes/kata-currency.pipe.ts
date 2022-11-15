import {Pipe, PipeTransform} from '@angular/core';
import {OrderUtils} from "../utils/order-utils";

@Pipe({
  name: 'kataCurrency'
})
export class KataCurrencyPipe implements PipeTransform {

  transform(price: number, tax: number = 0, quantity: number): string {
    const priceTTC = OrderUtils.roundElement((price + tax) * quantity);
    return priceTTC.toFixed(2).replace('.', ',') + ' € TTC';
  }
}
