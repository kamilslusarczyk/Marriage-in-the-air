import { Component } from "@angular/core";
import { NewsService } from "./news/news.service";
import { AuthService } from "./auth/auth.service";
import { Router, NavigationStart } from "@angular/router";
import { StatisticsService } from "./statistics/statistics.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [NewsService]
})
export class AppComponent {

    constructor(private authService: AuthService, private router: Router, private statisticsService: StatisticsService){
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart)
                this.statisticsService.handleRequestForStatistics(event);
        });
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout(){
        this.authService.logout();
        this.router.navigateByUrl('/');
    }
}