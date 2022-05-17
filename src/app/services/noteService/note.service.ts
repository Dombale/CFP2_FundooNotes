import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  changecolorservice(req: { noteIdList: any[]; color: any; }) {
    throw new Error('Method not implemented.');
  }
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
    return this.httpService.postService("/notes/addNotes", reqdata, true, header)

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
  updateNote(reqdata: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/updateNotes", reqdata, true, header)

  }

  deleteNote(reqdata: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/trashNotes", reqdata, true, header)

  }
  archivedNote(reqdata: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/archiveNotes", reqdata, true, header)

  }

  getTrashNoteList() {
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getTrashNotesList', true, headers)
  
  
  }
  getArchiveNoteList() {
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getArchiveNotesList', true, headers)
  
  
  }
  changeColors(reqdata: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService("/notes/changesColorNotes", reqdata, true, header)

}

}
