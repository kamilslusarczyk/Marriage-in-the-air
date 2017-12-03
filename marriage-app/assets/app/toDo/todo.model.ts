export class Todo {
    constructor(public content: string, public dateOfPublication: Date, isDone: boolean, 
         public todoId?: string, public userId?: string){

    }
}