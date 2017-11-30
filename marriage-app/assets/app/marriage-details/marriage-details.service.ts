import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MarriageDetails } from "./marriageDetails.model";
import { config } from "../common/config";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class MarriageDetailsService {
    MarriageDetails: MarriageDetails
    apiPath: string;

    constructor(private http: HttpClient, private authService : AuthService) {
        this.apiPath = config.URLS.root + config.URLS.marriageDetails;
    }

    get() : Observable<ResponseBase> {
        const token = this.authService.getToken();         
        return this.http.get<ResponseBase>(this.apiPath + token);
    }

    addMarriageDetails(details: MarriageDetails): Observable<ResponseBase> {
        const token = this.authService.getToken();     
        return this.http.post<ResponseBase>(this.apiPath + token, details);
    }
}