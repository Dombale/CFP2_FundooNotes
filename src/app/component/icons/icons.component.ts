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
  constructor(private noteservice: NoteService) { }

  ngOnInit(): void {
  }

  onDelete() {
    let req={
      noteIdList:[this.noteObj.id],
      isDeleted:true
    }
    this.noteservice.deleteNote(req).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
  onArchive(){
    let req={
      noteIdList:[this.noteObj.id],
      isArchived:true
    }
    this.noteservice.archivedNote(req).subscribe((response: any) => {
      console.log("Note Archived Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
  changeColor(color:any){
    console.log('color',color);
    this.noteObj.color=color;
    let req={
      noteIdList:[this.noteObj.id],
      color:color
    }
    this.noteservice.changeColors(req).subscribe((response: any) => {
      console.log("Color has changed Successfully", response);
      this.updatedIconData.emit(response);
    })
  }
}