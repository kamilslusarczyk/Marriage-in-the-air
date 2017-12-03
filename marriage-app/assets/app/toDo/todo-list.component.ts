import { Component, OnInit } from "@angular/core";
import { TodosService } from "./toDo.service";
import { FormControl } from "@angular/forms";
import { Todo } from "./todo.model";
import { StringExtensionService } from "../common/stringExtensions.service";

@Component({
    selector: "todos-list",
    templateUrl: './todo-list.component.html',
})
export class TodosListComponent implements OnInit {

    Todos: Todo[] = [];
    FilteredTodos: Todo[] = [];
    searchTodosControl: FormControl;

    constructor(private todoService: TodosService, private stringExtensionService: StringExtensionService) {
        this.searchTodosControl = new FormControl("");
    }

    ngOnInit(): void {
        this.getTodos();
    }

    searchInputChanged(): void {
        var controlValueParsed = String(this.searchTodosControl.value);
        this.FilteredTodos = this.stringExtensionService.filterByContent(this.Todos, controlValueParsed);
    }

    getTodos() {
        this.todoService.getAll().subscribe(
            data => {
                this.Todos = data.Data;
                this.FilteredTodos = this.Todos;
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }
}