import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesArray:any;
@Input() noteUpdated:any;
@Output() updatedIconData = new EventEmitter<any>();
  constructor(private notesService : NoteService,public dialog: MatDialog) {}
  title: any;
  description: any;
  ishide = true;
  ngOnInit(): void {
    console.log(this.notesArray, "Notes Array has displayed")
   
  }

  openDialog(note:any): void {
    console.log(note)
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '550px',
      data:note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(result)
    });
  }
  iconMessage($event:any){
    this.updatedIconData.emit($event);
  }
}