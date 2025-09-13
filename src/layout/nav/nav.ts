import { Component, inject, NgModule, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AccountService } from '../../services/account-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
protected accountService = inject(AccountService)
protected creds : any = {}


//login method
login(){
   this.accountService.login(this.creds).subscribe({
    next : result => {
      console.log(result)
      this.creds = {}
    },
    error: error => alert(error.message)
   })
}
logout(){
   this.accountService.logout();
}
}

