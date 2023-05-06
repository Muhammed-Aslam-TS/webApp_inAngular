import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnAuthguardService {

  constructor(private auth:AuthServiceService,private router:Router) { }

  canActivate(): boolean {
    if (!this.auth.IsUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['home'])
    return false;
  }

}
