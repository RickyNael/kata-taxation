import { Injectable } from '@angular/core';
import {Order} from "../../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public orders :Order[] = [];
  constructor() { }

  set setOrders(val: Order[]) {
    this.orders = val;
  }
  get getOrders(): Order[]{
    return this.orders;
  }
}
