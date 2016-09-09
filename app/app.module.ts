import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeSlideComponent } from './homeslide.component'
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { HoracioComponent, RosannaComponent} from './about.component';
import { AlumniComponent } from './alumni.component';
import { CalendarComponent } from './calendar.component';
import { AdmissionComponent } from './admission.component';
import { StateSelect } from './stateselect.component';
import { HoracioCalendar } from './horacio.calendar.component'

@NgModule({
	imports:   [ BrowserModule, routing ],
	declarations: [ AppComponent, HomeComponent, HomeSlideComponent, HoracioComponent, RosannaComponent, AlumniComponent, CalendarComponent, AdmissionComponent, StateSelect, HoracioCalendar ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
