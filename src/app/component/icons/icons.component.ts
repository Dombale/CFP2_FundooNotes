import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObj: any;
  @Output() updatedIconData = new EventEmitter<any>();
  datePicker: any;
  today = new Date();
  tommorow = new Date(this.today);


  constructor(private noteservice: NoteService) { }
  colors = [{ name: 'white', Colorcode: '#d78cb9' }, { name: 'peach', Colorcode: '#f28b82' }, { name: 'pink', Colorcode: '#FFFEA9' }, { name: 'lemon', Colorcode: '#d7aefb' }, { name: 'brown', Colorcode: '#b5e39c' }, { name: 'green', Colorcode: '#e6ba81' }, { name: 'blue', Colorcode: '#cbf0f8' }]

  isDeleted: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;

  ngOnInit(): void {

  }

  onDelete() {
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
      // this.updatedIconData.emit(response);
    })
  }

  onToday() {
    let req = {
      noteIdList: [this.noteObj.id],
      reminder: this.today
    }
    this.noteservice.reminder(req).subscribe((response: any) => {
      console.log("Reminder set Successfully", response);
      // this.updatedIconData.emit(response);
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
      // this.updatedIconData.emit(response);
    })
  }
}