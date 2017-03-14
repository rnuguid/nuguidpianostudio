import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule, HTTP_PROVIDERS, JsonpModule } from '@angular/http';
import { routing } from './app.routing';

import { AuthenticationService } from './authentication.service';
import { FileGetterService } from './file-getter.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HoracioComponent } from './horacio.component';
import { RosannaComponent } from './rosanna.component';
import { AlumniComponent } from './alumni.component';
import { EventsComponent } from './events.component';
import { AdmissionComponent } from './admission.component';
import { StateSelectComponent } from './state-select.component';
import { HoracioCalendarComponent } from './horacio-calendar.component';
import { UnderConstructionComponent } from './under-construction.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { EditorComponent } from './editor.component';

@NgModule({
	imports:   [ BrowserModule, routing, HttpModule, FormsModule, JsonpModule ],
	declarations: [ AppComponent, HomeComponent, HoracioComponent, RosannaComponent, AlumniComponent, EventsComponent, AdmissionComponent, StateSelectComponent, HoracioCalendarComponent, UnderConstructionComponent, AdminComponent, LoginComponent, EditorComponent ],
	bootstrap:    [ AppComponent ],
	providers:  [ AuthenticationService, HTTP_PROVIDERS, FileGetterService ]
})
export class AppModule { }
