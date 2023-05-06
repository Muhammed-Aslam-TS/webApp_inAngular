import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  constructor(private router:Router){}
  logOut(){
    localStorage.setItem('AdminEmail','');
    localStorage.setItem('AdminPassword','');
    this.router.navigate(['adminLogin'])
  }

}
