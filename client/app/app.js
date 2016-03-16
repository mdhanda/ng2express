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
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var home_component_1 = require("./layout/home.component");
var footer_component_1 = require("./layout/footer.component");
var navbar_component_1 = require("./layout/navbar.component");
var App = (function () {
    function App() {
        this.angularLogo = "/assets/img/angular-logo.png";
        this.name = "Angular 2 App";
    }
    App = __decorate([
        core_1.Component({
            selector: "app"
        }),
        core_1.View({
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterOutlet, home_component_1.Home, navbar_component_1.Navbar, footer_component_1.Footer],
            template: "\n    <navbar></navbar>\n\n    <div class=\"center\">\n        <img src='https://angular.io/resources/images/logos/standard/shield-large.png'>\n        <img [src]=\"angularLogo\" width=\"10%\">\n    </div>\n    <home></home>\n\n    <footer></footer>\n    <router-outlet></router-outlet>",
            styleUrls: ["app.css"]
        }),
        router_1.RouteConfig([
            { path: "/", as: "Home", component: home_component_1.Home },
            { path: "/**", redirectTo: ["Home"] }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;

//# sourceMappingURL=app.js.map
