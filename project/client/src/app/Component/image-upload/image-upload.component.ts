import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/Service/file-upload.service'

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  // images:any;

   userId = localStorage.getItem('Id') 

constructor(private fileUploadService:FileUploadService,private http:HttpClient){}

ngOnInit(){}

OnFileSelect(event: any) {
  const file = event.target.files[0];

  const formdata = new FormData();
  formdata.append('file', file);

  this.http.post('http://localhost:3000/imageUpload', formdata).subscribe(
    (d) => {
      console.log(d);
    },
    (error) => {
      console.error(error);
    }
  );
}



}










