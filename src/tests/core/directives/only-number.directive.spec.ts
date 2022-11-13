import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement, ElementRef} from "@angular/core";
import {By} from "@angular/platform-browser";
import {OnlyNumberDirective} from "../../../app/core/directives/only-number.directive";
import {OrdersComponent} from "../../../app/order/pages/orders/orders.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {MockAnimationDriver} from "@angular/animations/browser/testing";

describe('OnlyNumberDirective', () => {
  let directive: OnlyNumberDirective;
  let inputEl: DebugElement;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, BrowserDynamicTestingModule],
      declarations: [
        OrdersComponent,
        OnlyNumberDirective
      ],
      providers: [
        OnlyNumberDirective,
        { provide: ElementRef, useClass: MockAnimationDriver }
      ]
    });
    directive = TestBed.inject(OnlyNumberDirective);
    fixture = TestBed.createComponent(OrdersComponent);
    inputEl = fixture.debugElement.query(By.all());
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
