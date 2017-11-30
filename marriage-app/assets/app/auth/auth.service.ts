import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { config } from "../common/config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";

@Injectable()
export class AuthService {
    signInPath: string;
    dummyPath: string;


    constructor(private http: HttpClient) {
        this.dummyPath = config.URLS.root + config.URLS.admin + config.URLS.adminDummyCreate;
        this.signInPath = config.URLS.root + config.URLS.admin + config.URLS.adminSignIn;
    }

    signup(user: User): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this.dummyPath, user);
    }

    signin(user: User): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this.signInPath, user);
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    getToken(){
        return localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    }
}