import { Component, OnInit } from '@angular/core';
import {RouterService} from "../../order/services/router/router.service";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private routerService: RouterService) { }

  gotoHome(): void {
    this.routerService.goto('');
  }
}
