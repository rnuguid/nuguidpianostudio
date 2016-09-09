import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { HomeSlideComponent } from './homeslide.component';
import { RosannaComponent, HoracioComponent } from './about.component';
import { AlumniComponent } from './alumni.component';
import { CalendarComponent } from './calendar.component';
import { AdmissionComponent } from './admission.component';
import { HoracioCalendar } from './horacio.calendar.component';


const my_routes: Routes = [
	{path: 'home', component: HomeComponent },
    {path: 'admissions', component: AdmissionComponent },
    {path: 'about/horacio', component: HoracioComponent },
    {path: 'about/rosanna', component: RosannaComponent },
	{path: 'calendar', component: CalendarComponent },
	{path: 'alumni', component: AlumniComponent },
	{path: 'forStudents/hcalendar', component: HoracioCalendar }
//	{path: 'current-students', component: CurrentStudentsComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(my_routes);