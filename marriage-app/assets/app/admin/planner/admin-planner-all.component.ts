import { Component, OnInit } from "@angular/core";
import { Checklist } from "./admin-planner.models";
import { ChecklistService } from "./checklist.service";
import { ResponseBaseGeneric } from "../../common/responseBase";

@Component({
    selector:"admin-planner-all",
    templateUrl:"./admin-planner-all.component.html",
    styleUrls:["./admin-planner-all.component.css"]
})

export class AdminPlannerAllComponent implements OnInit{

    private checkLists : Checklist[];

    constructor(private checklistService : ChecklistService){

    }

    ngOnInit(): void {
        this.checklistService.getAll()
        .subscribe((result:ResponseBaseGeneric<Checklist[]>)=>{

            if(result.success){
                debugger;
                this.checkLists = result.data;
            }

        })
    }

}