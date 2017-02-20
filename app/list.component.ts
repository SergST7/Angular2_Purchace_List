/**
 * Created by SergST on 21.02.2017.
 */

import { Component } from '@angular/core';
import { Item } from './model';

@Component({
  selector: 'my-app',
  template: `
  <div *ngFor="let item of items">{{ item.purchase }}</div>
`
})
export class PurchaceList {
  items: Item[] =
  [
    { purchase: "Хлеб", done: false, price: 15.9 },
    { purchase: "Масло", done: false, price: 60 },
    { purchase: "Картофель", done: true, price: 22.6 },
    { purchase: "Сыр", done: false, price:310 }
  ];
}