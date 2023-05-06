import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
localStorage: any;
  constructor(private router:Router){}
  logOut(){
        localStorage.setItem('userToken','');
        localStorage.setItem('firstName','');
        localStorage.setItem('lastName','');
        localStorage.setItem('userEmail','');
        localStorage.setItem('Id','');
        this.router.navigate([''])
  }

  fname = localStorage.getItem('firstName')
  lname = localStorage.getItem('lastName')


}


