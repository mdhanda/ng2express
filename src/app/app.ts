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
    templateUrl: "app/app.html",
    styleUrls: ["app/app.css"]
})

@RouteConfig([
    {path: "/", as: "Home", component: Home},
    {path: "/**", redirectTo: ["Home"]}
])

export class App {
    public angularLogo: any = "/assets/img/angular-logo.png";
    public name: string = "Angular 2 App";
}
