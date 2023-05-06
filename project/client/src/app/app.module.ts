import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { DashBoardComponent } from './Component/dash-board/dash-board.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { MyAccountComponent } from './Component/my-account/my-account.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AllUserComponent } from './Component/all-user/all-user.component';
import { ImageUploadComponent } from './Component/image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MyAccountComponent,
    NavBarComponent,
    UserFormComponent,
    AdminLoginComponent,
    AllUserComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
