import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  public takeNote: boolean = false;
  title: string = "";
  description: string = "";
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private noteservice: NoteService) { }

  ngOnInit(): void {
  }
  createNote() {
    console.log(this.title,
      this.description)
    this.takeNote = true
  }


  closeNote() {
    this.takeNote = false
    let reqdata = {
      title: this.title, description: this.description
    }
    this.noteservice.takeNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.messageEvent.emit(response)
      console.log("messageEvent", this.messageEvent)
    })
  }


}
