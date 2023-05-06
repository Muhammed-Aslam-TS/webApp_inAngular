import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {
  firstName: any;
  lastName: any;
  userEmail: any;
  Phone: any;
  Password: any;

  constructor(private router: Router,private http:HttpClient) { }

  Fname = localStorage.getItem('firstName')
  Lname = localStorage.getItem('lastName')
  email = localStorage.getItem('userEmail')
  userId = localStorage.getItem('Id')
  userImage = localStorage.getItem('userImage')



  // onclick() {
 
  //   this.http.post('http://localhost:3000/imageUpload', this.userId).subscribe(
  //     (d) => {
  //       console.log(d);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }



  editUser(){

    // let bodyData={
    //   "firstName": this.firstName,
    //   "lastName" :this.lastName,
    //   "Email" : this.userEmail,
    // }

      // localStorage.setItem('userToken','');
      localStorage.setItem('firstName','');
      localStorage.setItem('lastName','');
      localStorage.setItem('userEmail','');
      // localStorage.setItem('Id','');
      // this.router.navigate([''])
}

  //   this.http.patch("http://localhost:3000/user/update"+ "/"+ this.userId,bodyData).subscribe((result)=>{
  //     console.log(result,'---------------iuyiu');
  //     alert('your data has been updated')

  //  })






}
