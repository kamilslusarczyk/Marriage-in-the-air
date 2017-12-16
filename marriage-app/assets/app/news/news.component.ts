import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { FormControl } from "@angular/forms";
import { OnInit } from "@angular/core";
import { News } from "./news.model"
import { NewsService } from "./news.service";
import { StringExtensionService } from "../common/stringExtensions.service";

@Component({
    selector: "news",
    templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {

    Newses: News[] = [];
    FilteredNewses: News[] = [];
    searchNewsesControl: FormControl;

    constructor(private newsService: NewsService, private stringExtensionService: StringExtensionService) {
        this.searchNewsesControl = new FormControl("");
    }

    searchInputChanged(): void {
        var controlValueParsed = String(this.searchNewsesControl.value);
        this.FilteredNewses = this.stringExtensionService
        .filterByProperties(this.Newses,{
            content:controlValueParsed,
            topic:controlValueParsed
        });
        debugger;
        // this.FilteredNewses = this.Newses.filter(x => x.content.toLowerCase().includes(controlValueParsed.toLowerCase()));
    }

    ngOnInit(): void {

        this.newsService.getNewsesGeneric<News[]>({isArchived : false}).subscribe(
            data => {
                this.Newses = data.data;
                this.FilteredNewses = this.Newses;
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }
}