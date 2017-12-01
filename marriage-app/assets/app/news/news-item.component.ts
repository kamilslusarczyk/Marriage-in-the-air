import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { News } from "./news.model";
import { DatePipe } from '@angular/common';

@Component({
    selector: "news-item",
    templateUrl: './news-item.component.html',
})
export class NewsItemComponent {
    @Input()
    newsInstance: News;
    clicked = false;

    newsClick() {
        this.clicked = !this.clicked;
    }
}