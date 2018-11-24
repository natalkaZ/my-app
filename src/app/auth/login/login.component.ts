import { Component, OnInit }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, 
              public router: Router) {
    this.setMessage();
  }

  setMessage(){
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    localStorage.setItem('loggedIn', 'true');
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/gallery';

        // Redirect the user
        this.router.navigate([redirect]);
      }
  }

  logout(){
    localStorage.removeItem('loggedIn');
    this.setMessage();
  }

  ngOnInit(){
  }
}