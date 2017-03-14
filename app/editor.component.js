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
var EditorComponent = (function () {
    // Editor component only requires my file getter service (in order to interat with web.py server)
    function EditorComponent(filegetter) {
        this.filegetter = filegetter;
        this.is_successful = false;
        this.update();
    }
    // This method informs server of updates, using POST
    EditorComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (confirm("Are you sure you wish to submit changes?")) {
            this.filegetter.updateDat('events.txt', this.editor_events_txt).subscribe(function (x) { _this.update(form); _this.success(); });
        }
        return;
    };
    // This method updates component with current files from server.
    EditorComponent.prototype.update = function (form) {
        var _this = this;
        this.filegetter.getObservableDat('events.txt').subscribe(function (x) { if (form) {
            console.log('Resetting form...');
            form.reset({ "pianostudies": _this.editor_events_txt });
        } _this.updateVars(x); });
    };
    EditorComponent.prototype.updateVars = function (x) {
        this.orig_events_txt = x.text();
        this.editor_events_txt = this.orig_events_txt;
    };
    EditorComponent.prototype.reset = function (form) {
        if (confirm("Are you sure? Any previous changes will be discarded.")) {
            this.is_successful = false;
            this.update(form);
        }
        return;
    };
    EditorComponent.prototype.success = function () {
        this.is_successful = true;
        //this.status_message = "Changes saved! "
        return;
    };
    EditorComponent = __decorate([
        core_1.Component({
            selector: "editor",
            templateUrl: "./app/editor.component.html"
        }), 
        __metadata('design:paramtypes', [file_getter_service_1.FileGetterService])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map