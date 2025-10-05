import { Component, inject, NgModule, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AccountService } from '../../services/account-service';
import { Observable } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../services/toast-service';


@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
protected accountService = inject(AccountService);
private router = inject(Router);
private  toaster = inject(ToastService);
protected creds : any = {}


//login method
login(){
   this.accountService.login(this.creds).subscribe({
    next : result => {
      //once login , redirecting user to memeber page
      this.router.navigateByUrl('/members');

      this.creds = {}
    },
    error: error => {
       console.log(error);
       this.toaster.error("unknown error");
    }
   })
}
logout(){
   this.accountService.logout();
   // once logout , redirect to home page
   this.router.navigateByUrl('/')
}
}

