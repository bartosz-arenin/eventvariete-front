import { Component, OnInit } from '@angular/core';
import { Event } from "../shared/models/event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  events?:[Event]
  id: number = 2;
  
  constructor(private eventService: EventService) { 
  }

  ngOnInit(): void {

    this.eventService.getById(this.id).subscribe((events:[Event]) => {
      this.events = events;
    });
  }
}