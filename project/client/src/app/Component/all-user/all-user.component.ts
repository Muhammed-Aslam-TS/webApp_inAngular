import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { AdminServiceService } from 'src/app/Service/admin-service.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent {
  usersArray :any[] = []

  constructor(private router:Router,private adminServices:AdminServiceService){
    this.getAllUsers()
  }
  getAllUsers() {
  this.adminServices.AllUsers().subscribe(data =>{
    this.usersArray = data.Alluser
  })
}

DeleteUser(data:any){
  this.adminServices.DeleteUser(data).subscribe(result => {
    if (result) {
      this.router.navigate(['adminLogin'])
    }
      });
}


}
