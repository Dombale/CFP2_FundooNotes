import { Component, Inject, OnInit } from '@angular/core';
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
  noteId:any;
  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteservice: NoteService) { this.title=data.title, this.description=data.description,this.noteId=data.noteId}

  ngOnInit(): void {
  }

  onClick() {
    let reqdata = {
      title: this.title, description: this.description
    }
    this.noteservice.updateNote(reqdata,this.noteId).subscribe((response: any) => {
      console.log(response);
      this.dialogRef.close();
    })
  }
  
}