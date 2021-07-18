import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
messages1: string[] = [];

add(message:string){
this.messages1.push(message);
}

clear(){
  this.messages1 = [];
}
  constructor() { }
}
