import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgardserviceService {

  constructor() { }
  gettoken(){
    if (localStorage.getItem("token")){
      return true;
    }else{
      return false
    }
  }
}
