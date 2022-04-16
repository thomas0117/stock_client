import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StockClientComponent } from './stock-client/stock-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'stock_client', pathMatch: 'full' },
  { path: "stock_client", component: StockClientComponent },
  { path: "**", redirectTo: 'stock_client' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
