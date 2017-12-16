import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ChecklistService } from "./checklist.service";
import { Checklist, ChecklistTask } from "./admin-planner.models";
import { MessageHelperService } from "../../common/messageHelper.service";
import { SeverityEnum } from "../../common/messageSeverity.enum";
import { MatDialog } from "@angular/material";
import { AdminAddTaskPlannerDialog } from "./admin-add-task-planner.dialog";


@Component({
    selector:"admin-add-planner",
    styleUrls:["./admin-add-planner.component.css"],
    templateUrl:"./admin-add-planner.component.html"
})
export class AdminAddPlannerComponent implements OnInit{

    constructor(private tasklistService : ChecklistService,
         private messageHelperService : MessageHelperService,
         private dialog: MatDialog){

    }

    private addNewPlannerFormGroup : FormGroup;
    private tasksList : ChecklistTask[];

    ngOnInit(): void {

        this.tasksList = [];
        this.addNewPlannerFormGroup = new FormGroup({
            "name" : new FormControl("",Validators.required),
            "description" : new FormControl("")
        });
    }
    
    addPlanner() : void{

        let model = this.addNewPlannerFormGroup.value as Checklist;
        model.tasks = this.tasksList;
        this.tasklistService.add(model)
        .subscribe(x=>{
            if(x.success){
                this.messageHelperService.addSingleMessage(SeverityEnum.Success,"Utworzono!",""); 
                this.addNewPlannerFormGroup.reset();
                this.tasksList.length = 0;
            }
        })

    }

    addTask() : void {

        this.dialog.open(AdminAddTaskPlannerDialog,{
            width:"400px"
            
        }).afterClosed().subscribe((task: ChecklistTask)=>{
            if(task !== null && task!==void 0){
                this.tasksList.push(task);
            }
        })


    }
}