import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { News } from "./news.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase, ResponseBaseGeneric } from '../common/responseBase';
import { AuthService } from "../auth/auth.service";


@Injectable()
export class NewsService {
    private Newses: News[]
    private apiPath: string;
    private token : string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.apiPath = config.URLS.root + config.URLS.news;
        this.token = authService.getToken();
    }

    getNewses(conditions: any = {}) : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this.apiPath + "/?conditions=" + JSON.stringify(conditions));
    }

    getNewsesGeneric<T>(conditions: any = {}): Observable<ResponseBaseGeneric<T>> {
        return <Observable<ResponseBaseGeneric<T>>>this.getNewses(conditions);
    }

    getNews(id: string) : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this.apiPath + '/' + id);
    };


    addNews(news: News): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this.apiPath + this.token, news);
    }

    addNewsGeneric<T>(news: News): Observable<ResponseBaseGeneric<T>> {
        return this.http.post<ResponseBaseGeneric<T>>(this.apiPath + this.token, news);
    }

    deleteNews(news: News): Observable<ResponseBase> {
        return this.http.delete<ResponseBase>(this.apiPath +"/"+news["_id"] + this.token);
    }

    deleteNewsGeneric<T>(news: News): Observable<ResponseBaseGeneric<T>> {
        return <Observable<ResponseBaseGeneric<T>>>this.deleteNews(news);
    }

    updateNewsGeneric(news : News) : Observable<ResponseBaseGeneric<News>>{
        return this.http.put<ResponseBaseGeneric<News>>(this.apiPath + this.token,news);
    }


}