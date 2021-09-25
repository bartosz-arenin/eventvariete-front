import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'eventlist',
    component: EventListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

  // },
  // {
  //   path: '',
  //   redi
  // },
  // {
  //   path: '**',
  //   component: HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
