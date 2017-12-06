import { Component, EventEmitter, Output } from "@angular/core";
import { Input } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Todo } from "./todo.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { TodosService } from "./toDo.service";
import {Message} from 'primeng/components/common/api';
import { MessageHelperService } from "../common/messageHelper.service";
import { IAmAbleToShowMessages } from "../common/ableToShowMessages.interface";
import { SeverityEnum } from "../common/messageSeverity.enum";
@Component({
    selector: "todo-item",
    templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements IAmAbleToShowMessages  {
    
    @Input()
    toDoInstance: Todo;

    @Output()
    deletedOrUpdated = new EventEmitter<boolean>();

    messages: Message[] = [];
    inputViolated = false;

    constructor(private todoService: TodosService, private messageHelper: MessageHelperService) {

    }

    updateEntity() {
        this.todoService.update(this.toDoInstance).subscribe(
            data => {
                this.messageHelper.addSingleMessage(SeverityEnum.Success, "Update of Todo completed", "");
                this.inputViolated = false;
                this.emitEntityStateChange();
            },
            err => {
                this.messageHelper.addSingleMessage(SeverityEnum.Error, "Oh nope!", "");
            });
    }

    deleteEntity(){
        this.todoService.delete(this.toDoInstance).subscribe(
            data => {
                this.messageHelper.addSingleMessage(SeverityEnum.Info, "Delete of Todo completed", "");
                this.inputViolated = false;
                this.emitEntityStateChange();
            },
            err => {
                this.messageHelper.addSingleMessage(SeverityEnum.Error, "Oh nope!", "");
            });
    }

    controlValueChanged(){
        this.inputViolated = true;
    }

    emitEntityStateChange(){
        this.deletedOrUpdated.emit(true);
    }
}