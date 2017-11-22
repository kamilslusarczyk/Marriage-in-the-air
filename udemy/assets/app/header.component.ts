import { Component } from "@angular/core";


@Component({
    selector: "app-header",
    template: `
    <header>
        <ul>
        <li><a [routerLink]="['/messages']">Messenger</a></li>
        <li><a [routerLink]="['/auth']">Authentication</a></li>
        </ul>
    </header>`
})
export class HeaderComponent {

}