"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var alumni_component_1 = require('./alumni.component');
var calendar_component_1 = require('./calendar.component');
var admission_component_1 = require('./admission.component');
var horacio_calendar_component_1 = require('./horacio.calendar.component');
var my_routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'admissions', component: admission_component_1.AdmissionComponent },
    { path: 'about/horacio', component: about_component_1.HoracioComponent },
    { path: 'about/rosanna', component: about_component_1.RosannaComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'alumni', component: alumni_component_1.AlumniComponent },
    { path: 'forStudents/hcalendar', component: horacio_calendar_component_1.HoracioCalendar }
];
exports.routing = router_1.RouterModule.forRoot(my_routes);
//# sourceMappingURL=app.routing.js.map