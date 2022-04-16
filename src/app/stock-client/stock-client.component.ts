import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  stockId: string;
  stockName: string;
  currentPrice: number;
  changeRate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {stockId: '1', stockName: 'Hydrogen', currentPrice: 1.0079, changeRate: 'H'},
  {stockId: '2', stockName: 'Helium', currentPrice: 4.0026, changeRate: 'He'},
  {stockId: '3', stockName: 'Lithium', currentPrice: 6.941, changeRate: 'Li'},
  {stockId: '4', stockName: 'Beryllium', currentPrice: 9.0122, changeRate: 'Be'},
  {stockId: '5', stockName: 'Boron', currentPrice: 10.811, changeRate: 'B'},
  {stockId: '6', stockName: 'Carbon', currentPrice: 12.0107, changeRate: 'C'},
  {stockId: '7', stockName: 'Nitrogen', currentPrice: 14.0067, changeRate: 'N'},
  {stockId: '8', stockName: 'Oxygen', currentPrice: 15.9994, changeRate: 'O'},
  {stockId: '9', stockName: 'Fluorine', currentPrice: 18.9984, changeRate: 'F'},
  {stockId: '10', stockName: 'Neon', currentPrice: 20.1797, changeRate: 'Ne'},
];



@Component({
  selector: 'app-stock-client',
  templateUrl: './stock-client.component.html',
  styleUrls: ['./stock-client.component.scss']
})
export class StockClientComponent implements OnInit {
  displayedColumns: string[] = ['stockId', 'stockName', 'currentPrice', 'changeRate'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  

  ngOnInit(): void {
    
  }

}


