export class News {
    constructor(public content: string, public dateOfPublication: Date,
         public newsId?: string, public userId?: string){

    }
}