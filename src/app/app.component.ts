import { Component,OnInit } from '@angular/core'
import { AuthService } from './auth/auth.service'
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: string;

  constructor (public authService: AuthService, 
               public loginComponent: LoginComponent){
                 this.setMessage();
               }


  setMessage(){
    return this.loginComponent.setMessage();
  }

  login(){
    this.message = this.loginComponent.message;
    return this.loginComponent.login();
  }

  logout(){
    return this.loginComponent.logout();
  }

  ngOnInit(){    
      console.log("This loggedInStatus: " + this.authService.loggedInStatus);
  }
}

