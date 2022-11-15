import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {OrderService} from "../../services/order/order.service";
import {Category} from "../../models/category.model";
import {RouterService} from '../../services/router/router.service';
import {NAME_MAX_CHARACTERS, NAME_MIN_CHARACTERS} from "../../constants/order.const";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderForm: FormGroup = new FormGroup({});
  isOrderFormSubmitted: boolean = false;
  categories$: Observable<Category[]> | null = null;
  nameMinCharacters: string = '';
  nameMaxCharacters: string = '';

  constructor(private formBuilder: FormBuilder, private orderService: OrderService, private routerService: RouterService) {
  }

  ngOnInit(): void {
    this.categories$ = this.orderService.categories();
    this.orderForm = this.formBuilder.group({
      order: new FormArray([])
    });
    this.nameMinCharacters = 'Le nom doit avoir au moins ' + NAME_MIN_CHARACTERS + ' caractères'
    this.nameMaxCharacters = 'Le nom doit avoir au plus ' + NAME_MAX_CHARACTERS + ' caractères'
  }

  get orderFormArray(): FormArray {
    return this.orderForm.controls['order'] as FormArray;
  }

  get orderFormGroups(): FormGroup[] {
    return this.orderFormArray.controls as FormGroup[];
  }

  submitForm(orderForm: FormGroup): void {
    this.isOrderFormSubmitted = true;
    if (!orderForm.valid)
      return;
    this.orderService.generateReceipt(orderForm.value.order);
    this.routerService.goto('/orders/receipts');
  }

  addNewProductLine(): void {
    this.orderFormArray.push(this.formBuilder.group({
      product: this.formBuilder.group({
        category: ['', Validators.required],
        isImport: [false, Validators.required],
        name: ['', [
          Validators.required,
          Validators.minLength(NAME_MIN_CHARACTERS),
          Validators.maxLength(NAME_MAX_CHARACTERS)]],
        price: ['', Validators.required]
      }),
      quantity: ['', Validators.required]
    }));
  }

  removeProductLine(indice: number): void {
    this.orderFormArray.removeAt(indice);
  }
}
