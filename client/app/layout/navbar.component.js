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
var Navbar = (function () {
    function Navbar() {
    }
    Navbar = __decorate([
        core_1.Component({
            selector: "navbar"
        }),
        core_1.View({
            template: "\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#home\">Online Auction</a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a href=\"#about\">About</a></li>\n                    <li><a href=\"#services\">Services</a></li>\n                    <li><a href=\"#contact\">Contact</a></li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container -->\n    </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;

//# sourceMappingURL=navbar.component.js.map
