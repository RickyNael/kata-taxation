import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {IdentityPipe} from "./pipes/identity.pipe";
import {OnlyNumberDirective} from './directives/only-number.directive';


@NgModule({
  declarations: [
    NavBarComponent,
    IdentityPipe,
    OnlyNumberDirective
  ],
  exports: [
    NavBarComponent,
    IdentityPipe,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {}
