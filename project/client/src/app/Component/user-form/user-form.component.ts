import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {



  Fname = localStorage.getItem('firstName')
  Lname = localStorage.getItem('lastName')
  email = localStorage.getItem('userEmail')
  userId = localStorage.getItem('Id')



  constructor(private userServices:UserServiceService){}


  editObj:any = {
    firstName:"",
    lastName:"",
    Email:"",
    userId:this.userId,
  };
  
// nname = this.editObj.firstName = localStorage.getItem('firstName')


  saveUser(){
    // console.log(this.Fname,'hhhhhhhhhhhhhhhhhhhhhhh');
    const user = this.editObj
    this.userServices.editUser(user).subscribe(data=>{
      console.log(data,'data________________________newwwwwwwwwwwwwwww');

      if(data.status){
        console.log(data.status,'......................fsdtrdfgd');

        localStorage.setItem('firstName',data.updateUser.firstName);
        localStorage.setItem('lastName',data.updateUser.lastName);
        localStorage.setItem('userEmail',data.updateUser.Email);
        alert('data')
      }else{
        window.alert("updating error")
      }
      console.log(data,'------------------------')
    })
  }


}

