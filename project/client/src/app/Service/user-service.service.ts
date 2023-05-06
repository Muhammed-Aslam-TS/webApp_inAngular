import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient,HttpHeaders, } from '@angular/common/http';




const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  allData(allUsers: any) {
    throw new Error('Method not implemented.');
  }

private ApiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    alert(this.ApiUrl)
    return this.http.post<any>(
      `${this.ApiUrl}userSignUp`,
      JSON.stringify(user),
      httpOptions
    );
  }

  DoLogin(user: any): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}userLogin`,
      JSON.stringify(user),
      httpOptions
    )
  }

  editUser(user:any):Observable<any>{
    return this.http.put<any>(
      `${this.ApiUrl}editUser`,
      JSON.stringify(user),
      httpOptions
    )
  }

  fileUpload(image:any):Observable<any>{
    console.log(image,'imagejjjjjjjjjjjjjjjjjjjjjjjjj');
    return this.http.post<any>(
      `${this.ApiUrl}imageUpload`,
      JSON.stringify(image),
      httpOptions
    )

  }


}
