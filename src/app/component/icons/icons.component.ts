import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { NoteService } from 'src/app/services/noteService/note.service';
import { ArchiveNoteComponent } from '../archive-note/archive-note.component';
import { DisplayNoteComponent } from '../display-note/display-note.component';
import { TrashNoteComponent } from '../trash-note/trash-note.component';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {


  // selectedValue :string="";

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];
  
  @Input() noteObj: any;
  @Output() updatedIconData = new EventEmitter<any>();

  
  datePicker: any;
  today = new Date();
  tommorow = new Date(this.today);
  nextMonday = new Date(this.today);

  constructor(private noteservice: NoteService, private route:ActivatedRoute) { }
  colors = [{ name: 'white', Colorcode: '#d78cb9' }, { name: 'peach', Colorcode: '#f28b82' }, { name: 'pink', Colorcode: '#FFFEA9' }, { name: 'lemon', Colorcode: '#d7aefb' }, { name: 'brown', Colorcode: '#b5e39c' }, { name: 'green', Colorcode: '#e6ba81' }, { name: 'blue', Colorcode: '#cbf0f8' }]

  isDeleted: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions!: Observable<string[]>;

  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == DisplayNoteComponent) {
      // this.isDisplayNoteComponent = true;
    }

    if (comp == TrashNoteComponent) {
      this.isTrashed = true;

    }
    if (comp == ArchiveNoteComponent) {
      this.isArchived = true;
      // console.log(this.isArchiveComponent);
    }

  }

  onTrash() {
    let req = {
      noteIdList: [this.noteObj.id],
      isDeleted: true
    }
    this.noteservice.deleteNote(req).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
  onArchive() {
    let req = {
      noteIdList: [this.noteObj.id],
      isArchived: true
    }
    this.noteservice.archivedNote(req).subscribe((response: any) => {
      console.log("Note Archived Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
  // onUnArchive() {
  //   let req = {
  //     noteIdList: [this.noteObj.id],
  //     isArchived: false
  //   }
  //   this.noteservice.getNoteList(req).subscribe((response: any) => {
  //     console.log("Note Archived Successfully", response);
  //     this.updatedIconData.emit(response);
  //   })
  // }
  delete(){

  }
  changeColor(Notecolor: any) {
    this.noteObj.color;
    let req = {
      color: Notecolor,
      noteIdList: [this.noteObj.id],

    }
    this.noteservice.changeColors(req).subscribe((response: any) => {
      console.log("Note color changed Successfully", response);
      this.updatedIconData.emit(Notecolor);
    })
  }
 
  onReminder() {
    console.log(this.datePicker);
    let req = {
      noteIdList: [this.noteObj.id],
      reminder: this.datePicker
    }
    this.noteservice.reminder(req).subscribe((response: any) => {
      console.log("Reminder set Successfully", response);
      this.updatedIconData.emit(response);
    })
  }

  onToday() {
    let req = {
      noteIdList: [this.noteObj.id],
      reminder: this.today
    }
    this.noteservice.reminder(req).subscribe((response: any) => {
      console.log("Reminder set Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
  onTommorow() {

    this.tommorow.setDate(this.today.getDate() + 1)
    this.tommorow.setHours(8, 0, 0)
    let req = {
      noteIdList: [this.noteObj.id],
      reminder: this.tommorow
    }
    this.noteservice.reminder(req).subscribe((response: any) => {
      console.log("Reminder set Successfully", response);
      this.updatedIconData.emit(response);
    })
  }

  onNextMonday() {
   
   this.nextMonday.setDate(this.today.getDate() + ((7 - this.today.getDay()) % 7 + 1) % 7);
    let req = {
      noteIdList: [this.noteObj.id],
      reminder: this.nextMonday
    }
    this.noteservice.reminder(req).subscribe((response: any) => {
      console.log("Reminder set Successfully", response);
      console.log(this.nextMonday);
      this.updatedIconData.emit(response);
    })
  }
}