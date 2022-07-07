import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor( private router:Router,private dataService:DataService) {}

  ngOnInit(): void {
  }
  onArchive(){
    this.router.navigateByUrl('/home/archive-note')
  }

  onTrash(){
    this.router.navigateByUrl('/home/trash-note')
  }

  notes(){
    this.router.navigateByUrl('/home/notes')
  }
  reminder(){
    this.router.navigateByUrl('/home/reminder')
  }
  searchNote(event:any){
    console.log(event.target.value)
    this.dataService.sendData(event.target.value)
  }
  
}
