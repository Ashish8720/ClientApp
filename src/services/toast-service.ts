// this service class is used for displaying the toast to user for indication the action happened like register , login or logout

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
constructor(){
  this.createToastContainer();
}

//create a toast conatiner , check if it is already present or not
private createToastContainer(){
  if(!document.getElementById('toast-container')){
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast toast-bottom toast-end'
    document.body.appendChild(container)
  }
}

private createToastElement(message : string , alertClass : string , duration = 5000){
   
  // check the toast contianer , if found create toast element otherwise return null
  const toastContainer = document.getElementById('toast-container');
  if(!toastContainer) return;
 
  //create a toaster element 
   const toast  = document.createElement('div');
   toast.classList.add('alert' , alertClass , 'shadow-lg');
   toast.innerHTML = `
   <span>${message}</span>
   <button class="ml-4 btn btn-sm btn-ghost">x</button>
   `

   // add the button functionality to clsoe the toast
   toast.querySelector('button')?.addEventListener('click' , () =>{
    toastContainer.removeChild(toast)
  });

  toastContainer.append(toast);

  // configure the toast duration

  setTimeout(() => {
    if(toastContainer.contains(toast)){
      toastContainer.removeChild(toast);
    }
  } , duration);
   
}

  success(message: string , duration? : number){
    this.createToastElement(message , 'alert-success' , duration)
  };

  warning(message: string , duration? : number){
    this.createToastElement(message , 'alert-warning' , duration)
  };

  error(message: string , duration? : number){
    this.createToastElement(message , 'alert-error' , duration)
  };
}
