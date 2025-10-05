import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { MemberList } from '../features/members/member-list/member-list';
import { MemberDetailedList } from '../features/members/member-detailed-list/member-detailed-list';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuard } from '../services/guards/auth-guard';

export const routes: Routes = [
    {path : '' , component : Home},
    {
        path: '',
        runGuardsAndResolvers:'always',
        canActivate : [authGuard],
        children : [
            {path : 'members' , component : MemberList },
            {path : 'members/:id' , component : MemberDetailedList},
            {path : 'lists' , component : Lists},
            {path : 'messages' , component : Messages}
        ]
    },
    
    {path : '**' , component:Home}
];
