import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesArray:any
  constructor(private notesService : NoteService,public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.notesArray, "Notes Array has displayed")
    
  }
 
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '450px',
      data:note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}