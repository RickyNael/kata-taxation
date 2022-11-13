import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {IdentityPipe} from "./pipes/identity.pipe";
import {KataCurrencyPipe} from './pipes/kata-currency.pipe';
import {OnlyNumberDirective} from './directives/only-number.directive';


@NgModule({
  declarations: [
    NavBarComponent,
    IdentityPipe,
    KataCurrencyPipe,
    OnlyNumberDirective
  ],
  exports: [
    NavBarComponent,
    IdentityPipe,
    KataCurrencyPipe,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {}
