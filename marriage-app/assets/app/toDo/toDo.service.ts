import { Injectable } from "@angular/core";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class TodosService {
    private _apiPath: string;
    private token: string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this._apiPath = config.URLS.root + config.URLS.todos;
        this.token = this.authService.getToken();
    }

    getAll(): Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this._apiPath + this.token);
    }

    add(todo: Todo): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this._apiPath + this.token, todo);
    }

    update(todo: Todo): Observable<ResponseBase> {
        return this.http.put<ResponseBase>(this._apiPath + this.token, todo);
    }

    delete(todo: Todo): Observable<ResponseBase> {
        todo.toDelete = true;
        return this.http.put<ResponseBase>(this._apiPath + this.token, todo);
    }
}