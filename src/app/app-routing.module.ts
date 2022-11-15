import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./error/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  {
    path: '404', component: NotFoundComponent,
    pathMatch: "full"
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
