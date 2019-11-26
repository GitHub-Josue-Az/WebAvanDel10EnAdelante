import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular16';
  constructor(private authService: AuthService, private router: Router) {
    //Middleware
    router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
            let currentUrl = event.url;
            let token = localStorage.getItem('auth_token');
            console.log("token: "+token);
            let securls = ['/product','/profile'];
            for(let i=0;i<securls.length;i++){
              if(securls[i]==currentUrl && token==null){
                this.router.navigate(['/']);
              }
            }
        }
    });
  }
  public get logIn():boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
  logout() {
    this.authService.logout();
  }
}
