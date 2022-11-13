import { Component, OnInit } from '@angular/core';
import {ShareService} from "../../services/share/share.service";
import {Order} from "../../models/order.model";
import {OrderUtils} from "../../utils/order-utils";

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent implements OnInit {
  orders: Order[] = [];
  totalTax: number = 0;
  priceTTC: number = 0;
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.orders = this.shareService.orders;
    this.orders.forEach((order: Order) => {
      this.totalTax += OrderUtils.roundElement(order.tax) * order.quantity;
      this.priceTTC += (order.product.price + OrderUtils.roundElement(order.tax)) * order.quantity;
    });
    this.totalTax = OrderUtils.roundElement(this.totalTax);
    console.log(this.orders);
  }
}
