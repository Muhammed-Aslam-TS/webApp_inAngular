import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { UnAuthguardService } from './shared/auth/user/un-authguard.service';
import { AuthguardService } from './shared/auth/user/authguard.service';
import { AdminAthGuardService } from "./shared/auth/admin/admin-ath-guard.service";
import { AdminUnAthGuardService } from "./shared/auth/admin/admin-un-ath-guard.service";
import { HomeComponent } from './Component/home/home.component';
import { MyAccountComponent } from './Component/my-account/my-account.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { AllUserComponent } from './Component/all-user/all-user.component';
import { ImageUploadComponent } from './Component/image-upload/image-upload.component';

const routes: Routes = [

  {path:'', component:LoginComponent,canActivate:[UnAuthguardService] },
  {path:'home', component:HomeComponent,canActivate:[AuthguardService] },
  {path:'MyAccount', component:MyAccountComponent,canActivate:[AuthguardService] },
  {path:'about', component:AboutComponent,canActivate:[AuthguardService] },
  {path:'contact', component:ContactComponent,canActivate:[AuthguardService] },
  {path:'editDetails', component:UserFormComponent,canActivate:[AuthguardService] },
  {path:'imageUpload', component:ImageUploadComponent,canActivate:[AuthguardService] },

  {path:'adminLoginn', component:AdminLoginComponent,canActivate:[AdminUnAthGuardService]},
  {path:'dashBoard', component:DashBoardComponent,canActivate:[AdminAthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
