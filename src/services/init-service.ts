import { inject, Injectable } from '@angular/core';
import { AccountService } from './account-service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// this service is used to intialize Application to fetch the current user if any before angular route intilization .
export class InitService {
  private accountService = inject(AccountService);

  //fetch the user form session if any . 
  appInit(){
    const userInfo = localStorage.getItem('user');
    if(!userInfo) return of(null);
    const user = JSON.parse(userInfo);
    this.accountService.CurrentUser.set(user);

    //return the observable of null
    return of(null)
  }
}
