import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HoracioComponent } from './horacio/horacio.component';
import { RosannaComponent } from './rosanna/rosanna.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AdmissionComponent } from './admission/admission.component';
import { HoracioCalendarComponent } from './horacio-calendar/horacio-calendar.component';
import { RosannaCalendarComponent } from './rosanna-calendar/rosanna-calendar.component';
import { SnowDayPolicyComponent } from './snow-day-policy/snow-day-policy.component';
import { AdminComponent } from './admin/admin.component';
import { CurrentStudentsComponent } from './current-students/current-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HoracioComponent,
    RosannaComponent,
    HomeComponent,
    EventsComponent,
    AdmissionComponent,
    HoracioCalendarComponent,
    RosannaCalendarComponent,
    SnowDayPolicyComponent,
    AdminComponent,
    CurrentStudentsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
