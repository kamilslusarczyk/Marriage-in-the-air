import { Component } from "@angular/core";
import { NewsService } from "./news/news.service";
import { AuthService } from "./auth/auth.service";
import { Router, NavigationStart } from "@angular/router";
import { StatisticsService } from "./statistics/statistics.service";
import { MenuItem } from "primeng/primeng";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [NewsService]
})
export class AppComponent {

    private tabMenuItems : [any];
    private activeItem : MenuItem;

    constructor(private authService: AuthService, private router: Router, private statisticsService: StatisticsService){
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart)
                this.statisticsService.handleRequestForStatistics(event);
        });

        this.tabMenuItems = [{
            label : "Strona główna",
            icon: "fa-home",
            routerLink:[""]
        },{
            label:"Newsy",
            icon: "fa-newspaper-o",
            routerLink:["/news"]
        },{
            label : "Panel administratora",
            icon:"fa-lock",
            routerLink:["/administration"]
        },{
            label : "Tymczasowe logowanie",
            icon:"fa-lock",
            routerLink:["/signin"]
        },
        {
            label : "Wyloguj",
            icon:"fa-lock",
            command : ()=>{
                this.logout();
            }
        }];

        this.activeItem = this.tabMenuItems[0];
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    logout(){

        this.authService.logout();
        this.router.navigateByUrl('/');
        this.activeItem = this.tabMenuItems[0];
    }
}