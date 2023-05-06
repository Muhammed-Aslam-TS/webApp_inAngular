import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private ApiUrl = 'http://localhost:3000/';


  constructor(private http: HttpClient) { }


  uploadFile(file: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.ApiUrl}imageUpload`,(file),
      httpOptions
    )
  }
}