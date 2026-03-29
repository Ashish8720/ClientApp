import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Member } from '../../../types/member';
import { AgePipe } from '../../../shared/pipe/age-pipe';

@Component({
  selector: 'app-member-detailed-list',
  imports: [RouterLink , RouterLinkActive, RouterOutlet , AgePipe],
  templateUrl: './member-detailed-list.html',
  styleUrl: './member-detailed-list.css'
})
export class MemberDetailedList implements OnInit {
    
    //provide the current route information
    private route = inject(ActivatedRoute);

    //provide the current route events
    private router = inject(Router);
 
    //create a member variable of observable type to store the member value
    protected member = signal<Member|  undefined>(undefined);

    //store title calue for dynamic changes , default value is profile
    protected title = signal<String | undefined>('Profile');

    ngOnInit(): void {
      this.route.data.subscribe({
        next : data => this.member?.set(data['member'])
      })
      // storing the current title value after page loads
      this.title.set(this.route.firstChild?.snapshot?.title);

      //dynmaically change the title value after navigation instance is completed under router events
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe({
        next : () => {
          this.title.set(this.route.firstChild?.snapshot?.title)
        }
      })
    }

}
