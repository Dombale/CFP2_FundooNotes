import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {
  archiveList: any;
  constructor(private notesService:NoteService) { }

  ngOnInit(): void {
    this.getArchiveNotes()
  }
  getArchiveNotes(){
    this.notesService.getArchiveNoteList().subscribe((response: any) => {
      console.log("GetAll Archive Notes successfully", response.data);
      this.archiveList = response.data.data;
      this.archiveList.reverse();
        
    })
  }
  displayMessage(event:any){
    this.getArchiveNotes();
  }

}
