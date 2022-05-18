import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  trashList: any;
  constructor(private notesService: NoteService) { }

  ngOnInit(): void {
    this.getTrashNotes()
  }
  getTrashNotes() {
    this.notesService.getTrashNoteList().subscribe((response: any) => {
      console.log("GetAll Trash Notes successfully", response.data);
      this.trashList = response.data.data;
      this.trashList.reverse();
      this.trashList = this.trashList.filter((data: any) => {
        return data.trashList.isTrash === true
      })

    })
  }

}
