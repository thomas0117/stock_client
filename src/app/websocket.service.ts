import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;

  constructor() {
    this.socket = io(environment.socketUrl,{ transports : ['websocket'] })
   }

  listen(eventName: string){
    return new Observable((sub) => {
      this.socket.on(eventName, (data:any) => {
        sub.next(data)
      })
    })
  }

  emit(eventName:string, data: any){
    this.socket.emit(eventName, data)
  }

}
