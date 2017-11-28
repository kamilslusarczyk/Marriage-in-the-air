import { Component } from "@angular/core";
import { AuthService } from "./auth.service";


@Component({
    selector: "app-authentication",
    template: `<h1>Auth</h1>
    <header>
        <nav>
            <li>
            <a [routerLink]="['signin']">Sign in</a>
            <a [routerLink]="['logout']">Log out</a>
            </li>
        </nav>
    </header>
    <div>
    <router-outlet></router-outlet>
    </div>`
})
export class AuthenticationComponent {

    constructor(private authService: AuthService){

    }
    
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}