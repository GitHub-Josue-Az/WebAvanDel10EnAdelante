import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  listar(){
  	let token = localStorage.getItem('auth_token');
    var headers_object = new HttpHeaders().set("Authorization", token);
    const httpOptions = {
      headers : headers_object
    };
    this.http.get(this.uri+'/listar',httpOptions).subscribe((result:any)=>{
      console.log(result);
    });
  }

}
