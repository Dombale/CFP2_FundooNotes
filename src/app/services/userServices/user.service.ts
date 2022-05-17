import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  Registration(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("/user/userSignUp", reqdata, false, header)

  }
  Login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("/user/login", reqdata, false, header)

  }

  Forgetpassward(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("/user/reset", reqdata, false, header)

  }
 Reset(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService("/user/login", reqdata, false, header)

  }
}

