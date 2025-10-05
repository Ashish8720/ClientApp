import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../account-service';
import { ToastService } from '../toast-service';

export const authGuard: CanActivateFn = () => {

  //injecting the accountservice and toast services
  const accounService = inject(AccountService);
  const toast = inject(ToastService);

  //return true if there is a current user active
  if(accounService.CurrentUser()) return true;
  else{
    toast.error("your are not authorised. please log in");
    return false;
  }
};
