import { Component, OnInit } from '@angular/core';
import { ContactFormService} from "../contact-form.service";
import {ContactFormInput} from "../contact-form-input";




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
input:ContactFormInput= new ContactFormInput("", "","");


  constructor(private contactFormService:ContactFormService,) {


 }

  ngOnInit(): void {
  }

submit(){
this.contactFormService.someMethod(this.input.firstName,this.input.lastName)

}
}
