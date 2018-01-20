import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResponseBaseGeneric } from "../common/responseBase";
import { Guest } from "./appointment-confirmation.models";
import { Observable } from "rxjs/Observable";
import { config } from "../common/config";

@Injectable()
export class AppointmentConfirmationService{

    constructor(private httpClient : HttpClient){

    }

    getGuestByVerificationCode(code : string) : Observable<ResponseBaseGeneric<Guest>>{
        return this.httpClient.get<ResponseBaseGeneric<Guest>>(config.URLS.guest);
    }

}