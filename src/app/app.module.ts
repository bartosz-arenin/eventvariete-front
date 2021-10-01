import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PanelComponent } from './panel/panel.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './panel/events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HomeComponent,
    AppHeaderComponent,
    AppFooterComponent,
    PanelComponent,
    ContactComponent,
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
