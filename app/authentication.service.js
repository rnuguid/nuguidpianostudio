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
// Angular JS
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
// My globals.
var globals = require('../app/globals');
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        var _this = this;
        this.http = http;
        this.isLoggedIn = false;
        this.loginUrl = globals.WEBPY_HOST_PREFIX + "/login";
        this.logoutUrl = globals.WEBPY_HOST_PREFIX + "/logout";
        this.checkUrl = globals.WEBPY_HOST_PREFIX + "/check";
        this.json_string = "gar";
        console.log('Creating authentication service...');
        this.http.get(this.checkUrl).subscribe(function (x) { _this.isLoggedIn = (x.text() == 'True'); });
    }
    ;
    // This function sends login/pass to server.
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        console.log("I'm trying...");
        var header = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: header });
        this.http.post(this.loginUrl, JSON.stringify({ "username": username, "password": password }) + '\n', options)
            .map(function (res) { return res; })
            .subscribe(function (x) { _this.isLoggedIn = (x.text() == 'True'); });
        return;
    };
    // Interprets server response and sets isAuthenticated
    AuthenticationService.prototype.checkAuth = function () {
        return this.isLoggedIn;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map