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
var file_getter_service_1 = require('./file-getter.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var EventsComponent = (function () {
    function EventsComponent(file_getter) {
        var _this = this;
        this.file_getter = file_getter;
        file_getter.getObservableDat('events.txt').subscribe(function (x) { _this.events_txt = x.text(); });
    }
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            templateUrl: './app/events.component.html'
        }), 
        __metadata('design:paramtypes', [file_getter_service_1.FileGetterService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map