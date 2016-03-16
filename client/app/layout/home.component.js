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
var semantic_1 = require("ng-semantic/semantic");
var http_1 = require("angular2/http");
require("rxjs/operator/map");
var Home = (function () {
    function Home(h) {
        this.user = {
            password: "angualr2express",
            username: "john"
        };
        this.http = h;
    }
    Home.prototype.signup = function () {
        var _this = this;
        this.http.post("/login/signup", JSON.stringify({
            password: this.user.password,
            username: this.user.username
        }), new http_1.RequestOptions({
            headers: new http_1.Headers({ "Content-Type": "application/json" })
        }))
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.response = res;
        }, function (error) {
            console.log(error.json());
        });
    };
    Home.prototype.call = function () {
        var _this = this;
        delete this.error;
        delete this.data;
        this.http.get("/api", new http_1.RequestOptions({
            headers: new http_1.Headers({ "Auth": localStorage.getItem("jwt"), "Content-Type": "application/json" })
        }))
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this.data = data;
        }, function (error) {
            _this.error = error.json();
        });
    };
    Home.prototype.login = function () {
        var _this = this;
        this.http.post("/login", JSON.stringify({ password: this.user.password }), new http_1.RequestOptions({
            headers: new http_1.Headers({ "Content-Type": "application/json" })
        }))
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            delete _this.error;
            _this.data = {
                text: "You can call protected api now",
                title: "Login succesfull"
            };
            localStorage.setItem("jwt", res.jwt);
        }, function (error) {
            console.log(error);
        });
    };
    Home.prototype.remove = function () {
        this.error = { message: "JWT removed" };
        delete this.data;
        localStorage.removeItem("jwt");
    };
    Home = __decorate([
        core_1.Component({
            selector: "home"
        }),
        core_1.View({
            directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
            template: "\n    <div class=\"ui container\">\n        <sm-segment class=\"raised\">\n            <h1>Angular 2 and Express authentication with JWT!</h1>\n            <sm-list class=\"ui list bulleted\">\n                <sm-item class=\"item\">username: {{user.username}}</sm-item>\n                <sm-item class=\"item\">password: {{user.password}}</sm-item>\n            </sm-list>\n            <p>\n                Hardcoded data used for login and signup functionality.\n            </p>\n        </sm-segment>\n        <br/>\n\n        <sm-button class=\"\" (click)=\"call()\">Call protected API</sm-button>\n        <sm-button class=\"positive\" (click)=\"login()\">Login</sm-button>\n        <sm-button class=\"basic red\" (click)=\"remove()\">Remove JWT from localStorage</sm-button>\n\n\n        <sm-button class=\"right floated\" (click)=\"signup()\">Signup</sm-button>\n\n        <div class=\"ui divider hidden\"></div>\n\n        <!-- Signup response -->\n        <sm-segment style=\"word-wrap: break-word;\" *ngIf=\"response\" class=\"raised\">\n            <sm-list class=\"ui list bulleted\">\n                <sm-item class=\"item\">hashed: {{response?.hashed}}</sm-item>\n                <sm-item class=\"item\">salt: {{response?.salt}}</sm-item>\n            </sm-list>\n        </sm-segment>\n\n        <!-- API call response -->\n        <sm-segment *ngIf=\"error\" class=\"inverted red\">\n            <sm-item class=\"item\">{{error?.message}}</sm-item>\n        </sm-segment>\n\n        <sm-segment *ngIf=\"data\" class=\"inverted green\">\n            <sm-item class=\"item\">{{data?.title}}</sm-item>\n            <sm-item class=\"item\">{{data?.text}}</sm-item>\n        </sm-segment>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Home);
    return Home;
}());
exports.Home = Home;

//# sourceMappingURL=home.component.js.map
