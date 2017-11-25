import { Component } from "@angular/core";


@Component({
    selector: "app-authentication",
    template: `<h1>Auth</h1>
    <header>
        <nav>
            <li>
                <a [routerLink]="['signin']">Sign in</a>
                <a [routerLink]="['signup']">Sign up</a>
                <a [routerLink]="['logout']">Log out</a>
            </li>
        </nav>
    </header>
    <div>
        <router-outlet></router-outlet>
    </div>`
})
export class AuthenticationComponent {

}