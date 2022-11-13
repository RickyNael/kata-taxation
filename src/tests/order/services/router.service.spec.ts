import {fakeAsync, TestBed} from '@angular/core/testing';
import {NavigationEnd, Router} from "@angular/router";
import {RouterService} from "../../../app/order/services/router/router.service";
import {Location} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {OrdersComponent} from "../../../app/order/pages/orders/orders.component";

describe('RouterService', () => {
  let service: RouterService;
  let location: Location;
  let router: Router;

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
    service = TestBed.inject(RouterService);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#goto should redirect to the url', fakeAsync(() => {
    service.goto('orders');
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        expect(val.url).toBe('/orders');
      }
    });
  }));
});
