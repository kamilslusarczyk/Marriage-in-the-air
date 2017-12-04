import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Todo } from "./todo.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { TodosService } from "./toDo.service";
import {Message} from 'primeng/components/common/api';
import { MessageHelperService } from "../common/messageHelper.service";
@Component({
    selector: "todo-item",
    templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

    constructor(private todoService: TodosService, private messageHelper: MessageHelperService) {

    }

    ngOnInit(): void {
    }

    updateEntity() {
        this.todoService.update(this.toDoInstance).subscribe(
            data => {
                this.messages = this.messageHelper.pushMessage('success', 'You have succesfully updated To Do!', '', this.messages, true)
                this.inputViolated = false;
            },
            err => {
                this.messageHelper.pushMessage('error', 'Oh nope', '', this.messages, true)
            });
    }

    deleteEntity(){
        this.todoService.delete(this.toDoInstance).subscribe(
            data => {
                this.messages = this.messageHelper.pushMessage('success', 'You have succesfully deleted To Do!', '', this.messages, true)
                this.inputViolated = false;
            },
            err => {
                this.messageHelper.pushMessage('error', 'Oh nope', '', this.messages, true)
            });
    }

    controlValueChanged(){
        this.inputViolated = true;
    }

    @Input()
    toDoInstance: Todo;

    messages: Message[] = [];
    inputViolated = false;
}