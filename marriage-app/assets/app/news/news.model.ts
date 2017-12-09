export class News {
    constructor(private topic : string, public content: string, public dateOfPublication: Date,
         public newsId?: string, public userId?: string, public isArchived? : boolean) {

    }
}