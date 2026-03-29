import { HttpClient} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Member, Photo } from '../types/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl + 'Member');
  }

  //fetch the individual member by ID
  getMember(id:string){
    return this.http.get<Member>(this.baseUrl + 'Member/' + id)
  }

  //fetch the member photos by id
  getMemberPhotos(id:string){
    return this.http.get<Photo[]>(this.baseUrl + 'Member/' + id + '/photos')
  }
  
}
