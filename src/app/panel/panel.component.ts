import { Component, OnInit } from '@angular/core';
import { Event } from "../shared/models/event.model";
import { EventService } from '../event.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  events?:[Event]

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe((events:[Event]) => {
      this.events = events;
    });
  }

  deleteEvent(id: any){
    this.eventService.delete(id).subscribe(() =>
      this.ngOnInit());  
  }
  
  editEvent(id: any){
    this.router.navigate(['/panel/form/'+ id])
  }

  panelForm(){
    this.router.navigate(['/panel/form'])
  }

  deleteSelected(){}
}