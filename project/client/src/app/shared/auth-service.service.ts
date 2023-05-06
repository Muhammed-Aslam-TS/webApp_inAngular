import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
  IsUserLoggedIn() {
    return !!localStorage.getItem('userToken');
  }

  IsAdminLoggedIn() {
    return  !!localStorage.getItem('AdminEmail')
  }




}
