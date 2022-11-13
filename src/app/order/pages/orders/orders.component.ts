import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {OrderService} from "../../services/order/order.service";
import {Category} from "../../models/category.model";
import {RouterService} from '../../services/router/router.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderForm: FormGroup = new FormGroup({});
  isOrderFormSubmitted: boolean = false;
  categories$: Observable<Category[]> | null = null;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService, private routerService: RouterService) {
  }

  ngOnInit(): void {
    this.categories$ = this.orderService.categories();
    this.orderForm = this.formBuilder.group({
      numberOfProducts: ['0', Validators.required],
      order: new FormArray([])
    });
  }

  get orderFormArray(): FormArray {
    return this.orderForm.controls['order'] as FormArray;
  }

  get orderFormGroups(): FormGroup[] {
    return this.orderFormArray.controls as FormGroup[];
  }

  onChangeProductsNumber(): void {
    const numberOfProducts: number = this.orderForm.value.numberOfProducts;
    let numberElementInForm: number = this.orderFormArray.length;
    if (this.orderFormArray.length < numberOfProducts) {
      do {
        this.orderFormArray.push(this.formBuilder.group({
          product: this.formBuilder.group({
            category: ['', Validators.required],
            isImport: [false, Validators.required],
            name: ['', [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(50)]],
            price: ['', Validators.required]
          }),
          quantity: ['', Validators.required]
        }));
        numberElementInForm++;
      }
      while (numberElementInForm < numberOfProducts);
    } else {
      do {
        this.orderFormArray.removeAt(numberElementInForm);
        numberElementInForm--;
      }
      while (numberElementInForm >= numberOfProducts);
    }
  }

  submitForm(orderForm: FormGroup): void {
    this.isOrderFormSubmitted = true;
    if (!orderForm.valid)
      return;
    this.orderService.generateReceipt(orderForm.value.order);
    this.routerService.goto('/orders/receipts');
  }
}
