import { Injectable } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAthGuardService {

  constructor(private auth:AuthServiceService,private router:Router) { }

  canActivate():boolean{
    if (this.auth.IsAdminLoggedIn()) {
      return true
    }
    this.router.navigate(['adminLogin']);
    return false;
  }
}
