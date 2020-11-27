import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
import { LoginComponent } from './login/login.component';

const my_routes: Routes = [
	{path: 'home', component: HomeComponent },
	{path: 'admissions', component: AdmissionComponent },
	{path: 'horacio', component: HoracioComponent },
	{path: 'rosanna', component: RosannaComponent },
	{path: 'events', component: EventsComponent },
	{path: 'horacio-calendar', component: HoracioCalendarComponent },
	{path: 'rosanna-calendar', component: RosannaCalendarComponent },
	{path: 'snow-day-policy', component: SnowDayPolicyComponent },
	{path: 'admin', component: AdminComponent },
	{path: 'test', redirectTo: '/assets/pdf/test.pdf'},
	{path: 'current-students', component: CurrentStudentsComponent },
	{path: 'login', component: LoginComponent },
]

// configures NgModule imports and exports
@NgModule({
	imports: [RouterModule.forRoot(my_routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routing: ModuleWithProviders = RouterModule.forRoot(my_routes);






