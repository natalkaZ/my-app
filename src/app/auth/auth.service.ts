import { Injectable, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit{
  public loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor( httpClient:HttpClient){}

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  ngOnInit(){

  }
}