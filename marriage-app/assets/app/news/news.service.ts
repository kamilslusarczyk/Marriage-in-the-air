import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "./news.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";


@Injectable()
export class NewsService {
    Newses: News[]
    // conf: IConfig;

    constructor(private http: HttpClient) {
        // this.conf = config;
    }

    getNewses() : Observable<News> {
        return this.http.get<News>(config.URLS.root + config.URLS.news);
    }
}