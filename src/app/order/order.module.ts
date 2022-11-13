import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    OrdersComponent,
    ReceiptsComponent
  ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        CoreModule
    ]
})
export class OrderModule {}
