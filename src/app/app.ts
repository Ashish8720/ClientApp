import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "../layout/nav/nav";
import { AccountService } from '../services/account-service';
import { Home } from "../features/home/home";

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected accountService  = inject(AccountService)
  // inject the dependency httpclient via inject method
  private http = inject(HttpClient);

  //after intialization
  ngOnInit(): void {
    this.setCurrentuser();
  }

  //setting up the current user for persistant login
  setCurrentuser()
  {
    //check if the user is present in sessiion or not
    const userInfo = localStorage.getItem('user')
    if(!userInfo) return;
    
    //parse the user info from json to object and set the signla in account service current user
    const user = JSON.parse(userInfo)
    this.accountService.CurrentUser.set(user)
  }
  
}
