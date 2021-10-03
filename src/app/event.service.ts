import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './shared/models/event.model';
import { environment } from '../environments/environment';
import { contentHeaders } from "./http-config"

@Injectable({providedIn: 'root'})
export class EventService {

    sortBy: any
    orderBy: any
    category: any

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<[Event]> {
      let params = HttpClient
      return this.httpClient.get<[Event]>(environment.backendUrl + '/events', {headers:  contentHeaders})
    }

    // getAllFiltered(category: any): Observable<[Event]> {
    //   let params = HttpClient
    //   return this.httpClient.get<[Event]>(environment.backendUrl + '/events?category=' + category, {headers:  contentHeaders})
    // }
    getAllSpecified(sortBy:any, orderBy:any, category:any): Observable<[Event]> {
      let params = HttpClient
      return this.httpClient.get<[Event]>(environment.backendUrl + '/events?sortBy=' + sortBy + '&orderBy=' + orderBy + '&category=' + category, {headers:  contentHeaders})
    }

    getById(id: number): Observable<Event> {
      return this.httpClient.get<Event>(environment.backendUrl + '/events/'+id, {headers:  contentHeaders})
    }

    delete(id: number): Observable<[Event]> {
      return this.httpClient.delete<[Event]>(environment.backendUrl + '/events/'+id, {headers:  contentHeaders})
    }

    create(event: Event): Observable<Event> {
      return this.httpClient.post<Event>(environment.backendUrl + '/events', event, {headers:  contentHeaders})
    }
}