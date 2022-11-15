import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import {CoreModule} from "../core/core.module";
import { KataCurrencyPipe } from './pipes/kata-currency.pipe';
import { ElementIdPipe } from './pipes/element-id.pipe';


@NgModule({
  declarations: [
    OrdersComponent,
    ReceiptsComponent,
    KataCurrencyPipe,
    ElementIdPipe
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        CoreModule
    ]
})
export class OrderModule {}
