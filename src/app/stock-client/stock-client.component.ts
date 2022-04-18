import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '../websocket.service';

export interface PeriodicElement {
  stockId: string;
  stockName: string;
  currentPrice: number;
  changeRate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { stockId: '1', stockName: 'Hydrogen', currentPrice: 1.0079, changeRate: 'H' },
  { stockId: '2', stockName: 'Helium', currentPrice: 4.0026, changeRate: 'He' },
  { stockId: '3', stockName: 'Lithium', currentPrice: 6.941, changeRate: 'Li' },
  { stockId: '4', stockName: 'Beryllium', currentPrice: 9.0122, changeRate: 'Be' },
  { stockId: '5', stockName: 'Boron', currentPrice: 10.811, changeRate: 'B' },
  { stockId: '6', stockName: 'Carbon', currentPrice: 12.0107, changeRate: 'C' },
  { stockId: '7', stockName: 'Nitrogen', currentPrice: 14.0067, changeRate: 'N' },
  { stockId: '8', stockName: 'Oxygen', currentPrice: 15.9994, changeRate: 'O' },
  { stockId: '9', stockName: 'Fluorine', currentPrice: 18.9984, changeRate: 'F' },
  { stockId: '10', stockName: 'Neon', currentPrice: 20.1797, changeRate: 'Ne' },
];


@Component({
  selector: 'app-stock-client',
  templateUrl: './stock-client.component.html',
  styleUrls: ['./stock-client.component.scss']
})

export class StockClientComponent implements OnInit {
  displayedColumns: string[] = ['stockId', 'stockName', 'currentPrice', 'changeRate'];
  dataSource = ELEMENT_DATA;
  inputMs = 10
  ms = 10
  ms_flag = true

  constructor(private webSocketService: WebsocketService) { }

  changeMs() {
    if (this.inputMs > 3000) {
      this.inputMs = 3000
    } else if (this.inputMs < 10) {
      this.inputMs = 10
    }
    this.ms = this.inputMs
  }

  //發送訊息
  sendMessage(event: any, msg: any) {
    this.webSocketService.emit(event, msg);
  }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      this.webSocketService.listen('test').subscribe((data) => {
        alert('收到test事件:' + data)
        observer.next(data);
      });
    })
  }

  ngOnInit(): void {
    //初始化畫面時連結socket並聆聽newQuote事件
    this.webSocketService.listen('newQuote').subscribe((data: any) => {
      // console.log(data);
      if (this.ms_flag) {
        this.dataSource = data
        this.ms_flag = false;
      }
    })

    this.Timer();
  }

  //計時器
  Timer() {
    let myFunction = ()=> {
      clearInterval(interval);
      this.ms_flag = true;
      interval = setInterval(myFunction, this.ms);
    }
    let interval = setInterval(myFunction, this.ms);
  }
}


