import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockClientComponent } from './stock-client/stock-client.component';
import {MaterialModules} from '../material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Socket } from 'socket.io-client';

@NgModule({
  declarations: [
    AppComponent,
    StockClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
