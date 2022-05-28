import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  reminderList:any;
  constructor(private notesService: NoteService) { }

  ngOnInit(): void {
    this.reminderNotes()

  }
  reminderNotes() {
    this.notesService.reminderNoteList().subscribe((response: any) => {
      console.log("GetAll reminder Notes successfully", response.data);
      this.reminderList = response.data.data;
      this.reminderList.reverse();
    })
  }
  displayMessage(event:any){
    this.reminderNotes();
  }
}
