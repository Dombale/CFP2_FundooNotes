import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  private messageSource = new BehaviorSubject('');
  receiveData = this.messageSource.asObservable();

  sendData(message: any) {
    console.log(message)
    this.messageSource.next(message)
  }
}
