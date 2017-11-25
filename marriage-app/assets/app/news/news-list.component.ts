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

        debugger;
        this.newsService.getNewses().subscribe(
            // Successful responses call the first callback.
            data => {
                console.log(data);
            },
            // Errors will call this callback instead:
            err => {
                debugger;
                console.log('Something went wrong!');
            }
        );
    }

}