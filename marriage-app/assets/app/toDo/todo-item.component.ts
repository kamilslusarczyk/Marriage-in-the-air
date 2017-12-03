import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { DatePipe } from '@angular/common';
import { Todo } from "./todo.model";

@Component({
    selector: "todo-item",
    templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
    @Input()
    toDoInstance: Todo;
}