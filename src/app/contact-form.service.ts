import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private contactFormService:ContactFormService,httpClient:HttpClient) {
 
   }


  someMethod(firstName:string, lastName:string){
console.log(firstName)
console.log(lastName)
  }
}
