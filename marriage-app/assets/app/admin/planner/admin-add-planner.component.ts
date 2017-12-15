import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ChecklistService } from "./checklist.service";
import { Checklist } from "./admin-planner.models";
import { MessageHelperService } from "../../common/messageHelper.service";
import { SeverityEnum } from "../../common/messageSeverity.enum";


@Component({
    selector:"admin-add-planner",
    styleUrls:["./admin-add-planner.component.css"],
    templateUrl:"./admin-add-planner.component.html"
})
export class AdminAddPlannerComponent implements OnInit{

    constructor(private tasklistService : ChecklistService, private messageHelperService : MessageHelperService){

    }

    private addNewPlannerFormGroup : FormGroup;

    ngOnInit(): void {
        this.addNewPlannerFormGroup = new FormGroup({
            "name" : new FormControl("",Validators.required),
            "description" : new FormControl("",Validators.required),
        })
    }
    
    addPlanner() : void{

        let model = this.addNewPlannerFormGroup.value as Checklist;
        this.tasklistService.add(model)
        .subscribe(x=>{
            if(x.success){
                this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Utworzono!",""); 
            }
        })

    }
}