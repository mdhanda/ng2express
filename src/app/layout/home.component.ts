import { Component, View } from "angular2/core";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic/semantic";
import { Http, Headers, RequestOptions } from "angular2/http";
import "rxjs/operator/map";

@Component({
    selector: "home"
})
@View({
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    templateUrl: "app/layout/home.html"
})
export class Home {
    public response: any;
    public data: any;
    public error: any;
    public user: any = {
        password: "angualr2express",
        username: "john"
    };
    public http: Http;

    constructor(h: Http) {
        this.http = h;
    }

    public signup(): void {

        this.http.post("/login/signup", JSON.stringify({
                password: this.user.password,
                username: this.user.username
            }),
            new RequestOptions({
                headers: new Headers({"Content-Type": "application/json"})
            }))
            .map((res: any) => res.json())
            .subscribe(
                (res: any) => {
                    this.response = res;
                },
                (error: any) => {
                    console.log(error.json());
                }
            );
    }

    public call(): void {

        delete this.error;
        delete this.data;

        this.http.get("/api", new RequestOptions({
                headers: new Headers({"Auth": localStorage.getItem("jwt"), "Content-Type": "application/json"})
            }))
            .map((data: any) => data.json())
            .subscribe(
                (data: any) => {
                    this.data = data;
                },
                (error: any) => {
                    this.error = error.json();
                }
            );
    }

    public login(): void {
        this.http.post("/login", JSON.stringify({password: this.user.password}), new RequestOptions({
                headers: new Headers({"Content-Type": "application/json"})
            }))
            .map((res: any) => res.json())
            .subscribe(
                (res: any) => {
                    delete this.error;
                    this.data = {
                        text: "You can call protected api now",
                        title: "Login succesfull"
                    };
                    localStorage.setItem("jwt", res.jwt);
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    public remove(): void {
        this.error = {message: "JWT removed"};
        delete this.data;
        localStorage.removeItem("jwt");
    }
}
