import { Injectable } from "@angular/core";
import { NavigationStart } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { StatisticEntry } from "./statisticEntry.model";
import { Observable } from "rxjs/Observable";
import { ResponseBase } from "../common/responseBase";
import { HttpClient } from "@angular/common/http";
import { config } from "../common/config";
import { Array } from "core-js/library/web/timers";

@Injectable()
export class StatisticsService {
    private _localStorageCode = "stats";
    private _apiPath: string;
    private _statisticsChunkThreshold: number;

    constructor(private authService: AuthService, private http: HttpClient) {
        this._apiPath = config.URLS.root + config.URLS.statistics;
        this._statisticsChunkThreshold = 3;
    }

    handleRequestForStatistics(routeChangedEvent: NavigationStart) {
        var userToken = this.authService.getTokenForStatistics();
        var entry = new StatisticEntry(userToken, routeChangedEvent.url, new Date(), userToken == null);

        this.addEntryToLocalStorage(entry);
        this.checkIfShouldCallApiToSendStatisticsChunk();
    }

    getVisitedUrls() {
        return this.getStatisticsFromServer();
    }

    private addEntryToLocalStorage(entry: StatisticEntry) {
        var existingItems = this.getExistingItemsParsed();
        if (!existingItems)
            existingItems = [];

        existingItems.push(entry);
        localStorage.setItem(this._localStorageCode, JSON.stringify(existingItems));
    }

    private removeEntryFromLocalStorage() {
        localStorage.removeItem(this._localStorageCode);
    }

    private checkIfShouldCallApiToSendStatisticsChunk() {
        var existingItems = this.getExistingItemsParsed();
        if (existingItems.length < this._statisticsChunkThreshold)
            return;

        this.sendStatisticsToServer(existingItems).subscribe(
            data => {
                this.removeEntryFromLocalStorage();
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }

    private getExistingItemsParsed(): Array<StatisticEntry> {
        return JSON.parse(localStorage.getItem(this._localStorageCode));
    }

    private sendStatisticsToServer(items: Array<StatisticEntry>): Observable<ResponseBase> {
        return this.http.post<ResponseBase>(this._apiPath, items);
    }

    private getStatisticsFromServer(): Observable<ResponseBase> {
        return this.http.get<ResponseBase>(this._apiPath);
    }
}