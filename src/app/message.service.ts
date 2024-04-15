import { Injectable } from '@angular/core';
import { OthermesssageService } from './othermesssage.service';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  _message:string = "hello sahosoft"

  constructor(private _OthermesssageService:OthermesssageService) {
    // return this._message=_OthermesssageService.getothermessage();
   }


  getmessage(){
    return this._message;
  }
}
