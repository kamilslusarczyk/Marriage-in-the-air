import { Injectable } from "@angular/core";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo.model";

@Injectable()
export class TodosService {
    private _apiPath: string;

    constructor(private http: HttpClient){
        this._apiPath = config.URLS.root + config.URLS.todos;
    }

    getAll() : Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this._apiPath);
    }

    add(todo: Todo) : Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this._apiPath, todo);
    }

    update(todo: Todo) : Observable<ResponseBase> {
        return this.http.put<ResponseBase>(this._apiPath, todo);
    }

    delete(todo: Todo) { //: Observable<ResponseBase> {
        // return this.http.put<ResponseBase>(this._apiPath, todo);
    }
}