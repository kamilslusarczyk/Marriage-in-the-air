import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ChecklistTask } from "./admin-planner.models";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
    selector: 'add-task-planner',
    templateUrl: './admin-add-task-planner.dialog.html'
  })
  export class AdminAddTaskPlannerDialog {
  
    private taskGroup = new FormGroup({
      "name" : new FormControl("",Validators.required),
      "description" : new FormControl(""),
      "dueDate" : new FormControl("")
    })

    constructor(
      private dialogRef: MatDialogRef<AdminAddTaskPlannerDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any){

      }

      private addItem():void{
        let checkListTask = this.taskGroup.value as ChecklistTask;
        checkListTask.isCompleted = false;
        this.dialogRef.close(checkListTask);

      }


  }