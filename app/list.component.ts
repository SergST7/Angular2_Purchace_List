/**
 * Created by SergST on 21.02.2017.
 */

import {Component} from '@angular/core';
import {Item} from './model';

@Component({
  selector: 'my-app',
  template: `
    <div class="page-header">
        <h1> Список покупок </h1>
    </div>
    <div class="panel">
      <div class="form-inline">
        <div class="form-group">
          <div class="col-md-8">
            <input type="text" class="form-control" [(ngModel)]="title" placeholder="Название">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-8">
            <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-2 col-md-8">
          <button class="btn btn-primary" (click)="addItem(text, price)">Добавить</button>
          </div>
         </div>
      </div> 
      <table class="table table-striped">
        <thead>
           <tr>
             <th>Предмет</th>
             <th>Цена</th>
             <th>Куплено</th>
           </tr>
        </thead>
        <tbody>
         <tr *ngFor="let item of items">
           <td>{{item.purchase}}</td>
           <td>{{item.price}}</td>
           <td><input type="checkbox" [(ngModel)]="item.done" /></td>
          </tr>
        </tbody>
      </table>
    </div>
`
})
export class PurchaceList {
  items: Item[] =
    [
      {purchase: "Хлеб", done: false, price: 15.9},
      {purchase: "Масло", done: false, price: 60},
      {purchase: "Картофель", done: true, price: 22.6},
      {purchase: "Сыр", done: false, price: 310}
    ];
}