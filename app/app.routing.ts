import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home.component';
import { HoracioComponent } from './horacio.component';
import { RosannaComponent } from './rosanna.component';
import { EventsComponent } from './events.component';
import { AdmissionComponent } from './admission.component';
import { HoracioCalendarComponent } from './horacio-calendar.component';
import { RosannaCalendarComponent } from './rosanna-calendar.component';
import { UnderConstructionComponent } from './under-construction.component';
import { SnowDayPolicyComponent } from './snow-day-policy.component';
import { AdminComponent } from './admin.component';

const my_routes: Routes = [
	{path: 'home', component: HomeComponent },
    {path: 'admissions', component: AdmissionComponent },
    {path: 'horacio', component: HoracioComponent },
    {path: 'rosanna', component: RosannaComponent },
	{path: 'events', component: EventsComponent },
	{path: 'horacio-calendar', component: HoracioCalendarComponent },
	{path: 'rosanna-calendar', component: RosannaCalendarComponent },
//	{path: 'under-construction', component: UnderConstructionComponent },
	{path: 'under-construction', component: UnderConstructionComponent },
	{path: 'snow-day-policy', component: SnowDayPolicyComponent },
	{path: 'admin', component: AdminComponent },
    {path: 'test', redirectTo: '/assets/pdf/test.pdf'}
//	{path: 'current-students', component: CurrentStudentsComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(my_routes);