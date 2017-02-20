/**
 * Created by SergST on 20.02.2017.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PurchaceList } from './list.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ PurchaceList ],
  bootstrap:    [ PurchaceList ]
})
export class MainModule { }