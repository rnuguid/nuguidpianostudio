import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
	imports:   [ BrowserModule, routing ],
	declarations: [ AppComponent, HomeComponent, HoracioComponent, RosannaComponent, AlumniComponent, EventsComponent, AdmissionComponent, StateSelectComponent, HoracioCalendarComponent, UnderConstructionComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
