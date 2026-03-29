import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { MemberService } from '../../services/member-service';
import { EMPTY } from 'rxjs';
import { Member } from '../../types/member';

//resolver function is used to get the data before the route got initialized
export const memberResolver: ResolveFn<Member> = (route, state) => {
  
  //initiliazed the member service to access the get member function
   const memberService = inject(MemberService);
   // initilaize the router to access the navigateby url property
   const router = inject(Router)
   //fetch the id from route params
   const memberid = route.paramMap.get('id');
    

   //if id is not present , redirect to /not-found page
   if(!memberid){
     router.navigateByUrl('/not-found')
     return EMPTY;
   }

   //if got then return the member resolver
  return memberService.getMember(memberid);
};
