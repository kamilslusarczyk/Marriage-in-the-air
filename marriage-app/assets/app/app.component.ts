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

    private activeItem : MenuItem;
    private routesConfig : { activeLinkIndex: number, routes:{link:string, label:string, index:number, clickMethod :()=>void}[]};
    private activeLinkIndex : number;

    private test () : void{
        console.log('test');
    }

    constructor(private authService: AuthService, private router: Router, private statisticsService: StatisticsService){
        router.events.subscribe((event) => {
            if(event instanceof NavigationStart)
                this.statisticsService.handleRequestForStatistics(event);
        });

        this.activeLinkIndex = 0;
        this.routesConfig ={ 
            activeLinkIndex:0,
            routes:[{
                link:"",
                label : "Strona główna",
                index: 0,
                clickMethod : ()=>{}
            },{
                link:"/news",
                label : "Newsy",
                index:1,
                clickMethod : ()=>{}
            },{
                link: "/administration",
                label : "Panel administratora",
                index : 2,
                clickMethod : ()=>{}
            },{
                link: "/signin",
                label : "Tymczasowe logowanie",
                index : 3,
                clickMethod : ()=>{}
            },
            {
                link: "/",
                label : "Tymczasowe wylogowanie",
                index : 4,
                clickMethod : ()=>{
                    this.logout();
            }
        }]};
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