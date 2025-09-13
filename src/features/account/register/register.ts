import { Component, inject, NgModule, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/user';
import { AccountService } from '../../../services/account-service';


@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
//inject the account service to call the register method
private accountService = inject(AccountService);
//initilaizing the output event 
CancelRegister = output<boolean>();
protected registerCreds = {} as RegisterCreds ;


register(){
  this.accountService.register(this.registerCreds).subscribe({
    next: response =>{
      console.log(response);
    },
    error : err =>{
      console.log(err);
    }
  })
}

cancel(){
  this.CancelRegister.emit(false);
}
}
