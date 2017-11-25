import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "./news.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";


@Injectable()
export class NewsService {
    Newses: News[]
    // conf: IConfig;
    apiPath: string;

    constructor(private http: HttpClient) {
        this.apiPath = config.URLS.root + config.URLS.news;
    }

    getNewses() : Observable<News[]> {
        return this.http.get<News[]>(this.apiPath);
    }

    getNews(id: string) : Observable<News> {
        return this.http.get<any>(this.apiPath + '/' + id);
    } 

    addNews(news: News): Observable<boolean> {
        return this.http.post<boolean>(this.apiPath, news);
    }

    deleteNews(news: News): Observable<boolean> {
        debugger;
        return this.http.put<boolean>(this.apiPath, news);
    }
}