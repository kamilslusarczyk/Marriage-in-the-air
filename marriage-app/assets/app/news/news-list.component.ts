import { Component, } from "@angular/core";
import { OnInit } from "@angular/core";
import { News } from "./news.model"
import { NewsService } from "./news.service";
@Component({
    selector: "news-list",
    templateUrl: './news-list.component.html',
})
export class NewsListComponent implements OnInit {

    Newses: News[] = [];
    b: any;
    constructor(private newsService: NewsService) {

    }

    ngOnInit(): void {
        // var news = new News("DUPA", new Date());
        // this.newsService.addNews(news).subscribe(
        //     // Successful responses call the first callback.
        //     data => {
        //         console.log(data);
        //     },
        //     // Errors will call this callback instead:
        //     err => {
        //         console.log('Something went wrong!');
        //     }
        // );

        // var news = new News("DUPA", new Date());
        debugger;
        this.newsService.getNews("5a196ad357501038c4f394f1").subscribe(
            // Successful responses call the first callback.
            data => {
                console.log(data);
            },
            // Errors will call this callback instead:
            err => {
                console.log('Something went wrong!');
            }
        );

        this.newsService.getNewses().subscribe(
            // Successful responses call the first callback.
            data => {
                console.log(data);
            },
            // Errors will call this callback instead:
            err => {
                console.log('Something went wrong!');
            }
        );
    }

}