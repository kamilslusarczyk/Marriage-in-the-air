import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { FormControl } from "@angular/forms";
import { OnInit } from "@angular/core";
import { News } from "./news.model"
import { NewsService } from "./news.service";

@Component({
    selector: "news-list",
    templateUrl: './news-list.component.html',
})
export class NewsListComponent implements OnInit {

    Newses: News[] = [];
    FilteredNewses: News[] = [];
    searchNewsesControl: FormControl;

    constructor(private newsService: NewsService) {
        this.searchNewsesControl = new FormControl("");
    }

    searchInputChanged(): void {
        var controlValueParsed = String(this.searchNewsesControl.value);
        this.FilteredNewses = this.Newses.filter(x => x.content.toLowerCase().includes(controlValueParsed.toLowerCase()));
    }

    ngOnInit(): void {
        // var news = new News("DUPA", new Date());
        // this.newsService.addNews(news).subscribe(
        //     data => {
        //         console.log(data);
        //     },
        //     err => {
        //         console.log('Something went wrong!');
        //     }
        // );
        // var news;
        // // var news = new News("DUPA", new Date());
        // this.newsService.getNews("5a19b12b86493016149cac0c").subscribe(
        //     data => {
        //         console.log("Single:")
        //         console.log(data.Data);
        //         console.log(data.Message);
        //     },
        //     err => {
        //         console.log('Something went wrong!');
        //     }
        // );

        this.newsService.getNewses().subscribe(
            data => {
                this.Newses = data.Data;
                this.FilteredNewses = this.Newses;
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }
}