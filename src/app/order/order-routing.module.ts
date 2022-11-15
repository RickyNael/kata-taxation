import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from "./pages/orders/orders.component";
import {ReceiptsComponent} from "./pages/receipts/receipts.component";
import {ReceiptGuard} from "./guards/receipt.guard";

const routes: Routes = [
  {
    path: '', component: OrdersComponent
  },
  {
    path: 'receipts', component: ReceiptsComponent,
    canActivate: [ReceiptGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
