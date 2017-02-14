import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { HoracioComponent } from './horacio.component';
import { RosannaComponent } from './rosanna.component';
import { AlumniComponent } from './alumni.component';
import { EventsComponent } from './events.component';
import { AdmissionComponent } from './admission.component';
import { StateSelectComponent } from './state-select.component';
import { HoracioCalendarComponent } from './horacio-calendar.component';
import { UnderConstructionComponent } from './under-construction.component';
import { TestPhpComponent } from './test-php.component';

import { HttpModule } from '@angular/http';

@NgModule({
	imports:   [ BrowserModule, routing, HttpModule ],
	declarations: [ AppComponent, HomeComponent, HoracioComponent, RosannaComponent, AlumniComponent, EventsComponent, AdmissionComponent, StateSelectComponent, HoracioCalendarComponent, UnderConstructionComponent, TestPhpComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
