import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  color:any;
  reminder:any;
  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteservice: NoteService) { 
      this.color=data.color
     }

  ngOnInit(): void {
    console.log(this.data)
    this.title = this.data.title, this.description = this.data.description, this.id = this.data.id, this.reminder = this.data.reminder
  }

  onClose() {
    let reqdata = {
      title: this.title, description: this.description,
      noteId: this.id, reminder:this.reminder
    }
    this.noteservice.updateNote(reqdata).subscribe((response: any) => {
      console.log(response);
      this.dialogRef.close(reqdata);
    })
  }

  iconMessage(event:any){
    this.color=event.data.color
  }
}