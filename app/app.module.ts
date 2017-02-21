/**
 * Created by SergST on 20.02.2017.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PurchaceList } from './list.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ PurchaceList ],
  bootstrap:    [ PurchaceList ]
})
export class MainModule { }