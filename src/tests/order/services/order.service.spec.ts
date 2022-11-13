import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from "@angular/common/http";
import {OrderService} from "../../../app/order/services/order/order.service";

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCategorie should return value from observable',
    (done: DoneFn) => {
      service.categories().subscribe(value => {
        expect(value.length).toBeGreaterThan(1);
        expect(value).toContain({
          "id": 1,
          "name": "Premiére Nécessité",
          "tax": 0
        });
        done();
      });
    });

});
