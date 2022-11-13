import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {ShareService} from "../services/share/share.service";
import {RouterService} from "../services/router/router.service";

@Injectable({
  providedIn: 'root'
})
export class ReceiptGuard implements CanActivate {

  constructor(private shareService: ShareService, private routerService: RouterService) {}
  canActivate(): boolean {
    if (this.shareService.orders.length === 0) {
      this.routerService.goto('/orders');
      return false;
    }
    return true;
  }

}
