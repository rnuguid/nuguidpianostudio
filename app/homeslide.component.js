"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HomeSlideComponent = (function () {
    function HomeSlideComponent() {
    }
    HomeSlideComponent = __decorate([
        core_1.Component({
            selector: 'homeslide',
            template: "\n      <div class=\"bio\">\n      <h1> Studio Calendar </h1>\n<iframe src=\"https://calendar.google.com/calendar/embed?src=nsqfrhotgvb2hfkvgksbo1jh80%40group.calendar.google.com&ctz=America/Los_Angeles\" style=\"border: 0\" width=\"800\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n\t  </div>\n\t  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeSlideComponent);
    return HomeSlideComponent;
}());
exports.HomeSlideComponent = HomeSlideComponent;
//# sourceMappingURL=homeslide.component.js.map