import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
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
import { StateSelectComponent } from './state-select/state-select.component';
import { InputMaskAngularModule } from 'input-mask-angular';
import { EventComponent } from './event/event.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';

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
    CurrentStudentsComponent,
    StateSelectComponent,
    EventComponent,
    CalendarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputMaskAngularModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
