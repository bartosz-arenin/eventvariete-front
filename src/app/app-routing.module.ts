import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
 {
    path: 'addEvent',
    component: AddEventComponent
  },
  {
    path: 'eventlist',
    component: EventListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
