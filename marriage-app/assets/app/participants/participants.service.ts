import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";
import { config } from "../common/config";
import { ResponseBase } from "../common/responseBase";
import { Observable } from "rxjs/Observable";    
import { Participant } from "./participant.model";

@Injectable()
export class ParticipantsService{
    private _apiPath: string;
    private token: string;

    constructor(private http: HttpClient, private authService: AuthService) {
        this._apiPath = config.URLS.root + config.URLS.participants;
        this.token = this.authService.getToken();
    }

    getAll(): Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this._apiPath + this.token);
    }

    add(participant: Participant): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this._apiPath + this.token, participant);
    }

    update(participant: Participant): Observable<ResponseBase> {
        return this.http.put<ResponseBase>(this._apiPath + this.token, participant);
    }

    delete(participant: Participant): Observable<ResponseBase> {
        participant.toDelete = true;
        return this.http.put<ResponseBase>(this._apiPath + this.token, participant);
    }
}