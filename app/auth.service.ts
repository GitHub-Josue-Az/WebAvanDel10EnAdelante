import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri+'/authenticate',{email: email,password: password})
    .subscribe((result:any)=>{
      this.router.navigate(['profile']);
      localStorage.setItem('auth_token', result.token);
    });
  }

  logout(){
    this.http.get(this.uri+'/logout').subscribe((result:any)=>{
      console.log(result);
      localStorage.removeItem('auth_token');
    });
  }

}