import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../auth/auth.service";
import { config } from "../../common/config";
import { ResponseBase } from "../../common/responseBase";
import { Checklist } from "./admin-planner.models";

@Injectable()
export class ChecklistService {
    private _apiPath: string;
    private token: string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this._apiPath = config.URLS.root + config.URLS.checklist;
        this.token = this.authService.getToken();
    }

    // getAll(): Observable<ResponseBase> {
    //     return this.http.get<ResponseBase>(this._apiPath + this.token);
    // }

    add(checklist: Checklist): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this._apiPath + this.token, checklist);
    }

    // update(todo: Todo): Observable<ResponseBase> {
    //     return this.http.put<ResponseBase>(this._apiPath + this.token, todo);
    // }

    // delete(todo: Todo): Observable<ResponseBase> {
    //     todo.toDelete = true;
    //     return this.http.put<ResponseBase>(this._apiPath + this.token, todo);
    // }
}