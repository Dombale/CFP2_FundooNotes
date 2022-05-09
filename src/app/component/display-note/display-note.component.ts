import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesArray:any
  constructor(private notesService : NoteService) {}

  ngOnInit(): void {
    console.log(this.notesArray, "Notes Array has displayed")
    
  }
 
}