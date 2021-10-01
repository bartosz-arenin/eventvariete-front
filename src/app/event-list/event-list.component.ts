import { Component, OnInit } from '@angular/core';
import { Event } from "../shared/models/event.model";
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events?:[Event]

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    this.eventService.getAll().subscribe((events:[Event]) => {
      this.events = events;
    });
  
  
  }
}
