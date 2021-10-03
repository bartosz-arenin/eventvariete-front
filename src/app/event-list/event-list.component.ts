import { Component, OnInit } from '@angular/core';
import { Event } from "../shared/models/event.model";
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events?:[Event]
  value: any
  category: any

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      
      this.category = params['category'];
      console.log(this.category);

      this.eventService.getAllSpecified('','',this.category).subscribe((events:[Event]) => {
        this.events = events;
      });
    });

    this.eventService.getAll().subscribe((events:[Event]) => {
      this.events = events;
    });
  }

  change(){

    let sortCriteria = this.value.split("_");
    this.eventService.getAllSpecified(sortCriteria[0], sortCriteria[1], this.category).subscribe((events:[Event]) => {
      this.events = events;
    });
  }
}
