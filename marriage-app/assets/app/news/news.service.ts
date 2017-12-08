import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "./news.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase, ResponseBaseGeneric } from '../common/responseBase';
import { AuthService } from "../auth/auth.service";


@Injectable()
export class NewsService {
    Newses: News[]
    apiPath: string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.apiPath = config.URLS.root + config.URLS.news;
    }

    getNewses() : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this.apiPath);
    }

    getNewsesGeneric<T>(): Observable<ResponseBaseGeneric<T>> {
        return this.http.get<ResponseBaseGeneric<T>>(this.apiPath);
    }

    getNews(id: string) : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this.apiPath + '/' + id);
    };


    addNews(news: News): Observable<ResponseBase> {
        const token = this.authService.getToken();
        return this.http.post<ResponseBase>(this.apiPath + token, news);
    }

    addNewsGeneric<T>(news: News): Observable<ResponseBaseGeneric<T>> {
        const token = this.authService.getToken();
        return this.http.post<ResponseBaseGeneric<T>>(this.apiPath + token, news);
    }

    deleteNews(news: News): Observable<ResponseBase> {
        const token = this.authService.getToken();
        return this.http.put<ResponseBase>(this.apiPath + token, news);
    }
}