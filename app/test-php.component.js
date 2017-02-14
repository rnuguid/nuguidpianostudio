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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var globals = require('../app/globals');
var http_1 = require('@angular/http');
var TestPhpComponent = (function () {
    function TestPhpComponent(http) {
        this.http = http;
    }
    TestPhpComponent.prototype.ngOnInit = function () {
        this.say_hi();
    };
    TestPhpComponent.prototype.say_hi = function () {
        var _this = this;
        this.ugh = "At least I will be executed...";
        //let my_string = "WTF!"
        var a_string = this.http.get(globals.PHP_HOST_PREFIX + "z.php").map(this.getVal);
        a_string.subscribe(function (a) { return _this.my_string = a; });
    };
    TestPhpComponent.prototype.catchError = function (r) {
    };
    TestPhpComponent.prototype.getVal = function (r) {
        var hi = r.text();
        return hi;
    };
    TestPhpComponent = __decorate([
        core_1.Component({
            selector: 'test-php',
            templateUrl: 'app/test-php.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TestPhpComponent);
    return TestPhpComponent;
}());
exports.TestPhpComponent = TestPhpComponent;
;
//# sourceMappingURL=test-php.component.js.map