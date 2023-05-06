import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';





const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private ApiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  adminLogin(admin:any){
    return this.http.post<any>(
      `${this.ApiUrl}admin/adminLogin`,
      JSON.stringify(admin),
      httpOptions
    )
  }

  AllUsers() {
    return this.http.get<any>(`${this.ApiUrl}admin/allUsers`, httpOptions);
  }
  
  DeleteUser(data:any){
    return this.http.post<any>(
      `${this.ApiUrl}admin/deleteUser`,
      JSON.stringify(data),
      httpOptions
    )
  }
}
