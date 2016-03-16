/**
 * Created by Manu on 1/4/2016.
 */
import {Component, View} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from "angular2/router";

import {Home} from "./layout/home.component";
import {Footer} from "./layout/footer.component";
import {Navbar} from "./layout/navbar.component";

@Component({
    selector: "app"
})
@View({
    directives: [ROUTER_DIRECTIVES, RouterOutlet, Home, Navbar, Footer],
    template: `
    <navbar></navbar>

    <div class="center">
        <img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
        <img [src]="angularLogo" width="10%">
    </div>
    <home></home>

    <footer></footer>
    <router-outlet></router-outlet>`,
    styleUrls: ["app.css"]
})

@RouteConfig([
    {path: "/", as: "Home", component: Home},
    {path: "/**", redirectTo: ["Home"]}
])

export class App {
    public angularLogo: any = "/assets/img/angular-logo.png";
    public name: string = "Angular 2 App";
}
