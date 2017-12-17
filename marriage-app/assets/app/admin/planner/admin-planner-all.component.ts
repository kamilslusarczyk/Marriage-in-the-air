import { Component, OnInit } from "@angular/core";
import { Checklist, ChecklistTask } from "./admin-planner.models";
import { ChecklistService } from "./checklist.service";
import { ResponseBaseGeneric } from "../../common/responseBase";
import { MatSelectionListChange } from "@angular/material";

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
                this.checkLists = result.data;
            }

        })
    }
}