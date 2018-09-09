"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var horacio_component_1 = require('./horacio.component');
var rosanna_component_1 = require('./rosanna.component');
var events_component_1 = require('./events.component');
var admission_component_1 = require('./admission.component');
var horacio_calendar_component_1 = require('./horacio-calendar.component');
var rosanna_calendar_component_1 = require('./rosanna-calendar.component');
var under_construction_component_1 = require('./under-construction.component');
var snow_day_policy_component_1 = require('./snow-day-policy.component');
var admin_component_1 = require('./admin.component');
var my_routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'admissions', component: admission_component_1.AdmissionComponent },
    { path: 'horacio', component: horacio_component_1.HoracioComponent },
    { path: 'rosanna', component: rosanna_component_1.RosannaComponent },
    { path: 'events', component: events_component_1.EventsComponent },
    { path: 'horacio-calendar', component: horacio_calendar_component_1.HoracioCalendarComponent },
    { path: 'rosanna-calendar', component: rosanna_calendar_component_1.RosannaCalendarComponent },
    //	{path: 'under-construction', component: UnderConstructionComponent },
    { path: 'under-construction', component: under_construction_component_1.UnderConstructionComponent },
    { path: 'snow-day-policy', component: snow_day_policy_component_1.SnowDayPolicyComponent },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'test', redirectTo: '/assets/pdf/test.pdf' }
];
exports.routing = router_1.RouterModule.forRoot(my_routes);
//# sourceMappingURL=app.routing.js.map