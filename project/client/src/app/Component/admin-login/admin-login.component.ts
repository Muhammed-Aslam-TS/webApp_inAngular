import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/Service/admin-service.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

constructor(private router:Router, private adminServices:AdminServiceService){}

Email = "admin@gmail.com"
Password = "123"

adminObj:any={
  "Email":"admin@gmail.com",
  "Password": "123"
}

adminLogin(){
    this.adminServices.adminLogin(this.adminObj).subscribe(data =>{
     console.log(data,'________ddddddddata vannilla__________________');
      if(data.status){
        console.log(data.status,'uuuuuuuuuuuuuuuuuuuuuuuuuuu');

        localStorage.setItem('AdminEmail',data.admin.Email);
        localStorage.setItem('AdminPassword',data.admin.Password);
        this.router.navigate(['dashBoard'])
      }
    })
  }
}
