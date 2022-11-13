import { TestBed } from '@angular/core/testing';
import {ReceiptGuard} from "../../../app/order/guards/receipt.guard";
import {ShareService} from "../../../app/order/services/share/share.service";
import {RouterTestingModule} from "@angular/router/testing";
import {OrdersComponent} from "../../../app/order/pages/orders/orders.component";

describe('ReceiptGuard', () => {
  let guard: ReceiptGuard;
  let shareService: ShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'orders', component: OrdersComponent}
          ]
        )
      ]
    });
    guard = TestBed.inject(ReceiptGuard);
    shareService = TestBed.inject(ShareService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('#access page should goto receipt page', () => {
    shareService.orders.length = 1;
    expect(guard.canActivate()).toBe(true);
  });

  it('#!access page shouldn\'t got receipt page and redirect to order', () => {
    shareService.orders.length = 0;
    expect(guard.canActivate()).toBe(false);
  });
});
