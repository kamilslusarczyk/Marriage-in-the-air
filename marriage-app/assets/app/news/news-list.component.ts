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
        var news;
        // var news = new News("DUPA", new Date());
        this.newsService.getNews("5a19816492c9053ea0d67669").subscribe(
            // Successful responses call the first callback.
            data => {
                debugger;
                news = data.obj;
                this.newsService.deleteNews(news).subscribe(
                    // Successful responses call the first callback.
                    data => {
                        console.log(data);
                    },
                    // Errors will call this callback instead:
                    err => {
                        console.log('Something went wrong!');
                    }
                );
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