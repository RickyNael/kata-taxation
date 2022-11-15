import { Injectable } from '@angular/core';
import {Order} from "../../models/order.model";

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public orders :Order[] = [];
  constructor() { }
}
