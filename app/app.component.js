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
// import { Routes, RouterModule } from '@angular/router';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t          <div id=\"main\">\n\t          <div id=\"logo_port\">\n\t   \t\t  <img src=\"assets/img/nps-logo-1.png\" id=\"logo\"/>\n\t   \t\t  </div>\n\t          <nav id=\"navbar\">\n\t  \t          \n\t  \t          <div class='nav_item'> <a routerLink=\"/home\"        routerLinkActive=\"active\"> Home         </a></div>\n\t\t          <div class='nav_item'> <a> About </a>\n\t\t            <div class='sub_menu'>      \n\t\t              <div class='sub_menu_item'> <a routerLink=\"/horacio\" routerLinkActive='active'> Horacio Nuguid </a> </div>\n\t\t              <div class='sub_menu_item'> <a routerLink=\"/rosanna\" routerLinkActive='active'> Rosanna Nuguid </a> </div>\n\t\t            </div>\n\t\t          </div>\n\t\t          <div class='nav_item'> <a routerLink=\"/admissions\"  routerLinkActive=\"active\"> Admissions   </a> </div>\n\t  \t          <div class='nav_item'> <a routerLink=\"/under-construction\"  routerLinkActive=\"active\"> Alumni       </a> </div>\n\t\t          <div class='nav_item'> <a routerLink=\"/events\"    routerLinkActive=\"active\"> Events       </a> </div>\n\t\t          <div class='nav_item'> <a> For Students </a> \n\t\t            <div class='sub_menu'>      \n\t\t              <div class='sub_menu_item'> <a routerLink=\"/under-construction\" routerLinkActive='active'> Rosanna's Teaching Schedule </a> </div>\n\t\t              <div class='sub_menu_item'> <a routerLink=\"/horacio-calendar\" routerLinkActive='active'> Horacio's Teaching Schedule </a> </div>\n\t\t              <div class='sub_menu_item'> <a routerLink=\"/under-construction\" routerLinkActive='active'> Important Resources </a> </div>\n                      <div class='sub_menu_item'> <a routerLink=\"/under-construction\" routerLinkActive='active'> Standard Fingerings </a> </div>\n\t\t            </div>\n\t\t          </div>\n\t          </nav> \n\t          <div id=\"main_body\">\n\t          <router-outlet></router-outlet>       \n\t          </div>\n\t          <div id=\"bottom-bar\"> <p id=\"cr\"> Copyright &copy; 2016 Nuguid Piano Studio - All rights reserved </p> </div>\n\t          </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map