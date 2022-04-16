import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockClientComponent } from './stock-client/stock-client.component';
import {MaterialModules} from '../material.module';

@NgModule({
  declarations: [
    AppComponent,
    StockClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
