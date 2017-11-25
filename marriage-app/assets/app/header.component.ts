import { Component } from "@angular/core";


@Component({
    selector: "app-header",
    template: `
    <header>
        <ul>
        <li><a [routerLink]="['/auth']">Authentication</a></li>
        <li><a [routerLink]="['/administration']">Administration</a></li>
        </ul>
    </header>`
})
export class HeaderComponent {

}