import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { PanelComponent } from './panel/panel.component';
import { PanelFormComponent } from './panel-form/panel-form.component';

const routes: Routes = [
  {
    path: 'events:sortBy:orderBy:category',
    component: EventListComponent
  },
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  {
    path: 'home',
    component: EventListComponent
  },
  {
    path: 'panel',
    component: PanelComponent
  },
  {
    path: 'panel/form',
    component: PanelFormComponent
  },
  {
    path: 'panel/form/:id',
    component: PanelFormComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
