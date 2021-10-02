import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Event } from "../shared/models/event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event?:Event
  sub: any
  
  constructor(private eventService: EventService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      
      let id = +params['id']; // (+) converts string 'id' to a number

      this.eventService.getById(id).subscribe((event:Event) => {
        this.event = event;
      });


    });
  }
}