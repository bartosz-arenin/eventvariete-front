import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { EventListComponent } from './event-list/event-list.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './home/app-header/app-header.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddEventComponent } from './add-event/add-event.component';
import { DateTableComponent } from './date-table/date-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    HomeComponent,
    AppHeaderComponent,
    NavComponent,
    AddEventComponent,
    DateTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
       BrowserAnimationsModule,
       LayoutModule,
       MatToolbarModule,
       MatButtonModule,
       MatSidenavModule,
       MatIconModule,
       MatListModule,
       MatTableModule,
       MatPaginatorModule,
       MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
