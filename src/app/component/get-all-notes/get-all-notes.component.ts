import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList: any;
  // noteList="message from parent"; 
  constructor(private notesService: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes()

  }
  getAllNotes() {
    this.notesService.getNoteList().subscribe((response: any) => {
      console.log("GetAll Notes successfully", response.data);
      this.noteList = response.data.data;
      this.noteList.reverse()  
      this.noteList = this.noteList.filter((data:any)=>{
        // console.log('archived and deleted')
       return data.isArchived==false && data.isDeleted ==false;
      })
    
     })
  }
  receiveMessage($event:any){
    this.getAllNotes();
    console.log($event)
  }
  
  displayMessage(event:any){
    this.getAllNotes();
  }
}