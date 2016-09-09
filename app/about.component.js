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
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: '<h2> About Us </h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
var HoracioComponent = (function () {
    function HoracioComponent() {
    }
    HoracioComponent = __decorate([
        core_1.Component({
            selector: 'horacio',
            template: "\n\t<div class=\"bio\" id=\"h_bio\">\n    <h1>Dr. Horacio Nuguid </h1>\n    <img src='a.jpg'/>\n  <p>\n  As founder and artistic director of the Rochester Chamber Music Society, Nuguid performs regularly both as soloist and collaborator with distinguished artists and ensembles in the region. He formed the Odelia Piano Trio which became Classical MPR's Artist in Residence for the city of Rochester in 2014. </p>\n  <p>\n  Born in Manila, Horacio Nuguid began formal music training at the University of Santo Tomas Conservatory of Music and later was awarded the top prize at the National Music Competition for Young Artists in the Philippines. He continued his music studies in the United States and completed the Master of Music Degree at the University of Northern Iowa and the Doctor of Musical Arts Degree at the University of Illinois in Urbana-Champaign. Last year, he went on tour to the Philippines and Mexico presenting recitals and masterclasses at the University of Santo Tomas in Manila, Children's Integrated School in Iloilo City and Centro Cultural Ollin Yoliztli in Mexico City. Dr. Nuguid has served as a member of the Artist Faculty of the festival since 2002. \n  </p>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], HoracioComponent);
    return HoracioComponent;
}());
exports.HoracioComponent = HoracioComponent;
var RosannaComponent = (function () {
    function RosannaComponent() {
    }
    RosannaComponent = __decorate([
        core_1.Component({
            selector: 'rosanna',
            template: "\n\t<div class=\"bio\" id=\"r_bio\">\n  <h1>\n  Mrs. Rosanna Nuguid\n  </h1>\n  <img src=\"ros.jpg\"/>\n  <p>  Insert biography here\n  </p>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], RosannaComponent);
    return RosannaComponent;
}());
exports.RosannaComponent = RosannaComponent;
//# sourceMappingURL=about.component.js.map