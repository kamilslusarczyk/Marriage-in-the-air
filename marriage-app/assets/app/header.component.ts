import { Component } from "@angular/core";


@Component({
    selector: "app-header",
    template: `
    <header>
        <ul>
        <li><a [routerLink]="['/auth']">Authentication</a></li>
        </ul>
    </header>`
})
export class HeaderComponent {

}