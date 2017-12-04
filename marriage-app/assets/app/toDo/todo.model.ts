export class Todo {
    constructor(public content: string, public isDone: Boolean, public dateOfPublication: Date,
         public todoId?: string, public userId?: string){

    }
}