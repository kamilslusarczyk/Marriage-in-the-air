import { Component } from "@angular/core";
import { StatisticsService } from "../statistics/statistics.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import {single, multi} from './data';
var _ = require('lodash');

@Component({
    selector:"admin-stats",
    styleUrls:[],
    templateUrl: "./admin-stats.component.html"
})
export class StatisticsComponent implements OnInit {
      
    chartData: any;
    
    constructor(private statisticsService: StatisticsService) {

    }

    ngOnInit(): void {
        var result = {
            labels: [],
            values: []
        };
        
        this.statisticsService.getVisitedUrls().subscribe(
            data => {
                let dataGroupedByUrl = _.groupBy(data.Data, stats => stats.url);

                for (var key in dataGroupedByUrl) {
                    var value = dataGroupedByUrl[key];

                    result.labels.push(key);
                    result.values.push(value.length);
                }
                this.chartData = {
                    labels: result.labels,
                    datasets: [
                        {
                            label: 'Visited URLS',
                            backgroundColor: '#42A5F5',
                            borderColor: '#1E88E5',
                            data: result.values
                        }
                    ]
                }
            },
            err => {
                result = err;
            }
        );
    }
}