import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../types/user';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  CurrentUser  = signal<User | null>(null);
 
  private BaseUrl  = environment.apiUrl

   // register user and set is to current user for automatically logged in
  register(creds:RegisterCreds){
    return this.http.post<User>(this.BaseUrl + "Account/register" , creds).pipe(
      tap(user => {
        if(user) {
          this.setCurrentUser(user);
        }
      })
    )
  }
   login(creds:LoginCreds){
    return this.http.post<User>(this.BaseUrl + "Account/login" , creds).pipe(
      tap(user => {
        if(user){
         this.setCurrentUser(user);
        }
      })
    )
   }
   
   logout(){
      sessionStorage.removeItem("user")
      this.CurrentUser.set(null)
   }

   //helper method to create a session with user data from api and pass it to signal 
  setCurrentUser(user :User){
    sessionStorage.setItem("user" , JSON.stringify(user))
    this.CurrentUser.set(user)
  }

}
