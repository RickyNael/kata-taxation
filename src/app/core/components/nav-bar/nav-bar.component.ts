import { Component, OnInit } from '@angular/core';
import {RouterService} from "../../../order/services/router/router.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private routerService: RouterService) { }

  gotoHome(): void {
    this.routerService.goto('');
  }
}
