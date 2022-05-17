import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  constructor( private router:Router) {}

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
  // refresh(){
  //   window.location.reload()
  // }
}
