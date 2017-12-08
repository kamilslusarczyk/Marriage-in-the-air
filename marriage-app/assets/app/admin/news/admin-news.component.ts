import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { News } from "../../news/news.model";
import { NewsService } from '../../news/news.service';

@Component({
    selector:"admin-news",
    styleUrls:[],
    templateUrl: "./admin-news.component.html"
})
export class AdminNewsComponent implements OnInit {

    private newses : News[];

 
    constructor(private newsService : NewsService) {

    }

    ngOnInit(): void {
        this.newsService.getNewsesGeneric<News[]>()
        .subscribe(x=> {
            this.newses = x.Data;
            console.log(x);
        });
    }

}