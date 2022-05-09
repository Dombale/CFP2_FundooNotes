import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 token:any
  constructor(private httpService: HttpService) {
   }
  takeNote(reqdata: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("notes/addNotes", reqdata, true, header)

  }
  getNoteList() {
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getNotesList', true, headers)
  
  
  }
}


