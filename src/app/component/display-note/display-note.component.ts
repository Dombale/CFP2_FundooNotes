import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() notesArray: any;
  @Input() noteUpdated: any;
  @Output() updatedIconData = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  title: any;
  description: any;
  reminder: any;
  filterString: any

  ngOnInit(): void {
    console.log(this.notesArray, "Notes Array has displayed")
    this.dataService.receiveData.subscribe((response:any)=>{
      console.log("Data received",response)
      this.filterString=response
    })
  }

  openDialog(note: any): void {
    console.log(note)
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '550px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(result)
    });
  }
  iconMessage($event: any) {
    this.updatedIconData.emit($event);
  }
  onClose() {

  }
}

