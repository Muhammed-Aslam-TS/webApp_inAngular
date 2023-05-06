import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupObj:any = {
    firstName:"",
    lastName:"",
    Email:"",
    Phone:"",
    Password:"",
    img: ""
  };
  loginObj:any = {
    Email:"",
    Password:""
  }
  auth: any;

  constructor(private router:Router,private userServices:UserServiceService){}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit():void{
  }
  doSignUp(){
    console.log(this.signupObj)
    this.userServices.addUser(this.signupObj).subscribe(data=>{
      if(data.status){
        window.alert("user created")
      }else{
        window.alert("creation error")
      }
      console.log(data,'------------------------')
    })
  }


  doLogin(){
    console.log('hhhhhhh111111111111111111');

    this.userServices.DoLogin(this.loginObj).subscribe(data =>{
     console.log(data.status,'__________________________');
      if(data.status){
        localStorage.setItem('userToken',data.token);
        localStorage.setItem('firstName',data.user.firstName);
        localStorage.setItem('lastName',data.user.lastName);
        localStorage.setItem('userEmail',data.user.Email);
        localStorage.setItem('Id',data.user.Id);
        this.router.navigate(['home'])
      }
    })
  }
}
