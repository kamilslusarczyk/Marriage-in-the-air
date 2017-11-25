import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "./news.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";


@Injectable()
export class NewsService {
    Newses: News[]

    constructor(private http: HttpClient) {
        
    }

    getNewses() : Observable<News> {
        debugger;
        return this.http.get<News>(config.URLS.root + config.URLS.news);
    }
}