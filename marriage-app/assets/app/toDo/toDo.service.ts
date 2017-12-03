import { Injectable } from "@angular/core";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TodosService {
    private _apiPath: string;

    constructor(private http: HttpClient){
        this._apiPath = config.URLS.root + config.URLS.todos;
    }

    getAll() : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this._apiPath);
    }
}