import { Component, OnInit } from "@angular/core";
import { TodosService } from "./toDo.service";
import { FormControl } from "@angular/forms";
import { Todo } from "./todo.model";
import { StringExtensionService } from "../common/stringExtensions.service";
import { SeverityEnum } from "../common/messageSeverity.enum";
import { MessageHelperService } from "../common/messageHelper.service";

@Component({
    selector: "todos-list",
    templateUrl: './todo-list.component.html',
})
export class TodosListComponent implements OnInit {

    Todos: Todo[] = [];
    FilteredTodos: Todo[] = [];
    searchTodosControl: FormControl;
    newTodoControl: FormControl;

    constructor(private todoService: TodosService, private stringExtensionService: StringExtensionService, private messageHelper: MessageHelperService) {
        this.searchTodosControl = new FormControl("");
        this.newTodoControl = new FormControl("");
    }

    ngOnInit(): void {
        this.getTodos();
    }

    createNewTodo() {
        var controlValueParsed = String(this.newTodoControl.value);
        let todo = new Todo(controlValueParsed, false, new Date());
        this.todoService.add(todo).subscribe(
            data => {
                this.getTodos();
                this.messageHelper.addSingleMessage(SeverityEnum.Success, "Creation of Todo completed", "");
            },
            err => {
                console.log('Something went wrong!' + err);
            }
        );
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

    //this is event emmited by child of this component - todo-item.component
    deletedOrUpdated($event) {
        this.getTodos();
    }
}