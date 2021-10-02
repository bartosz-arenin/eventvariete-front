import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from "../shared/models/event.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-panel-form',
  templateUrl: './panel-form.component.html',
  styleUrls: ['./panel-form.component.css']
})
export class PanelFormComponent implements OnInit {

  event = new Event(0, "", "", "", "", "", 0, "")

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      
      let id = +params['id']; // (+) converts string 'id' to a number
      this.eventService.getById(id).subscribe((event:Event) => {
        this.event = event})
    }
    )}
  
  submit(){
    this.eventService.create(this.event).subscribe(()=> {
      this.router.navigate(['/panel'])})
  }
}