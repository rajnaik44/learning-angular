import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  _message = "hello sahosoft"

  constructor() { }

  
  getmessage(){
    return this._message;
  }
}
