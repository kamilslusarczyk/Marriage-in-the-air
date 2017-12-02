import { Component } from "@angular/core";
import { StatisticsService } from "../statistics/statistics.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import {single, multi} from './data';

@Component({
    selector:"admin-stats",
    styleUrls:[],
    templateUrl: "./admin-stats.component.html"
})
export class StatisticsComponent implements OnInit {
      
    constructor(private statisticsService: StatisticsService) {
        Object.assign(this, {single, multi})   
        console.log(single);
    }

    ngOnInit(): void {
        this.chartData = this.statisticsService.getVisitedUrls();
        console.log(this.chartData);
    }

    chartData: any[];
    single: any[];
    multi: any[];  
    view: any[] = [700, 400];
    showLegend = true;
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    // pie
    showLabels = true;
    explodeSlices = true;
    doughnut = false;
    
    onSelect(event) {
      console.log(event);
    }
}