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
var http_1 = require('@angular/http');
// RxJS library
var globals = require('./globals');
var FileGetterService = (function () {
    function FileGetterService(http) {
        this.http = http;
        this.serverUrl = globals.WEBPY_HOST_PREFIX + "/file-getter";
        this.serverUrlWrite = globals.WEBPY_HOST_PREFIX + "/file-writer";
    }
    FileGetterService.prototype.getObservableDat = function (dat_name) {
        return this.http.post(this.serverUrl, dat_name);
    };
    FileGetterService.prototype.updateDat = function (dat_name, dat_body) {
        var to_write = JSON.stringify({ 'file_name': dat_name, 'file_body': dat_body });
        return this.http.post(this.serverUrlWrite, to_write);
    };
    FileGetterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FileGetterService);
    return FileGetterService;
}());
exports.FileGetterService = FileGetterService;
//# sourceMappingURL=file-getter.service.js.map