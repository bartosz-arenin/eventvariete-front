import { Component, OnInit } from '@angular/core';
import { Event } from "../shared/models/event.model";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events?:[Event]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<[Event]>("https://eventvariete.herokuapp.com/").subscribe(response => {this.events = response});
  }
}
