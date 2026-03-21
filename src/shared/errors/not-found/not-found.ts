import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  //Add the location service to get the object location
  private location = inject(Location);

  //redirect the user back to its location which is before not found page
  goBack(){
    this.location.back();
  }
}
