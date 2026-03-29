import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../../services/account-service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // intitilize the user service to fetch the user details
   const accountService = inject(AccountService)

   const user = accountService.CurrentUser();

   if(user){
    req = req.clone({
      setHeaders : {
        Authorization: `Bearer ${user.token} ` 
      }
    })
   }
  return next(req);
};
