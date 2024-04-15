import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OthermesssageService {

  constructor() { }

  getothermessage(){
    return "message from other message service"
  }
}
