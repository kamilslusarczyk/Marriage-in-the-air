import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Todo } from "./todo.model";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { TodosService } from "./toDo.service";

@Component({
    selector: "todo-item",
    templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements OnInit {

    constructor(private todoService: TodosService) {

    }

    ngOnInit(): void {
    }

    updateEntity(event) {
        this.todoService.update(this.toDoInstance).subscribe(
            data => {
                debugger;
            },
            err => {
                console.log('Something went wrong!');
            });
    }

    @Input()
    toDoInstance: Todo;

}