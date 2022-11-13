import { Injectable } from '@angular/core';
import {filter, first, map, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {ShareService} from "../share/share.service";
import {Category} from "../../models/category.model";
import {Order} from "../../models/order.model";
import {OrderUtils} from "../../utils/order-utils";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private categoriesURL: string = 'assets/categories.json';
  constructor(private http: HttpClient, private shareService: ShareService) { }

  categories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesURL);
  }

  generateReceipt(orders: Order[]): void {
    orders.map(order => OrderUtils.calculTaxAverage(order));
    this.shareService.orders = orders;
  }
}
