import { Component } from "@angular/core";
import { NewsService } from "./news/news.service";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [NewsService]
})
export class AppComponent {

    constructor(private authService: AuthService, private router: Router){

    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout(){
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}